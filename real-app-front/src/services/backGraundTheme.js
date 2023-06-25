import { useLayoutEffect, useState } from "react";

const BackGroundTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-Theme") || "light"
  );
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("app-Theme", theme);
  });
  return { theme, setTheme };
};

export default BackGroundTheme;
