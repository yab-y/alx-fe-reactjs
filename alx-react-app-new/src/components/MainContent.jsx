import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f3' }}>
      <UserProfile name="Yeabsira" age={20} bio="Ethiopian student passionate about design and tech." />
      <UserProfile name="Liya" age={22} bio="Loves AI and frontend development." />
    </main>
  );
}

export default MainContent;
