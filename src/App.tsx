import 'antd/dist/antd.less';
import 'moment/locale/ko';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import './App.less';
import { AppAuth } from './AppAuth';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 500000,
        cacheTime: 500000,
        retry: 0,
        useErrorBoundary: true,
      },
      mutations: {
        useErrorBoundary: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppAuth />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
