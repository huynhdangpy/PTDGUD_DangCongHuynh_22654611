import Header from './components/header'
import Sidebar from './components/sidebar'
import Overview from "./components/Overview";
import DetailedReport from "./components/DetailedReport";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Overview />
        <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <DetailedReport />
      </div>
    </div>
      </div>
    </div>
  );
}
export default App
