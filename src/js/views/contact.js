import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import pacoImage from "../../img/paco.jpg"; 

export const Contact = () => {
    const { store, actions } = useContext(Context);
    const [contactsLoaded, setContactsLoaded] = useState(false);

    useEffect(() => {
        async function fetchContacts() {
            await actions.loadContacts();
            setContactsLoaded(true);
        }

        fetchContacts();
    }, []);

    const handleDeleteContact = (contactId) => {
        actions.deleteContact(contactId);
    };

    return (
        <div className="container position-relative">
            <div className="d-flex justify-content-end mt-3" style={{ maxWidth: "200px", marginLeft: "auto" }}>
                <Link to="/addContact">
                    <button className="btn btn-dark mb-4">Crear nuevo contacto</button>
                </Link>
            </div>
            {contactsLoaded && store.contacts.map(contact => (
                <div key={contact.id} className="card mx-auto px-2 mt-5" style={{ maxWidth: "90em" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={pacoImage} className="img-fluid rounded-circle mt-5 smaller-image" alt={""} />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">{contact.full_name}</h5>
                                <p className="card-ubicacion">
                                    <i className="fas fa-map-marker-alt" style={{ color: 'gray' }}></i>
                                    <small className="text-body-secondary" style={{ color: 'gray', fontSize: '20px' }}>  {contact.address}</small>
                                </p>
                                <p className="card-phone">
                                    <i className="fas fa-phone" style={{ color: 'gray' }}></i>
                                    <small className="text-body-secondary" style={{ color: 'gray', fontSize: '18px' }}>     {contact.phone}</small>
                                </p>
                                <p className="card-email">
                                    <i className="fas fa-envelope" style={{ color: 'gray' }}></i>
                                    <small className="text-body-secondary" style={{ color: 'gray', fontSize: '16px' }}>   {contact.email}</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-iconos d-flex justify-content-end align-items-center mt-4">
                                <Link to={`/editContact/${contact.id}`} className="card-editar me-4">
                                    <FontAwesomeIcon icon={faPencilAlt} className="black-icon" />
                                </Link>
                                <div onClick={() => handleDeleteContact(contact.id)} className="card-eliminar me-5">
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Link to="/" className="btn btn-dark mt-3">Back home</Link>
        </div>
    );
};
