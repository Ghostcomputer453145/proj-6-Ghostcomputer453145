import React from 'react';

export default function Header() {
  return (
    <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
      <h1>Multi Data Dashboard</h1>
      <p><strong>Name:</strong> Yumin Jang</p>
      <p><strong>Z Number:</strong> Z23655899</p>
      <p>Welcome to the data management interface</p>
    </header>
  );
}