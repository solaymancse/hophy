// import logo from './logo.svg';
import './App.css';
import { PreLoader } from './Components/PreLoader/PreLoader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './Components/GlobalStyle/Global.style';





function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <PreLoader/>
    
     
    </div>
  );
}

export default App;
