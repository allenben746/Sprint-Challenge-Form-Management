import React from 'react';
import './App.css';
import FormikUserForm from './components/UserForm';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <FormikUserForm />
    </div>
  )
}
}

export default App;
