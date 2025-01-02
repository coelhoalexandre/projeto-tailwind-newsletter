/* eslint-disable react/prop-types */
import ToggleTheme from "../ToggleTheme";

export default function Header({ user }) {
  return (
    <header className="flex justify-between items-center h-20 px-5 bg-alura-200 dark:bg-dark-200 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Olá, {user.name}!</span>
      <h1>Alura Newsletter</h1>
      <ToggleTheme />
    </header>
  );
}
