import "../../App.css";
import { useForm } from "react-hook-form";
import { Layout } from "../../components/Layout";
import { InputForm } from "../../components/ui";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { Button } from "../../components/ui/Button";

export const MyAccount = () => {
  const context = useContext(ShoppingCartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUnregister: true,
  });

  const accountData = JSON.parse(localStorage.getItem("account")) || {};

  const onSubmit = (data) => {
    localStorage.setItem("account", JSON.stringify(data));
    context.setAccount(data);
    alert("Datos actualizados correctamente");
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh] w-full animate-fade-in">
        {/* Contenedor Principal: Fondo Oscuro (zinc-950) y Borde sutil */}
        <div className="flex flex-col justify-center px-8 py-10 w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-8 text-center">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-white">
              Edita tu cuenta personal
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Mantén tus datos actualizados
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* NOMBRE */}
            <div>
              <InputForm
                label="Nombre"
                type="text"
                id="name"
                defaultValue={accountData.name}
                // !bg-zinc-900 y !text-white fuerzan el modo oscuro
                className="!bg-zinc-900 !text-white !border-zinc-700 focus:!ring-white"
                placeholder="Tu nombre completo"
                {...register("name", { required: "El nombre es obligatorio" })}
              />
              {errors?.name && (
                <span className="text-red-400 text-xs mt-1 block">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <InputForm
                label="E-mail"
                type="email"
                id="email"
                defaultValue={accountData.email}
                className="!bg-zinc-900 !text-white !border-zinc-700 focus:!ring-white"
                placeholder="correo@ejemplo.com"
                {...register("email", { required: "Se requiere un e-mail" })}
              />
              {errors?.email && (
                <span className="text-red-400 text-xs mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* CONTRASEÑA */}
            <div>
              <InputForm
                label="Contraseña"
                type="password"
                id="password"
                defaultValue={accountData.password}
                className="!bg-zinc-900 !text-white !border-zinc-700 focus:!ring-white"
                placeholder="••••••••"
                {...register("password", {
                  required: "Se requiere una contraseña",
                  minLength: { value: 8, message: "Mínimo 8 caracteres" },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                    message:
                      "Requiere mayúscula, minúscula, número y símbolo (!@#$)",
                  },
                })}
              />
              {errors?.password && (
                <span className="text-red-400 text-xs mt-1 block">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="pt-4">
              {/* Botón: Fondo Blanco (!bg-white) y Texto Negro (!text-black) */}
              <Button
                type="submit"
                className="w-full !bg-white !text-black hover:!bg-zinc-200 font-bold py-3 rounded-xl transition-colors"
              >
                Guardar Cambios
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
