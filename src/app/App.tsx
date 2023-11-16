import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import Home from '../pages/Home';
import AppLayout from '../components/AppLayout';
import ModalManager from '../modals/ModalManager';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalManager />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/flowers" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" gutter={12} />
    </QueryClientProvider>
  );
};

export default App;
