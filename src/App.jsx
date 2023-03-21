import { BrowserRouter as Router } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import './app.css'

function App() {
  return (
    <Router>
      <div className='app_container'>
        <Sidebar />
        <Content />
      </div>
    </Router>
  )
}

export default App
