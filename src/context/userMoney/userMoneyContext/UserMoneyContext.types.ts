import { Dispatch, SetStateAction } from "react";

import { UserOperations } from "../userMoneyContextController/UserMoneyContextController.types";

export type UserMoneyData = {
  balance: number;
  updateBalance: (amount?: string) => void;
  selectedOperation: UserOperations;
  goToHomeScreen: VoidFunction;
  goToWithdrawScreen: VoidFunction;
  goToDepositScreen: VoidFunction;
  goToDifferentAmountScreen: VoidFunction;
  inputNumber: string;
  setInputNumber: Dispatch<SetStateAction<string>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  prevSelectedOperation: UserOperations | null;
  setPrevSelectedOperation: Dispatch<SetStateAction<UserOperations | null>>;
};
