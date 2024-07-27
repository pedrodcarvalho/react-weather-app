import React, { useState } from 'react';

import SearchInput from '../components/SearchInput';
import InfoCard from '../components/InfoCard';

const Main = () => {
  const [data, setData] = useState({ data: null, loading: true, error: null });

  return (
    <>
      <div className='space-y-10'>
        <SearchInput setData={setData} />
        <InfoCard payload={data} />
      </div>
    </>
  );
};

export default Main;
