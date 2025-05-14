import { Layout } from './components/Layout';
import {
  getAllPatternsRoute,
  getPatternRoute,
  getPatternRouteParams,
  getSignUpRoute,
  getTypePatternRoute,
  getTypePatternRouteParams,
} from './lib/routes';
import { TrpcProvider } from './lib/trpc';
import { AllPatternsPage } from './pages/AllPatternsPage';
import { PatternPage } from './pages/PatternPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import { PatternTypePage } from './pages/TypePattern';
import { SignUpPage } from './pages/signUpPage';

const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getSignUpRoute()} element={<SignUpPage />} />
            <Route index path={getAllPatternsRoute()} element={<AllPatternsPage />}></Route>
            <Route path={getPatternRoute(getPatternRouteParams)} element={<PatternPage />}></Route>
            <Route path={getTypePatternRoute(getTypePatternRouteParams)} element={<PatternTypePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};

export default App;
