import { Navigate, Route, Routes } from "react-router-dom";
import { AddOns, Personal, Plan, Submit } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <main className="bg-light-gray w-full h-full">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/subscription/personal" replace={true} />}
        />
        <Route path="/subscription/personal" element={<Personal />} />
        <Route path="/subscription/plan" element={<Plan />} />
        <Route path="/subscription/add-ons" element={<AddOns />} />
        <Route path="/subscription/submit" element={<Submit />} />
      </Routes>
    </main>
  );
}

export default App;
