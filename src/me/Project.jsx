export function Project({project}) {
  return (
    <div>
      <img
        src={project.image}
        alt={project.name}
        
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <br />
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <button>View on GitHub</button>
      </a>
    </div>
  );
}
