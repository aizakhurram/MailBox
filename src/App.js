import './App.css';
import Mailbox from './Mailbox';

const messages = ['React', 'Re: React', 'Re:Re: React'];
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Mailbox unreadMessages={messages} />
      </header>
    </div>
  );
}

export default App;
