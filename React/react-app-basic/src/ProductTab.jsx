import Product from "./Product.jsx"
function ProductTab() {
    return (
        <>
            <Product title="Bhoots" price={100000} features={["Quality", "Logitivity", "Price"]}/>
            <Product title="Jackets" price={3000000}/>
            <Product title="Suits" price={2000000}/>
        </>
    );
}

export default ProductTab;