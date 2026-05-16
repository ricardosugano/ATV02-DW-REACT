import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>🎬 CineClássicos - Atividade 02</p>
        <p>Desenvolvimento Web III - Fatec Registro</p>
        <p>© 2024 - Consumo de API TMDb</p>
      </div>
    </footer>
  );
};

export default Footer;