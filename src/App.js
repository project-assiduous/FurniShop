import Navbar from './components/Navbar'
import Aboutus from './pages/Aboutus';
import Footer from './pages/Footer';
import Hotdeals from './pages/Hotdeals';
import Main from './pages/Main';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Hotdeals />
      <Aboutus />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
