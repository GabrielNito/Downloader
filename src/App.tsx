import Form from "./components/Form";
import Home from "./components/Home";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      <Form />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
