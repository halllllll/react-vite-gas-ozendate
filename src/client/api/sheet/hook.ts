import type { AffectCountRequest } from '@/shared/types/sheet';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
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

export const usePostCount = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    'post-count',
    async (_key: string, { arg }: { arg: AffectCountRequest }) => SheetAPI.postCount(arg),
  );

  return { trigger, data, error, isMutating };
};
