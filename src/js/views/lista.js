import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import pacoImage from "../../img/paco.jpg";

export const ListaView = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            {store.demo.map((item, index) => (
                <div key={index} className="card mb-3 mx-auto px-2" style={{ maxWidth: "70em" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={pacoImage} className="img-fluid rounded-circle mt-0" alt="Paco Martinez Soria" /> {/* Usar la imagen importada aquí */}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
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
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
