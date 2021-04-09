import React, { useState } from 'react';
import './App.css';
import { CognitoUserPool } from '../node_modules/amazon-cognito-identity-js';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const poolData = {
    UserPoolId: 'us-east-1_Hq6Hhsu1n',
    ClientId: '1gcet2l36bkjbdb3ui5kdt8s01'
  };
  const UserPool = new CognitoUserPool(poolData);

  const onSubmit = event =>{
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) =>{ //Email, password, empyt array, null, error and data
      console.log(err);
    });
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={event => setEmail(event.target.value)} 
        />
        <input value={password} onChange={event => setPassword(event.target.value)} 
        />
        <button type='submit'>Signup</button>
      </form>  
    </div>
  );
}

export default App;
