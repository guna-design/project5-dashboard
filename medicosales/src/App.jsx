import "./App.css";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div className="flex-1 w-50 flex-wrap">
        <Dashboard />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
