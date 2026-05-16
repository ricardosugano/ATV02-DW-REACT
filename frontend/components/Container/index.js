import styles from './Container.module.css';

const Container = ({ children }) => {
  return (
    <div className={styles.containerCover}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Container;