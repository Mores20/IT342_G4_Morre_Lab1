// simple frontend-only auth storage
export function loadUsers() {
  try { return JSON.parse(localStorage.getItem('users') || '[]'); } catch { return []; }
}

export function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

export function loadAuth() {
  try { return JSON.parse(localStorage.getItem('auth') || 'null'); } catch { return null; }
}

export function saveAuth(user) {
  if (user) localStorage.setItem('auth', JSON.stringify(user)); else localStorage.removeItem('auth');
}
