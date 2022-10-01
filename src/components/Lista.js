import React, {useState, useEffect}  from "react";
import Tarjeta from "./Tarjeta"

const Lista = () => {
    const [pokemons, setPokemons] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        ( async () => {
            let result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=1');
            let json = await result.json();
            // console.log(json);
            json.results.map(async (pokemon) => {
                let result = await fetch(pokemon.url);
                let json = await result.json()
                setPokemons( pokemons => {
                    return [...pokemons, json]
                });
            });

            setLoad(false);
        }
        )();
    }, []);

    return(
        <>
            
            { load ? ( <p>Loading...</p>) : (
                <div>
                    <div style={{textAlign:'center'}}>
                        <h1>WikiPokemon</h1>
                    </div>
                    <div className='list'>
                        {
                            pokemons.map((p, index) => {
                                return <Tarjeta key={index} nombre = {p.forms[0].name} tipo = {p.types} imagen = {p.sprites.front_default} />;
                            })
                        }
                    </div>
                </div>
            )}
            
        </>
    );
}

export default Lista;