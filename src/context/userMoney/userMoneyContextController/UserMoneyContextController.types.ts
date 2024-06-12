import { ReactNode } from "react";

export type UserMoneyContextControllerProps = {
  children: ReactNode;
};

export enum UserOperations {
  HOME = "HOME",
  WITHDRAW = "WITHDRAW",
  DEPOSIT = "DEPOSIT",
  DEPOSIT_SUCCESS = "DEPOSIT_SUCCESS",
  WITHDRAW_SUCCESS = "WITHDRAW_SUCCESS",
  DIFFERENT_AMOUNT = "DIFFERENT_AMOUNT",
}
