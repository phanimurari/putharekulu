import { Component } from 'react'
import Loader from 'react-loader-spinner'
import ProductItem from './Putharekulu'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllProductsSection extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    activeCategoryId: '',
    searchInput: '',
    activeRatingId: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    // Dummy data
    const dummyData = [
      { "productType": "BasicSection", "productId": "2472d02b-6fb0-403b-bd7b-84ec1c4f0f56", "name": "Dry Fruit Putharekulu", "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg", "description": "Made with Dry Fruits like Kaju, etc", "price": 350, "rating": 4.8, "piecePerBox": 10, "NetWeight": "100 gms" },
      { "productType": "BasicSection", "productId": "19857bee-ebd2-4106-8e35-239f81a1bb34", "name": "Kova Putharekulu", "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg", "description": "Made with Dry Fruits like Kaju and kova etc", "price": 400, "rating": 4.8, "piecePerBox": 10, "NetWeight": 250 },
      { "productType": "BasicSection", "productId": "06b2071f-4165-476d-9e73-0416df8d3e46", "name": "Plane Pootharekulu Sugar", "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg", "description": "Lite weight putharekulu with sugar", "price": 150, "rating": 5, "piecePerBox": 10, "NetWeight": 250 },
      { "productType": "BasicSection", "productId": "1064dbef-f51c-4506-99c1-93f9e94a6976", "name": "Plane Pootharekulu Jaggery", "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg", "description": "Lite weight putharekulu with jaggery", "price": 150, "rating": 5, "piecePerBox": 10, "NetWeight": 250 },
      {
        "productId": "d3707a9a-48a4-45c1-95bf-02f50fc9bd66",
        "name": "Chochlate Putharekulu",
        "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
        "description": "Chochlate Treat with Putharekulu",
        "price": 350,
        "rating": 5,
        "piecePerBox": 10,
        "NetWeight": 250,
        "productType": "KidsSection"
      },
      {
        "productId": "e9881567-2f85-4fc0-8b6d-8ccca356f4b7",
        "name": "Horlicks Putharekulu",
        "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
        "description": "Horlicks Putharekulu",
        "price": 350,
        "rating": 5,
        "piecePerBox": 10,
        "NetWeight": 250,
        "productType": "KidsSection"
      },
      {
        "productId": "891caba3-8bd2-404d-b8dd-d36dde14e611",
        "name": "Boost Putharekulu",
        "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
        "description": "Boost Putharekulu",
        "price": 350,
        "rating": 5,
        "piecePerBox": 10,
        "NetWeight": 250,
        "productType": "KidsSection"
      },
      {
        "productId": "76e8edfb-afaf-4d76-bc17-28e22d4d16d2",
        "name": "Traingle Putharekulu",
        "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
        "description": "Try Traingle Putharekulu",
        "price": 350,
        "rating": 5,
        "piecePerBox": 10,
        "NetWeight": 250,
        "productType": "KidsSection"
      }
      ,
      {
        "productId": "2d029139-8bcd-444f-b060-ebfee971f614",
        "name": "Dry Fruit Authentic",
        "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
        "description": "Heavy Blend of Dry Fruits",
        "price": 300,
        "rating": 4.5,
        "piecePerBox": 10,
        "NetWeight": 250,
        "productType": "AuthenticSection"
      },
      {
        "productId": "c133c6cf-5cc9-4b13-851d-31a60215a58b",
        "name": "Kova Authentic",
        "imageUrl": "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1706350675/putharekulu/Putharekulu_Thumbnail_venqhk.jpg",
        "description": "Heavy Blend of Kova and Dry Fruits",
        "price": 300,
        "rating": 4.5,
        "piecePerBox": 10,
        "NetWeight": 250,
        "productType": "AuthenticSection"
      }

    ];

    // Function to update the state with dummy data
    const updateStateWithDummyData = () => {
      this.setState({
        productsList: dummyData,
        apiStatus: apiStatusConstants.success,
      });
    };

    // Simulate API call with a delay of 5 seconds
    setTimeout(() => {
      updateStateWithDummyData();
    }, 2000);
  };


  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderProductsListView = (productsList) => {
    const shouldShowProductsList = productsList.length > 0

    return shouldShowProductsList ? (
      <div className="all-products-container">
        <ul className="products-list">
          {productsList.map(product => (
            <ProductItem productData={product} key={product.productId} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Products Found</h1>
        <p className="no-products-description">
          We could not find any products. Try other filters.
        </p>
      </div>
    )
  }

  renderSuccessView = () => {
    const { productsList, } = this.state

    const basicSection = productsList.filter(eachProduct => eachProduct.productType === "BasicSection")
    const authenticSection = productsList.filter(eachProduct => eachProduct.productType === "AuthenticSection")
    const kidsSection = productsList.filter(eachProduct => eachProduct.productType === "KidsSection")

    return (
      <>
        <h2 className='products-heading'>Putharekulu</h2>
        {this.renderProductsListView(basicSection)}
        <h2 className='products-heading'>Authentic Sweets</h2>
        {this.renderProductsListView(authenticSection)}
        <h2 className='products-heading'> Kids Section</h2>
        {this.renderProductsListView(kidsSection)}
      </>

    )

  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllProducts = () => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
        <div className="all-products-section">
          {this.renderAllProducts()}
        </div>
      </>
    )
  }
}

export default AllProductsSection
