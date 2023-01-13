import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList() {
  // console.log(projects);
  const { projects } = user;

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => {
          const { id, name, about, technologies } = project;
          return (
            <ProjectItem key={id} name={name} about={about} technologies={technologies} />
          )
        })}
      </div>
    </div>
  );
}

export default ProjectList;
