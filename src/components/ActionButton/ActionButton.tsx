import { ActionButtonProps } from "./ActionButton.types";

import "./ActionButton.styles.css";

export const ActionButton = ({
  name,
  funcOnPress,
  color,
}: ActionButtonProps) => (
  <button
    style={{ color }}
    className="action-button__wrapper"
    onClick={funcOnPress}
  >
    {name}
  </button>
);
