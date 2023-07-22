import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import LayoutPublic from './components/layout/LayoutPublic'
import NotFound from './components/pages/NotFound'
import Blog from './components/pages/Blog'
import BlogDetails from './components/pages/BlogDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LayoutPublic />}>
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />}  />
        </Route>
      </Routes>
    </>
  )
}

export default App