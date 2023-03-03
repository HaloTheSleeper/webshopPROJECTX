import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import { useCookies } from 'react-cookie';
import { Products, CategoriesFrontPage, CategoryPage, Navbar, Cart, Checkout, Footer, OpenScreen } from '../components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import FullSizeNavbar from '../components/FullSizeNavbar/FullSizeNavbar';


const ShopLayoutRoutes = () => {

  const [products, setProducts] = useState([]);
  const [preferations, setPreferations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [path, setPath] = useState("");
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [cookies, setCookie, removeCookie] = useCookies(['preferations'])


  //adding "preferations"/details of the picture to the order
  const addToPreferationsList = (newPreferation) => {

    let alreadyExists = false;
    let i = 0;

    while (i < preferations.length) {
      if (preferations[i].name === newPreferation.name) {
        preferations[i].preferation = newPreferation.preferation;
        alreadyExists = true;
      };
      i += 1;
    };

    if (!alreadyExists) {
      setPreferations(preferations => [...preferations, newPreferation]);
    };
  };
  useEffect(() => {
    console.log("New preferations:", preferations);
    if (preferations.length != 0) {
      setCookie("preferations", JSON.stringify(preferations));
    }
    console.log("Preferations cookie:", JSON.stringify(cookies.preferations))
  }, [preferations]);



  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    console.log("Products:",data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
    //console.log(data[0].assets[0].url)
    console.log("Categories: ", data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    
  }; 

  const handleAddToCart = async (productId, quantity) => {
    const { line_items } = await commerce.cart.retrieve();
    
    let i = 0;
    let addToCart = true;

    //Checking if the item is already in the cart.
    while (i < line_items.length) {
      console.log(line_items[i])
      if (line_items[i].product_id === productId) {
        addToCart = false;
        let productName = line_items[i].name
        alert("You can only order one of each type of image at once. " + productName + " is already in the cart, You can add the details later in the shopping cart.")
        break
      }
      i += 1
    }

    if (addToCart) {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item);
    } 
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty();

    setCart(cart);
  }

  const refreshCart = async() => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
      setCookie("preferations", JSON.stringify([]))


    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    console.log("Cart:", cart)
  }, [cart])
  
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchCart();
  }, []);


  /*useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = windowSize.innerHeight + 40;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } 
  };

  console.log(isVisible);

  function CorrectPath() {
    const pathName = window.location.pathname;
    const correctPathName = (pathName === "/");
    return correctPathName;
  };

  const width = window.screen.width;

  const TopPart = () => (isVisible && CorrectPath() ? (
    <>
      <OpenScreen windowSize={windowSize.innerWidth}/>
    </>
    ) : (
    <>
      <Navbar totalItems={cart.total_items}/>
    </>
  ))*/

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  function getWindowSize() {
    const innerHeight = window;
    return innerHeight;
  }



  //React,Fragment could be changed to the <> tag so it wouldn't  render a div.

  return (
    <React.Fragment> 
    <>
      <FullSizeNavbar totalItems={cart.total_items}/>
      <Routes>
        <Route index path="/" element={ categories.length !== 0 ? <CategoriesFrontPage categories={categories}/> : <section style={{textAlign: "center", margin: "15vh"}}><CircularProgress style={{width: "calc(3vw + 40px)", marginBottom: "5vh"}}/><br/><h3 style={{color: "#999999"}}>Content is loading...</h3></section>}/>
        <Route path="/creator/:id" element={<CategoryPage onAddToCart={handleAddToCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty}
         handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} addToPreferationsList={addToPreferationsList}
         preferations={preferations}/>}/>
        <Route path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>}/>
     </Routes>
     <Footer/>
    </>
    </React.Fragment>
  )
};

export default ShopLayoutRoutes;