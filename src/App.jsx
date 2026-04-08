import React, { useState, useEffect } from 'react';
import './App.css';
import { CameraCapture } from './components/CameraCapture';
import { ImageUpload } from './components/ImageUpload';
import { ChatWindow } from './components/ChatWindow';
import { Authentication } from './components/Authentication';
import { Leaf, LogOut } from 'lucide-react';

function App() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("lsis_user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("lsis_user");
    setUser(null);
  };

  const handleMediaAttach = (imageDataURL) => {
    setCapturedImage(imageDataURL);
  };

  const clearAttachedImage = () => {
    setCapturedImage(null);
  };

  if (!user) {
    return <Authentication onLogin={(userData) => setUser(userData)} />;
  }

  return (
    <div className="app-container">
      {/* Left Sidebar for Media Input */}
      <aside className="sidebar">
        <div className="logo-container" style={{ justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Leaf className="logo-icon" size={32} />
            <h1 className="logo-text">LSIS</h1>
          </div>
          <button onClick={handleLogout} className="btn-secondary" style={{ padding: '8px', border: 'none' }} title="Log out">
             <LogOut size={16} />
          </button>
        </div>
        
        <div style={{ marginBottom: 10, fontSize: 13, color: 'var(--text-muted)' }}>
          LIVING SOIL INTELLIGENCE SYSTEM
        </div>

        <CameraCapture onCapture={handleMediaAttach} />
        
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: 12, margin: '10px 0' }}>— OR —</div>
        
        <ImageUpload onUpload={handleMediaAttach} />

      </aside>

      {/* Right Side Chat Window */}
      <ChatWindow 
        providedImage={capturedImage} 
        onClearImage={clearAttachedImage}
        userName={user.name}
      />
    </div>
  );
}

export default App;
