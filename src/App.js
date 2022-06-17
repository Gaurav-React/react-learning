import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
// import Comp1 from './components/comp1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allusers from './components/Allusers';
import EditUser from "./components/EditUser";
import Adduser from "./components/Adduser";
import DeleteUser from "./components/DeleteUser";
function App() {
  //let { id } = useParams();
  return (
      <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Allusers />}></Route>
              <Route path="/edituser/:id" element={<EditUser />}></Route>
              <Route path="/adduser/" element={<Adduser />}></Route>
              <Route path="/delete/:id" element={<DeleteUser />}></Route>
            </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
