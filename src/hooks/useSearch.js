import { useMemo, useState } from 'react';

const useSearch = (data, filterMethod) => {
  const [query, setQuery] = useState('');

  const result = useMemo(() => data.filter((d) => filterMethod(d, query)), [data, query]);

  return {
    result: query.trim() ? result : data,
    query,
    setQuery,
  };
};

export default useSearch;
