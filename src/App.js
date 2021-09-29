import Products from './components/Products'
import Categories from './components/Categories'
import Headers from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
function App(props) {
  return (
    <>
          <Headers/>
          <Categories/>
          <Cart/>
          <Products/>
          <Footer/>
    </>
  );
}
export default App;