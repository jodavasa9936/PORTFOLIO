import { Project } from "./Project.jsx";



export function Projects({ projects }) {
  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <div className="Work" key={index}>
            <Project project={project}/>
          </div>
        ))}
      </ul>
    </div>
  );
}
