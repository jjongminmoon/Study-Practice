import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Issue from './pages/Issue';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
      </Routes>
    </>
  );
}

export default App;
