import { useState } from "react";

function RegisterPage() {
    const [name, setName] = useState("");
    
    const MAX_LENGTH = 30; 

    // Nous déplaçons le code en dehors des fonctions onChange et onSubmit dans des fonctions distinctes pour une meilleure lisibilité
    const handleSubmit = (event) => {
        if (event.target.value.lenght <= MAX_LENGTH) {
            setName(event.target.value)
        }
    };

    const handleChange = (event) => {
        setName(event.target.value);
      };

    return (
        <>
        <h1>Créer votre compte :</h1>

        <form className="RegisterPage" onSubmit={handleSubmit}>
            <label htmlFor="Nom">Nom: </label>
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}/>
        </form>
                </>
              );
            }
            

export default RegisterPage;