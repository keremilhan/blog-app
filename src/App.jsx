import './App.scss'
import AppRouter from './components/AppRouter';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className='app'>
      <Toaster />
      <AppRouter />
    </div>
  );
}

export default App;
