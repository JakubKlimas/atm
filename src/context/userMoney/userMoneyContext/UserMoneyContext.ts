import { createContext } from "react";

import { UserMoneyData } from "./UserMoneyContext.types";

export const UserMoneyContext = createContext<UserMoneyData | null>(null);
