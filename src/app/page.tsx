import SearchLayout from '@/core/layout/search-layout';
import History from '@/app/_libs/ui/history';
import { getWordHistory } from './_libs/services/word';

export default async function Home() {
  const history = await getWordHistory();

  return (
    <SearchLayout>
      <History list={history} />
    </SearchLayout>
  );
}
