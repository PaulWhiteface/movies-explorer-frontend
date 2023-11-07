import './NotFound.css';
import { NavLink, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate()
  
  function back() {
    navigate(-1);
  }

  return(
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Страница не найдена</h2>
      <NavLink className="not-found__link" onClick={back}>Назад</NavLink>
    </section>
  )
}

export default NotFound;