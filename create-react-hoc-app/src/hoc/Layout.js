import styles from "./Layout.module.css";

const Layout = (Component, title) => {
  return (props) => {
    return (
      <div className={styles.titled_container}>
        <span className={styles.title}>{title}</span>
        <div className={styles.titled_content}>
          <Component {...props} />
        </div>
      </div>
    );
  };
};
export default Layout;
