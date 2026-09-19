import type { ChangeEvent } from "react";
import { Input } from "../../../../../../components/ui";
import CustomDatePicker from "../../../../../../components/ui/CustomDatePicker";
import styles from "./AccountForm.module.css";

interface Props {
  edit: boolean;
  formData: User;
  setFormData: (value: User | ((prev: User) => User)) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function AccountForm({
  edit,
  formData,
  setFormData,
  handleChange,
}: Props) {
  return (
    <form className={styles.formGrid}>
      <div className={styles.fieldGroup}>
        <label className={styles.label}>Nombre</label>
        <Input
          type="text"
          name="firstName"
          placeholder="Tu nombre"
          disabled={!edit}
          value={formData.firstName}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Apellido</label>
        <Input
          type="text"
          name="lastName"
          placeholder="Tu apellido"
          disabled={!edit}
          value={formData.lastName}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>DNI</label>
        <Input
          type="text"
          name="dni"
          placeholder="Tu DNI"
          disabled={!edit}
          value={formData.dni}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Fecha de nacimiento</label>
        <CustomDatePicker
          disabled={!edit}
          value={formData.birthDate}
          onChange={(update: Date | null) => {
            setFormData((prev) => ({
              ...prev,
              birthDate: update,
            }));
          }}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Email</label>
        <Input
          type="email"
          name="email"
          placeholder="Tu email"
          disabled={!edit}
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Genero</label>
        <select
          name="gender"
          value={formData.gender}
          disabled={!edit}
          onChange={handleChange}
          className={styles.select}
          required
        >
          <option value="" disabled hidden>
            Your First Name
          </option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Numero de telefono</label>
        <Input
          type="text"
          name="numberPhone"
          placeholder="Tu numero"
          disabled={!edit}
          value={formData.phoneNumber}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
    </form>
  );
}
