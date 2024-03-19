import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
		 <div className="mt-5 text-center mx-auto">
                <h1>Añadir nuevo contacto</h1>
            </div>	
			
		<form className="row g-3 mx-4">
		<div className="col-12">
				<label htmlFor="inputAddress" className="form-label">Nombre Completo</label>
				<input type="text" className="form-control" id="inputAddress" placeholder="Nombre Completo" />
			</div>
			<div className="col-12">
				<label htmlFor="inputAddress" className="form-label">Email</label>
				<input type="text" className="form-control" id="inputAddress" placeholder="Introduce tu email" />
			</div>
			<div className="col-12">
				<label htmlFor="inputAddress" className="form-label">Teléfono</label>
				<input type="text" className="form-control" id="inputAddress" placeholder="Introduce teléfono" />
			</div>
			<div className="col-12">
				<label htmlFor="inputAddress2" className="form-label">Direccion</label>
				<input type="text" className="form-control" id="inputAddress2" placeholder="Introduce Direccion" />
			</div>
			
			<div className="col-12">
        <button type="submit" className="btn btn-primary btn-block w-100">Salvar Info</button>
    </div>
		</form>
	
		
		<Link to="/" className="btn-link">Si lo prefieres vuelve a la página principal</Link>
		
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
