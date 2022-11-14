import { useLocation } from "react-router-dom";
import { useFormik } from 'formik';
import { useState } from 'react'
const InputFieldcomponent = (props) => {

    const initialValues = { uniqueId: '' }

    const onSubmit = values => {
        console.log('formik', values)
    }

    const validate = values => {
        const errors = {};
        if (!values.uniqueId) {
            errors.uniqueId = 'incorrect delivery code for the package'
        }
        return errors;
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log(validate)


    const location = useLocation();
    if (location.pathname === '/confirmdelivery') {
        var inputHeader = props.inputHeader;
    }
    else if (location.pathname === '/pagetransfer') {
        var inputHeader = 'Driver`s ID';
    }

    return (
        <div class="col-md-6 input-field-component">
            <label for="inputEmail4" class="form-label">{inputHeader} </label>
            <input type="text" class="form-control" placeholder="xxx-xxx-xxx" id="inputEmail4"
                name='uniqueId' 
                onChange={formik.handleChange}
                value={formik.values.uniqueId}
                onBlur={formik.handleBlur}
            />
            <small className='text-danger'>{formik.errors.uniqueId ? formik.errors.uniqueId : ''}</small>
        </div>
    );
}

export default InputFieldcomponent;