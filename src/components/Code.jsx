import React, { Component } from 'react';

import MonacoEditor from '@uiw/react-monacoeditor';
import ErrorAlert from './common/errorAlert'
import axios from "axios";


class CodeEditor extends Component {
  
  pageStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
    minHeight: '100vh',
    flexDirection:'column',
  }
  btnStyle = {
    color:'white',
    margin:'1vh',
    backgroundColor:'green',
  }
  defaultCode = `def check():
    return True`
  state = {
    code:this.defaultCode,
    error:null,
  } 
  handleChange = (e)=>{
    this.setState({code:e});
  }

  handleBtnClick = (e)=>{
    axios.post('http://localhost:8000/main/',{code:this.state.code})
      .then(res => {
        this.setState({error:null});
        this.props.navigate('/results')
      }).catch(err=>{
        const errorMessage = err.response.data;
        this.setState({error:errorMessage});
      });
  }

  render() { 
    
    return (
      <div style={this.pageStyle}>
       
       {this.state.error && <ErrorAlert errorMessage ={this.state.error}/>}

        <h1 className="text-justify text-success">Scanner</h1>

        <MonacoEditor
        style={{marginTop:'1vh',}}
        height="80vh"
        width="80rem"
        language="python"
        value={this.defaultCode}
        options={{
          theme: "vs-dark",
        }}
        onChange = {this.handleChange}
      />

      <div className='btn primary' onClick={this.handleBtnClick} style={this.btnStyle}>Submit</div>

      </div>
      
    );
  }
}
 
export default CodeEditor;

