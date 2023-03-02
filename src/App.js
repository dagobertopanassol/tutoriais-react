//import logo from './logo.svg';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import '@aws-amplify/ui-react/styles.css'; // require
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
//componentes
import Button from './components/Button';
import Lista from './consultas/Lista';

Amplify.configure(awsExports);

function App( signOut, user ) { 
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p> 
            Bem Vindo  {user.username}, {user.id}<br></br>
            CurricuBI - Facilitando sua Vida na hora de criar o seu Melhor Currículo !

          </p>
          {
          /* <Button title="Propriedade title"></Button> */
          <Button>Btn</Button> 
          
          }
        </div>
      </header>
      <div>
      
        <button onClick={signOut}>Sair</button>
        <Lista/>

      </div>
    </div>
  );
}

Lista()
export default withAuthenticator(App);