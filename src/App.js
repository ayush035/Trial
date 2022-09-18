
import './App.css';
//import About from './components/about';
import Navbar from './components/Navbar';
import UAuth from '@uauth/js'
import Body from './Body';


const uauth = new UAuth({
  
    clientID: "ca047f44-91d0-42be-98b1-45557369cc19",
    redirectUri: "http://localhost:3000",
    scope: "openid wallet"

})

window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()
 
    console.log(authorization) 
  } catch (error) {
    console.error(error)
  }
}


function App() {
  return (
    <>
  <Navbar title="Hey"/>
  <div className ='container my-3'>
    <hr color='black'
    style={{
      background:'black',
      color:'black',
      bordercolor:'black',
      height:'2px'}}></hr>
  </div>
  <Body/>
  </>
  );
}

export default App;
