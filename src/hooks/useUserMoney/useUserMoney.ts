import { useContext } from "react";

import { UserMoneyContext } from "../../context/userMoney/userMoneyContext/UserMoneyContext";

export const useUserMoney = () => {
  const context = useContext(UserMoneyContext);

  if (!context) {
    throw new Error(
      "UserMoneyContext must be within UserMoneyContextController"
    );
  }

  return context;
};
