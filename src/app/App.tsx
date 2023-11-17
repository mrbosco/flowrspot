/* eslint-disable @typescript-eslint/no-var-requires */
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

import Home from '../pages/Home';
import AppLayout from '../components/AppLayout';
import ModalManager from '../modals/ModalManager';
import NotFound from '../components/NotFound';
import theme from '../styles/theme.json';

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
      <ThemeProvider theme={theme}>
        <ModalManager />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/flowers" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" gutter={12} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
