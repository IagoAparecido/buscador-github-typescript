import "./App.modules.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>GitHub Buscador</h1>
      <Outlet />
    </div>
  );
}

export default App;
