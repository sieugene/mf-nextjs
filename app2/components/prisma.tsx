import Image from "next/image";
import styles from "../styles/Prisma.module.css";

const Prisma = () => {
  return (
    <main className={styles.main}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/31/Prism-1.png"
        alt="Luigi"
        width={546}
        height={538}
      />
      <h1 className={styles.title}>I'm prisma from app2.</h1>
      <span>
        I'm hosted at{" "}
        <a target="_blank" href="none">
          none
        </a>
      </span>
    </main>
  );
};

export default Prisma;
