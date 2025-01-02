import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme() {
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const pageClasses = document.documentElement.classList;

  const toggle = () => {
    pageClasses.toggle("dark");
  };

  useEffect(() => {
    systemPreference && pageClasses.add("dark");
  }, [systemPreference, pageClasses]);

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="block h-8 text-gray-100 cursor-pointer dark:hidden"
        onClick={toggle}
      />
      <SunIcon
        className="hidden h-8 text-gray-100 cursor-pointer dark:block"
        onClick={toggle}
      />
    </div>
  );
}
