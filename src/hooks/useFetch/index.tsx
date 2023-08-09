import { useEffect, useState } from 'react';
import { ERROR_MESSAGE } from '../../constants';

const useFetch = <T,>(url?: string) => {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

  const fetchData = async ({
    url,
    isGetData = false,
    method = 'GET',
    contentsType = { 'Content-Type': 'application/json' },
    body,
  }: {
    url?: string;
    isGetData: boolean;
    method?: string;
    contentsType?: object;
    body?: BodyInit | null | undefined;
  }) => {
    try {
      if (!url) return;

      setStatus('loading');

      const token = localStorage.getItem('token');

      const headers = {
        Authorization: `Bearer ${token}`,
        ...contentsType,
      };

      const res = await fetch(url, {
        method,
        headers,
        body,
      });

      if (isGetData) {
        const data = await res.json();

        setData(data);
      }

      if (res.status === 400) throw new Error(ERROR_MESSAGE[400]);
      if (res.status === 404) throw new Error(ERROR_MESSAGE[404]);

      if (!res.ok) {
        throw new Error(ERROR_MESSAGE.default);
      }

      setStatus('success');
    } catch (error) {
      if (error instanceof Error && status !== 'success') {
        setStatus('error');
      }
    }
  };

  useEffect(() => {
    fetchData({ url, isGetData: true });
  }, [url]);

  return { data, status, fetchData };
};

export default useFetch;
