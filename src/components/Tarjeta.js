import React, {Fragment}  from "react";

const Tarjeta = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return(
        <Fragment>
            <div className="card">
                <img className="card-image" src={props.imagen} />
                <div className="card-content">
                    <p className = "card-text">{ capitalizeFirstLetter(props.nombre) }</p>
                    <p>Tipo: </p>
                    <div className="card-tipo">
                        {
                            props.tipo.map((item, index) => <p key={index}>{capitalizeFirstLetter(item.type.name)}</p>)
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default Tarjeta;