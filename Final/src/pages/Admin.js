
import React from 'react';
export default function Admin() {
  return (
    <div style={{maxWidth:800, margin:'24px auto', padding:16}}>
      <h2>Admin (Protected)</h2>
      <p>This is the admin area. Enter ADMIN_TOKEN on the live site to unlock messages.</p>
    </div>
  );
}
