interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}
export const Grow: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="18" height="18" rx="9" fill="#D1FAE5" />
        <path
          d="M10.0826 13.4615V6.94571L12.9293 9.79237C13.1568 10.0199 13.5301 10.0199 13.7576 9.79237C13.9851 9.56487 13.9851 9.19737 13.7576 8.96987L9.91343 5.1257C9.68593 4.8982 9.31844 4.8982 9.09094 5.1257L5.24094 8.96404C5.01344 9.19154 5.01344 9.55904 5.24094 9.78654C5.46844 10.014 5.83594 10.014 6.06344 9.78654L8.91593 6.94571V13.4615C8.91593 13.7824 9.17844 14.0449 9.49927 14.0449C9.8201 14.0449 10.0826 13.7824 10.0826 13.4615Z"
          fill="#059669"
        />
      </svg>
    </div>
  );
};