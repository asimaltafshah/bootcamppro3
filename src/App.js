import "./App.css";
import Dinner from "./dinner";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Dinner dishName="alu" sweetdishName="kheer" />
        <h1>Hello world</h1>
      </header>
    </div>
  );
}

export default App;
