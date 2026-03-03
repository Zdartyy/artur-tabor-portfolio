import { getProjects } from "@/lib/mdx";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          A showcase of my recent work.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No projects found.</p>
        </div>
      )}
    </div>
  );
}
