import React from 'react'
import {useFormik} from 'formik'
import {formSchema} from '../validations/formSchema'
import {Button, TextField} from '@mui/material';
import './styles/form.css';
import PropTypes from "prop-types";

export const FormSearch = ({query, setQuery}) => {

    const formik = useFormik({
        initialValues: {
            name: query,
        },
        validationSchema: formSchema,
        onSubmit: ({name}) => {
            setQuery(name)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className='form'>
            <TextField
                className='textfield'
                variant="outlined"
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <Button variant='outlined' type='submit' className='btn-search'>Search</Button>
        </form>
    )
}

FormSearch.propTypes ={
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired
}
