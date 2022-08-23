import { ChangeEvent, useState } from 'react';
import styles from './searchPage.module.scss';

const SearchPage = () => {
  const [language, setLanguage] = useState('');
  const [filter, setFilter] = useState('');
  const selectLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.currentTarget.value);
  };
  const selectFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.currentTarget.value);
  };
  console.log(language);
  console.log(filter);
  return (
    <div className={styles.container}>
      <header>
        <h1>Find GitHub Repogitory</h1>
      </header>

      <form className={styles.searchForm}>
        <div className={styles.inputBox}>
          {/* 돋보기 이미지 */}
          <input type="text" placeholder="typing..." />
        </div>
        <select onChange={selectLanguage} className={styles.optionBox}>
          <option defaultValue="language">language</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="JAVA">JAVA</option>
          <option value="Python">Python</option>
          <option value="Javascript">Javascript</option>
          <option value="GO">GO</option>
          <option value="Ruby">Ruby</option>
          <option value="PHP">PHP</option>
          <option value="Kotlin">Kotlin</option>
        </select>
        <button className={styles.submitbutton} type="submit">
          Search
        </button>
      </form>
      <h2>{`Results for "${language}"`}</h2>
      <section className={styles.filterContainer}>
        <p>102,232 results found</p>
        <select onChange={selectFilter} className={styles.filterBox}>
          <option defaultValue="Recently Updated">Recently Updated</option>
          <option value="Best Match">Best Match</option>
        </select>
      </section>
      <ul className={styles.repositoriesContainer}>
        <li>저장소</li>
      </ul>
      <div>pageNation</div>
    </div>
  );
};
export default SearchPage;
