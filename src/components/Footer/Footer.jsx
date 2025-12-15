import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-12 pb-8 mt-auto w-full">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Dev Coop</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Tu tienda de confianza para ropa, tecnología y más. Calidad y
              estilo en un solo lugar.
            </p>
          </div>

          {/* Columna 2: Ubicación */}
          <div>
            <span className="text-xs uppercase tracking-wide text-zinc-400 font-bold block mb-4">
              CONTÁCTANOS
            </span>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 flex items-center gap-2">
                <span>📍</span>
                <span className="text-zinc-400">Montería, Córdoba</span>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span>✉️</span>
                <a
                  href="mailto:carlospzk31@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  carlospzk31@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces */}
          <div>
            <span className="text-xs uppercase tracking-wide text-zinc-400 font-bold block mb-4">
              LINKS RÁPIDOS
            </span>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <NavLink
                  to="/clothes"
                  className="hover:text-white transition-colors"
                >
                  Ropa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/electronics"
                  className="hover:text-white transition-colors"
                >
                  Electrónica
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400 text-center md:text-left">
            © 2024 Dev Coop. Desarrollado por Carlos Pérez.
          </p>
        </div>
      </div>
    </footer>
  );
};

// ESTA LÍNEA ES LA QUE FALTABA PARA CORREGIR EL ERROR
export default Footer;
