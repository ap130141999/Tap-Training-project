import "./App.css";
import { Container } from "reactstrap";

import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";

export function App() {
  return (
    <main>
      <Container>
        <HomePage />
        <FormPage />
        <TrialFormPage />
        <HistoryPage />
      </Container>
    </main>
  );
}










export default App;
