import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import '../assets/styles/Project.scss';

//Video Imports
import trailer_TakingRoot from '../assets/videos/trailer_TakingRoot.mp4';
import trailer_Flipside from '../assets/videos/trailer_Flipside.mp4';
import trailer_Vibes from '../assets/videos/trailer_Vibes.mp4';
import trailer_Golfking from '../assets/videos/trailer_Golfking.mp4';
import trailer_Branded from '../assets/videos/trailer_Branded.mp4';
import trailer_TowAR from '../assets/videos/trailer_TowAR.mp4';
import trailer_Adventurer from '../assets/videos/trailer_Adventurer.mp4';

//Temp Imports
import thumbnail_TBA from '../assets/images/thumb_TBA.png';

//Image Imports
const images_TakingRoot = importProjectImages(require.context('../assets/images/TakingRoot', false, /\.(png|jpe?g|svg|gif)$/));
const images_Jected = importProjectImages(require.context('../assets/images/Jected', false, /\.(png|jpe?g|svg|gif)$/));
const images_Flipside = importProjectImages(require.context('../assets/images/Flipside', false, /\.(png|jpe?g|svg|gif)$/));
const images_Vibes = importProjectImages(require.context('../assets/images/Vibes', false, /\.(png|jpe?g|svg|gif)$/));
const images_Golfking = importProjectImages(require.context('../assets/images/Golfking', false, /\.(png|jpe?g|svg|gif)$/));
const images_Branded = importProjectImages(require.context('../assets/images/Branded', false, /\.(png|jpe?g|svg|gif)$/));
const images_Adventurer = importProjectImages(require.context('../assets/images/Adventurer', false, /\.(png|jpe?g|svg|gif)$/));
const images_TowAR = importProjectImages(require.context('../assets/images/TowAR', false, /\.(png|jpe?g|svg|gif)$/));
const images_NEVR = importProjectImages(require.context('../assets/images/NEVR', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r: any) {
  return r.keys().map(r);
}

function orderImagesThumbnailFirst(inputList: (string|undefined)[]) {
  var thumbIdx = inputList.findIndex(((element: (string|undefined)) => element?.toUpperCase().includes("THUMBNAIL")));
  var thumbnail = [];
  thumbnail.push(inputList.at(thumbIdx));
  inputList.splice(thumbIdx, 1);
  const orderedList = thumbnail.concat(inputList)
  return orderedList;
}

function importProjectImages(r: any) {
  var imageList = orderImagesThumbnailFirst(importAll(r));
  return imageList;
}

function Project() {

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [

    {
      title: "Taking Root",
      abstract: "",
      description: "**Taking Root** is a perspective-based puzzle adventure game made by a team of **three programmers** and **five artists** in which the player - taking the role of a stone creature - is tasked with fleeing their home together with their plant friend.\n\n**My Roles:** Gameplay Programmer, Game Design Lead, Technical Artist\n\n**Used Technologies:** Unity3D, Shader Graph, C#, HLSL, Git\n\n**Key Contributions:**\n- Implemented perspective-dependent movement system, adapting player controls dynamically based on camera viewpoint\n- Designed and refined perspective snapping mechanic, enabling core puzzle interactions through spatial reinterpretation\n- Developed modular camera system with virtual cameras, transitions, and event-driven switching\n- Built and integrated complex puzzle systems with robust interaction handling\n- Created shaders for object slicing and visual feedback (outlines, post-processing effects)",
      images: images_TakingRoot,
      video: trailer_TakingRoot,
      link: "https://store.steampowered.com/app/2491890/Taking_Root__Academic_Version/?beta=0"
    },

    {
      title: "Jected - Rivals",
      abstract: "Arcade racing game developed at Pow Wow Entertainment using Unreal Engine and C++.",
      description: "",
      images: images_Jected,
      link: "https://jected.thqnordic.com"
    },

    {
      title: "On The Flipside",
      abstract: "Unity puzzle game developed at FH Salzburg.",
      description: "",
      images: images_Flipside,
      video: trailer_Flipside
    },

    {
      title: "Deadly Vibes",
      abstract: "Rhythm-based combat game created during a GameJam.",
      description: "",
      images: images_Vibes,
      video: trailer_Vibes
    },

    {
      title: "King of the Golf",
      abstract: "PvP golfing game built in a custom C++ engine.",
      description: "",
      images: images_Golfking,
      video: trailer_Golfking
    },

    {
      title: "Branded By Death",
      abstract: "Gladiator-themed combat game built with MonoGame.",
      description: "",
      images: images_Branded,
      video: trailer_Branded
    },

    {
      title: "Non-Euclidean Virtual Reality (NEVR)",
      abstract: "Bachelor thesis project generating a labyrinth in hyperbolic space.",
      description: "",
      images: images_NEVR
    },

    {
      title: "TowAR",
      abstract: "Augmented Reality tower defense using physical markers.",
      description: "",
      images: images_TowAR,
      video: trailer_TowAR
    },

    {
      title: "Adventures of an Adventurer",
      abstract: "2D narrative RPG developed at HTL Leonding.",
      description: "",
      images: images_Adventurer,
      video: trailer_Adventurer
    },

    {
      title: "More to come!",
      abstract: "Future projects currently in development.",
      description: "",
      images: [thumbnail_TBA]
    }

  ];


  return (
    <div className="projects-container" id="projects">

      <h1>Portfolio</h1>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div
            className="project"
            key={index}
            onClick={() => setSelectedProject(project)}
          >

            <img
              src={project.images[0]}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />

            <h2>{project.title}</h2>

            <p>{project.abstract}</p>

          </div>
        ))}

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default Project;