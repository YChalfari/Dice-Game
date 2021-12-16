import "./App.css";
import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <div className="App">
      <header>
        <h2>Try your luck!</h2>
        <h2>Play head to head against your friend or the AI</h2>
      </header>
      <GameBoard />
    </div>
  );
};

export default App;
