import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}