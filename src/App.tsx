import "@/styles/index.css";
import "@/styles/scrollBar.css";
import { ColumnPage, MyPage, Page404, RecordPage } from "@/pages";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { DefaultLayout, PrivateView } from "@/features/Layout";
import { Provider } from "react-redux";
import { store } from "@/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route path="/column" element={<ColumnPage />} />
              <Route
                path="/my-page"
                element={
                  <PrivateView>
                    <MyPage />
                  </PrivateView>
                }
              />
              <Route
                path="/record"
                element={
                  <PrivateView>
                    <RecordPage />
                  </PrivateView>
                }
              />
              <Route path="/page-404" element={<Page404 />} />
              <Route path="/" element={<Navigate to="/column" />} />
              <Route path="*" element={<Navigate to="/page-404" />} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
