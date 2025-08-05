import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./layout/MainLayout";
import MantineUIProvider from "./providers/MantineUIProvider";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage";
import PageNotFound from "./pages/PageNotFound";
import CategoryPage from "./pages/CategoryPage";
import QuizPage from "./pages/QuizPage";
import QuizResults from "./pages/QuizResults";
import QuizStartPage from "./pages/QuizStartPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineUIProvider>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/quiz-info" element={<QuizStartPage />} />
            <Route path="/start-quiz" element={<QuizPage />} />
            <Route path="/result" element={<QuizResults />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </MantineUIProvider>
  </StrictMode>
);
