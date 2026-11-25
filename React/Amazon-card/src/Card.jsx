import Description from "./Description.jsx";
import "./Card.css"

function Card() {
    return (
        <div class="card">
            <Description title="Jacket" features={["Good Quality", "New Design"]} oldPrice={200000} newPrice={180000}/>
            <Description title="Bhoots" features={["Water proof", "Light color"]} oldPrice={500000} newPrice={450000}/>
            <Description title="Suit" features={["Soft fabric", "Body fit"]} oldPrice={1000000} newPrice={900000}/>
        </div>
    )
}

export default Card;