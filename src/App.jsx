import { Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/organism/Header/Header";
import Footer from "./components/organism/Footer";
import CustomThemeProvider from "./context/CustomThemeProvider";


function App() {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Conditionally render the Header and Footer based on the location
  // NavBar and Footer will not be rendered at account page
  const showHeader = location.pathname !== "/account"; // Example condition
  const showFooter = location.pathname !== "/account"; // Example condition

  return (
    <>
      <CustomThemeProvider>
        <CartProvider>
          {showHeader && <Header />}
          <main>
            <Outlet />
          </main>
          {showFooter && <Footer />}
        </CartProvider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
