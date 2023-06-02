import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import RickMorty from './components/RickMorty';
const queryClient = new QueryClient()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QueryClientProvider client={queryClient} >
          <RickMorty></RickMorty>
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
