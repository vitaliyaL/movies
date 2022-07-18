import React from "react";
import Page from "./page/Page/Page";
import Info from './page/Info'
import Favorite from './page/Favorite/Favorite'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/favorite" element={<Favorite/>}/>
        </Routes>
    </div>
  );
}

export default App;
