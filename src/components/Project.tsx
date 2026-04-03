import React, { useState, useRef } from "react";
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

type ProjectLink = {
  name: string;
  url: string;
};

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
  const [showAll, setShowAll] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  const projects = [

    {
      title: "Taking Root",
      abstract: "",
      description: "**Taking Root** is a perspective-based puzzle adventure game made by a team of **three programmers** and **five artists** in which the player, taking the role of a stone creature, is tasked with fleeing their home together with their plant friend.",
      roles: ["Gameplay Programmer", "Game Design Lead", "Technical Artist"],
      tech: ["Unity", "Shader Graph", "C#", "HLSL", "Git"],
      contributions: [
        "Implemented perspective-dependent movement system, adapting player controls dynamically based on camera viewpoint",
        "Designed and refined perspective snapping mechanic, enabling core puzzle interactions through spatial reinterpretation",
        "Developed modular camera system with virtual cameras, transitions, and event-driven switching",
        "Built and integrated complex puzzle systems with robust interaction handling",
        "Created shaders for object slicing and visual feedback (outlines, post-processing effects)"
      ],
      images: images_TakingRoot,
      video: trailer_TakingRoot,
      links: [
        {name: "Steam", url: "https://store.steampowered.com/app/2491890/Taking_Root__Academic_Version/"}
      ]
    },

    {
      title: "Jected - Rivals",
      abstract: "Arcade racing game developed at Pow Wow Entertainment using Unreal Engine and C++.",
      description: "**Jected - Rivals** is a battle royale arcade racing game developed by **Pow Wow Entertainment** in which 18 players compete against each other in a multitude of different extreme sport and vehicle-based disciplines until there is only one player left standing. I worked on this game during a **4.5 months long internship** as part of the 3C team, which stands for \"Character, Control, Camera\".",
      roles: ["Gameplay Programmer"],
      tech: ["Unreal Engine", "C++", "Perforce"],
      contributions: [
        "Implemented a modular, event-driven trick system for character and vehicle gameplay, including trick detection, combos, scoring, and UI feedback",
        "Developed and refined camera systems, including a new swing camera with input-dependent behavior",
        "Contributed to gameplay mechanics, including grappling hook improvements and full refactoring of the vehicle nitro system",
        "Worked with Unreal Automation Tests, fixing and maintaining test cases to support system stability",
        "Performed debugging, refactoring, and feature integration across gameplay, UI, and physics systems within Unreal Engine"
      ],
      images: images_Jected,
      links: [
        {name: "Steam", url: "https://store.steampowered.com/app/1366850/Jected__Rivals/"},
        {name: "Official Game Site", url: "https://jected.thqnordic.com/"}
      ]
    },

    {
      title: "On The Flipside",
      abstract: "Unity puzzle game developed at FH Salzburg.",
      description: "**On The Flipside** is a 2.5D puzzle game made in a team of **three programmers**. The core mechanic in this game is the ability to swap between the normal world and the \"Flipside\": A mirrored, slightly altered version of the normal world.",
      roles: ["Gameplay Programmer", "Gameplay Designer", "Shader Programmer"],
      tech: ["Unity", "Shader Graph", "C#", "HLSL", "Git"],
      contributions: [
        "Implemented the core world-swapping mechanic, including position validation, collision handling, and movement constraints during transitions", 
        "Designed and set up a dual-camera rendering system using layer-based separation to display both worlds simultaneously", 
        "Developed custom shaders and visual effects for world transitions, including a swap animation shader and an occlusion system using stencil techniques", 
        "Built gameplay interaction systems such as buttons and object interactions, used in tutorial and level design", 
        "Integrated post-processing and particle effects to visually distinguish the two worlds and enhance player feedback", 
        "Contributed to player movement and input handling, including improvements to jumping and interaction responsiveness"
      ],
      images: images_Flipside,
      video: trailer_Flipside
    },

    {
      title: "King of the Golf",
      abstract: "PvP golfing game built in a custom C++ engine.",
      description: "**King of the Golf** is a (local) multiplayer, competitive party game made in a team of **two programmers** and programmed in our own custom engine. The goal is to have the highest score of all players at the end of a round by hitting your golf ball into a periodically moving target area and have it stay there the longest, while keeping other players from entering.",
      roles: ["Gameplay Programmer", "Engine Programmer", "Gameplay Designer"],
      tech: ["ExPend (custom engine)", "C++", "SFML", "Tiled", "Git"],
      contributions: [
        "Developed a local multiplayer game in C++ using the custom ExPend Engine, applying and extending previously built engine systems",
        "Implemented the core gameplay mechanics, including force-based player movement, real-time scoring within a dynamic goal zone, and player-to-player interactions",
        "Extended the tilemap pipeline to support gameplay-relevant data such as goal positions, surface types, and multiple colliders per object",
        "Added environmental interactions, such as different surface behaviors (e.g. drag on sand, respawning in water) using physics and collision systems",
        "Designed and implemented player feedback systems, including directional aiming indicators and power visualization",
        "Built core game flow systems, including timers, scoring logic, and a victory state"
      ],
      images: images_Golfking,
      video: trailer_Golfking
    },

    {
      title: "Branded By Death",
      abstract: "Gladiator-themed combat game built with MonoGame.",
      description: "**Branded By Death** is an action combat 2D-game made during the first year of my studies as a **solo project**. In this game, the player takes on the role of a gladiatior fighting in a colosseum and needs to defeat his opponent in a duel through a series of well-timed combat actions.",
      roles: ["Solo Developer"],
      tech: ["C#", "MonoGame", "Git"],
      contributions: [
        "Developed the entire game as a solo project using MonoGame (C#), leveraging a lightweight framework instead of a full game engine",
        "Designed and implemented a combat system featuring combo-based attacks, hit detection, dodging, and a blocking mechanic with shield break",
        "Created a basic enemy AI with movement and attack behavior, including boundary handling",
        "Implemented player resource systems, such as stamina to limit dodging and mechanics to balance defensive play",
        "Built core game structure and UI systems, including scene management, menus (main, options, controls, credits), and health bars"
      ],
      images: images_Branded,
      video: trailer_Branded
    },

    {
      title: "Non-Euclidean Virtual Reality (NEVR)",
      abstract: "Bachelor thesis project generating a labyrinth in hyperbolic space.",
      description: "**NEVR (Non-Euclidean Virtual Reality)** is a virtual reality project I made for my **bachelor's thesis**, in which subjects had to make their way through two different labyrinths (one being Euclidean and the other hyperbolic) in search for an item they had to then return. It was developed to study how non-Euclidean spaces affect player orientation, navigation and spatial understanding and to ultimately answer the question if these unconvential spaces are practical for use in video games.",
      roles: ["Solo Developer"],
      tech: ["Unity", "HyperEngine", "Oculus SDK", "Git"],
      contributions: [
        "Integrated and adapted a non-Euclidean rendering system (HyperEngine) for use in VR, resolving compatibility and build issues.",
        "Designed and implemented both Euclidean and hyperbolic labyrinth environments, including procedural wall generation from CSV data.",
        "Developed gameplay logic for navigation tasks, including objective handling and enforced return-by-memory mechanics.",
        "Implemented data logging systems (path tracking, time measurement) to support quantitative user study analysis.",
        "Identified and resolved technical issues related to shaders, VR setup, and build stability for experimental deployment."
      ],
      images: images_NEVR
    },

    {
      title: "ExPend Engine",
      abstract: "A 2D game engine programmed in C++.",
      description: "The **ExPend Engine** is a 2D game engine co-developed in a team of **two programmers** at the FH Salzburg. It was subsequently used to create the game \"King of the Golf\".",
      roles: ["Engine Programmer"],
      tech: ["C++", "SFML", "Tiled", "Git"],
      contributions: [
        "Designed the engine architecture, including game loop timing, state management, and a component-based GameObject system",
        "Implemented resource and input managers for efficient asset handling and input processing",
        "Built a layered rendering system with camera support",
        "Created a data-driven level pipeline by integrating Tiled (open source tilemap editor), including parsing of tilemaps, object layers, and custom properties",
        "Developed a 2D physics system with basic collision detection (AABB, Circle), resolution (restitution, drag), and an observer-based collision event system",
        "Implemented A* pathfinding and a tile-based navigation mesh for AI movement support"
      ],
      images: [thumbnail_TBA]
    },

    {
      title: "TowAR",
      abstract: "Augmented Reality tower defense using physical markers.",
      description: "**TowAR** is an AR tower defense game demo made in a team of **three programmers**. The goal of the game is to defend their base by placing physical markers which spawn towers and orienting them in a way so that they shoot the enemies on screen.",
      roles: ["AR Developer (Systems Integration)"],
      tech: ["Unity", "C#", "Vuforia Engine SDK", "Git"],
      contributions: [
        "Implemented core AR functionality using Vuforia's VuMark system to detect and interpret custom markers in real time.",
        "Designed and generated a set of custom VuMarks to encode gameplay-relevant data (e.g., tower placement, enemy spawn, player base).",
        "Developed the mapping between physical markers and in-game structures, enabling spatial interaction in augmented reality.",
        "Integrated AR tracking into the gameplay loop, including handling detection states and game start conditions."
      ],
      images: images_TowAR,
      video: trailer_TowAR
    },

    {
      title: "Deadly Vibes",
      abstract: "Rhythm-based combat game created during a GameJam.",
      description: "**Deadly Vibes** is a short 2D rhythm game made in a team of **two programmers** during a GameJam with the theme \"One Finger\". The goal of the game is to defeat an opponent by correctly hitting timed notes in succession to unleash attacks.",
      roles: ["Gameplay Programmer", "Gameplay Designer"],
      tech: ["Unity", "C#", "Git"],
      contributions: [
        "Implemented the core rhythm gameplay system, including note spawning, timing windows, and lane handling.",
        "Developed a MIDI-driven pipeline to convert song data into playable in-game note sequences.",
        "Designed and programmed the combat system, linking combo streaks and missed inputs to player/enemy attacks.",
        "Built health and feedback systems, including damage calculation, health bars, and on-screen damage indicators.",
        "Implemented basic game flow systems (scene management, menus) and delivered a fully playable prototype within GameJam constraints."
      ],
      images: images_Vibes,
      video: trailer_Vibes
    },

    {
      title: "Adventures of an Adventurer",
      abstract: "2D narrative RPG developed at the HTL Leonding.",
      description: "",
      roles: [],
      tech: [],
      contributions: [],
      images: images_Adventurer,
      video: trailer_Adventurer
    }

  ];

  const NUM_OF_VISIBLE_PROJECTS = 6;
  const visibleProjects = showAll ? projects : projects.slice(0, NUM_OF_VISIBLE_PROJECTS);

  return (
    <div className="projects-container" id="projects">

      <h1>Portfolio</h1>

      <div className="projects-grid">

        {visibleProjects.map((project, index) => (
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

      {projects.length > NUM_OF_VISIBLE_PROJECTS && (
        <div className="projects-toggle" ref={toggleRef}>
          <button onClick={() => {
            if (showAll) {
              setShowAll(false);

              requestAnimationFrame(() => {
                toggleRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
              });
            } else {
              setShowAll(true);
            }
          }}>
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default Project;