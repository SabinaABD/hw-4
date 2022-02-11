import {useState, useEffect} from 'react'
import validateInfo from "./validateInfo";
import {useDispatch} from "react-redux";
import {hideModal} from "./redux/actions/modal";

const useForm = () => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirmation: '',
        login: '',
        loginPassword: '',
    })

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const [errors, setErrors] = useState({})
    const [submittedValues, setSubmittedValues] = useState({})
    const [submittedForm, setSubmittedForm] = useState(false)
    const [notError, setNotError] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
        setErrors(validateInfo(values))
        setSubmittedValues({
            ...values,
        })
    }



    const handleClear = event => {
        event.preventDefault()
        setValues({
            name: '',
            lastName: '',
            login: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirmation: '',
            loginPassword: '',
        })
        setErrors({})
    }


    return {handleChange, values, handleSubmit, errors, handleClear}

}

export default useForm