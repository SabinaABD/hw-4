import "../assets/styles/loginForm.css"
import useForm from "../useForm";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../redux/actions/modal";

const LoginForm = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors, handleClear} = useForm(submitForm)

    return(
        <div className='login__form' onSubmit={(event) => {
            handleSubmit(event)
        }}>
            <div className="login__form-title">
                Login here
            </div>
            <div className="login__form-subtitle">
                Enter your account
            </div>
            <form action="#" id="formLogin" className="login__form-form" onSubmit={handleSubmit}>
                <div className="login__form-inputs">
                    <div className="login__form-item ">
                        <label htmlFor="formLogin" className="login__form-label">Логин</label>
                        <input type="text"
                               id='formLogin'
                               className="login__form-input"
                               name="login"
                               placeholder="Введите логин"
                               value={values.login}
                               onChange={handleChange}/>
                        {errors.login && <div>{errors.login}</div>}
                    </div>
                    <div className="login__form-item ">
                        <label htmlFor="formPassword" className="login__form-label">Пароль</label>
                        <input type="password"
                               id='formLoginPassword'
                               className="login__form-input"
                               name="loginPassword"
                               placeholder="Введите пароль"
                               value={values.loginPassword}
                               onChange={handleChange}/>
                        {errors.loginPassword && <div>{errors.loginPassword}</div>}
                    </div>

                </div>
                <div className="login__form-sign-in">
                    <button className="login__form-sign-in-btn"
                            type='submit'>
                        Log in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm