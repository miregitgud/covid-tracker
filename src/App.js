import Home from "./pages/Home";
import About from "./pages/About";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./utils/constants/Theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Provinsi" element={<Provinsi />}></Route>
            <Route path="/Indonesia" element={<Indonesia />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
