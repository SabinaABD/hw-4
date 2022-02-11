export default function validateInfo(values) {
    const errorMessage = 'Поле не может быть пустым'
    let errors = {}

    //Name
    if(!values.name.trim()) {
        errors.name = errorMessage
    } else if(!values.name.match(/^([А-Я])|([A-Z])/)) {
        errors.name = 'Имя должно начинаться с заглавной буквы'
    }

    //LastName
    if(!values.lastName.trim()) {
        errors.lastName = errorMessage
    } else if(!values.lastName.match(/^([А-Я])|([A-Z])/)) {
        errors.lastName = 'Фамилия должна начинаться с заглавной буквы'
    }

    //date
    if (values.date === '') {
        errors.date = errorMessage
    }

    //phone
    if(!values.phone.trim()) {
        errors.phone = errorMessage
    } else if (!values.phone.match(/^\d(\-)(\d{4})(\-)(\d{2})(\-)(\d{2})$/)) {
        errors.phone = 'Неверный формат номера'
    }

    //email
    if (!values.email.trim()) {
        errors.email = errorMessage
    } else if (!values.email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
        errors.email = 'Неверный формат email'
    }

    //password
    if (!values.password.trim()) {
        errors.password = errorMessage
    } else if (values.password.length < 6) {
        errors.password = 'Пароль не может быть меньше 6 символов'
    }

    //password confirmation
    if (!values.passwordConfirmation.trim()) {
        errors.passwordConfirmation = errorMessage
    } else if (values.passwordConfirmation !== values.password) {
        errors.passwordConfirmation = 'Пароли не совпадают'
    }

    //login
    if(!values.login.trim()) {
        errors.login = 'Введенный логин недействителен'
    }

    //login password
    if (!values.loginPassword.trim()) {
        errors.loginPassword = 'Введенный пароль недействителен'
    } else if (values.loginPassword.length < 6) {
        errors.loginPassword = 'Введенный пароль недействителен'
    }


    return errors
}