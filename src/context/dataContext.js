import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { cities } from '../constants/data';
import requests from '../api';
import Loading from '../pages/Loading/Loading';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({ cities: [], universities: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requests.universities
      .list()
      .then((res) => {
        if (res.data?.data) {
          setData((d) => ({ ...d, universities: res.data.data }));
        }
      })
      .catch(() => window.location.reload())
      .finally(() => setLoading(false));
    setData((d) => ({ ...d, cities }));
  }, []);

  const values = {
    ...data,
    setData,
    loading,
  };

  const child = loading ? <Loading /> : children;

  return <DataContext.Provider value={values}>{child}</DataContext.Provider>;
};

const useDataContext = () => useContext(DataContext);

const useFormUniversities = () => {
  const { universities } = useDataContext();
  return useMemo(() => {
    return universities.map((u) => ({ label: u.UniversityName, value: u.UniversityId }));
  }, [universities]);
};
const useFormCities = () => {
  const { cities } = useDataContext();
  return useMemo(() => {
    return cities.map((c) => ({ label: c.name, value: c.value }));
  }, [cities]);
};

export { useDataContext, useFormUniversities, useFormCities };

export default DataProvider;
