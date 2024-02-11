import CartContext from '../../.././context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const { cartList } = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const generateWhatsAppMessage = (cartList, total) => {
        // Define the message format with cart details
        let message = `Hello! I'd like to purchase the following items:\n`;
        cartList.forEach((item, index) => {
          message += `${index + 1}. ${item.name} - Quantity: ${item.quantity}\n`;
        });
        message += `\nTotal: Rs ${total}/-`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Generate the WhatsApp link
        const whatsappLink = `https://wa.me/+919666774338?text=${encodedMessage}`;
        // Replace <PHONE_NUMBER> with your WhatsApp number

        return whatsappLink;
      };


      const handleCheckout = () => {
        const whatsappLink = generateWhatsAppMessage(cartList, total);
        window.open(whatsappLink, '_blank');
      };


      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button d-sm-none" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
