import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=10 `,
      ).then(res => res.json());
      setData([...data, ...response.result]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  

  const values = {
    setPage,
    data,
    setData,
    error,
    loading,
    setLoading,
    fetchData,
  };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export const useBlog = () => useContext(BlogContext);
