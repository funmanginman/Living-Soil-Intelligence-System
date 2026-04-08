import React, { useState } from 'react';
import { Leaf, Mail, Lock, User as UserIcon } from 'lucide-react';

export const Authentication = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    // Simulate DB interaction & storing the session token
    const user = { email, name: isLogin ? "Sir/Madam" : name || "Sir/Madam" };
    localStorage.setItem("lsis_user", JSON.stringify(user));
    onLogin(user);
  };

  const handleGoogleLogin = () => {
    // Simulate OAuth interaction
    const user = { email: "guest@google.com", name: "Sir/Madam" };
    localStorage.setItem("lsis_user", JSON.stringify(user));
    onLogin(user);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ width: 400, padding: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <Leaf size={48} style={{ color: 'var(--neon-green)', marginBottom: 16 }} />
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-main)' }}>LSIS Protocol</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 8 }}>Living Soil Intelligence System</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {!isLogin && (
            <div style={{ position: 'relative' }}>
              <UserIcon size={18} style={{ position: 'absolute', left: 14, top: 14, color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Full Name" 
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 42px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'white' }}
              />
            </div>
          )}
          
          <div style={{ position: 'relative' }}>
            <Mail size={18} style={{ position: 'absolute', left: 14, top: 14, color: 'var(--text-muted)' }} />
            <input 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', padding: '12px 12px 12px 42px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'white' }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={18} style={{ position: 'absolute', left: 14, top: 14, color: 'var(--text-muted)' }} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: '12px 12px 12px 42px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'white' }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: 8 }}>
            {isLogin ? "Sign In" : "Initialize Account"}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>OR</span>
          <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.1)' }} />
        </div>

        <button 
          onClick={handleGoogleLogin} 
          className="btn-secondary" 
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '12px' }}
        >
          <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" style={{ fill: "#4285F4" }} />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" style={{ fill: "#34A853" }} />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" style={{ fill: "#FBBC05" }} />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" style={{ fill: "#EA4335" }} />
          </svg>
          Continue with Google
        </button>

        <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>
          {isLogin ? "Don't have an access code? " : "Already authenticated? "}
          <span 
            style={{ color: 'var(--neon-green)', cursor: 'pointer', fontWeight: 500 }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </div>

      </div>
    </div>
  );
};
