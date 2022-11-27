import styles from './menu.module.scss';

const Menu = ({ toggle, children, active, setActive }) => {
  return (
    <div className={styles.menu}>
      {/* Toggle */}
      <div className={styles.menuToggle}>{toggle}</div>
      {/* Body */}
      {active && <div className={styles.menuBody}>{children}</div>}
    </div>
  );
};

export default Menu;
