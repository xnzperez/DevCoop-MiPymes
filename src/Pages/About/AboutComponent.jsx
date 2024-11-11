import React from 'react';

const AboutComponent = () => {
  return (
    <section className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sección "Acerca de Nosotros" */}
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="About Us"
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time datetime="2022-10-10" className="block text-xs text-white/90">12th Nov 2024</time>
              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Acerca de Nosotros: Dev Coop</h3>
              </a>
              <p className="mt-2 line-clamp-3 text-sm text-white/95">
              Dev Coop es un equipo de trabajo formado por dos estudiantes universitarios, actualmente en formación como Ingenieros de Sistemas y apasionados por el desarrollo de software. Como parte de nuestra experiencia académica y profesional, hemos desarrollado este prototipo de tienda en línea con el objetivo de demostrar cómo las MiPymes pueden aprovechar las herramientas tecnológicas para mejorar sus operaciones, expandir su presencia digital y aumentar sus ventas.
              </p>
            </div>
          </div>
        </article>

        {/* Descripción de la tienda */}
        {/* Descripción de la tienda */}
<div className="flex flex-col justify-center">
  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
    ¿Quiénes somos?
  </h2>
  <p className="mt-4 text-gray-600 sm:text-lg">
    Somos un equipo de emprendedores apasionados por la tecnología y el desarrollo de soluciones innovadoras. <strong>Dev Coop</strong> es un proyecto nacido de la colaboración entre dos estudiantes universitarios, actualmente en formación como Ingenieros de Sistemas, con el propósito de crear soluciones que faciliten el acceso de las MiPymes al mundo digital.
  </p>
  <p className="mt-4 text-gray-600 sm:text-lg">
    Nos especializamos en el desarrollo de plataformas tecnológicas que potencian la operatividad, visibilidad y crecimiento de pequeños y medianos negocios. Nuestra misión es ofrecer productos de software que no solo sean eficientes, sino también accesibles, fáciles de implementar y diseñados pensando en las necesidades reales de nuestros clientes.
  </p>

</div>

      </div>

      {/* Sección "Conoce a Nuestro Equipo" */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
          Conoce a Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {/* Miembro del equipo 1 */}
          <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 hover:border-pink-600 transition duration-300 ease-in-out">
            <div className="flex items-center gap-4">
              <img
                alt="Carlos Pérez"
                src="https://via.placeholder.com/150" // Reemplazar con la foto de Carlos Pérez
                className="size-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-white">Carlos Pérez</h3>
                <div className="flow-root">
                  <ul className="-m-1 flex flex-wrap">
                    <li className="p-1 leading-none">
                      <a href="https://www.linkedin.com/in/xnzperez/" className="text-xs font-medium text-gray-300"> LinkedIn </a>
                    </li>
                    <li className="p-1 leading-none">
                      <a href="https://github.com/xnzperez" className="text-xs font-medium text-gray-300"> GitHub </a>
                    </li>
                    <li className="p-1 leading-none">
                      <a href="https://wa.me/573188548571" className="text-xs font-medium text-gray-300"> WhatsApp </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                  <strong className="font-medium text-white">Desarrollador Full Stack - Infraestructura en la Nube</strong>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Especialesta en desarrollo Frontend, Backend y encargado de gestionar y optimizar la infraestructura en la nube.
                  </p>
                </a>
              </li>
            </ul>
          </article>

          {/* Miembro del equipo 2 */}
          <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 hover:border-pink-600 transition duration-300 ease-in-out">
            <div className="flex items-center gap-4">
              <img
                alt="Juan Ramos"
                src="https://via.placeholder.com/150" // Reemplazar con la foto de Juan Ramos
                className="size-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-white">Juan Ramos</h3>
                <div className="flow-root">
                  <ul className="-m-1 flex flex-wrap">
                    <li className="p-1 leading-none">
                      <a href="https://linkedin.com/in/juan-ramos" className="text-xs font-medium text-gray-300"> LinkedIn </a>
                    </li>
                    <li className="p-1 leading-none">
                      <a href="https://github.com/juan-ramos" className="text-xs font-medium text-gray-300"> GitHub </a>
                    </li>
                    <li className="p-1 leading-none">
                      <a href="https://wa.me/573122174990" className="text-xs font-medium text-gray-300"> WhatsApp </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                  <strong className="font-medium text-white">Desarrollador Full Stack</strong>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Especialista en desarrollo Frontend y Backend, creando plataformas interactivas y eficientes.
                  </p>
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
