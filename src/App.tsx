import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { TasksPageManual } from './components/TasksPage/TasksPage.manual';
import { TasksPageReactQuery } from './components/TasksPage/TasksPage.reactquery';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/api" element={<TasksPageManual />} />
        <Route path="/betterapi" element={<TasksPageReactQuery />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;