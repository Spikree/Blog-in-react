import './card.css'

function Card(props) {
    return<>
        <div className="card">
            <img src={props.image} alt="" />
            <h4>{props.title}</h4>
            <a href="#">{props.author}</a>
        </div>
    </>
}

export default Card;