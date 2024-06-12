import { AtmHomeScreen } from "../AtmScreens/AtmHomeScreen/AtmHomeScreen";
import { AtmDepositScreen } from "../AtmScreens/AtmDepositScreen/AtmDespositScreen";
import { AtmWithdrawScreen } from "../AtmScreens/AtmWithdrawScreen/AtmWithdrawScreen";
import { AtmDepositSuccessScreen } from "../AtmScreens/AtmDepositSuccessScreen/AtmDepositSuccessScreen";
import { AtmWithdrawSuccessScreen } from "../AtmScreens/AtmWithdrawSuccessScreen/AtmWithdrawSuccessScreen";
import { AtmDifferentAmountScreen } from "../AtmScreens/AtmDifferentAmountScreen/AtmDifferentAmountScreen";

import { useUserMoney } from "../../hooks/useUserMoney/useUserMoney";
import { UserOperations } from "../../context/userMoney/userMoneyContextController/UserMoneyContextController.types";

import translate from "../../translations/en.json";
import "./AtmComputer.styles.css";

export const AtmComputer = () => {
  const { selectedOperation } = useUserMoney();

  const getCorrectScreen = () => {
    switch (selectedOperation) {
      case UserOperations.HOME:
        return <AtmHomeScreen />;
      case UserOperations.DEPOSIT:
        return <AtmDepositScreen />;
      case UserOperations.WITHDRAW:
        return <AtmWithdrawScreen />;
      case UserOperations.DIFFERENT_AMOUNT:
        return <AtmDifferentAmountScreen />;
      case UserOperations.DEPOSIT_SUCCESS:
        return <AtmDepositSuccessScreen />;
      case UserOperations.WITHDRAW_SUCCESS:
        return <AtmWithdrawSuccessScreen />;
      default:
        return <AtmHomeScreen />;
    }
  };

  return (
    <section className="atm-computer__container">
      <h1 className="atm-computer__title">{translate["atm.title"]}</h1>
      {getCorrectScreen()}
    </section>
  );
};
