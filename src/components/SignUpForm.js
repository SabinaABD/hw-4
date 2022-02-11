import "../assets/styles/loginForm.css"
import useForm from "../useForm";

const SignUpForm = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors, handleClear} = useForm(submitForm)

    return(
        <div className='login__form' onSubmit={handleSubmit}>
            <div className="login__form-title">
                Sign Up
            </div>
            <div className="login__form-subtitle">
                Create your Hope UI account
            </div>
            <form action="#" id="form" className="login__form-form">
                <div className="login__form-inputs">
                    <div className="login__form-item ">
                        <label htmlFor="formName" className="login__form-label">Имя</label>
                        <input type="text"
                               id='formName'
                               className="login__form-input"
                               name="name"
                               placeholder="Введите свое имя"
                               value={values.name}
                               onChange={handleChange}/>
                        {errors.name && <div>{errors.name}</div>}
                    </div>
                    <div className="login__form-item ">
                        <label htmlFor="formLastName" className="login__form-label">Фамилия</label>
                        <input type="text"
                               id='formLastName'
                               className="login__form-input"
                               name="lastName"
                               placeholder="Введите свою фамилию"
                               value={values.lastName}
                               onChange={handleChange}/>
                        {errors.lastName && <div>{errors.lastName}</div>}
                    </div>
                    <div className="login__form-item ">
                        <label htmlFor="formEmail" className="login__form-label">Email</label>
                        <input type="text"
                               id='formEmail'
                               className="login__form-input"
                               name="email"
                               placeholder="Введите свой email адрес"
                               value={values.email}
                               onChange={handleChange}/>
                        {errors.email && <div>{errors.email}</div>}
                    </div>
                    <div className="login__form-item ">
                        <label htmlFor="formPhone" className="login__form-label">Номер телефона</label>
                        <input type="tel"
                               id='formPhone'
                               className="login__form-input"
                               name="phone"
                               placeholder="Введите свой номер телефона"
                               value={values.phone}
                               onChange={handleChange}/>
                        {errors.phone && <div>{errors.phone}</div>}
                    </div>
                    <div className="login__form-item ">
                        <label htmlFor="formPassword" className="login__form-label">Пароль</label>
                        <input type="password"
                               id='formPassword'
                               className="login__form-input"
                               name="password"
                               placeholder="Придумайте пароль"
                               value={values.password}
                               onChange={handleChange}/>
                        {errors.password && <div>{errors.password}</div>}
                    </div>
                    <div className="login__form-item ">
                        <label htmlFor="formPasswordConfirmation" className="login__form-label">Подтвердите пароль</label>
                        <input type="password"
                               id='formPasswordConfirmation'
                               className="login__form-input"
                               name="passwordConfirmation"
                               placeholder="Пароли должны совпадать"
                               value={values.passwordConfirmation}
                               onChange={handleChange}/>
                        {errors.passwordConfirmation && <div>{errors.passwordConfirmation}</div>}
                    </div>

                </div>
                <div className="login__form-sign-in">
                    <button className="login__form-sign-in-btn"
                            type='submit'>
                        Sign Up
                    </button>
                    <button className="login__form-sign-in-btn"
                            type='reset' onClick={handleClear}>
                        Clear form
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm