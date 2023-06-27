import { useEffect, useState } from "react";
import { projects as data } from "./Projects.js";
import { Projects } from "./Projects.jsx";
import "./Work.css";

export function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  });

  return (
    <main>
      <div className="Works">
        <h2>My Projects:</h2>
        <Projects projects={projects}/>
      </div>
    </main>
  );
}
