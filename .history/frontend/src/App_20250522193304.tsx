import { Layout } from './components/Layout';
import {
  getAllPatternsRoute,
  getPatternRoute,
  getPatternRouteParams,
  getSignInRoute,
  getSignOutRoute,
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
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { SignOutPage } from './pages/SignOutPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getSignOutRoute()} element={<SignOutPage />} />

          <Route element={<Layout />}>
            <Route path={getSignInRoute()} element={<SignInPage />} />
            <Route path={getSignUpRoute()} element={<SignUpPage />} />
            <Route index path={getAllPatternsRoute()} element={<AllPatternsPage />} />
            <Route path={getPatternRoute(getPatternRouteParams)} element={<PatternPage />} />
            <Route path={getTypePatternRoute(getTypePatternRouteParams)} element={<PatternTypePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};

export default App;
