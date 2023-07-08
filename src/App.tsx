import "@/styles/index.css";
import "@/styles/scrollBar.css";
import { ColumnPage, MyPage, Page404, RecordPage } from "@/pages";
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
            <Route path="/page-404" element={<Page404 />} />
            <Route path="/" element={<Navigate to="/column" />} />
            <Route path="*" element={<Navigate to="/page-404" />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
