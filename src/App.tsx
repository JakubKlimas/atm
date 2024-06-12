import { AtmKeyboard } from "./components/AtmKeyboard/AtmKeyboard";
import { AtmComputer } from "./components/AtmComputer/AtmComputer";

import { UserMoneyContextController } from "./context/userMoney/userMoneyContextController/UserMoneyContextController";

import "./App.css";

function App() {
  return (
    <UserMoneyContextController>
      <main>
        <AtmComputer />
        <AtmKeyboard />
      </main>
    </UserMoneyContextController>
  );
}

export default App;
