import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import './style.css'

App.propTypes = {
    
};
function App(props) {
  return (
    <div className="infomation" >
      <Header/>
      <Body/>
      <Footer/>
      
    </div>
  );
}

export default App;
