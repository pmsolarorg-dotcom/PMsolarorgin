
import React, { useState } from 'react';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import WhatsAppButton from './components/WhatsAppButton';
export default function App() {
  const [page, setPage] = useState('home');
  return (
    <div style={{fontFamily:'Arial, sans-serif'}}>
      <header style={{background:'#0b5394', color:'#fff', padding:12}}>
        <h1 style={{margin:0}}>PMsolar.org.in</h1>
        <nav style={{marginTop:8}}>
          <button onClick={()=>setPage('home')} style={{marginRight:8}}>Home</button>
          <button onClick={()=>setPage('contact')} style={{marginRight:8}}>Contact</button>
          <button onClick={()=>setPage('admin')}>Admin</button>
        </nav>
      </header>
      <main style={{padding:16}}>
        {page === 'home' && <div><h2>Welcome to PMsolar.org.in</h2><p>Demo site for solar subsidy information.</p></div>}
        {page === 'contact' && <Contact />}
        {page === 'admin' && <Admin />}
      </main>
      <footer style={{textAlign:'center', padding:12}}>PMsolar.org.in — Not an official government website</footer>
      <WhatsAppButton />
    </div>
  );
}
