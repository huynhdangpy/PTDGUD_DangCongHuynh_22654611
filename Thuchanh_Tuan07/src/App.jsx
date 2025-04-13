import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Teams from "./pages/teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/projects";
function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="min-h-screen bg-gray-50 font-sans">
          <div className="max-w-7xl mx-auto py-10 px-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />{" "}
              <Route path="/teams" element={<Teams />} />{" "}
              <Route path="/analytics" element={<Analytics />} />{" "}
              <Route path="/projects" element={<Projects />} />{" "}
              <Route path="/messages" element={<Messages />} />{" "}
              <Route path="/integrations" element={<Integrations />} />{" "}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
