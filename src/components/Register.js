import { Link } from 'react-router-dom';
import { useFormValidation } from '../utils/useFormValidation';

const Register = ({ onRegister }) => {
  const { values, errors, isValid, handleChange, errorClassName } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.password || !values.email) {
      return;
    }
    onRegister(values.password, values.email);
  };

  return (
    <form onSubmit={handleSubmit} className="form form_signin" name="form-register" noValidate>
      <fieldset className="form__set">
        <legend className="form__heading form__heading_center">Регистрация</legend>
        <label className="form__field">
          <input value={values.email ?? ''} onChange={handleChange} className="form__input form__input_signin form__input_el_email" type="email" id="email" name="email" placeholder="Email" required />
          <span className={errorClassName('email')}>{errors['email']}</span>
        </label>
        <label className="form__field">
          <input value={values.password ?? ''} onChange={handleChange} className="form__input form__input_signin form__input_el_password" type="password" id="password" name="password" placeholder="Пароль" required />
          <span className={errorClassName('password')}>{errors['password']}</span>
        </label>
        <button className={`btn form__submit form__submit_signin ${isValid ? '' : 'btn_inactive'}`} type="submit">Зарегистрироваться</button>
        <div className="form__signin">
          <p className="form__is-register">Уже зарегистрированы?&nbsp;</p>
          <Link to="/signin" className="btn form__signin-link">Войти</Link>
        </div>
      </fieldset>
    </form>
  )
}

export default Register;
