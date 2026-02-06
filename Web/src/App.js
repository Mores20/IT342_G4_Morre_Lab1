import React, { useState, useEffect } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { loadUsers, saveUsers, loadAuth, saveAuth } from './authService';

function App(){
  const [view, setView] = useState('login');
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(()=>{
    setUsers(loadUsers());
    setAuth(loadAuth());
    if (loadAuth()) setView('dashboard');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
  },[]);

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  },[theme]);

  function register(newUser){
    if (users.find(u=>u.email === newUser.email)) return 'Email already registered';
    const next = [...users, { ...newUser }];
    setUsers(next); saveUsers(next);
    return true;
  }

  function login({ email, password }){
    const u = users.find(x => x.email === email && x.password === password);
    if (!u) return 'Invalid email or password';
    setAuth(u); saveAuth(u);
    setView('dashboard');
    return true;
  }

  function logout(){
    setAuth(null); saveAuth(null); setView('login');
  }

  function switchTo(v){ setView(v); }

  function toggleTheme(){ setTheme(t => t === 'dark' ? 'light' : 'dark'); }

  return (
    <div className="app-root">
      <div className="container">
        <h1 className="title">Simple Auth UI
          <button className="theme-toggle" onClick={toggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </h1>
        {auth && view === 'dashboard' ? (
          <Dashboard user={auth} onLogout={logout} />
        ) : view === 'register' ? (
          <Register onRegister={register} switchTo={switchTo} />
        ) : (
          <Login onLogin={login} switchTo={switchTo} />
        )}
      </div>
    </div>
  );
}

export default App;
