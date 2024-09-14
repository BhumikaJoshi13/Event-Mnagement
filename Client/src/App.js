import logo from './logo.svg';
import './App.css';
import JiraBoard from './components/pages/jiraboard';
import LoginPage from './components/pages/login';
import RegisterPage from './components/pages/register';

function App() {
  return (
    <div className="App">
      <JiraBoard/>
      <LoginPage/>
      <RegisterPage/>
    </div>
  );
}

export default App;
