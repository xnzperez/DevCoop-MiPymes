import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { CardUI } from "../../components/CardProduct/CardUI";
import { ProductDetail } from "../../components/ProductDetail";
import { InputForm } from "../../components/ui";
import { ShoppingCartContext } from "../../context";

export const Home = () => {
  const context = useContext(ShoppingCartContext);
  const { category } = useParams();

  // Función para abrir el detalle (memorizada no es vital aquí, pero buena práctica)
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  // ⚡ OPTIMIZACIÓN CLAVE: useMemo
  // Solo recalculamos 'itemsToRender' si cambia el 'category', el 'filterItem' o el 'search'
  const itemsToRender = useMemo(() => {
    // 1. Si está cargando, retornamos null o indicador
    if (context.loading) return null;

    // 2. Obtenemos la base de productos (filtrados por texto desde el Context)
    let items = context.filterItem || [];

    // 3. Si hay una categoría en la URL, filtramos adicionalmente
    if (category) {
      items = items.filter((item) =>
        item.category.name.toLowerCase().includes(category.toLowerCase())
      );
    }

    return items;
  }, [context.filterItem, category, context.loading]);

  // Renderizado condicional limpio
  const renderContent = () => {
    if (context.loading) {
      return (
        <div className="col-span-3 text-center">Cargando productos...</div>
      );
    }

    if (!itemsToRender || itemsToRender.length === 0) {
      return (
        <div className="col-span-3 text-center">
          No hay productos que coincidan :(
        </div>
      );
    }

    return itemsToRender.map((item) => (
      <CardUI
        key={item.id}
        id={item.id}
        item={item} // Pasamos el item completo
        title={item.title}
        images={item.images[0]}
        category={item.category.name}
        price={item.price}
        showProduct={showProduct}
        // No es necesario pasar 'context' a CardUI si CardUI no lo usa internamente para otra cosa
      />
    ));
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="font-medium text-xl">Home</h1>
        <InputForm
          type="search"
          placeholder="Buscar Producto"
          className="rounded-3xl w-72 md:w-96 h-10 text-center border border-slate-600 focus:outline-none focus:border-black transition-colors"
          onChange={(e) => context.setSearch(e.target.value)}
          value={context.search} // Usamos 'search' directo para feedback visual inmediato (el debounce actúa en el filtro)
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {renderContent()}
      </div>

      <ProductDetail />
    </Layout>
  );
};
