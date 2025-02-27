import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import { OverView } from './\blayouts/Overview';
import { About } from './\blayouts/About';
import { Projects } from './\blayouts/Projects';
import { Contacts } from './\blayouts/Contacts';

function App() {

  return (
    <Routes>
      <Route index path={""}   element={<Navigate to="/overview" replace />}></Route>
      <Route path={"overview"} element={<OverView />}></Route>
      <Route path={"about"}    element={<About />}></Route>
      <Route path={"projects"} element={<Projects />}></Route>
      <Route path={"contacts"} element={<Contacts />}></Route>
    </Routes>
  )
}

export default App


