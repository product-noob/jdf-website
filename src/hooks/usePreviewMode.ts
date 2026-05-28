import { useSearchParams } from 'react-router-dom';

export function usePreviewMode() {
  const [searchParams] = useSearchParams();
  return searchParams.get('preview') === '1';
}
