interface ChipsProps {
    className?: string;
    handleClick: () => void
}

export const CloseRed: React.FC<ChipsProps> = ({ className, handleClick }) => {
    return (<div className={className} onClick={handleClick}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M12.6667 4.27333L11.7267 3.33333L8 7.06L4.27333 3.33333L3.33333 4.27333L7.06 8L3.33333 11.7267L4.27333 12.6667L8 8.93999L11.7267 12.6667L12.6667 11.7267L8.94 8L12.6667 4.27333Z" fill="#DC2626"/>
</svg> */}
        {/* remove after Icon uploaded on Aws */}
        <img src="https://deepresources.s3.ap-south-1.amazonaws.com/images/MdCloseRed.svg" alt="" width="16" height="16" />
    </div>)
}

export const CloseYellow: React.FC<ChipsProps> = ({ className, handleClick }) => {
    return (<div className={className} onClick={handleClick} >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M12.6667 4.27333L11.7267 3.33333L8 7.06L4.27333 3.33333L3.33333 4.27333L7.06 8L3.33333 11.7267L4.27333 12.6667L8 8.93999L11.7267 12.6667L12.6667 11.7267L8.94 8L12.6667 4.27333Z" fill="#D97706"/>
</svg> */}
        {/* remove after Icon uploaded on Aws */}
        <img src="https://deepresources.s3.ap-south-1.amazonaws.com/images/MdCloseYellow.svg" alt="" width="16" height="16" />
    </div>)
}

export const CloseBlack: React.FC<ChipsProps> = ({ className, handleClick }) => {
    return (<div className={className} onClick={handleClick} >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M12.6667 4.27334L11.7267 3.33334L8 7.06L4.27333 3.33334L3.33333 4.27334L7.06 8L3.33333 11.7267L4.27333 12.6667L8 8.94L11.7267 12.6667L12.6667 11.7267L8.94 8L12.6667 4.27334Z" fill="#26282B"/>
</svg> */}
        {/* remove after Icon uploaded on Aws */}
        <img src="https://deepresources.s3.ap-south-1.amazonaws.com/images/MdCloseBlack.svg" alt="" width="16" height="16" />
    </div>)
}


