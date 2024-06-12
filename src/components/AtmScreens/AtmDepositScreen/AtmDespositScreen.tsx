import { ActionButton } from "../../ActionButton/ActionButton";

import { useUserMoney } from "../../../hooks/useUserMoney/useUserMoney";
import { acceptedAmounts } from "../../../context/userMoney/userMoneyContextController/UserMoneyContextController.utils";

import translation from "../../../translations/en.json";
import "./AtmDepositScreen.styles.css";

export const AtmDepositScreen = () => {
  const {
    error,
    updateBalance,
    goToDifferentAmountScreen,
    setPrevSelectedOperation,
    selectedOperation,
  } = useUserMoney();

  const savePrevOperationAndProceed = () => {
    setPrevSelectedOperation(selectedOperation);
    goToDifferentAmountScreen();
  };

  return (
    <section>
      <h2 className="atm-deposit-screen__title">
        {translation["deposit.screen.select"]}
      </h2>
      <div className="atm-deposit-screen__buttons-container">
        {acceptedAmounts.map((amount, index) => (
          <ActionButton
            name={amount.toString()}
            key={index}
            color={"#fff"}
            funcOnPress={() => updateBalance(amount.toString())}
          />
        ))}
        <ActionButton
          name={translation["deposit.screen.different.amount"]}
          color={"#fff"}
          funcOnPress={savePrevOperationAndProceed}
        />
      </div>
      <p className="atm-deposit-screen__input-error">{error}</p>
    </section>
  );
};
