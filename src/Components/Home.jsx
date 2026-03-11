import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import CartList from "./CartList";
import WishList from "./WishList";
import OrderSummary from "./OrderSummary";
import OrderPlaced from "./OrderPlace";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All"); // ✅ নতুন state

  const [cartList, setCartList] = useState(() => {
    const storeCartList = localStorage.getItem('cartList');
    return storeCartList ? JSON.parse(storeCartList) : [];
  });

  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [wishlist, setWishlist] = useState(() => {
    const storeWishlist = localStorage.getItem('wishlist');
    return storeWishlist ? JSON.parse(storeWishlist) : [];
  });

  // Total Calculations
  const subtotal = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0);
  const shippingFee = totalItems * 2;
  const orderTotal = subtotal + shippingFee;

  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', changeNavbar);
  }, []);

  // Save Items to LocalStorage
  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cartList));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [cartList, wishlist]);

  // handle Scroll
  const handleScroll = () => {
    const section = document.getElementById('product-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // cart and wishlist ShowTab functions
  const handlePanel = (tabName) => {
    setActivePanel(prev => (prev === tabName ? null : tabName));
  };

  // ClosePanel Function
  const handleclose = () => setActivePanel(null);

  // RemoveItem
  const removeItem = (product) => {
    setCartList(cartList.filter(item => item.id !== product.id));
  };

  // QuantityIncrement
  const quantityIncremrnt = (product) => {
    setCartList(cartList.map(item =>
      item.id === product.id ?
        { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // QuantityDecrement
  const quantityDecremrnt = (product) => {
    setCartList(cartList.map(item =>
      item.id === product.id && item.quantity > 1 ?
        { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // AddToCart Function
  const addToCart = (product) => {
    const alreadyAdded = cartList.find(item => item.id === product.id);
    if (alreadyAdded) {
      alert('Item is already in the cart');
      return;
    }
    setCartList([...cartList, { ...product, quantity: 1 }]);
  };

  // productDetail Function
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // image এ ক্লিক করলে product state এ সেট হবে
  };

  const handleBack = () => {
    setSelectedProduct(null); // back করলে আবার Products এ যাবে
  };

  // Wishlist Function
  const addToWishlist = (product) => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      const addDate = new Date().toLocaleString('en-GB');
      setWishlist([...wishlist, { ...product, addDate }]);
    }
  };

  // Clear Wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <div>
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishlist={wishlist}
        setActiveCategory={setActiveCategory} // ✅ Navbar এ পাঠানো হলো
      />

      <Hero />

      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          handleBack={handleBack}
        />
      ) : (
        <Products
          searchTerm={searchTerm}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          wishlist={wishlist}
          onProductClick={handleProductClick}
          activeCategory={activeCategory} // ✅ Products এ পাঠানো হলো
        />
      )}

      <CartList
        activePanel={activePanel}
        handleclose={handleclose}
        cartList={cartList}
        removeItem={removeItem}
        quantityIncremrnt={quantityIncremrnt}
        quantityDecremrnt={quantityDecremrnt}
        subtotal={subtotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />

      <WishList
        activePanel={activePanel}
        handleclose={handleclose}
        wishlist={wishlist}
        addToCart={addToCart}
        clearWishlist={clearWishlist}
      />

      {orderSummary && (
        <OrderSummary
          cartList={cartList}
          subtotal={subtotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderPlaced={setOrderPlaced}
          setOrderSummary={setOrderSummary}
          setCartList={setCartList}
        />
      )}

      {orderPlaced && (
        <OrderPlaced
          setOrderPlaced={setOrderPlaced}
        />
      )}

      <Footer />
    </div>
  );
};

export default Home;
