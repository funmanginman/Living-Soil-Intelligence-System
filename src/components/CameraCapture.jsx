import React, { useRef, useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, XCircle } from 'lucide-react';

export const CameraCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert("Could not access camera. Please allow permissions or check if a webcam is connected.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current && isCameraActive) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      onCapture(dataUrl);
      stopCamera();
    }
  };

  useEffect(() => {
    return () => { stopCamera(); }; // Cleanup on unmount
  }, []);

  return (
    <div className="media-card glass-panel">
      <h2><Camera size={20} /> Live Camera</h2>
      <div className="video-container">
        {isCameraActive ? (
          <video ref={videoRef} autoPlay playsInline className="video-element" />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
            <Camera size={48} style={{ opacity: 0.2, marginBottom: 10 }} />
            <span style={{ fontSize: 13 }}>Camera Inactive</span>
          </div>
        )}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>

      {!isCameraActive ? (
        <button className="btn-primary" onClick={startCamera}>
          Start Camera
        </button>
      ) : (
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-primary" style={{ flex: 1 }} onClick={captureImage}>
            Capture Soil
          </button>
          <button className="btn-secondary" onClick={stopCamera}>
            <XCircle size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
