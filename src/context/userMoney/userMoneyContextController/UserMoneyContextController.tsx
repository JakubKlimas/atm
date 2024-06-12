import { useEffect, useMemo, useState } from "react";

import { UserMoneyContext } from "../userMoneyContext/UserMoneyContext";
import {
  removeLeadingZerosIfPositive,
  validateInput,
} from "./UserMoneyContextController.utils";

import { UserMoneyData } from "../userMoneyContext/UserMoneyContext.types";
import {
  UserMoneyContextControllerProps,
  UserOperations,
} from "./UserMoneyContextController.types";

export const UserMoneyContextController = ({
  children,
}: UserMoneyContextControllerProps) => {
  const [balance, setBalance] = useState(100);
  const [inputNumber, setInputNumber] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [selectedOperation, setSelectedOperation] = useState<UserOperations>(
    UserOperations.HOME
  );
  const [prevSelectedOperation, setPrevSelectedOperation] =
    useState<UserOperations | null>(null);

  useEffect(() => {
    setInputNumber("");
    setError(null);

    if (selectedOperation === UserOperations.HOME) {
      setPrevSelectedOperation(null);
    }
  }, [selectedOperation]);

  useEffect(() => {
    setError(null);

    const editedValue = removeLeadingZerosIfPositive(inputNumber);

    if (editedValue !== inputNumber) {
      setInputNumber(editedValue);
    }
  }, [inputNumber]);

  const updateBalance = (amount?: string) => {
    const correctValueToProceed = amount ?? inputNumber;

    const validationError = validateInput(
      correctValueToProceed,
      balance,
      selectedOperation,
      prevSelectedOperation
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    const isWithdraw =
      prevSelectedOperation === UserOperations.WITHDRAW ||
      selectedOperation === UserOperations.WITHDRAW;

    setBalance((prevValue) =>
      isWithdraw
        ? prevValue - Number(correctValueToProceed)
        : prevValue + Number(correctValueToProceed)
    );

    setSelectedOperation(
      isWithdraw
        ? UserOperations.WITHDRAW_SUCCESS
        : UserOperations.DEPOSIT_SUCCESS
    );
  };

  const goToHomeScreen = () => setSelectedOperation(UserOperations.HOME);

  const goToWithdrawScreen = () =>
    setSelectedOperation(UserOperations.WITHDRAW);

  const goToDepositScreen = () => setSelectedOperation(UserOperations.DEPOSIT);

  const goToDifferentAmountScreen = () =>
    setSelectedOperation(UserOperations.DIFFERENT_AMOUNT);

  const contextValues: UserMoneyData = useMemo(
    () => ({
      balance,
      updateBalance,
      selectedOperation,
      goToHomeScreen,
      goToWithdrawScreen,
      goToDepositScreen,
      goToDifferentAmountScreen,
      inputNumber,
      setInputNumber,
      error,
      setError,
      prevSelectedOperation,
      setPrevSelectedOperation,
    }),
    [
      balance,
      updateBalance,
      selectedOperation,
      goToHomeScreen,
      goToWithdrawScreen,
      goToDepositScreen,
      goToDifferentAmountScreen,
      inputNumber,
      setInputNumber,
      error,
      setError,
      prevSelectedOperation,
      setPrevSelectedOperation,
    ]
  );

  return (
    <UserMoneyContext.Provider value={contextValues}>
      {children}
    </UserMoneyContext.Provider>
  );
};
