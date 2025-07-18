import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';

export default function Login({ onLogin }) {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user.email.endsWith('@hibob.io')) {
        onLogin(user);
      } else {
        alert(
          'Sorry, only users with a HiBob gmail account can access this app.'
        );
        auth.signOut();
      }
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background:
          'radial-gradient(circle at 60% 40%, #ff6f61 0%, #d72660 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Bob icons */}
      <img
        src="https://media0.giphy.com/media/v8fYN3rBFnH61x4Dxi/giphy.webp"
        alt=""
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.18,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          background: '#fff',
          padding: '2.5rem 3.5rem',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(44, 62, 80, 0.18)',
          textAlign: 'center',
          minWidth: 340,
          maxWidth: 380,
          zIndex: 1,
        }}
      >
        <img
          src="https://yt3.googleusercontent.com/x41lFExybhdzqA-kMpmmTB5FmqabXt6JnynyS8WtCy4Mfu4m8iRQ6R6DyEzbxvTCMELn4XoO=s900-c-k-c0x00ffffff-no-rj"
          alt="HiBob Logo"
          style={{ width: 90, marginBottom: 24, borderRadius: '50%' }}
        />
        <h1
          style={{
            marginBottom: 10,
            color: '#2d3a4a',
            fontWeight: 700,
            fontSize: 28,
            fontFamily: 'Georgia, serif',
          }}
        >
          Login
        </h1>
        <div
          style={{
            margin: '18px 0',
            borderBottom: '1px solid #e0eafc',
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '-12px',
              transform: 'translateX(-50%)',
              background: '#fff',
              padding: '0 12px',
              color: '#b2bec3',
              fontSize: 13,
            }}
          >
            below please
          </span>
        </div>
        <button
          onClick={handleLogin}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            background: '#ff6f61',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.85rem 2.2rem',
            fontSize: '1.08rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            margin: '0 auto 8px auto',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#e85c50')}
          onMouseOut={e => (e.currentTarget.style.background = '#ff6f61')}
        >
          <img
            src="https://brandlogo.org/wp-content/uploads/2025/05/Google-G-Icon-2025.png.webp"
            alt="Google"
            style={{
              width: 22,
              height: 22,
              background: '#fff',
              borderRadius: '50%',
            }}
          />
          Sign in with Google
        </button>
        <div style={{ marginTop: 18, fontSize: 13, color: '#b2bec3' }}>
          <span>
            By logging in, you agree to HiBob's Privacy Policy and End-Users
            Terms of Use.
          </span>
        </div>
        <div style={{ marginTop: 18, fontSize: 13, color: '#b2bec3' }}>
          <span>Powered by Bold, Bearded and Beautifull</span>
        </div>
      </div>
    </div>
  );
}
