import "./Product.css"

function Product({title, price, features=[]}) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            {features.map((feature) => <li>{feature}</li>)}
        </div>
    );
}

export default Product;