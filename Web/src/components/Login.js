import React, { useState } from 'react';

export default function Login({ onLogin, switchTo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);

  function submit(e) {
    e.preventDefault();
    const ok = onLogin({ email, password });
    if (ok === true) {
      setMsg('Logged in');
    } else {
      setMsg(ok || 'Invalid credentials');
    }
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={submit} className="form">
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <div className="row">
          <input placeholder="Password" type={show ? 'text' : 'password'} value={password} onChange={e=>setPassword(e.target.value)} style={{flex:1}} />
          <button type="button" className="link" onClick={()=>setShow(s=>!s)}>{show ? 'Hide' : 'Show'}</button>
        </div>
        <button type="submit">Sign in</button>
      </form>
      <div className="muted">No account? <button className="link" onClick={()=>switchTo('register')}>Register</button></div>
      {msg && <div className="message">{msg}</div>}
    </div>
  );
}
