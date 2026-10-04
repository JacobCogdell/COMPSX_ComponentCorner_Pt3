import { useState } from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import BannerImage from './assets/ComponentsBanner.png';

const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Header 
        storeName="Cogdell Component Corner" 
        cartCount={cart.length} 
      />

      <Hero
        title="Welcome to Cogdell Component Corner"
        subtitle="High‑quality components for every build"
        ctaText="Shop Now"
        image={BannerImage}
      />

      <div style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>

      <h2 style={{ padding: '20px' }}>Your Cart</h2>

      <div style={{ padding: '20px' }}>
         {cart.length === 0 ? (
           <p>Your cart is empty.</p>
         ) : (
          cart.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              onRemove={() => removeFromCart(index)}
            />
         ))
        )}
      </div>

      <h3 style={{ padding: '20px' }}>
        Total: ${cartTotal.toFixed(2)}
      </h3>

      <Footer
        storeName="Cogdell Component Corner"
        contact="support@cogdellcomponents.com"
      />
    </>
  );
}

export default App;
