import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Tutorials from '@/pages/Tutorials';
import TutorialDetail from '@/pages/TutorialDetail';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/tutorials/:id" element={<TutorialDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
