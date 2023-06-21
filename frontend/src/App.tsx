import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import RouterApp from "./routes/public";

function App() {
  return (
    <div>
      <Header />
      <RouterApp />
      <Footer />
    </div>
  );
}

export default App;
