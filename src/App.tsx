import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './i18n/config';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load routes for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const EnglishCourses = lazy(() => import("./pages/EnglishCourses"));
const GeorgianCourses = lazy(() => import("./pages/GeorgianCourses"));
const CEFR = lazy(() => import("./pages/CEFR"));
const Teachers = lazy(() => import("./pages/Teachers"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/english" element={<EnglishCourses />} />
              <Route path="/courses/georgian" element={<GeorgianCourses />} />
              <Route path="/cefr" element={<CEFR />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
