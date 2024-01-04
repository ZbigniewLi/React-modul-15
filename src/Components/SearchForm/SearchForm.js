/*import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

  const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;
*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateSearchstring } from '../../redux/searchstringRedux';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Stan przechowujący wartość wprowadzoną w inpucie
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateSearchstring(searchTerm)); // Wysłanie akcji z wartością wprowadzoną w inpucie
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Aktualizacja wartości wprowadzonej w inpucie w stanie komponentu
      />
      <Button type="submit">
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
