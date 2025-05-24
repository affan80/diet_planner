import About_H from "../About_components/about_header.js";
import "./about_style.css";
import About from "../About_components/about.js";

export default function AboutPage() {
  return (
    <div>
      <About_H />
      <main>
        <About />
      </main>
    </div>
  );
}
