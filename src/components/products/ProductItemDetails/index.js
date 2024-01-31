
import { Component } from 'react'
import { Link } from 'react-router-dom'

import Loader from 'react-loader-spinner'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'

import Header from '../../common/Header'
import CartContext from '../../.././context/CartContext'

// import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'

import './index.css'

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
                "description": "Dry Fruit Putharekulu is a delightful traditional treat crafted with a meticulous blend of premium dry fruits, including the rich and creamy goodness of Kaju (cashews), along with an assortment of other high-quality dry fruits. Each bite is a symphony of flavors, combining the nutty richness of Kaju with the unique textures and tastes of various dry fruits. Our artisans carefully prepare these delicacies, ensuring a perfect balance of sweetness and crunch in every piece.\n\nThe meticulous process involves selecting the finest dry fruits, ensuring their freshness and quality. These handpicked ingredients are then expertly blended to create a harmonious mixture that forms the heart of Dry Fruit Putharekulu. The result is a sweet indulgence that captures the essence of traditional craftsmanship and the rich heritage of authentic Putharekulu.\n\nWhether you're a connoisseur of traditional sweets or someone with a penchant for gourmet delights, Dry Fruit Putharekulu is sure to satisfy your taste buds. It makes for a perfect gift on special occasions or a delightful treat to share with family and friends. Experience the joy of savoring these delectable Putharekulus, where the natural flavors of premium dry fruits come together to create a culinary masterpiece.",
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
                "description": "Kova Putharekulu is a true embodiment of indulgence, meticulously crafted with a luscious blend of premium dry fruits, featuring the rich creaminess of Kaju (cashews) and the velvety smoothness of Kova (reduced milk). This exquisite delicacy takes the traditional Putharekulu to new heights, offering a symphony of flavors and textures in every bite.\n\nOur artisans take great care in selecting the finest dry fruits, ensuring a medley of tastes and aromas that elevate the Putharekulu experience. The inclusion of Kaju adds a delightful nuttiness, while the addition of Kova imparts a luxurious creaminess that lingers on the palate. Each piece is a testament to the craftsmanship that goes into creating this fusion of tradition and innovation.\n\nThe preparation involves a meticulous process, where the dry fruits are blended with precision to achieve the perfect balance of sweetness and richness. The result is a sensory delight that captivates the taste buds, making Kova Putharekulu a sought-after treat for those who appreciate the finer things in confectionery.\n\nWhether you're sharing these delectable delights with loved ones or savoring them on your own, Kova Putharekulu promises a journey of taste and texture that transports you to the heart of authentic culinary craftsmanship. Experience the magic of tradition and innovation harmoniously coming together in every piece of Kova Putharekulu.",
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
                "description": "Indulge in the delicate sweetness of our Plane Pootharekulu Sugar, a confectionery masterpiece that brings a touch of elegance to tradition. This exquisite treat redefines the art of sweetness with its feather-light texture and delightful sugary notes.\n\nCrafted with precision, each piece of Plane Pootharekulu Sugar is a harmonious blend of simplicity and decadence. The thin rice starch sheets, layered with care, create a crispy texture that melts in your mouth. The addition of sugar adds a gentle sweetness, enhancing the overall taste experience.\n\nWhether enjoyed as a personal treat or shared with loved ones, Plane Pootharekulu Sugar promises a moment of bliss with every bite. Embrace the magic of tradition with this confection—a celebration of lightness and sweetness in every exquisite layer.",
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
                "description": "Savor the goodness of our Plane Pootharekulu Jaggery, a delightful fusion of tradition and health. Immerse yourself in the rich flavors of this confection, where the essence of jaggery enhances the sweetness and adds a nutritional touch to each bite.\n\nCrafted with care, our Plane Pootharekulu Jaggery maintains the traditional feather-light layers, creating a unique texture that is both crispy and satisfying. The thin rice starch sheets encapsulate the natural sweetness of jaggery, providing a wholesome taste that lingers on the palate.\n\nPerfect for those who appreciate a healthier alternative, this lite-weight Pootharekulu with jaggery is a guilt-free indulgence. Share the joy of this exquisite treat with family and friends, celebrating the fusion of tradition and well-being in every delightful layer.",
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
                "description": "Indulge your little ones in a delightful experience with our Chochlate Putharekulu. This heavenly treat combines the rich flavors of premium chocolate with the traditional charm of Putharekulu, creating a unique and captivating blend. Carefully crafted to perfection, each piece encapsulates the velvety essence of chocolate, enhancing the signature texture of Putharekulu.\n\nOur Chochlate Putharekulu is more than just a sweet; it's a culinary journey for children's taste buds. The harmonious fusion of creamy chocolate and delicate layers of Putharekulu creates a symphony of flavors, leaving a lasting impression. With every bite, your little ones embark on a flavorful adventure that introduces them to the enchanting world of delectable treats.\n\nDesigned for special occasions or simple indulgences, this delightful treat brings joy to your children's lives. The heavenly combination of Chochlate Putharekulu is not just a feast for the senses but also a source of happiness. Watch as their eyes light up with delight and satisfaction, making every moment memorable and special.",
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
                "description": "Elevate your children's snacking experience with our Horlicks Putharekulu – a wholesome fusion of health and delectable taste. Specially crafted to provide a perfect blend of nutrition and indulgence, these treats are designed to be a source of energy for the growing ones. Infused with the goodness of Horlicks, each bite promises a unique combination of flavors that caters to both the health-conscious and taste enthusiasts.\n\nOur Horlicks-infused Putharekulu are not just snacks; they are a nutritious delight that supports your kids' well-being. The malted goodness of Horlicks adds a distinct flavor profile to the traditional Putharekulu, creating a snack that excites the taste buds while ensuring a dose of essential nutrients. It's a delightful way to encourage healthy snacking habits, making it a win-win for parents and kids alike.\n\nIdeal for school lunches, playdates, or as an evening treat, these Putharekulu are a convenient and tasty option for kids on the go. Give your kids the energy boost they need with our Horlicks-infused Putharekulu, where health meets happiness in every bite!",
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
                "description": "Infuse joy and energy into your child's day with our Boost-flavored Putharekulu – a delightful combination of taste and nutrition. Designed to be a wholesome snack, these treats are crafted to cater to the taste preferences of children while ensuring they receive essential nutrients. Boost your child's mood and keep them active and happy with every bite of these delicious Putharekulu.\n\nThe unique fusion of Boost flavor with the traditional Putharekulu brings forth a snack that not only satisfies the taste buds but also contributes to your child's overall well-being. Packed with energy-boosting elements, these Putharekulu make for an ideal addition to your child's daily snack routine. Whether it's a quick bite during playtime or a tasty treat after school, our Boost-flavored Putharekulu are the perfect solution for busy parents looking to provide a nutritious yet enjoyable snack for their kids.\n\nSay goodbye to the dilemma of choosing between taste and health – our Boost-flavored Putharekulu deliver both in a convenient and fun package. Keep your child's spirits high and taste buds delighted with this flavorful and nutritious snack option.",
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
                "description": "Elevate your snacking experience with our Triangle-shaped Putharekulu – a playful and delicious twist on the traditional treat. These delightful delights are crafted with precision, creating a snack that not only pays homage to the authentic flavors of Putharekulu but also adds a touch of whimsy with their unique triangular shape. Perfect for kids who appreciate the joy of trying something new, these treats are both visually appealing and irresistibly tasty.\n\nDesigned for those who seek a fun and innovative snacking option, our Triangle-shaped Putharekulu provide a delightful combination of traditional taste and creative presentation. The triangular form adds an element of excitement to each bite, making it an ideal choice for kids who love exploring unique and tasty treats. Whether enjoyed during playtime, shared among friends, or as a surprise addition to lunchboxes, these Triangle-shaped Putharekulu are sure to bring joy to every snacking moment.\n\nIndulge your taste buds in the magic of traditional flavors housed in a playful shape, creating an unforgettable snacking experience. Give your kids the pleasure of savoring something new and exciting with our Triangle-shaped Putharekulu – a treat that embodies the essence of fun and flavor in every bite.",
                "NetWeight": "250 gms",
                "piecePerBox": 10,
                "price": 350,
                "rating": 5
            }
        ]

        const updatedData = data.map(eachobject => this.getFormattedData(eachobject))
        console.log(updatedData, name)
        const respectiveProductData = updatedData.filter(eachobject => eachobject.name === name)
        console.log(respectiveProductData)
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
                                <p className="product-description">{description}</p>
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
            </>
        )
    }
}

export default ProductItemDetails
