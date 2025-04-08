import { Layout } from './components/Layout';
import { getAllPatternsRoute, getPatternRoute, getPatternRouteParams } from './lib/routes';
import { TrpcProvider } from './lib/trpc';
import { AllPatternsPage } from './pages/AllPatternsPage';
import { PatternPage } from './pages/PatternPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <TrpcProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index path={getAllPatternsRoute()} element={<AllPatternsPage />}></Route>
              <Route path={getPatternRoute(getPatternRouteParams)} element={<PatternPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TrpcProvider>
  );
};

export default App;
