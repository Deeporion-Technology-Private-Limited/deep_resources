import React from 'react';

interface ImagePopupProps {
  onClose: () => void;
  onUpload: () => void;
  onRemove: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ onClose, onUpload, onRemove }) => {
  return (
    <div className="absolute top-[4.3rem] left-[3.4rem] z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <button
          onClick={onUpload}
          className="block w-full text-left py-2 px-4 hover:bg-gray-200 rounded"
        >
          Upload Image
        </button>
        <button
          onClick={onRemove}
          className="block w-full text-left py-2 px-4 hover:bg-gray-200 rounded mt-2"
        >
          Remove Image
        </button>
        <button
          onClick={onClose}
          className="block w-full text-left py-2 px-4 hover:bg-gray-200 rounded mt-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;
