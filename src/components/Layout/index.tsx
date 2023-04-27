import Footer from "../Footer";
import Header from "../Header";
import styles from "./styles.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.Layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
