import Footer from "../../pages/layout/public/Footer";
import Header from "../../pages/layout/public/Header";

export default function LayoutHome({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
