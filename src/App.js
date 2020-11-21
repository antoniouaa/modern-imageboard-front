import "./App.css";

import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Footer />
      </header>
    </div>
  );
}
