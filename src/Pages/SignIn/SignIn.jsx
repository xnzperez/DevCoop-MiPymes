import { ref } from "../../components/ui/InputForm.jsx";
import { useForm } from "react-hook-form";
import { Layout } from "../../components/Layout/index.jsx";
import { InputForm} from "../../components/ui/index.js";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/index.jsx";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/ui/Button.jsx";

export const SignIn = () => {
  const context = useContext(ShoppingCartContext);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [view, setView] = useState("user-info");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const account = localStorage.getItem("account");

  const parsedAccount = JSON.stringify(account);

  const formValues = JSON.parse(account);

  const isAccountLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const isAccountLocalState = context.account
    ? Object.keys(account).length === 0 ||
      Object.keys(account).length === undefined
    : true;
  const isUserAccount = !isAccountLocalStorage || isAccountLocalState;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Navigate replace to={"/"} />;
  }

  const renderCreateUserInfo = () => {
    const onSubmit = (data) => {
      localStorage.setItem("account", JSON.stringify(data));
      context.setAccount(data);
      handleSignIn();
    };

    return (
      <div className="flex sm:mx-auto sm:w-80 sm:max-w-sm min-h-full flex-col justify-center px-10 py-10 lg:px-8 border-2 rounded-lg gap-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Bienvenido a Dev Coop
          </h2>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-2">
            <InputForm
              label="name"
              type="text"
              id="name"
              {...register("name")}
              placeholder="insert to name"
              className = "w-full"
              required
            />
            {errors?.name?.message}
          </div>

          <div className="mt-2">
            <InputForm
              label="email"
              type="text"
              id="email"
              {...register("email")}
              placeholder="insert to email"
              className = "w-full"
              required
            />
            {errors?.email?.message}
          </div>

          <div className="mt-2">
            <InputForm
              label="password"
              type="text"
              id="password"
              {...register("password")}
              placeholder="insert to password"
              className = "w-full"
              required
            />
            {errors?.password?.message}
          </div>

          <div className="pt-3">
            <Button type="submit" className="justify-center">
              Crear Cuenta
            </Button>
          </div>
        </form>
      </div>
    );
  };

  const renderLogin = () => {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-10 lg:px-8 md:border-2 lg:border-2 rounded-lg gap-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicia Sesión con tu Cuenta
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3">
            <div className="mt-2">
              <InputForm
                label="Email"
                type="email"
                id="email"
                ref={ref}
                defaultValue={formValues.email}
                // {...register("email", { required: "email is required" })}
                placeholder="Inserta tu email"
                className = "w-full"
              />
              {/* {errors?.email?.message} */}
            </div>
            <div className="mt-2">
              <InputForm
                label="Contraseña"
                type="password"
                id="password"
                ref={ref}
                defaultValue={formValues.password}
                // {...register("password", { required: "password is required" })}
                placeholder="Ingresa Contraseña"
                className = "w-full"
              />
              {/* {errors?.password?.message} */}
            </div>
            <div className="text-sm flex justify-end">
              <a className="font-semibold text-black hover:text-slate-400">
                ¿Olvidaste tú contraseña?
              </a>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => handleSignIn()}
                type="submit"
                disabled={!isUserAccount}
                className="justify-center"
              >
                Iniciar Sesión
              </Button>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            onClick={() => setView("create-user-info")}
            disabled={isUserAccount}
            className="justify-center"
          >
            Registrarse
          </Button>
        </div>

        
      </div>
      

      
    );
  };
  const renderView = () =>
    view === "create-user-info" ? renderCreateUserInfo() : renderLogin();
  return <Layout>{renderView()}</Layout>;
};
