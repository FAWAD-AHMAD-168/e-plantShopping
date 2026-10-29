
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air-Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'A resilient indoor plant with striking upright leaves.',
        cost: 15,
      },
      {
        name: 'Spider Plant',
        image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
        description: 'A graceful plant with arching green and white leaves.',
        cost: 12,
      },
      {
        name: 'Peace Lily',
        image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
        description: 'An elegant plant with glossy leaves and white flowers.',
        cost: 18,
      },
      {
        name: 'Boston Fern',
        image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
        description: 'A lush fern that adds a refreshing touch of greenery.',
        cost: 20,
      },
      {
        name: 'Rubber Plant',
        image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
        description: 'A decorative plant with large, glossy leaves.',
        cost: 17,
      },
      {
        name: 'Areca Palm',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80',
        description: 'A tropical palm that creates a bright, leafy atmosphere.',
        cost: 24,
      },
    ],
  },
  {
    category: 'Aromatic and Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=700&q=80',
        description: 'A fragrant favorite with beautiful purple blooms.',
        cost: 20,
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=700&q=80',
        description: 'A flowering plant appreciated for its sweet fragrance.',
        cost: 18,
      },
      {
        name: 'Rosemary',
        image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
        description: 'An aromatic herb suited to sunny windowsills.',
        cost: 15,
      },
      {
        name: 'Mint',
        image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
        description: 'A refreshing herb with pleasantly scented leaves.',
        cost: 12,
      },
      {
        name: 'Lemon Balm',
        image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
        description: 'A lemon-scented herb with soft green foliage.',
        cost: 14,
      },
      {
        name: 'Hyacinth',
        image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
        description: 'A colorful flowering plant with a distinctive fragrance.',
        cost: 22,
      },
    ],
  },
  {
    category: 'Easy-Care Houseplants',
    plants: [
      {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=700&q=80',
        description: 'A low-maintenance plant with glossy, deep-green leaves.',
        cost: 25,
      },
      {
        name: 'Golden Pothos',
        image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
        description: 'A trailing plant that looks lovely on shelves.',
        cost: 10,
      },
      {
        name: 'Cast Iron Plant',
        image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
        description: 'A hardy plant that tolerates a range of indoor conditions.',
        cost: 20,
      },
      {
        name: 'Succulent Garden',
        image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
        description: 'A compact collection of distinctive, water-wise plants.',
        cost: 18,
      },
      {
        name: 'Aglaonema',
        image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
        description: 'A decorative foliage plant with attractive leaf patterns.',
        cost: 22,
      },
      {
        name: 'Aloe Vera',
        image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
        description: 'A succulent with fleshy leaves and simple care needs.',
        cost: 14,
      },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  const cartItems = useSelector((state) => state.cart?.items ?? []);

  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAddedToCart = (plantName) =>
    cartItems.some((item) => item.name === plantName);

  const handleHome = (event) => {
    event.preventDefault();
    onHomeClick();
  };

  const handlePlants = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  const handleCart = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="plant-shop">
      <header className="navbar">
        <a
          href="#home"
          className="brand-link"
          onClick={handleHome}
          aria-label="Paradise Nursery home"
        >
          <span className="brand-leaf" aria-hidden="true">🌿</span>
          <span className="brand-text">
            <strong>Paradise Nursery</strong>
            <small>Where Green Meets Serenity</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home" onClick={handleHome}>Home</a>
          <a
            href="#plants"
            onClick={handlePlants}
            aria-current={!showCart ? 'page' : undefined}
          >
            Plants
          </a>
          <a
            href="#cart"
            onClick={handleCart}
            className={showCart ? 'active' : ''}
            aria-current={showCart ? 'page' : undefined}
          >
            <span className="cart-nav-icon" aria-hidden="true">🛒</span>
            Cart
            <span className="cart-count" aria-label={`${totalCartQuantity} items`}>
              {totalCartQuantity}
            </span>
          </a>
        </nav>
      </header>

      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <main className="product-grid" id="plants">
          <section className="catalog-intro">
            <p className="eyebrow">GROW YOUR OWN PARADISE</p>
            <h1>Find Your Perfect Plant</h1>
            <p>
              Explore our collection of beautiful houseplants and
              bring a little more nature into your everyday life.
            </p>
          </section>

          {plantsArray.map((category) => (
            <section className="plant-category" key={category.category}>
              <div className="category-heading">
                <h2>{category.category}</h2>
                <span>{category.plants.length} plants</span>
              </div>

              <div className="product-list">
                {category.plants.map((plant) => {
                  const added = isAddedToCart(plant.name);

                  return (
                    <article className="product-card" key={plant.name}>
                      <div className="product-image-wrap">
                        <img
                          className="product-image"
                          src={plant.image}
                          alt={plant.name}
                          loading="lazy"
                        />
                      </div>

                      <div className="product-info">
                        <h3 className="product-title">{plant.name}</h3>
                        <p className="product-description">
                          {plant.description}
                        </p>
                        <p className="product-price">
                          ${plant.cost.toFixed(2)}
                        </p>

                        <button
                          type="button"
                          className={`product-button ${added ? 'added-to-cart' : ''}`}
                          disabled={added}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {added ? 'Added to Cart ✓' : 'Add to Cart'}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
