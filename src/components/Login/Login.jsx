import { useFormik } from 'formik';
import logoImg from '../img/Vector.png'
import './Login.css';
const Home = () => {

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
		return errors;
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate
	})


	//console.log('75654', formik.errors);
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
						<label htmlFor="inputuniqueId">Unique ID</label>
						<input type="text" className="form-control"
							name='uniqueId' id="inputuniqueId"
							onChange={formik.handleChange}
							value={formik.values.uniqueId}
							onBlur={formik.handleBlur}
						/>
						<p className='text-danger'>{formik.errors.uniqueId ? formik.errors.uniqueId : ''}</p>
					</div>

					<div className="form-group">
						<label htmlFor="inputPassword">Password</label>
						<input type="password" className="form-control"
							name='password' id="inputPassword"
							onChange={formik.handleChange}
							value={formik.values.password}
							onBlur={formik.handleBlur}
						/>
						<p className='text-danger'>{formik.errors.password ? formik.errors.password : ''}</p>
					</div>

					<div className='forgot-password'>
						<a className='text-center' href="/">Forgot Password?</a>
					</div>

					<input className='submit' type="submit" value="Log in" />

					{/* <button type="submit" className="btn w-100">Sign in</button> */}
				</form>
			</div>
		</div>
	);
}

export default Home;