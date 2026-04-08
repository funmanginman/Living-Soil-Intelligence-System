import React, { useRef } from 'react';
import { UploadCloud } from 'lucide-react';

export const ImageUpload = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="media-card glass-panel">
      <h2><UploadCloud size={20} /> Upload Image</h2>
      <div 
        className="upload-area"
        onClick={() => fileInputRef.current?.click()}
      >
        <UploadCloud size={32} className="upload-icon" />
        <p className="upload-text">Click to upload or drag and drop a structural photo of your soil</p>
      </div>
      <input 
        type="file" 
        accept="image/*" 
        style={{ display: 'none' }} 
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};
