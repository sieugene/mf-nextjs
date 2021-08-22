import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/cube">Load Cube</Link>
    <Link href="/">Home</Link>
    <Link href="/prisma">Load Prisma</Link>
  </div>
);

export default Nav;
