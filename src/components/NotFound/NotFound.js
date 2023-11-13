import './NotFound.css';
import { NavLink } from "react-router-dom";

function NotFound() {

  return(
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Страница не найдена</h2>
      <NavLink to="/" className="not-found__link">Назад</NavLink>
    </section>
  )
}

export default NotFound;