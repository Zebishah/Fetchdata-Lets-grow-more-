import logo from './logo.svg';
import './App.css';
import FetchData from './modules/FetchData';
import { Navbar } from './modules/Navbar';

function App() {
  return (
    <div className="w-full bg-[#232323] h-[100%] pt-8">

      <FetchData />
    </div>
  );
}

export default App;
