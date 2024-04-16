import Form from "./components/Form";
import Home from "./components/Home";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <Home />
      <Form />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
