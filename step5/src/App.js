import DashBoard from './components/dashBoard.js';
import DataContextProvider from "./data/dataContext";

function App() {
  return (
    <div>
      <DataContextProvider>
        <DashBoard/>
      </DataContextProvider>
    </div>
  );
}

export default App;
