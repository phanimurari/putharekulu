import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const ProductItem = props => {
    const { productData } = props
    const { productId, name, imageUrl, description, price, rating, } = productData
    // console.log(productData)
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <li
            className={`product-item ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/products/${name}`} className="link-item">
                {isHovered && (
                    <Link to={`/products/${name}`} className="view-link">
                        <button type="button" className="view-button">
                            View
                        </button>
                    </Link>
                )}
                <img src={imageUrl} alt="product" className="thumbnail" />
                <h1 className="title">{name}</h1>
                <p className="description">{description}</p>
                <div className="product-details">
                    <p className="price">Rs {price}/-</p>
                    {/* <p className="piece-per-box">Pieces per Box: {piecePerBox}</p>
                    <p className="net-weight">Net Weight: {NetWeight}</p> */}
                    <div className="rating-container">
                        <p className="rating">{rating}</p>
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                            alt="star"
                            className="star"
                        />
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default ProductItem
