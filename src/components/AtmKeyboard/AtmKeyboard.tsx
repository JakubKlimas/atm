import { ActionButton } from "../ActionButton/ActionButton";

import { useUserMoney } from "../../hooks/useUserMoney/useUserMoney";

import { UserOperations } from "../../context/userMoney/userMoneyContextController/UserMoneyContextController.types";

import translation from "../../translations/en.json";
import "./AtmKeyboard.styles.css";

export const AtmKeyboard = () => {
  const {
    goToHomeScreen,
    goToDepositScreen,
    goToWithdrawScreen,
    setInputNumber,
    inputNumber,
    updateBalance,
    setError,
    selectedOperation,
  } = useUserMoney();

  const keyboardNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
  const finalKeyLayout = [...keyboardNumbers, 0];
  const isUserInOperationScreen =
    selectedOperation === UserOperations.DIFFERENT_AMOUNT;

  const clear = () => {
    if (isUserInOperationScreen) {
      setInputNumber("");
      setError(null);
    }
  };

  const onAtmKeyPress = (key: number) => {
    if (inputNumber.length < 5 && isUserInOperationScreen) {
      setInputNumber((prevValue) => prevValue + key);
    }
  };

  const confirmOperation = () => {
    if (selectedOperation === UserOperations.WITHDRAW_SUCCESS) {
      return goToWithdrawScreen();
    }

    if (selectedOperation === UserOperations.DEPOSIT_SUCCESS) {
      return goToDepositScreen();
    }

    if (isUserInOperationScreen) {
      return updateBalance();
    }
  };

  return (
    <section className="keyboard__container">
      <section className="keyboard__key-container">
        {finalKeyLayout.map((key, index) => (
          <button
            key={index}
            className="keyboard__button"
            onClick={() => onAtmKeyPress(key)}
          >
            {key}
          </button>
        ))}
      </section>
      <section className="kayboard__action-buttons-container">
        <ActionButton
          name={translation["keyboard.cancel"]}
          color="#f04c4c"
          funcOnPress={goToHomeScreen}
        />
        <ActionButton
          name={translation["keyboard.clear"]}
          color="#FFFF00"
          funcOnPress={clear}
        />
        <ActionButton
          name={translation["keyboard.confirm"]}
          color="#00ff00"
          funcOnPress={confirmOperation}
        />
      </section>
    </section>
  );
};
