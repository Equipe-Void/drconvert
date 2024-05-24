"use client";

import React, { useState, useEffect } from "react";
import { Project, findAllProjects } from "@/app/_services/users/project";
import { useUserStore } from "@/app/_store/user-store";

import Searching from "./_components/Searching";
import FilterBar from "./_components/filterbar";
import ProjectCard from "./_components/project-card";

export default function Settings() {
  const user = useUserStore((state) => state.user);

  const [projectName, setProjectName] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); 
  const [filterStage, setFilterStage] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await findAllProjects({ userId: user.id });
        setProjects(projectsData);
      } catch (error) {
        console.error("Erro ao obter projetos:", error);
      }
    };
    fetchData();
  }, [user]);

  const handleSearch = () => {
    console.log("Searching for project:", projectName);
    console.log("Selected Date:", selectedDate);
  };

  return (
    <div className="p-8">
      <Searching
        projectName={projectName}
        setProjectName={setProjectName}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleSearch={handleSearch}
      />
      <FilterBar setFilterStage={setFilterStage} />
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
