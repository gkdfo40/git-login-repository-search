import { useLazyQuery } from '@apollo/client';
import { GET_KEYWORD } from 'apollo';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from 'hooks';
import { KeyWordData } from 'types';
import styles from './inputComponent.module.scss';

interface InputProps {
  setInputValue: (value: string) => void;
}
const Input = ({ setInputValue }: InputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [getKeyword, { data, loading }] =
    useLazyQuery<KeyWordData>(GET_KEYWORD);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
    setInputValue(event.currentTarget.value);
  };
  useEffect(() => {
    if (debouncedSearchTerm) {
      getKeyword({
        variables: {
          inputValue: `name: ${debouncedSearchTerm}`,
        },
      });
    }
  }, [debouncedSearchTerm, getKeyword]);
  return (
    <div className={styles.container}>
      <input
        list="key-word"
        type="text"
        placeholder="typing..."
        value={searchTerm}
        onChange={onChangeInput}
      />
      {!loading && data && searchTerm && (
        <datalist id="key-word">
          {data.search.nodes.map((node) => (
            <option value={node.name}>{node.name}</option>
          ))}
        </datalist>
      )}
    </div>
  );
};
export default Input;
