import { ActionButton } from "../../ActionButton/ActionButton";

import { useUserMoney } from "../../../hooks/useUserMoney/useUserMoney";

import translation from "../../../translations/en.json";
import "./AtmHomeScreen.styles.css";

export const AtmHomeScreen = () => {
  const { goToDepositScreen, goToWithdrawScreen, balance } = useUserMoney();

  return (
    <section>
      <h2 className="atm-home-screen__title">
        {translation["home.screen.welcome"]}
      </h2>
      <h3 className="atm-home-screen__balance">
        {translation["home.screen.balance"]} {balance} PLN
      </h3>
      <p className="atm-home-screen__description">
        {translation["home.screen.select.transaction"]}
      </p>
      <section className="atm-home-screen__action-buttons-container">
        <ActionButton
          name={translation["home.screen.withdraw"]}
          color={"#fff"}
          funcOnPress={goToWithdrawScreen}
        />
        <ActionButton
          name={translation["home.screen.deposit"]}
          color={"#fff"}
          funcOnPress={goToDepositScreen}
        />
      </section>
    </section>
  );
};
