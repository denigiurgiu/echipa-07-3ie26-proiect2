import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.data));
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10">
        Proiectele Noastre
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">
              {project.title}
            </h2>

            <p className="text-blue-600 mb-2">
              {project.technology}
            </p>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-semibold"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}