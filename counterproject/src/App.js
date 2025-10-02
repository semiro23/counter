function App() {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"', lineHeight: 1.6, color: '#0f172a' }}>
      <section style={{ maxWidth: 880, margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <h1 style={{ margin: 0, fontSize: 28 }}>Your Name</h1>
          <nav style={{ display: 'flex', gap: 16 }}>
            <a href="#about" style={{ color: '#2563eb', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ color: '#2563eb', textDecoration: 'none' }}>Projects</a>
            <a href="#contact" style={{ color: '#2563eb', textDecoration: 'none' }}>Contact</a>
          </nav>
        </header>

        <section id="about" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, marginBottom: 8 }}>About</h2>
          <p style={{ margin: 0 }}>
            I am a developer who enjoys building clean, accessible web applications.
            This is a minimal portfolio built with React.
          </p>
        </section>

        <section id="projects" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, marginBottom: 8 }}>Projects</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <li style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
              <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: 18 }}>Project One</h3>
              <p style={{ marginTop: 0, marginBottom: 12 }}>Brief description of what this project does and why it is interesting.</p>
              <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>View</a>
            </li>
            <li style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
              <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: 18 }}>Project Two</h3>
              <p style={{ marginTop: 0, marginBottom: 12 }}>Another small project or demo that showcases your skills.</p>
              <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>View</a>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2 style={{ fontSize: 22, marginBottom: 8 }}>Contact</h2>
          <p style={{ margin: 0 }}>
            Email: <a href="mailto:you@example.com" style={{ color: '#2563eb', textDecoration: 'none' }}>you@example.com</a>
          </p>
          <p style={{ marginTop: 8 }}>
            GitHub: <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>@yourhandle</a>
          </p>
        </section>
      </section>
    </main>
  );
}

export default App;
