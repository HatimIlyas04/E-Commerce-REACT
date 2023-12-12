import { useEffect, useState } from "react";
import Product from "./Product";


function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  const GetProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const GetCategory = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const GetProductInCategory = (categoryName) => {
    fetch(`${api_url}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    GetProducts();
    GetCategory();
  }, []);

  return (
    <div>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container" style={{marginLeft: '50px',display: 'flex',justifyContent: 'center', 'alignItems': 'center',flexWrap: 'wrap' }}>
        <div className="category">
          <div className="row-btn" style={{marginLeft: '150px' ,fontFamily:'arial' , fontSize:'20px'}}>
            <div className="AllProduct">
              <button
                type="button"
                onClick={() => GetProducts()}
                className="glow-on-hover"
                style={{marginLeft: '50px' }}
              >
                All products
              </button>
            </div>
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => GetProductInCategory(cat)}
                className="glow-on-hover"
                style={{marginLeft: '50px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>


        <div className="row">
          {products.map((product) => (
            <div className="card-body col-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
