import React from "react";

const AboutComponent = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Sección "Acerca de Nosotros" - Imagen Hero */}
        <article className="relative overflow-hidden rounded-2xl shadow-xl transition hover:shadow-2xl border border-zinc-800 group">
          <img
            alt="About Us"
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="relative bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                dateTime="2024-11-12"
                className="block text-xs text-zinc-300"
              >
                12th Nov 2024
              </time>
              <h3 className="mt-0.5 text-2xl font-bold text-white">
                Acerca de Nosotros: Dev Coop
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-zinc-300">
                Dev Coop es un equipo de trabajo apasionado por el desarrollo de
                software. Hemos desarrollado este prototipo de tienda en línea
                con el objetivo de demostrar cómo las MiPymes pueden aprovechar
                las herramientas tecnológicas para expandir su presencia
                digital.
              </p>
            </div>
          </div>
        </article>

        {/* Descripción de la tienda */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              ¿Quiénes somos?
            </h2>
            <div className="h-1 w-20 bg-white mt-2 mb-4 rounded-full"></div>
          </div>

          <p className="text-zinc-400 sm:text-lg leading-relaxed">
            Somos emprendedores apasionados por la tecnología y el desarrollo de
            soluciones innovadoras.
            <strong> Dev Coop</strong> es un proyecto nacido con el propósito de
            crear soluciones que faciliten el acceso de las MiPymes al mundo
            digital.
          </p>
          <p className="text-zinc-400 sm:text-lg leading-relaxed">
            Nos especializamos en el desarrollo de plataformas tecnológicas que
            potencian la operatividad, visibilidad y crecimiento de pequeños y
            medianos negocios. Nuestra misión es ofrecer productos de software
            eficientes, accesibles y diseñados pensando en las necesidades
            reales.
          </p>
        </div>
      </div>

      {/* Sección "Conoce a Nuestro Equipo" */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-white sm:text-4xl text-center mb-10">
          Conoce a Nuestro Equipo
        </h2>

        {/* Contenedor Flex centrado (ya que es un solo miembro) */}
        <div className="flex justify-center">
          {/* Miembro Carlos Pérez */}
          <article className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 ease-in-out shadow-lg">
            <div className="flex flex-col items-center text-center">
              <img
                alt="Carlos Pérez"
                src="/photo-me.webp"
                className="size-20 rounded-full object-cover border-2 border-zinc-700 mb-4"
              />
              <div className="w-full">
                <h3 className="text-xl font-bold text-white">Carlos Pérez</h3>
                <div className="mt-2">
                  <ul className="flex flex-wrap justify-center gap-2">
                    <li className="leading-none">
                      <a
                        href="https://www.linkedin.com/in/xnzperez/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-zinc-400 hover:text-white hover:underline transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="leading-none text-zinc-600">•</li>
                    <li className="leading-none">
                      <a
                        href="https://github.com/xnzperez"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-zinc-400 hover:text-white hover:underline transition-colors"
                      >
                        GitHub
                      </a>
                    </li>
                    <li className="leading-none text-zinc-600">•</li>
                    <li className="leading-none">
                      <a
                        href="https://wa.me/573188548571"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-zinc-400 hover:text-white hover:underline transition-colors"
                      >
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="block h-full rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                <strong className="font-medium text-white flex items-center gap-2">
                  🚀 Desarrollador Full Stack
                </strong>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Infraestructura en la Nube. Especialista en desarrollo
                  Frontend y Backend, encargado de gestionar y optimizar la
                  infraestructura tecnológica para garantizar escalabilidad y
                  rendimiento.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
