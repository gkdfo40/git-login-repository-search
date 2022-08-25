import { useLazyQuery } from '@apollo/client';
import { GET_REPOGITORY } from 'apollo';
import PagiNation from 'components/Pagination/Pagination';
import RepositoryItme from 'components/RepositoryItem/RepositoryItem';
import { ChangeEvent, useState } from 'react';
import { RepositoryData } from 'types';
import styles from './searchPage.module.scss';

const SearchPage = () => {
  const [language, setLanguage] = useState('language');
  const [filter, setFilter] = useState('Recently Updated');
  const [inputValue, setInputValue] = useState('');
  const [getRepository, { loading, data, error }] =
    useLazyQuery<RepositoryData>(GET_REPOGITORY);

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
      getRepository({ variables: { searchText: `name: ${inputValue}` } });
    }
  };

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
      {data && (
        <section className={styles.filterContainer}>
          <p>{`${data.search.repositoryCount.toLocaleString(
            'ko-KR'
          )} results found`}</p>
          <select
            onChange={selectFilter}
            value={filter}
            className={styles.filterBox}
          >
            <option defaultValue="Recently Updated">Recently Updated</option>
            <option value="Best Match">Best Match</option>
          </select>
        </section>
      )}

      <ul className={styles.repositoriesContainer}>
        {data &&
          data.search.nodes.map((node) => (
            <li key={node.id}>
              <RepositoryItme
                id={node.id}
                name={node.name}
                stargazerCount={node.stargazerCount}
                updatedAt={node.updatedAt}
                url={node.url}
                owner={node.owner}
              />
            </li>
          ))}

        {loading && <div>Loading</div>}
      </ul>
      <PagiNation currentPage={1} totalCount={500} />
    </div>
  );
};
export default SearchPage;
