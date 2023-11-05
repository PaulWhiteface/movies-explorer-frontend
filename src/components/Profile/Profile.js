import './Profile.css';
import Header from '../Header/Header';

function Profile () {
  return(
    <>
      <Header page="gray" />
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__name">Привет, Виталий!</h1>
            <div className="profile__input-container">
              <span className="profile__input-text">Имя</span>
              <input className="profile__input" type="text"></input>
            </div>
            <div className="profile__input-container">
              <span className="profile__input-text">E-mail</span>
              <input className="profile__input" type="email"></input>
            </div>
            <button className="profile__button">Редактировать</button>
            <button className="profile__button">Выйти из аккаунта</button>
          </div>
        </section>
    </>
  );
}

export default Profile;