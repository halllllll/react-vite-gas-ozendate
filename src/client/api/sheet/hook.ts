import useSWR from 'swr';
import { SheetAPI } from './sheet';

export const useGetSheetName = () => {
  const { data, error, isLoading } = useSWR('sheet-name', () => SheetAPI.getSheetName(), {
    revalidateOnFocus: false,
    dedupingInterval: 100000,
  });

  return { data, error, isLoading };
};

export const useGetSheetUrl = () => {
  const { data, error, isLoading } = useSWR('sheet-url', () => SheetAPI.getUrl(), {
    revalidateOnFocus: false,
    dedupingInterval: 100000,
  });

  return { data, error, isLoading };
};
