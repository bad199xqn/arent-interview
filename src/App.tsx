import "@/styles/index.css";
import "@/styles/scrollBar.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@/features/Layout";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ErrorBoundary } from "@/features/ErrorBoundary";
import loadable from "@loadable/component";

const ColumnPage = loadable(() => import("./pages"), {
  resolveComponent: (components) => components.ColumnPage,
});

const MyPage = loadable(() => import("./pages"), {
  resolveComponent: (components) => components.MyPage,
});

const RecordPage = loadable(() => import("./pages"), {
  resolveComponent: (components) => components.RecordPage,
});

const Page404 = loadable(() => import("./pages"), {
  resolveComponent: (components) => components.Page404,
});

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ErrorBoundary>
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
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
