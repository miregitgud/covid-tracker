import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
