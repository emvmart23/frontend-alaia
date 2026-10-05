import { navRoutes } from "./navRoutes";
import styles from "./Navbar.module.css";
import { Logo } from "../../icons/logo";
import SearchInput from "../SearchInput";
import NavActions from "./NavActions";
import NavItems from "./navItems";
import { Menu } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen, "isMenuOpen")

  return (
    <header className={styles.header}>
      <section className={styles.announcemmentBar}>
        <p className={styles.announcemmentTitle}>Ahorra un 20% con conjuntos apilables. Compra ahora.</p>
      </section>
      <nav className={styles.nav}>
        <Menu className={clsx(styles.menu, isMenuOpen && styles.openMenu)} onClick={() => setIsMenuOpen(true)} />
        <Logo />
        <div className={styles.links}>
          <NavItems links={navRoutes} />
        </div>
        <div className={styles.actions}>
          <SearchInput />
          <NavActions />
        </div>
      </nav>
    </header>
  );
}
