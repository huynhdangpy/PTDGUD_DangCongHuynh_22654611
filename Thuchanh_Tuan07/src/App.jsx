import Header from './components/header'
import Sidebar from './components/sidebar'
import Overview from "./components/Overview";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Overview />
      </div>
    </div>
  );
}
export default App
