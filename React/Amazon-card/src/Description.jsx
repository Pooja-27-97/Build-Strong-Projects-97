import "./Description.css";
import Price from "./Price.jsx";

function Description({title, features=[], oldPrice, newPrice}) {
    return (
        <div class="desc">
            <h2>{title}</h2>
            {features.map((feature) => <h4>{feature}</h4>)}
            <Price oldValue={oldPrice} newValue={newPrice}/>
        </div>
    )
}

export default Description;