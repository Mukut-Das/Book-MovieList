import logo from './logo.svg';
import './App.css';


import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './components/Main';
import ViewMore from './components/ViewMore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/viewmore" element={<ViewMore/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
