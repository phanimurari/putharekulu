
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'

import Header from '../../common/Header'
import CartContext from '../../.././context/CartContext'

// import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'

import './index.css'
import Footer from '../../common/Footer';

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
    state = {
        productData: {},
        similarProductsData: [],
        apiStatus: apiStatusConstants.initial,
        quantity: 1,
    }

    componentDidMount() {
        this.getProductData()
    }

    componentDidUpdate(prevProps) {
        const { match } = this.props
        const { params } = match
        const { name } = params

        // Check if the ID in the URL has changed
        if (name !== prevProps.match.params.name) {
            // If the ID has changed, make a new fetch call
            this.getProductData()
        }
    }


    getFormattedData = data => ({
        availability: data.piecePerBox,
        productType: data.productType,
        weight: data.NetWeight,
        description: data.description,
        id: data.productId,
        imageUrl: data.imageUrl,
        price: data.price,
        name: data.name,
        rating: data.rating,
        NetWeight: data.NetWeight
    })

    getProductData = async () => {
        const { match } = this.props
        const { params } = match
        const { name } = params
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })
        const data = [
            {
                "productId": "2472d02b-6fb0-403b-bd7b-84ec1c4f0f56",
                "productType": "BasicSection",
                "name": "Dry Fruit Putharekulu",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Dry Fruit Putharekulu is a delightful traditional treat crafted with a meticulous blend of premium dry fruits.",
                "NetWeight": "100 gms",
                "piecePerBox": 10,
                "price": 350,
                "rating": 4.8
            },
            {
                "productId": "19857bee-ebd2-4106-8e35-239f81a1bb34",
                "productType": "BasicSection",
                "name": "Kova Putharekulu",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Kova Putharekulu is a true embodiment of indulgence, meticulously crafted with a luscious blend of premium dry fruits.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 400,
                "rating": 4.8
            },
            {
                "productId": "06b2071f-4165-476d-9e73-0416df8d3e46",
                "productType": "BasicSection",
                "name": "Plane Pootharekulu Sugar",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Indulge in the delicate sweetness of our Plane Pootharekulu Sugar, a confectionery masterpiece that brings a touch of elegance to tradition.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 150,
                "rating": 5
            },
            {
                "productId": "1064dbef-f51c-4506-99c1-93f9e94a6976",
                "productType": "BasicSection",
                "name": "Plane Pootharekulu Jaggery",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Savor the goodness of our Plane Pootharekulu Jaggery, a delightful fusion of tradition and health. Immerse yourself in the rich flavors of this confection, where the essence of jaggery enhances the sweetness and adds a nutritional touch to each bite.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 150,
                "rating": 5
            },
            {
                "productId": "c133c6cf-5cc9-4b13-851d-31a60215a58b",
                "productType": "AuthenticSection",
                "name": "Kova Authentic",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Immerse yourself in the true essence of Putharekulu with our Kova Authentic variant. This delightful treat is a perfect fusion of velvety Kova and a medley of premium dry fruits. Each bite promises an authentic and rich experience, harmonizing the creamy notes of Kova with the flavorful blend of quality dry fruits. Elevate your taste buds with the luxurious taste of our Kova Authentic Putharekulu.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 300,
                "rating": 4.5
            },
            {
                "productId": "c133c6cf-5cc9-4b13-851d-31a60215a58b",
                "productType": "AuthenticSection",
                "name": "Kova Authentic",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Immerse yourself in the true essence of Putharekulu with our Kova Authentic variant. This delightful treat is a perfect fusion of velvety Kova and a medley of premium dry fruits. Each bite promises an authentic and rich experience, harmonizing the creamy notes of Kova with the flavorful blend of quality dry fruits. Elevate your taste buds with the luxurious taste of our Kova Authentic Putharekulu.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 300,
                "rating": 4.5
            },
            {
                "productId": "d3707a9a-48a4-45c1-95bf-02f50fc9bd66",
                "productType": "KidsSection",
                "name": "Chochlate Putharekulu",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Indulge your little ones in a delightful experience with our Chochlate Putharekulu. This heavenly treat combines the rich flavors of premium chocolate with the traditional charm of Putharekulu, creating a unique and captivating blend. Carefully crafted to perfection, each piece encapsulates the velvety essence of chocolate, enhancing the signature texture of Putharekulu.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 350,
                "rating": 5
            },
            {
                "productId": "e9881567-2f85-4fc0-8b6d-8ccca356f4b7",
                "productType": "KidsSection",
                "name": "Horlicks Putharekulu",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Elevate your children's snacking experience with our Horlicks Putharekulu – a wholesome fusion of health and delectable taste. Specially crafted to provide a perfect blend of nutrition and indulgence, these treats are designed to be a source of energy for the growing ones. Infused with the goodness of Horlicks, each bite promises a unique combination of flavors that caters to both the health-conscious and taste enthusiasts.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 350,
                "rating": 5
            },
            {
                "productId": "891caba3-8bd2-404d-b8dd-d36dde14e611",
                "productType": "KidsSection",
                "name": "Boost Putharekulu",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Infuse joy and energy into your child's day with our Boost-flavored Putharekulu – a delightful combination of taste and nutrition. Designed to be a wholesome snack, these treats are crafted to cater to the taste preferences of children while ensuring they receive essential nutrients. Boost your child's mood and keep them active and happy with every bite of these delicious Putharekulu.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 350,
                "rating": 5
            },
            {
                "productId": "76e8edfb-afaf-4d76-bc17-28e22d4d16d2",
                "productType": "KidsSection",
                "name": "Traingle Putharekulu",
                "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
                "description": "Elevate your snacking experience with our Triangle-shaped Putharekulu – a playful and delicious twist on the traditional treat. These delightful delights are crafted with precision, creating a snack that not only pays homage to the authentic flavors of Putharekulu but also adds a touch of whimsy with their unique triangular shape. Perfect for kids who appreciate the joy of trying something new, these treats are both visually appealing and irresistibly tasty.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 350,
                "rating": 5
            }
        ];
        

        const updatedData = data.map(eachobject => this.getFormattedData(eachobject))
        //   console.log(updatedData, name)
        const respectiveProductData = updatedData.filter(eachobject => eachobject.name === name)
        //   console.log(respectiveProductData)
        const similarProductsData = updatedData.filter(eachObject =>
            eachObject.productType === respectiveProductData[0].productType
            && eachObject.id !== respectiveProductData[0].id)

        const updateStateWithDummyData = () => {
            this.setState({
                productData: respectiveProductData[0],
                similarProductsData,
                apiStatus: apiStatusConstants.success,
            })
        };

        // Simulate API call with a delay of 5 seconds
        setTimeout(() => {
            updateStateWithDummyData();
        }, 2000);


        //      else {
        //     this.setState({
        //         apiStatus: apiStatusConstants.failure,
        //     })
        // }
    }

    renderLoadingView = () => (
        <div className="products-details-loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
    )

    renderFailureView = () => (
        <div className="product-details-error-view-container">
            <img
                alt="error view"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
                className="error-view-image"
            />
            <h1 className="product-not-found-heading">Product Not Found</h1>
            <Link to="/products">
                <button type="button" className="button">
                    Continue Shopping
                </button>
            </Link>
        </div>
    )

    onDecrementQuantity = () => {
        const { quantity } = this.state
        if (quantity > 1) {
            this.setState(prevState => ({ quantity: prevState.quantity - 1 }))
        }
    }

    onIncrementQuantity = () => {
        this.setState(prevState => ({ quantity: prevState.quantity + 1 }))
    }

    renderProductDetailsView = () => (
        <CartContext.Consumer>
            {value => {
                const { similarProductsData, productData, quantity } = this.state
                const {
                    availability,
                    NetWeight,
                    description,
                    imageUrl,
                    price,
                    rating,
                    name,
                    totalReviews,
                } = productData
                const { addCartItem } = value
                const onClickAddToCart = () => {
                    toast.success('🛒 Product Added to Cart');
                    addCartItem({ ...productData, quantity })
                }

                return (
                    <div className="product-details-success-view">
                        <div className="product-details-container">
                            <img src={imageUrl} alt="product" className="product-image" />
                            <div className="product">
                                <h1 className="product-name">{name}</h1>
                                <p className="price-details">Rs {price}/-</p>
                                <div className="rating-and-reviews-count">
                                    <div className="rating-container">
                                        <p className="rating">{rating}</p>
                                        <img
                                            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                                            alt="star"
                                            className="star"
                                        />
                                    </div>
                                    <p className="reviews-count">{totalReviews} Reviews</p>
                                </div>
                                <div className="label-value-container">
                                    <p className="label">No. of Pieces:</p>
                                    <p className="value">{availability}</p>
                                </div>
                                <div className="label-value-container">
                                    <p className="label">Weight:</p>
                                    <p className="value">{NetWeight}</p>
                                </div>
                                <hr className="horizontal-line" />
                                <div className="quantity-container">
                                    <button
                                        type="button"
                                        className="quantity-controller-button"
                                        onClick={this.onDecrementQuantity}
                                        data-testid="minus"
                                    >
                                        <BsDashSquare className="quantity-controller-icon" />
                                    </button>
                                    <p className="quantity">{quantity}</p>
                                    <button
                                        type="button"
                                        className="quantity-controller-button"
                                        onClick={this.onIncrementQuantity}
                                        data-testid="plus"
                                    >
                                        <BsPlusSquare className="quantity-controller-icon" />
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="button add-to-cart-btn"
                                    onClick={onClickAddToCart}
                                >
                                    ADD TO CART
                                </button>
                                <p className="product-description">{description}</p>
                            </div>
                        </div>
                        <h1 className="similar-products-heading">Similar Products</h1>
                        <ul className="similar-products-list">
                            {similarProductsData.map(eachSimilarProduct => (
                                <SimilarProductItem
                                    productDetails={eachSimilarProduct}
                                    key={eachSimilarProduct.id}
                                />
                            ))}
                        </ul>
                        <ToastContainer position="bottom-center" />
                    </div>
                )
            }}
        </CartContext.Consumer>
    )

    renderProductDetails = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderProductDetailsView()
            case apiStatusConstants.failure:
                return this.renderFailureView()
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            default:
                return null
        }
    }

    render() {
        return (
            <>
                <Header />
                <div className="product-item-details-container">
                    {this.renderProductDetails()}
                </div>
                <Footer />
            </>
        )
    }
}

export default ProductItemDetails
