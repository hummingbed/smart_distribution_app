import { useFormik } from 'formik';
import { useState } from 'react'
import logoImg from '../img/Vector.png'
import './Login.css';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import ModalComponent from '../ReusableComponents/ModalComponent'
// import React from 'react';

const Home = () => {
	

	const [color, setColor] = useState('');

	const initialValues = {
		uniqueId: '',
		password: ''
	}

	const onSubmit = values => {

		console.log('formik', values)
	}

	const validate = values => {
		const errors = {};

		if (!values.uniqueId) {
			errors.uniqueId = 'uniqueId is required'
		}
		if (!values.password) {
			errors.password = 'password is required'
		} else if (values.password.length < 8) {
			errors.password = 'password too short'
		}
		if (values.password.length < 8) {
			setColor('#FEA102');
		}
		return errors;
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate
	})

	return (
		<div className="home-component">
			<div className="login-component">
				<div className="logo">
					<img src={logoImg} alt="alt.img" />
				</div>
				
				

				<form onSubmit={formik.handleSubmit}>

					<div className="header-three">
						<h3 className='text-left'>Sign in to SDA Logistics</h3>
					</div>

					<div className="form-group">
						<label className='input-uniqueId' htmlFor="inputuniqueId">Unique ID</label>
						<input type="text" className="form-control"
							name='uniqueId' id="inputuniqueId"
							onChange={formik.handleChange}
							value={formik.values.uniqueId}
							onBlur={formik.handleBlur}
						/>
						<p className='text-danger'>{formik.errors.uniqueId ? formik.errors.uniqueId : ''}</p>
					</div>

					<div className="form-group">
						<label className='input-uniqueId' htmlFor="inputPassword">Password</label>
						<input type="password" className="form-control"
							name='password' id="inputPassword"
							onChange={formik.handleChange}
							value={formik.values.password}
							onBlur={formik.handleBlur}
						/>
						<p className='text-danger'>{formik.errors.password ? formik.errors.password : ''}</p>
					</div>

					<div className='forgot-password'>
						<p className='text-center' >Forgot Password?</p>
					</div>

					<Link to='request' >
						<input className='submit' type="submit" style={{ backgroundColor: `${color}`, borderRadius: '1rem' }} value="Log in" />
					</Link>


					{/* <button type="submit" className="btn w-100">Sign in</button> */}
				</form>
			</div>
		</div>
	);
}

export default Home;