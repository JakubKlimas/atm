import { UserOperations } from "../../../context/userMoney/userMoneyContextController/UserMoneyContextController.types";
import { useUserMoney } from "../../../hooks/useUserMoney/useUserMoney";

import traslation from "../../../translations/en.json";
import "./AtmDifferentAmountScreen.styles.css";

export const AtmDifferentAmountScreen = () => {
  const { inputNumber, error, prevSelectedOperation } = useUserMoney();

  const isInputEmpty = !inputNumber.length;

  return (
    <section>
      <h2 className="atm-differen-amount-screen__title">
        {traslation["different.amount.screen.title"]}{" "}
        {prevSelectedOperation === UserOperations.DEPOSIT
          ? "deposit"
          : "withdraw"}
      </h2>
      <p className="atm-differen-amount-screen__description">
        {traslation["different.amount.screen.accepted.denominations"]}
      </p>
      <p className="atm-differen-amount-screen__description">
        {traslation["different.amount.screen.max.amount"]}
      </p>
      <div className="atm-differen-amount-screen__input-container">
        {isInputEmpty ? (
          <div className="atm-differen-amount-initial-input-value" />
        ) : (
          <p className="atm-differen-amount-screen__input">{inputNumber}</p>
        )}
        <p className="atm-differen-amount-screen__input-error">{error}</p>
      </div>
    </section>
  );
};
