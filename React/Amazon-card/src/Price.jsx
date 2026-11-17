import "./Price.css"

function Price({oldValue, newValue}) {
    return (
        <div class="Price">
            <h3 id="underline">{oldValue}</h3>
            <h3>{newValue}</h3>
        </div>
    )
}

export default Price;