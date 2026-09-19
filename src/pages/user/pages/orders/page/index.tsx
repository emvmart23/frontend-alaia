import { useState } from "react";
import {
  CustomDatePicker,
  Divider,
  Select,
} from "../../../../../components/ui";
import OrderCard from "../components/OrderCard";
import styles from "./Orders.module.css";

const options = [
  {
    label: "Pendiente",
    value: "Pendiente",
  },
  {
    label: "En proceso",
    value: "En proceso",
  },
];

export default function Orders() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <section className={styles.section}>
      <h2>Mis pedidos</h2>
      <Divider />
      <div className={styles.containerFilters}>
        <Select options={options} />
        <CustomDatePicker 
          value={date}
          onChange={(update: Date | null) => {
            setDate(update);
          }}
        />
      </div>
      <OrderCard />
    </section>
  );
}
