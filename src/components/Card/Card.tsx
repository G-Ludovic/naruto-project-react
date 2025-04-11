import "./Card.css";

interface CardPops {
    name: string;
    images: string;
}

function Card({ name, images }: CardPops) {

    return (
        <figure>
        <img src={images} alt={name}/>
        </figure>
    )
}

export default Card;