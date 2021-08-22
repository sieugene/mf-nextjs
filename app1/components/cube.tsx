import Image from "next/image";
import styles from "../styles/Cube.module.css";

const Cube = () => {
  return (
    <main className={styles.main}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hexahedron.svg/548px-Hexahedron.svg.png"
        alt="cube"
        width={548}
        height={609}
      />
      <h1 className={styles.title}>Cube from app1</h1>
      <span>
        I'm hosted at{" "}
        <a target="_blank" href="">
          none
        </a>
      </span>
    </main>
  );
};

export default Cube;
