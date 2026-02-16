import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExamenesOficiales, ExamenesPropios } from "@/components/ExamenesSection";
import { PracticarTemas } from "@/components/PracticarTemas";
import { BannerDestacado } from "@/components/BannerDestacado";
import { Footer } from "@/components/Footer";
import TopicPage from "@/components/TopicPage";
import ExerciseDetail from "@/components/ExerciseDetail";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExamenesOficiales />
        <ExamenesPropios />
        <PracticarTemas />
        <BannerDestacado />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tema/:slug" element={<TopicPage />} />
          <Route path="/ejercicio/:exerciseId" element={<ExerciseDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
