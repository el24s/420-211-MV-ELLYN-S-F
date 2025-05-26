import { useEffect, useState } from "react"
import "./interest.css"


function Interest() {
    const [pokemonData, setPokemonData] = useState(null)
    const [id, setId] = useState(1)

    useEffect(() => {
        if (id > 0) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => res.json())
                .then(data => setPokemonData(data))
        }

    }, [id])

    function call(pokemonData) {
        const form = pokemonData.get("formId")
        setId(form);

    }
    function switchLeft() {
        if (id > 1) {
            setId(prevId => prevId - 1);
        }
    }
    function switchRight() {
        if (id < 1025) {
            setId(prevId => prevId + 1);
        }
    }

    pokemonData && console.log(pokemonData)

    return (
        <div className="mainPage">

            <form action={call}>
                <label htmlFor="formId">
                    <input
                        type="number"
                        min={1}
                        defaultValue={1}
                        name="formId"
                        placeholder="Mettez l'id que vous voulez..."
                    />
                </label>
                <button className="search" > Recherche </button>

            {pokemonData ? (<img src={pokemonData.sprites.front_default} alt={pokemonData.name} />) : <p>Chargement...</p>}
            <h3> {pokemonData && pokemonData.name }</h3>

            </form>


            <button className="left" onClick={switchLeft}> Précédent </button>
            <button className="right" onClick={switchRight}> Suivant </button>
        </div>

    )
}

export default Interest