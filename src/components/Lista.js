import React, {useState, useEffect, Fragment}  from "react";
import Tarjeta from "./Tarjeta"

const Lista = () => {
    const [data, setData] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [load, setLoad] = useState([])

    const arr = [];

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=1')
        .then((response) => response.json())
        .then((d) => setData(d.results.map((item) => {
            fetch(item.url)
            .then((response) => response.json())
            .then((p) => arr.push(p));
            setPokemons(arr);
        })
        ));
    }, []);

    setTimeout(() => {
        setLoad(false);
    }, 1000);

    return(
        <Fragment>
            
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
            
        </Fragment>
    );
}

export default Lista;