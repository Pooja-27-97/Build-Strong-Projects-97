import Description from "./Description.jsx";
import Price from "./Price.jsx";
import "./Card.css"

function Card() {
    return (
        <div class="card">
            <Description title="Jacket" features={["Good Quality", "New Design"]}/>
            <Price oldValue={250000} newValue={200000}/>
        </div>
    )
}

export default Card;