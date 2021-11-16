import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Validator from 'validator';

import './index.css';

const FormPractice = () => {

	const [ formValid, setFormValid ] = useState(false)

    return (
        <div className="main-container">
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
				}}
				validate={(valores) => {
					let errors = {};
					if(!valores.nombre){
						errors.nombre = 'Por favor ingresa un nombre'
					}
					else if(valores.nombre.length <= 4){
						errors.nombre = 'El nombre debe tener mas de 4 caracteres'
					}
					if(!valores.correo){
						errors.correo = "Debe ingresar un correo"
					}
					else if(valores.correo.length <= 4){
						errors.correo = 'El correo debe de tener mas de 4 caracteres'
					}
					else if(!Validator.isEmail(valores.correo)){
						errors.correo = 'El correo debe tener caracteres validos'
					}
					return errors;
				}}
				onSubmit={(value, {resetForm}) => {
					resetForm()
					setFormValid(true)
					setTimeout(() => setFormValid(false), 2000)
				}}
			>
				{({ 
					handleSubmit, 
					handleChange,
					handleBlur,
					errors,
					touched,
					values
				}) => (
					// <form className="formulario" onSubmit={handleSubmit}>
					// 	<div>
					// 		<label>Nombre</label>
					// 		<input
					// 			type="text"
					// 			name="nombre"
					// 			placeholder="Nombre"
					// 			autoComplete="off"
					// 			onChange={handleChange}
					// 			onBlur={handleBlur}
					// 			value={values.nombre}
					// 		/>
					// 	</div>
					// 	{touched?.nombre && errors?.nombre && <span style={{color: 'red', fontWeight: 'bold'}}> {errors?.nombre } </span>}
					// 	<div>
					// 		<label>Correo</label>
					// 		<input
					// 			type="text"
					// 			name="correo"
					// 			placeholder="Correo"
					// 			onChange={handleChange}
					// 			onBlur={handleBlur}
					// 			autoComplete="off"
					// 			value={values.correo}
					// 		/>
					// 	</div>
					// 	{touched?.correo && errors?.correo && <span style={{color: 'red', fontWeight: 'bold'}}> {errors?.correo } </span>}
					// 	<button type="submit" className="submit-button" >
					// 		Enviar
					// 	</button>
					// 	{formValid && <span style={{color: 'green'}}>El formulario se ha enviado correctamente</span> }
					// </form>

					<Form className="formulario">
						<label>Nombre</label>
						<Field 
							type="text"
							name="nombre"
							placeholder="Nombre"
							autoComplete="off"
						/>
						<ErrorMessage name="nombre" component={() => {
							return <span className="error-form"> {errors.nombre} </span>
						}} />
						<label>Correo</label>
						<Field 
							type="text"
							name="correo"
							placeholder="Nombre"
							autoComplete="off"
						/>
						<ErrorMessage name="correo" component={() => {
							return <span className="error-form"> {errors.correo} </span>
						}} />
						<button type="submit" className="submit-button" >
							Enviar
						</button>
					</Form>
				)}
			</Formik>
		</div>
    );
};

export default FormPractice
