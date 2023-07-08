import "@/styles/index.css";
import "@/styles/scrollBar.css";
import { ColumnPage, MyPage, RecordPage } from "@/pages";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@/features/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/column" element={<ColumnPage />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="*" element={<Navigate to="/column" />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
