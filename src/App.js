//import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css'; // require
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
//Dados e Model //Componentes //import {  EditProfile  } from './ui-components'; //import Button from './components/Button'; import {  EditProfileCollection  } from './ui-components';

//componentes
import {  NavBar  } from './ui-components';
/*import Button from './components/Button';
//import Lista from './consultas/Lista';
import {  DiplomasCreateForm  } from './ui-components';
import {  EditProfile  } from './ui-components';
import {  EditProfileCollection  } from './ui-components'; */

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App( signOut, user ) { 

  return (
    <div className="App">
      <h5>Bem Vindo  {user.username}</h5>
      <NavBar></NavBar>
      {/*
      <Button title="Titulo1" user = {user.username}></Button>
       <DiplomasCreateForm></DiplomasCreateForm>
      <EditProfileCollection></EditProfileCollection>
      <EditProfile></EditProfile>
      <button onClick={signOut}>Sair</button> */}

      <h5>TutoriaisUdemy1</h5>

    </div>
  );
}

//Lista()
export default withAuthenticator(App);