import React from "react";

import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Dashboard from './components/Dashboard';

import CreateStudent from "./components/CreateStudent"

import EditStudent from "./components/EditStudent";

import StudentList from "./components/StudentList";



function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
         <Route path="/list" element={<StudentList />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;