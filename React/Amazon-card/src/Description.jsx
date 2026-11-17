import "./Description.css"

function Description({title, features=[]}) {
    return (
        <div class="desc">
            <h2>{title}</h2>
            {features.map((feature) => <h4>{feature}</h4>)}
        </div>
    )
}

export default Description;