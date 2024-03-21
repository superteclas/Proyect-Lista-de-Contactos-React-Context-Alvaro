import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newContact = {
            full_name: fullName,
            email: email,
            phone: phone,
            address: address
        };

        // Llama a la acción para crear el contacto
        await actions.createContact(newContact);

        // Redirecciona a la página de contactos
        navigate("/contact");
    };

    return (
        <div>
            <div className="mt-5 text-center mx-auto">
                <h1>Añadir nuevo contacto</h1>
            </div>

            <form className="row g-3 mx-4" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="inputFullName" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="inputFullName" placeholder="Nombre Completo" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Introduce tu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPhone" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Introduce teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Introduce Dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-danger btn-block w-100">Salvar Info</button>
                </div>
            </form>

            <Link to="/contact" className="btn-link">Link a la lista de contactos</Link><br></br>
            <Link to="/" className="btn-link">Si lo prefieres vuelve a la página principal pinchando aquí</Link>
        </div>
    );
};