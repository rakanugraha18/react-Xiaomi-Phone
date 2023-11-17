import { Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "./context/cartProvider";
import Footer from "./components/organism/Footer";
import NavBar from "./components/organism/NavBar";
import CustomThemeProvider from "./context/CustomThemeProvider";

function App() {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Conditionally render the Header and Footer based on the location
  // NavBar and Footer will not be rendered at account page
  const showNavBar = location.pathname !== "/account"; // Example condition
  const showFooter = location.pathname !== "/account"; // Example condition

  return (
    <>
      <CustomThemeProvider>
        <CartProvider>
          {showNavBar && <NavBar />}
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
