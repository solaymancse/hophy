// import logo from './logo.svg';
import "./App.css";
import { PreLoader } from "./Components/PreLoader/PreLoader";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./Components/GlobalStyle/Global.style";
// import { Route, Routes } from "react-router-dom";
// import { List } from "./Components/Dashboard/List/List";
// import { Single } from "./Components/Dashboard/Single/Single";
// import { New } from "./Components/Dashboard/New/New";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PreLoader />
      {/* <Routes>
        <Route path="/">
          <Route path="appointments">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
        <Route path="/">
          <Route path="doctors">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
        <Route path="/">
          <Route path="management">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
        <Route path="/">
          <Route path="content">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
