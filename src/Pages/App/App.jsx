import { ShoppingCartProvider } from "../../context";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRoutes } from "../../routes";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/Layout";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";
import Footer from "../../components/Footer/Footer.jsx";
import { initializeLocalStorage } from "../../utils/localStorageUtils";
import "../../App.css";

// Inicializamos LocalStorage
initializeLocalStorage();

/**
 * Componente "Wrapper" que decide si mostrar el Footer o no.
 * Recomendación: Usar "Lista Negra" (Ocultar solo en sitios específicos).
 */
const FooterWrapper = () => {
  const location = useLocation();

  // 🚫 RUTAS DONDE EL FOOTER NO SE MOSTRARÁ
  const excludedRoutes = [
    "/sign-in", // Login/Registro: Para enfocar en el formulario
    "/my-account", // Dashboard: Para mantener la interfaz limpia
  ];

  // Si la ruta actual está en la lista de excluidos, no renderizamos nada.
  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }

  // En cualquier otro caso, mostramos el Footer
  return <Footer />;
};

export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        {/* 1. Navbar Fijo */}
        <Navbar />

        {/* 2. Contenido Principal */}
        {/* El Layout maneja el margen superior y el ancho del contenido */}
        <Layout>
          <AppRoutes />
        </Layout>

        {/* 3. Footer Condicional */}
        {/* Está FUERA del Layout para que su fondo negro ocupe el 100% del ancho */}
        <FooterWrapper />

        {/* 4. Menú Lateral (Siempre disponible) */}
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};
