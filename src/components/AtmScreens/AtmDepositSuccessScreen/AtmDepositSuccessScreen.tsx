import { useUserMoney } from "../../../hooks/useUserMoney/useUserMoney";

import translation from "../../../translations/en.json";
import "./AtmDepositSuccessScreen.styles.css";

export const AtmDepositSuccessScreen = () => {
  const { balance } = useUserMoney();

  return (
    <section>
      <h2 className="atm-deposit-success-screen__title">
        {translation["deposit.success.screen.title"]}
      </h2>
      <h3 className="atm-deposit-success-screen__description">
        {translation["deposit.success.screen.balance"]} {balance}
      </h3>
      <div className="atm-deposit-success-screen__description-container">
        <p className="atm-deposit-success-screen__description">
          {translation["deposit.success.screen.cancel"]}
        </p>
        <p className="atm-deposit-success-screen__description">
          {translation["deposit.success.screen.confirm"]}
        </p>
      </div>
    </section>
  );
};
