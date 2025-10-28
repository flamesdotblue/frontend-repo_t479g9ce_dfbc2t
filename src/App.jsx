import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Categories from './components/Categories';
import VideoGrid from './components/VideoGrid';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <div className="pt-16 flex">
        <Sidebar />
        <main className="flex-1">
          <Categories />
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
