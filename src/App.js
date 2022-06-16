import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
// import Comp1 from './components/comp1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allusers from './components/Allusers';
import EditUser from "./components/EditUser";

function App() {
  //let { id } = useParams();
  return (
      <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Allusers />}></Route>
              <Route path="/edituser/:id" element={<EditUser />}></Route>
            </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
