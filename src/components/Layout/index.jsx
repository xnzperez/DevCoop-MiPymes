export const Layout = ({ children }) => {
  return (
    // mt-20: Suficiente para bajar el contenido debajo del Navbar, pero no tanto como mt-32
    <div className="flex flex-col items-center mt-20 w-full min-h-screen bg-zinc-950 text-white">
      <div className="w-full max-w-screen-xl px-4 md:px-8 py-6">{children}</div>
    </div>
  );
};
