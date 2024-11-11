import { ShoppingCartProvider } from "../../context";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../routes";
import "../../App.css";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";
import { initializeLocalStorage } from "../../utils/localStorageUtils";
import { Header } from "../../components/Header/Header";
import "../../components/Footer/Footer.jsx";
import Footer from "../../components/Footer/Footer.jsx";



export const App = () => {
  initializeLocalStorage();
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <CheckoutSideMenu/>
      </BrowserRouter>
      <Footer />
    </ShoppingCartProvider>
  );
};