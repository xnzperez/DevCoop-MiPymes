import { createContext, useState, useEffect } from "react";
import { URLAPI } from "../utils/Api";
import axios from "axios";
import { useDebounce } from "../hooks";
import { initializeLocalStorage } from "../utils/localStorageUtils";

export const ShoppingCartContext = createContext();
initializeLocalStorage();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [account, setAccount] = useState({});
  const [signOut, setSignOut] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [data, setData] = useState([]);  // Aquí se almacenan todos los productos
  const [loading, setLoading] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterItem, setFilterItem] = useState([]);  // Lista filtrada de productos

  // `debouncedSearch` para optimizar la búsqueda, evitando múltiples solicitudes
  const debouncedSearch = useDebounce(search, 300);

  // Llamada a la API para obtener los productos (solo se realiza una vez)
  useEffect(() => {
    async function fetchAPI() {
      setLoading(true);
      try {
        const response = await axios.get(URLAPI);
        setData(response.data);  // Guardamos todos los productos en `data`
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchAPI();
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  // Filtrar productos según el término de búsqueda (debouncedSearch)
  useEffect(() => {
    if (debouncedSearch.length > 0) {
      const filteredData = data.filter((item) =>
        item.category.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase())  // Se puede buscar por título también
      );
      setFilterItem(filteredData);  // Actualizamos la lista filtrada
    } else {
      setFilterItem(data);  // Si no hay búsqueda, mostramos todos los productos
    }
  }, [debouncedSearch, data]);  // Este `useEffect` se ejecuta cada vez que `debouncedSearch` o `data` cambian

  const openProductDetail = () => setIsProductDetailOpen(true);
  const CloseProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        CloseProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        CloseCheckoutSideMenu,
        order,
        setOrder,
        data,
        loading,
        setData,
        search,
        setSearch,
        filterItem,  // Los productos filtrados se pasan a los hijos
        debouncedSearch,
        account,
        setAccount,
        signOut,
        setSignOut
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
