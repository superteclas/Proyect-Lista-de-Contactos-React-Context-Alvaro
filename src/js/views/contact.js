import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../styles/demo.css";
import pacoImage from "../../img/paco.jpg";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

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
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">{store.demo[index % store.demo.length].title}</h5>
                                <p className="card-ubicacion">
        <i className="fas fa-map-marker-alt"></i> {/* Icono para ubicación */}
        <small className="text-body-secondary" style={{color: 'gray', fontSize: '20px'}}>Last updated 3 mins ago</small>
    </p>
    <p className="card-phone">
        <i className="fas fa-phone"></i> {/* Icono para teléfono */}
        <small className="text-body-secondary" style={{color: 'gray', fontSize: '18px'}}>Last updated 3 mins ago</small>
    </p>
    <p className="card-email">
        <i className="fas fa-envelope"></i> {/* Icono para correo electrónico */}
        <small className="text-body-secondary" style={{color: 'gray', fontSize: '16px'}}>Last updated 3 mins ago</small>
    </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-iconos d-flex justify-content-end">
                                <Link to="/addContact" className="card-editar">
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </Link>
                                
                                {/* Icono de basura para abrir el modal */}
                                <div onClick={() => setShowModal(true)} className="card-eliminar">
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* Botón de regreso al inicio */}
            <Link to="/">
                <button className="btn btn-primary mt-3">Back home</button>
            </Link>

            {/* Modal de Bootstrap */}
            {showModal && (
                <div className="modal show" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmar eliminación</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>¿Seguro que quieres eliminar a este contacto?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    setShowModal(false);
                                    // Agregar aquí la lógica para eliminar el contacto
                                }}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
