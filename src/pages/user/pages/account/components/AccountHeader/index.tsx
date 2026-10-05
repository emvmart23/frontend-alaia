import { Plus } from "lucide-react";
import styles from "./AccountHeader.module.css";
import { Button } from "@/components/ui";
import type { ChangeEvent } from "react";

interface Props {
  formData: User;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function AccountHeader({ formData, handleImageChange }: Props) {
  return (
    <div className={styles.avatarContainer}>
      <img
        src={formData.profilePicture}
        alt="Max Martinez"
        className={styles.avatar}
      />

      <label
        htmlFor="profilePictureInput"
        className={styles.changeImage}
        title="Cambiar foto de perfil"
      >
        <Plus width={17} height={17} /> Cambiar imagen
      </label>

      <input
        id="profilePictureInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.hiddenFileInput}
      />
      <Button className={styles.removeImage}>Remover imagen</Button>
    </div>
  );
}
