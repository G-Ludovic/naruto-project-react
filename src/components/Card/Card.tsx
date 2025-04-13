import "./Card.css";

interface CardPops {
    name: string;
    images: string;
}

function Card({ name, images }: CardPops) {

    return (
        <figure className="figure-card">
        <img src={images} alt={name}/>
        </figure>
    )
}

export default Card;