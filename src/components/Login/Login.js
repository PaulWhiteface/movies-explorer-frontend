import './Login.css';
import Form from '../Form/Form';

function Login () {
  return(
    <section className="login">
      <Form 
        title="Рады видеть!"
        link="Регистрация"
        button="Войти"
        linkref="/signup"
        textLink="Еще не зарегистрированы?"
      />
    </section>
  );
}

export default Login;