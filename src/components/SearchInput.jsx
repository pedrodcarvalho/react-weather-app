import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import useFetch from '../hooks/useFetch';

const SearchInput = ({ setData }) => {
  const [query, setQuery] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setSearchUrl(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=en`);
    }
  };

  const { data, loading, error } = useFetch(searchUrl);

  useEffect(() => {
    setData({ data, loading, error });
  }, [data, loading, error]);

  return (
    <>
      <div className="flex justify-between items-center">
        <label className="input input-primary flex items-center gap-2 border border-neutral-500">
          <input
            type="text"
            id="search"
            className="grow"
            placeholder="Search"
            value={query}
            onChange={handleChange}
            onKeyDown={handleSubmit}
          />
          <FaSearch onClick={handleSubmit} />
        </label>
      </div>
    </>
  );
};

export default SearchInput;
