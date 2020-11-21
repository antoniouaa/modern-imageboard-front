import "./App.css";

import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Body />
        <Footer />
      </header>
    </div>
  );
}
