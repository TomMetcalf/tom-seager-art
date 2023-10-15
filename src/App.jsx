import './App.css';

function App() {
  return (
    <>
      <h1 className="web-address">art.tom-seager.com</h1>
      <h2>
        <span className="first-line">The Home of </span>
        <span className="second-line">Tom Seager Art</span>
      </h2>
      <p>Site currently under construction.</p>
      <p>Please check back for future updates.</p>
      <section className="siteLinks">
        <a href="https://www.tom-seager.com" className="siteLinkStyle">
          Return to the Tom Seager Main Site
        </a>
      </section>
      <section className="social-links">
        <div className="social-items">
          <a href="https://www.instagram.com/tomseagerart/" target="_blank">
            <i className="fa-brands fa-instagram instagram-icon"></i>
          <p>Tom Seager Art</p>
          </a>
        </div>
        <div className="social-items">
          <a href="https://www.instagram.com/carvefinart/" target="_blank">
            <i className="fa-brands fa-instagram instagram-icon"></i>
          <p>Carve Fin Art</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
