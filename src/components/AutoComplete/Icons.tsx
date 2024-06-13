export const CrossIcon = ({ onClick }: { onClick: () => void }) => (
    <div
      onClick={onClick}
      className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-6"
      style={{ width: '16px', height: '16px' }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="#9EA4AA"
        />
      </svg>
    </div>
  );
  
  export const DropDownArrowIcon = ({ onClick }: { onClick: () => void }) => (
    <div
      onClick={onClick}
      className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-2"
      style={{ width: '20px', height: '20px' }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.62615 7.29289C6.01667 6.90237 6.64983 6.90237 7.04036 7.29289L10.3333 10.5858L13.6261 7.29289C14.0167 6.90237 14.6498 6.90237 15.0404 7.29289C15.4309 7.68342 15.4309 8.31658 15.0404 8.70711L11.0404 12.7071C10.6498 13.0976 10.0167 13.0976 9.62614 12.7071L5.62615 8.70711C5.23562 8.31658 5.23562 7.68342 5.62615 7.29289Z"
          fill="#72787F"
        />
      </svg>
    </div>
  );
  