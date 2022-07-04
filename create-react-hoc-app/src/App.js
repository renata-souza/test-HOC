import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Signatures from "./components/Signatures";
import Users from "./components/Users";
import Groups from "./components/Groups";

export default function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Signatures />} />
          <Route path="/users" element={<Users />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </main>
    </div>
    </Router>
  )
}
