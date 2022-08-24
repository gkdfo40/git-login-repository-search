import PagiNation from 'components/Pagination/Pagination';
import { ChangeEvent, useEffect, useState } from 'react';
// import { useAppDispatch } from 'store/hooks';
import styles from './searchPage.module.scss';

const SearchPage = () => {
  const [language, setLanguage] = useState('language');
  const [filter, setFilter] = useState('Recently Updated');
  const [inputValue, setInputValue] = useState('');
  // const dispatch = useAppDispatch();

  const onChanageInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const selectLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.currentTarget.value);
  };

  const selectFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.currentTarget.value);
  };

  const onSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      // dispatchEvent(fetchApiThunck)
    }
  };

  // useEffect(() => {
  //   return () => {
  //     dispatch(initite());
  //   };
  // },[]);

  return (
    <div className={styles.container}>
      <header>
        <h1>Find GitHub Repogitory</h1>
      </header>

      <form onSubmit={onSubmitForm} className={styles.searchForm}>
        <div className={styles.inputBox}>
          {/* 돋보기 이미지 */}
          <input
            type="text"
            placeholder="typing..."
            value={inputValue}
            onChange={onChanageInput}
          />
        </div>
        <select
          onChange={selectLanguage}
          value={language}
          className={styles.optionBox}
        >
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
        <select
          onChange={selectFilter}
          value={filter}
          className={styles.filterBox}
        >
          <option defaultValue="Recently Updated">Recently Updated</option>
          <option value="Best Match">Best Match</option>
        </select>
      </section>
      <ul className={styles.repositoriesContainer}>
        <li>저장소</li>
      </ul>
      <PagiNation currentPage={1} totalCount={500} />
    </div>
  );
};
export default SearchPage;
