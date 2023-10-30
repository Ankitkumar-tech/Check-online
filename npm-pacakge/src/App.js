import logo from "./logo.svg";
import "./App.css";
import useOnline from "./Utils/useOnline";
function App() {
  const check_Online = useOnline();
  return (
    <div className="App">
      {check_Online ? <h1>You are offline</h1> : <h1>You are online</h1>}
    </div>
  );
}

export default App;
