import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Buyer from './pages/Buyer';
import Notification from './pages/Notification';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Dashboard />}>
                  <Route path="" element={<Buyer />} />
                  <Route path="chat" element={<Chat />} />
                  <Route path="notification" element={<Notification />} />
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
