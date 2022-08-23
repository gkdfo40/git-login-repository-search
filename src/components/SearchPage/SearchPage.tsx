import { useState } from 'react';

const SearchPage = () => {
  const [result, setResult] = useState('Repogitory');
  return (
    <div>
      <header>Find Repository</header>

      <form>
        <div>
          {/* 돋보기 이미지 */}
          <input type="text" placeholder="typing..." />
        </div>
        <select>
          <option selected>language</option>
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
        <button type="submit">Search</button>
      </form>
      <h1>{`Results for "${result}"`}</h1>
      <section>
        <p>results found</p>
        <select>
          <option value="Recently Updated" selected>
            Recently Updated
          </option>
          <option value="Best Match">Best Match</option>
        </select>
      </section>
      <ul>
        <li>저장소</li>
      </ul>
      <div>pageNation</div>
    </div>
  );
};
export default SearchPage;
