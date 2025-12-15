import { Layout } from "../Layout";
import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <header className="bg-black sticky top-0 z-[10] mx-auto flex flex-wrap w-full items-center justify-between border-b-white p-8 text-white">
      <Navbar />
    </header>
  );
};
