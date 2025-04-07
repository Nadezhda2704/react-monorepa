import { getAllPatternsRoute, getPatternRoute } from './lib/routes';
import { TrpcProvider } from './lib/trpc';
import { AllPatternsPage } from './pages/AllPatternsPage';
import { PatternPage } from './pages/PatternPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllPatternsRoute()} element={<AllPatternsPage />}></Route>
          <Route path={getPatternRoute({ patternId: ':patternId' })} element={<PatternPage />}></Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};

export default App;
