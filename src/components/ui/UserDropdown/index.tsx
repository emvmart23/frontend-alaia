import { useState, type FocusEvent } from "react";
import styles from "./UserDropdown.module.css";
import { UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router";
import api from "../../../services/api";
import { useAppDispatch } from "../../../store/store";
import { logout } from "../../../store/slices/auth";
import { toast } from "sonner";
import Divider from "../Divider";
import Button from "../Button";

interface DropdownItem {
  label: string;
  path: string;
}

export default function UserDropdown({
  token,
  items = [],
  onSelect,
}: {
  token: string;
  items?: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const isTokenExist = !!token;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await api.post("/auth/logout");
      console.log("Logout response:", response.data);
      dispatch(logout());
      setIsOpen(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      toast.error("Error al cerrar sesión");
      setIsOpen(false);
    }
  };

  const handleAuthRedirect = () => {
    setIsOpen(false);
    navigate("/auth/sign-in");
  };

  return (
    <div className={styles.container} onBlur={handleBlur} tabIndex={0}>
      <div className={styles.buttonWrapper}>
        <UserRound className={styles.icon} onClick={toggleDropdown} />
      </div>

      {isOpen && (
        <div className={styles.menu}>
          {isTokenExist ? (
            <>
              <div className={styles.menuGroup}>
                {items.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    onClick={() => handleSelect(item)}
                    className={styles.itemButton}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Divider />
              <button onClick={handleLogout} className={styles.itemButton}>
                Cerrar sesion
              </button>
            </>
          ) : (
              <Button onClick={handleAuthRedirect} className={styles.authButton}>
                Iniciar sesión | Registrarse
              </Button>
          )}
        </div>
      )}
    </div>
  );
}
