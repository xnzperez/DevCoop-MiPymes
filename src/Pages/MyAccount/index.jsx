import "../../App.css";
import { useForm } from "react-hook-form";
import { Layout } from "../../components/Layout";
import { InputForm} from "../../components/ui";
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
  const date = JSON.parse(localStorage.getItem("account"));

  const onSubmit = (data) => {
    localStorage.setItem("account", JSON.stringify(data));
    context.setAccount(data);
  };

  return (
    <Layout>
      <div className="flex sm:mx-auto sm:w-80 sm:max-w-sm min-h-full flex-col justify-center px-10 py-10 lg:px-8 border-2 rounded-lg gap-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edita tu cuenta personal
          </h2>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-2">
            <InputForm
              label="Nombre"
              type="name"
              id="name"
              defaultValue={date.name}
              {...register("name", { required: "name is required" })}
              autoComplete="on"
              placeholder="insert to name"
              className = "w-full"
              required
            />
            {errors?.name?.message}
          </div>
          <div className="mt-2">
            <InputForm
              label="Email"
              type="email"
              id="email"
              defaultValue={date.email}
              {...register("email", { required: "Se requiere un e-mail" })}
              autoComplete="on"
              placeholder="Inserta un e-mail"
              className = "w-full"
              required
            />
            {errors?.email?.message}
          </div>
          <div className="mt-2">
            <InputForm
              label="Contraseña"
              type="password"
              id="password"
              defaultValue={date.password}
              {...register("password", {
                required: "Se requiere una contraseña",
              })}
              autoComplete="on"
              placeholder="Inserta una contraseña"
              className = "w-full"
            />
            {errors?.password?.message}
          </div>
          <div className="flex justify-center pt-4">
            <Button type="submit" className="justify-center">
              Editar
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
