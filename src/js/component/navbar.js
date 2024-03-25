import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-center mb-3">
            <div className="me-4 ms-3">
                <Link to="/">
                    <img src="https://reactrouter.com/_brand/react-router-stacked-color-inverted.png" alt="React Router Icon" className="me-2"style={{ width: "5em", height: "auto" }} /> {/* Reemplaza "URL_DE_LA_IMAGEN" con la URL de la imagen que encontraste */}
                </Link>
            </div>
            <div className="ml-auto me-4">
                <Link to="/add">
                    <button className="btn btn-danger custom-button">AÑADIR CONTACTOS</button>
                </Link>
            </div>
            <div className="ml-auto">
                <Link to="/">
                    <button className="btn btn-danger">LISTA DE CONTACTOS</button>
                </Link>
            </div>
        </nav>
    );
};
