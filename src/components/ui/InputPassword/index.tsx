import { useState, type ComponentProps } from "react";
import Button from "../Button";
import Input from "../Input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import styles from "./InputPassword.module.css";
import clsx from "clsx";

type InputProps =  ComponentProps<"input">;

export default function InputPassword({
  className,
  placeholder = "contraseña",
  disabled,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <Input
        id="password"
        className={clsx(className)}
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      <Button
        type="button"
        className={styles.button}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOffIcon className={styles.icon} /> : <EyeIcon className={styles.icon} />}
      </Button>
    </div>
  );
}