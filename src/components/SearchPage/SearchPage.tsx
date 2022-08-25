import { useLazyQuery } from '@apollo/client';
import { GET_REPOGITORY } from 'apollo';
import { MagnifierIcon } from 'assets';
import PagiNation from 'components/Pagination/Pagination';
import RepositoryItme from 'components/RepositoryItem/RepositoryItem';
import { ChangeEvent, useState } from 'react';
import { RepositoryData } from 'types';
import ReactLoading from 'react-loading';
import styles from './searchPage.module.scss';

const SearchPage = () => {
  const [language, setLanguage] = useState('language');
  const [resultText, setReultText] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [getRepository, { loading, data, error }] =
    useLazyQuery<RepositoryData>(GET_REPOGITORY);

  const onChanageInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const selectLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.currentTarget.value);
  };

  const selectSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value as string;
    getRepository({
      variables: {
        searchText: `name: ${resultText} language:${language} sort: ${value}`,
      },
    });
  };

  const onSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      if (language === 'language')
        getRepository({ variables: { searchText: `name: ${inputValue}` } });
      else
        getRepository({
          variables: {
            searchText: `name: ${inputValue} language: ${language}`,
          },
        });
      setReultText(inputValue);
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>Find GitHub Repogitory</h1>
      </header>

      <form onSubmit={onSubmitForm} className={styles.searchForm}>
        <div className={styles.inputBox}>
          <MagnifierIcon />
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
      {resultText && <h2>{`Results for "${resultText}"`}</h2>}
      {loading && (
        <ReactLoading
          type={'bubbles'}
          color={'cornflowerblue'}
          height={500}
          width={100}
        />
      )}
      {!loading && data && (
        <section className={styles.filterContainer}>
          <p>{`${data.search.repositoryCount.toLocaleString(
            'ko-KR'
          )} results found`}</p>
          <select onChange={selectSort} className={styles.filterBox}>
            <option value="updated">Recently Updated</option>
            <option defaultValue="best match">Best Match</option>
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
