import React from "react";
import Page from "./page/Page/Page";
import Info from './page/Info'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Page />} />
          <Route path="info" element={<Info />} />
        </Routes>
    </div>
  );
}

export default App;
