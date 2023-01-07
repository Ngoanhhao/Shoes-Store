import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom"
import { rounters } from "./router/router"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {
          rounters.map((value,key)=>(
            <Route key={key} path={value.patch} element={<value.element/>}/>
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
