import { FaFacebookSquare, FaInstagram, FaPinterest } from "react-icons/fa";
import CountdownTimer from "./components/CountdownTimer";

export default function App() {
  return (
    <div className="w-full h-screen flex items-center justify-between flex-col bg-blue-very-dark bg-stars bg-no-repeat">
      <header className="mt-28">
        <h1 className="font-bold uppercase text-sm text-white tracking-[0.5rem]">
          We're launching soon
        </h1>
      </header>
      <main>
        <CountdownTimer />
      </main>
      <footer className="flex items-center justify-center gap-4 bg-pattern-hills bg-no-repeat bg-center bg-cover w-full h-40 ">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <a
              href="/"
              className="block transition-all duration-300 ease-in-out hover:scale-125"
            >
              <FaFacebookSquare className="text-blue-grayish text-2xl transition-colors duration-300 ease-in-out hover:text-red-soft" />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block transition-all duration-300 ease-in-out hover:scale-125"
            >
              <FaPinterest className="text-blue-grayish text-2xl transition-colors duration-300 ease-in-out hover:text-red-soft" />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block transition-all duration-300 ease-in-out hover:scale-125"
            >
              <FaInstagram className="text-blue-grayish text-2xl transition-colors duration-300 ease-in-out hover:text-red-soft" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
