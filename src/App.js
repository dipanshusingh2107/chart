import React from "react";
import { Route, Routes, Navigate,useNavigate } from "react-router-dom";
import CodeEditor from "./components/Code";
import Results from "./components/Results";

const App = ()=>{
  const navigate = useNavigate();
    return (
      <React.Fragment>
        <Routes>
          <Route path="code" element={<CodeEditor navigate ={navigate}/>}/>
          <Route path="results" element={<Results/>}/> 
          <Route path='*' element = {<Navigate to ='code'/>}/>
        </Routes>
      </React.Fragment>
    );
  
}

export default App;