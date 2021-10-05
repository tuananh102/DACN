import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home.js";
function App() {
  return (
    <Container fluid className="main">
        <Header />
        <Home />
        <Footer />
    </Container>
  );
}

export default App;
