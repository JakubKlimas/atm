import { acceptedAmounts } from "../../../context/userMoney/userMoneyContextController/UserMoneyContextController.utils";
import { ActionButton } from "../../ActionButton/ActionButton";

import { useUserMoney } from "../../../hooks/useUserMoney/useUserMoney";

import translation from "../../../translations/en.json";
import "./AtmWithdrawScreen.styles.css";

export const AtmWithdrawScreen = () => {
  const {
    error,
    goToDifferentAmountScreen,
    updateBalance,
    setPrevSelectedOperation,
    selectedOperation,
  } = useUserMoney();

  const savePrevOperationAndProceed = () => {
    setPrevSelectedOperation(selectedOperation);
    goToDifferentAmountScreen();
  };

  return (
    <section>
      <h2 className="atm-withdraw-screen__title">
        {translation["withdraw.screen.select"]}
      </h2>
      <div className="atm-withdraw-screen__buttons-container">
        {acceptedAmounts.map((amount, index) => (
          <ActionButton
            name={amount.toString()}
            key={index}
            color={"#fff"}
            funcOnPress={() => updateBalance(amount.toString())}
          />
        ))}
        <ActionButton
          name={translation["withdraw.screen.different.amount"]}
          color={"#fff"}
          funcOnPress={savePrevOperationAndProceed}
        />
      </div>
      <p className="atm-withdraw-screen__input-error">{error}</p>
    </section>
  );
};
