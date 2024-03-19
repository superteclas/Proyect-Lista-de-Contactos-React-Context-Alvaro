import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-center mb-3">
            <div className="ml-auto">
                <Link to="/single">
                    <button className="btn btn-danger custom-button">AÑADIR CONTACTOS</button>
                </Link>
            </div>
            <div className="ml-auto">
                <Link to="/lista">
                    <button className="btn btn-danger">LISTA DE CONTACTOS</button>
                </Link>
            </div>
        </nav>
    );
};
