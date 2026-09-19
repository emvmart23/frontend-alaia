import { Link, useNavigate } from "react-router";
import { Button, Input, InputPassword } from "../../../../components/ui";
import styles from "../../Auth.module.css";
import { ArrowLeftIcon, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "../../../../lib/validators/auth";
import type z from "zod";
import { useState } from "react";
import api from "../../../../services/api";
import { setCredentials } from "../../../../store/slices/auth";
import { useAppDispatch } from "../../../../store/store";

type RegistrationData = z.infer<typeof SignInSchema>;

export default function SignIn() {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegistrationData) => {
    setIsPending(true);

    try {
      const response = await api.post("/auth/sign-in", data);
      const { accessToken } = response.data;

      if (!accessToken) {
        console.error(
          "No se recibió accessToken en la respuesta",
          response.data,
        );
        return;
      }

      dispatch(setCredentials({ accessToken }));
      navigate("/auth/sign-in");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.backLink} aria-label="Volver al inicio">
          <ArrowLeftIcon size={20} />
        </Link>
        <h2>Iniciar sesion</h2>
      </div>
      <p>Inicia sesión usando tu correo y contraseña</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formField}>
          <label>Correo electrónico</label>
          <Input
            type="email"
            autoComplete="email"
            {...register("email")}
            placeholder="Tu correo electrónico"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email?.message}</p>
          )}
        </div>

        <div className={styles.formField}>
          <label>Contraseña</label>
          <InputPassword
            {...register("password")}
            placeholder="Tu contraseña"
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
          <Link to="/auth/forgot-password" className={styles.links}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button type="submit" className={styles.submitButton}>
          {isPending ? <LoaderCircle /> : "Iniciar sesión"}
        </Button>

        <p>
          ¿No tienes cuenta?{" "}
          <Link to="/auth/sign-up" className={styles.links}>
            Crear cuenta
          </Link>
        </p>
      </form>
    </div>
  );
}
