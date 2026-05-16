import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <h1>🎬 CineClássicos</h1>
      </div>
      <div className={styles.navLinks}>
        <span>📽️ Clássicos do Cinema (1960-1990)</span>
      </div>
    </nav>
  );
};

export default Menu;