import { useEffect, useState } from 'react';
import "./HomePage.css";
import Card from '../Card/Card';

interface CardData {
    id: number;
    name: string;
    images: string;
  }

function HomePage() {

    const [narutoData, setNarutoData] = useState<CardData[]>([]);
    console.log(narutoData)

  useEffect(() => {
    fetch("https://dattebayo-api.onrender.com/characters")
      .then((response) => response.json())
      .then((data) => setNarutoData(data.characters))
  }, [])

    return (
        <>
        <h1 className='liste'>Liste des personnages :</h1>
        <main>
            <figure className='cadre'>
            {narutoData.map((el) => {
                return (
                    <Card key={el.id} name={el.name} images={el.images}/>
                )
                })}
                </figure>
        </main>
</>
    )
}

export default HomePage;