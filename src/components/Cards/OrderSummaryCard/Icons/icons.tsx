import { FindIconUrl } from "../../../../utils/Constant";

export const Arrow = () => {
  const url = FindIconUrl("KeyboardArrowDown.svg");

  return (
    <div>
      <img src={url} width="24" height="24" />
    </div>
  );
};

export const Return = () => {
  const url = FindIconUrl("return.svg");

  return (
    <div>
      <img src={url} width="24" height="24" />
    </div>
  );
};

export const Secure = () => {
  const url = FindIconUrl("secure.svg");

  return (
    <div>
      <img src={url} width="24" height="24" />
    </div>
  );
};

export const CardCart = () => {
  const url = FindIconUrl("checkoutCart.svg");

  return (
    <div>
      <img src={url} width="24" height="24" />
    </div>
  );
};
