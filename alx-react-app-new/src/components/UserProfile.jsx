import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', marginTop: '8px' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
