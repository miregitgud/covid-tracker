import styles from "./Footer.module.css";

const footer = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.footer}>
          <div>
            <h2 className={styles.footer__title}>Covid ID</h2>
            <p className={styles.footer__author}>Developed by miregitgud</p>
          </div>
          <div>
            <ul className={styles.footer__list}>
              <li className={styles.footer__item}>Global</li>
              <li className={styles.footer__item}>Indonesia</li>
              <li className={styles.footer__item}>Provinsi</li>
              <li className={styles.footer__item}>About</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default footer;
