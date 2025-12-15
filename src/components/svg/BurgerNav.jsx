export const BurgerNav = ({ fillcolor = "none", className = "w-6 h-6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillcolor}
      viewBox="0 0 24 24" // Usamos viewBox estándar para escalar mejor con Tailwind
      strokeWidth={1.5} // camelCase
      stroke="currentColor"
      className={className} // Permite pasar clases de Tailwind desde el padre
    >
      <path
        strokeLinecap="round" // camelCase
        strokeLinejoin="round" // camelCase
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
