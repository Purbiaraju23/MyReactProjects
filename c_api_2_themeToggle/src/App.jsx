import { useState } from "react";
import { ThemeContextProvider } from "./contexts/theme";
import { useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/themeBtn";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const lightTheme = () => {
    setthemeMode("light");
  };

  const darkTheme = () => {
    setthemeMode("dark");
  };

  useEffect(() => {
    const doc = document.querySelector("html").classList;
    doc.remove("light", "dark");
    doc.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ lightTheme, themeMode, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
