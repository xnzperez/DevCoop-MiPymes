import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { InputForm } from "../../components/ui";
import { Button } from "../../components/ui/Button";
import { ShoppingCartContext } from "../../context";

export const SignIn = () => {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("login"); // 'login' | 'sign-up'
  const [hasError, setHasError] = useState(false);

  // --- FORMULARIO DE REGISTRO ---
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // --- FORMULARIO DE LOGIN ---
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  const isUserAuthenticated = !context.signOut;

  if (isUserAuthenticated) {
    return <Navigate replace to={"/"} />;
  }

  // Lógica: Registrar
  const onRegister = (data) => {
    localStorage.setItem("account", JSON.stringify(data));
    context.setAccount(data);
    localStorage.setItem("sign-out", JSON.stringify(false));
    context.setSignOut(false);
  };

  // Lógica: Loguear
  const onLogin = (data) => {
    const accountStored = localStorage.getItem("account");
    if (!accountStored) {
      setHasError(true);
      return;
    }
    const accountParsed = JSON.parse(accountStored);
    if (
      data.email === accountParsed.email &&
      data.password === accountParsed.password
    ) {
      localStorage.setItem("sign-out", JSON.stringify(false));
      context.setSignOut(false);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  // --- VISTA REGISTRO ---
  const renderRegister = () => (
    <div className="flex flex-col gap-6 w-80">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Crea tu cuenta</h2>
        <p className="text-zinc-400 text-sm mt-2">Únete a Dev Coop hoy</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onRegister)}>
        <div>
          <InputForm
            label="Nombre"
            type="text"
            placeholder="Tu nombre completo"
            className="w-full bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:ring-white focus:border-white"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && (
            <span className="text-red-400 text-xs mt-1 block">
              {errors.name.message}
            </span>
          )}
        </div>

        <div>
          <InputForm
            label="E-mail"
            type="email"
            placeholder="correo@ejemplo.com"
            className="w-full bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            })}
          />
          {errors.email && (
            <span className="text-red-400 text-xs mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
          <InputForm
            label="Contraseña"
            type="password"
            placeholder="Mínimo 8 caracteres"
            className="w-full bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 8, message: "Mínimo 8 caracteres" },
              pattern: {
                // Regex fuerte: Minúscula, Mayúscula, Número, Especial
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message:
                  "Requiere mayúscula, minúscula, número y símbolo (!@#$)",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-400 text-xs mt-1 block">
              {errors.password.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-3 mt-2 rounded-xl transition-colors"
        >
          Registrarme
        </Button>
      </form>

      <p className="text-center text-sm text-zinc-400">
        ¿Ya tienes cuenta?{" "}
        <span
          className="text-white font-bold cursor-pointer hover:underline"
          onClick={() => setView("login")}
        >
          Inicia Sesión
        </span>
      </p>
    </div>
  );

  // --- VISTA LOGIN ---
  const renderLogin = () => (
    <div className="flex flex-col gap-6 w-80">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Bienvenido de nuevo</h2>
        <p className="text-zinc-400 text-sm mt-2">Ingresa tus credenciales</p>
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmitLogin(onLogin)}
      >
        <div>
          <InputForm
            label="E-mail"
            type="email"
            placeholder="correo@ejemplo.com"
            className="w-full bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
            {...registerLogin("email", { required: "El email es requerido" })}
          />
          {errorsLogin.email && (
            <span className="text-red-400 text-xs mt-1 block">
              {errorsLogin.email.message}
            </span>
          )}
        </div>

        <div>
          <InputForm
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            className="w-full bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
            {...registerLogin("password", {
              required: "La contraseña es requerida",
            })}
          />
          {errorsLogin.password && (
            <span className="text-red-400 text-xs mt-1 block">
              {errorsLogin.password.message}
            </span>
          )}
        </div>

        {hasError && (
          <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-xs text-center">
            Credenciales incorrectas o cuenta no encontrada.
          </div>
        )}

        <div className="text-right">
          <span className="text-xs text-zinc-400 hover:text-white cursor-pointer transition-colors">
            ¿Olvidaste tu contraseña?
          </span>
        </div>

        <Button
          type="submit"
          className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-3 rounded-xl transition-colors"
        >
          Ingresar
        </Button>
      </form>

      <p className="text-center text-sm text-zinc-400">
        ¿No tienes cuenta?{" "}
        <span
          className="text-white font-bold cursor-pointer hover:underline"
          onClick={() => setView("sign-up")}
        >
          Regístrate
        </span>
      </p>
    </div>
  );

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh] w-full animate-fade-in">
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
          {view === "sign-up" ? renderRegister() : renderLogin()}
        </div>
      </div>
    </Layout>
  );
};
