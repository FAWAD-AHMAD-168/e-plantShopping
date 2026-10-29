
import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <main className="landing-page">
          <div className="background-image" aria-hidden="true" />

          <div className="landing-overlay">
            <section className="landing-content">
              <div className="landing-heading">
                <span className="brand-icon" aria-hidden="true">
                  🌿
                </span>

                <h1>Paradise Nursery</h1>

                <div className="divider" />

                <p className="landing-tagline">
                  Where Green Meets Serenity
                </p>

                <p className="landing-intro">
                  Bring nature into your home with our beautiful
                  collection of indoor plants. Discover the perfect
                  green companion to brighten your space, refresh
                  your surroundings, and bring tranquility to
                  your everyday life.
                </p>

                <button
                  className="get-started-button"
                  onClick={handleGetStartedClick}
                  type="button"
                >
                  Get Started
                  <span aria-hidden="true"> →</span>
                </button>
              </div>

              <div className="aboutus-container">
                <AboutUs />
              </div>
            </section>
          </div>
        </main>
      ) : (
        <div className="product-list-container">
          <ProductList onHomeClick={handleHomeClick} />
        </div>
      )}
    </div>
  );
}

export default App;



