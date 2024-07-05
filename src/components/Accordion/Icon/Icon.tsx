import React from "react";

export const UpArrow: React.FC = () => {
  return (
    <div data-testid="uparrow">
      <svg
        width="20"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 18.7912V7.62123L17.88 12.5012C18.27 12.8912 18.91 12.8912 19.3 12.5012C19.69 12.1112 19.69 11.4812 19.3 11.0912L12.71 4.50123C12.5231 4.31397 12.2695 4.20874 12.005 4.20874C11.7405 4.20874 11.4868 4.31397 11.3 4.50123L4.69997 11.0812C4.30997 11.4712 4.30997 12.1012 4.69997 12.4912C5.08997 12.8812 5.71997 12.8812 6.10997 12.4912L11 7.62123V18.7912C11 19.3412 11.45 19.7912 12 19.7912C12.55 19.7912 13 19.3412 13 18.7912Z"
          fill="#0F172A"
        />
      </svg>
    </div>
  );
};

export const UpCursor: React.FC = () => {
  return (
    <div data-testid="upcursor">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        enable-background="new 0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.295 9.00002L6.70498 13.59C6.31498 13.98 6.31498 14.61 6.70498 15C7.09498 15.39 7.72498 15.39 8.11498 15L12.005 11.12L15.885 15C16.275 15.39 16.905 15.39 17.295 15C17.685 14.61 17.685 13.98 17.295 13.59L12.705 9.00002C12.325 8.61002 11.685 8.61002 11.295 9.00002Z"
          fill="#0F172A"
        />
      </svg>
    </div>
  );
};

export const PlusIcon: React.FC = () => {
  return (
    <div data-testid="plusicon">
      <svg
        width="20"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
          fill="#0F172A"
        />
      </svg>
    </div>
  );
};

export const Minus = () => {
  return (
    <div data-testid="minusicon">
      <svg
        width="20"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
          fill="#0F172A"
        />
      </svg>
    </div>
  );
};
