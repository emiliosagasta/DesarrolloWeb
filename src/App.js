import "./App.css";
import Counter from "./Components/Counter/Counter";
import Header from "./Components/Header/Header";
import Work from "./Components/Works/Work";

function App() {
  return (
    <div className="App">
      <Header title="Header" />
      <Counter />
      <Work />
      {/* Cambia el estado del Componente */}
    </div>
  );
};

export default App;
