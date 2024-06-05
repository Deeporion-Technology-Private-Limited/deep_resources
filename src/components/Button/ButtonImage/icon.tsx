import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Loader: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C10.5523 18 11 18.4477 11 19C11 19.5523 10.5523 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10C18 5.58172 14.4183 2 10 2Z" />
      </svg>
    </div>
  );
};

export const Add: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
      </svg>
    </div>
  );
};

export const RightArrow: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7915 11.005H7.62148L12.5015 6.12502C12.8915 5.73502 12.8915 5.09502 12.5015 4.70502C12.3147 4.51777 12.061 4.41254 11.7965 4.41254C11.532 4.41254 11.2783 4.51777 11.0915 4.70502L4.50148 11.295C4.11148 11.685 4.11148 12.315 4.50148 12.705L11.0915 19.295C11.4815 19.685 12.1115 19.685 12.5015 19.295C12.8915 18.905 12.8915 18.275 12.5015 17.885L7.62148 13.005H18.7915C19.3415 13.005 19.7915 12.555 19.7915 12.005C19.7915 11.455 19.3415 11.005 18.7915 11.005Z" />
      </svg>
    </div>
  );
};

export const Left = () => {
  return (
    <div>
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.705 1.41L6.295 0L0.294998 6L6.295 12L7.705 10.59L3.125 6L7.705 1.41Z" fill="#9EA4AA" />
      </svg>
    </div>
  )
}

export const Right = () => {
  return (
    <div>
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.705 0L0.294998 1.41L4.875 6L0.294998 10.59L1.705 12L7.705 6L1.705 0Z" fill="#9EA4AA" />
      </svg>
    </div>
  )
}
