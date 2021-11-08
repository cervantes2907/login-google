
import GoogleLogin from 'react-google-login';
import './App.css';


function App() {

  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);

  }
  return (
    <div className="App">
    <GoogleLogin 
      clientId="898703312825-bt2000po895vugjrh3qpl7c9iesiv637.apps.googleusercontent.com"
      buttonText="Iniciar Sesion" 
/*       render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
      )} */
      onSuccess={respuestaGoogle}
      onFailure={respuestaGoogle}
      cookiePolicy={'single_host_origin'}
  />

    </div>
  );
}

export default App;
