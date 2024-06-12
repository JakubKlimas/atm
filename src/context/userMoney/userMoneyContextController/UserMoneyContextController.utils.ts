import { isDivisibleByValues } from "../../../utils/isDivisibleByValues/isDivisibleByValues";

import { UserOperations } from "./UserMoneyContextController.types";

import translation from "../../../translations/en.json";

export const acceptedAmounts = [10, 20, 50, 100, 500];

export const validateInput = (
  inputNumber: string,
  balance: number,
  selectedOperation: UserOperations,
  prevSelectedOperation: UserOperations | null
) => {
  const castedInputValue = Number(inputNumber);

  if (!inputNumber.length) {
    return translation["error.incorrect.value"];
  }

  if (castedInputValue > 10000) {
    return translation["error.too.much.money"];
  }

  if (castedInputValue === 0) {
    return translation["error.too.small.money"];
  }

  if (!isDivisibleByValues(castedInputValue, acceptedAmounts)) {
    return `${translation["error.incorrect.format"]} ${acceptedAmounts.join(
      " | "
    )}`;
  }

  if (
    balance - castedInputValue < 0 &&
    [selectedOperation, prevSelectedOperation].includes(UserOperations.WITHDRAW)
  ) {
    return translation["error.no.funds"];
  }

  return null;
};

export const removeLeadingZerosIfPositive = (value: string): string => {
  if (value.length > 1 && value.startsWith("0")) {
    const trimmedValue = value.replace(/^0+/, "");

    return trimmedValue.length > 0 && Number(trimmedValue) > 0
      ? trimmedValue
      : "0";
  }

  return value;
};
