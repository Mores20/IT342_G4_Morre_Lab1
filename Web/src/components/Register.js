import React, { useState } from 'react';

export default function Register({ onRegister, switchTo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) return setMsg('Please fill all fields');
    const ok = onRegister({ name, email, password });
    if (ok === true) {
      setMsg('Registered successfully — you can log in now');
      setName(''); setEmail(''); setPassword('');
      setTimeout(() => switchTo('login'), 800);
    } else {
      setMsg(ok || 'Registration failed');
    }
  }

  return (
    <div className="card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <div className="row">
          <input placeholder="Password" type={show ? 'text' : 'password'} value={password} onChange={e=>setPassword(e.target.value)} style={{flex:1}} />
          <button type="button" className="link" onClick={()=>setShow(s=>!s)}>{show ? 'Hide' : 'Show'}</button>
        </div>
        <button type="submit">Create account</button>
      </form>
      <div className="muted">Already have an account? <button className="link" onClick={()=>switchTo('login')}>Log in</button></div>
      {msg && <div className="message">{msg}</div>}
    </div>
  );
}
