import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./Select.module.css";
import { ChevronDown } from "lucide-react";

interface SelectProps extends ComponentProps<"select"> {
  options: Array<{ value: string; label: string }>;
}

export default function Select({ options, className, ...props }: SelectProps) {
  return (
    <div className={styles.containerSelect}>
      <select className={clsx(styles.select, className)} {...props}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown size={19} className={styles.icon} />
    </div>
  );
}
