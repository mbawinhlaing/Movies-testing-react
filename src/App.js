import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import Detail from './components/Detail.jsx'
function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies/detail/:id" element={<Detail/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
