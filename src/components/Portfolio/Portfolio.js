import './Portfolio.css';
import strelka from '../../images/strela.svg'

function Portfolio () {
  return(
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__nav-container">
        <a target="blank" className="portfolio__nav-item" href="https://github.com/PaulWhiteface/how-to-learn#сайт-одностраничник">Статичный сайт <img className="portfolio__nav-image" src={strelka} alt="стрелка" /></a>
        <a target="blank" className="portfolio__nav-item" href="https://paulwhiteface.github.io/russian-travel/">Адаптивный сайт <img className="portfolio__nav-image" src={strelka} alt="стрелка" /></a>
        <a target="blank" className="portfolio__nav-item" href="https://github.com/PaulWhiteface/react-mesto-api-full-gha">Одностраничное приложение <img className="portfolio__nav-image" src={strelka} alt="стрелка" /></a>
      </nav>
    </section>
  );
}

export default Portfolio;