function validationFilms(films, search) {  //Валидация поиска фильмов на русском и английском
  const dataFilms = films.filter((film) => {
    const filmRu = String(film.nameRU).toLowerCase().trim();
    const filmEn = String(film.nameEN).toLowerCase().trim();
    const query = search.toLowerCase().trim();
    return filmRu.indexOf(query) !== -1 || filmEn.indexOf(query) !== -1;
  });
  return dataFilms;
}

function timeLengthConverter(timeLength) {  //Конвертер длительности фильма
  const hours = Math.floor(timeLength / 60);
  const minutes = timeLength % 60;
  return `${hours}ч${minutes}м`
}

function filterTimeLength(films) {  //Фильтер короткометражек
  return films.filter((film) => film.duration < 40);
}

export {
  validationFilms,
  timeLengthConverter,
  filterTimeLength
}