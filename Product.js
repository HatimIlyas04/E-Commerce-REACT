import Footer from './Footer';
import './Product.css'
import { Link } from 'react-router-dom';
function Product(props) {
    const { product, showButton } = props
    return (
        <dir style={{marginLeft:'50px' ,}}>
            <div className="card"  >
            <div>
            </div>
                <div className='image'>
                    <img src={product.image} className="banner-image" alt="" />
                </div>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text"> Price: {product.price} </p><br />
                       
                    </div>
                    
                </div>
                 <div className='wrap1'>
                        {showButton &&
                            (
                                <Link className="details"  to={`/ProductDetails/${product.id}`}  >Details</Link>
                            )}
                    </div>            

            </div>  
                             

        </dir>

    );
}

export default Product;
