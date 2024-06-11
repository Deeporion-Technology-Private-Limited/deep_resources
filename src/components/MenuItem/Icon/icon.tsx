import React from 'react';

interface IconProps {
    className?: string;
    style?: React.CSSProperties;
}

export const RightIcon: React.FC<IconProps> = ({ className, style }) => {
    return (
        <div className={className} style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M14.25 7.125H11.25V2.625H6.75V7.125H3.75L9 12.375L14.25 7.125ZM8.25 8.625V4.125H9.75V8.625H10.6275L9 10.2525L7.3725 8.625H8.25ZM3.75 13.875H14.25V15.375H3.75V13.875Z" fill="#1B1D1F" />
            </svg>
        </div>
    );
};

export const LeftIcon: React.FC<IconProps> = ({ className, style }) => {
    return (
        <div className={className} style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6.71063C8.61 7.10063 8.61 7.73063 9 8.12063L12.88 12.0006L9 15.8806C8.61 16.2706 8.61 16.9006 9 17.2906C9.39 17.6806 10.02 17.6806 10.41 17.2906L15 12.7006C15.39 12.3106 15.39 11.6806 15 11.2906L10.41 6.70063C10.03 6.32063 9.39 6.32063 9 6.71063Z" fill="#1B1D1F" />
            </svg>
        </div>
    );
};