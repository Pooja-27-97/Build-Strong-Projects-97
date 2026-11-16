import Product from "./Product.jsx"
function ProductTab() {
    return (
        <>
            <Product title="Bhoots" price={100000} features={["Quality", "Logitivity", "Color"]}/>
            <Product title="Jacket" price={3000000}/>
            <Product title="Suit" price={2000000}/>
        </>
    );
}

export default ProductTab;