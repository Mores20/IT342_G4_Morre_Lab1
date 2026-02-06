import React from 'react';

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="card">
      <h2>Welcome</h2>
      <p className="muted">Signed in as <strong>{user?.name || user?.email}</strong></p>
      <div style={{marginTop:20}}>
        <button onClick={onLogout}>Log out</button>
      </div>
    </div>
  );
}
