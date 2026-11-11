import { lazy, Suspense, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import { formReducer, initialFormData } from "./state/formState.js";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage.jsx"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage.jsx"));
const ConceptDetailPage = lazy(() => import("./pages/ConceptDetailPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function RouteLoading() {
  return (
    <main className="mx-auto min-h-[50vh] w-full max-w-layout px-5 py-16 sm:px-8" aria-live="polite">
      <p>Loading page…</p>
    </main>
  );
}

export default function App() {
  const [formData, dispatch] = useReducer(formReducer, initialFormData);

  return (
    <Suspense fallback={<RouteLoading />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="form" element={<FeedbackPage formData={formData} dispatch={dispatch} />} />
          <Route path="thank-you" element={<ThankYouPage formData={formData} dispatch={dispatch} />} />
          <Route path="items/:itemId" element={<ConceptDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
