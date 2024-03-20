import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import pacoImage from "../../img/paco.jpg";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    // REPETIR LA CARTA
    const repiteCards = Array.from({ length: 4 }, (_, index) => index);

    return (
        <div className="container position-relative">
            <div className="d-flex justify-content-end mt-3" style={{ maxWidth: "200px", marginLeft: "auto" }}>
                <Link to="/addContact">
                    <button className="btn btn-success">Crear nuevo contacto</button>
                </Link>
            </div>
            {repiteCards.map((_, index) => (
                <div key={index} className={`card mx-auto px-2 mt-5 ${index === repiteCards.length - 1 ? 'mb-n5' : ''}`} style={{ maxWidth: "70em" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={pacoImage} className="img-fluid rounded-circle mt-5 smaller-image" alt="Paco Martinez Soria" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{store.demo[index % store.demo.length].title}</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                                <button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
                                    Change Color
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* Botón de regreso al inicio */}
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
