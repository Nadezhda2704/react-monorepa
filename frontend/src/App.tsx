import { TrpcProvider } from './lib/trpc';
import { AllPatternsPage } from './pages/AllPatternsPage';


const App = () => {
  return (
    <TrpcProvider>
      <AllPatternsPage />
    </TrpcProvider>
  );
};

export default App;
