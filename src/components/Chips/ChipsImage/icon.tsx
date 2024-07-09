import React from "react";

interface ChipsProps {
    handleClicked?: (() => void);
}

export const CloseBlack: React.FC<ChipsProps> = ({ handleClicked }) => {
    return (<div onClick={handleClicked}  >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="9"  height="20" viewBox="0 0 14 14" fill="none">
<path d="M13.3 0.709956C13.1132 0.522704 12.8595 0.417471 12.595 0.417471C12.3305 0.417471 12.0768 0.522704 11.89 0.709956L7 5.58996L2.11 0.699956C1.92317 0.512704 1.66952 0.407471 1.405 0.407471C1.14048 0.407471 0.886833 0.512704 0.700001 0.699956C0.310001 1.08996 0.310001 1.71996 0.700001 2.10996L5.59 6.99996L0.700001 11.89C0.310001 12.28 0.310001 12.91 0.700001 13.3C1.09 13.69 1.72 13.69 2.11 13.3L7 8.40996L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.41 6.99996L13.3 2.10996C13.68 1.72996 13.68 1.08996 13.3 0.709956Z" fill="#0F172A"/>
</svg> */}
        { /* Remove after icon uploaded on AWS */}

        <img src="https://deepresources.s3.ap-south-1.amazonaws.com/images/MdCloseBlack.svg
" alt="" width="9" height="20" />
    </div>)
}

export const CloseBlue: React.FC<ChipsProps> = ({ handleClicked }) => {
    return (<div onClick={handleClicked} >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 16 16" fill="none">
<path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#334EAC"/>
</svg> */}

        { /* Remove after icon uploaded on AWS */}

        <img src="https://deepresources.s3.ap-south-1.amazonaws.com/images/MdCloseBlue.svg
" alt="" width="15" height="20" />
    </div>)
}


export const CloseWhite: React.FC<ChipsProps> = ({ handleClicked }) => {
    return (<div onClick={handleClicked}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 16 16" fill="none">
<path d="M12.6666 4.27333L11.7266 3.33333L7.99998 7.06L4.27331 3.33333L3.33331 4.27333L7.05998 8L3.33331 11.7267L4.27331 12.6667L7.99998 8.93999L11.7266 12.6667L12.6666 11.7267L8.93998 8L12.6666 4.27333Z" fill="white"/>
</svg> */}
        { /* Remove after icon uploaded on AWS */}

        <img src="https://deepresources.s3.ap-south-1.amazonaws.com/images/MdCloseWhite.svg
" alt="" width="15" height="20" />
    </div>)
}

