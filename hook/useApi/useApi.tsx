import axios from "axios";
import { API_URL } from "keys";
import { useCallback, useEffect, useState } from "react";

interface useApiProps {
  description: string;
  fruits: string[];
}
interface OptionsFruits {
  value: string;
  label: string;
}

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [options, setOptions] = useState<OptionsFruits[] | []>([]);

  const convertDataToOptions = useCallback((data: useApiProps) => {
    setOptions(
      data.fruits.map((fruit, index) => ({
        value: index.toString(),
        label: fruit,
      }))
    );
  }, []);
  const fetchFruits = useCallback(async () => {
    try {
      setLoading(false);
      const { data }: { data: { data: useApiProps } } = await axios.get(
        API_URL
      );

      convertDataToOptions(data.data);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }, [convertDataToOptions]);

  useEffect(() => {
    fetchFruits();
  }, [fetchFruits]);

  return {
    options,
    error,
    loading,
  };
};
