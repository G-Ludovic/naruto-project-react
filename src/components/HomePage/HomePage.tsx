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
    
  useEffect(() => {
    fetch("https://dattebayo-api.onrender.com/characters")
      .then((response) => response.json())
      .then((data) => setNarutoData(data.characters))
  }, [])

  console.log(narutoData)

    return (
        <>
        <h1 className='liste-h1'>Liste des personnages :</h1>
        <main className='app-main'>
            <figure className='cadre'>
            {narutoData.map((el) => {

                return (
                    <Card key={el.id} name={el.name} images={el.images[0]}/>
                )
                }).filter(el => el.key !== "515")}
            </figure>
        </main>
        </>
    )
}

export default HomePage;