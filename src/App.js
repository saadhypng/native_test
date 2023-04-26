import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  const accountIdentify = ()=> {
  window.hyperengage(
    'identify_account', 
    { account_id: '2f550d76ffca3777e7a8351d12de20', 
    traits: {
    name: 'Intercom',
    mrr: 3500,
    plan_name: 'premium',
    company_size: "1-10", 
    support_level:"SLA",
    website:"https://www.intercom.com",
    created_at:"2023-04-19T22:43:27+0000"
  }
});
};


const userIdentify = ()=> {
window.hyperengage(
  'identify_user', {
    user_id: '2f550d76ffca3777e7a8351d12de23',
    traits: {
      name: "Peter S",
      email: "peter@intercom.com",
      job_role: "CEO"
    }
});
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type='button' onClick={accountIdentify}>Identify Account</button>
      <button type='button' onClick={userIdentify}>Identify User</button>
      <button type='button' onClick={() => {
        window.hyperengage('track','created_new_view',{properties: {view_relation: "Accounts"}})
      }}>Track Event</button>
      <button type='button' onClick={() => {
        window.hyperengage('reset');
      }}>Reset cookies and user data
      </button>
      </header>
    </div>
  );
}

export default App;
