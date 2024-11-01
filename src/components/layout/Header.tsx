import styles from './Header.module.css';
import logo from '../../../public/logo.png';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo.src} alt="ConnectEd Logo" />
        {/* <span>ConnectEd</span> */}
      </div>
      <div className={styles.title}>Student Portal</div>
      <div className={styles.userInfo}>
        <span>Hello, Gabrisa!</span>
        <small>Class 7, Math + Science</small>
      </div>
    </header>
  );
}
