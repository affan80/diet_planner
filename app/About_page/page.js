import About_H from "../About_components/about_header.js";
import "./about_style.css";
import About from "../About_components/about.js";
import Ab_info from "../About_components/Ab_info.js"

export default function AboutPage() {
  return (
      <main>
        <About_H />
        <About />
        <Ab_info />
      </main>
  );
}
