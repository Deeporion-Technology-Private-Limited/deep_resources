import React, { useRef, useEffect } from 'react';
import upload from '../../images/upperArrow.png';
import remove from '../../images/Delete.svg';

interface ImagePopupProps {
  onClose: () => void;
  onUpload: () => void;
  onRemove: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ onClose, onUpload, onRemove }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="absolute top-[4.3rem] left-[3.4rem] z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={popupRef} className="bg-white p-2 rounded-lg max-w-md flex flex-col gap-2">
        <button
          onClick={onUpload}
          className="flex items-center rounded px-1 py-1"
        >
          <img src={upload} alt="Upload" className="w-6 h-6 mr-2" />
          <span className="text-sm text-black truncate font-poppins font-normal">Upload Image</span>
        </button>
        <button
          onClick={onRemove}
          className="flex items-center rounded px-1 py-1"
        >
          <img src={remove} alt="Remove" className="w-6 h-6 mr-2" />
          <span className="text-sm text-black truncate font-poppins font-normal">Remove Image</span>
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;
