import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/header/NavigationBar';
import { Fragment } from 'react';
import Main from './components/main/Main';

function App() {
  return (
    <div style={{ position: 'absolute' }}>
      <NavigationBar />
      <Main />
    </div>
  );
}

export default App;
