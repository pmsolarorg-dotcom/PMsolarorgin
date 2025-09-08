
import React from 'react';
export default function WhatsAppButton({phone='918955603015', prefill='Hello, I need help with solar subsidy'}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(prefill)}`;
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      position:'fixed', right:20, bottom:20, background:'#25D366', color:'#fff', padding:'12px 14px', borderRadius:28, textDecoration:'none', fontWeight:'bold'
    }}>WhatsApp</a>
  );
}
