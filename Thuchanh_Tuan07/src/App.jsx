import Header from './components/header'
import Sidebar from './components/sidebar'

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold">Main Content Here</h2>
        </main>
      </div>
    </div>
  )
}

export default App
