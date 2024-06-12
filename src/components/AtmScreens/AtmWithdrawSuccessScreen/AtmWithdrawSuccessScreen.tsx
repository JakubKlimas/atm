import { useUserMoney } from "../../../hooks/useUserMoney/useUserMoney";

import translation from "../../../translations/en.json";
import "./AtmWithdrawSuccessScreen.styles.css";

export const AtmWithdrawSuccessScreen = () => {
  const { balance } = useUserMoney();

  return (
    <section>
      <h2 className="atm-withdraw-success-screen__title">
        {translation["withdraw.success.screen.title"]}
      </h2>
      <h3 className="atm-withdraw-success-screen__description">
        {translation["withdraw.success.screen.balance"]} {balance}
      </h3>
      <div className="atm-withdraw-success-screen__description-container">
        <p className="atm-withdraw-success-screen__description">
          {translation["withdraw.success.screen.cancel"]}
        </p>
        <p className="atm-withdraw-success-screen__description">
          {translation["withdraw.success.screen.confirm"]}
        </p>
      </div>
    </section>
  );
};
