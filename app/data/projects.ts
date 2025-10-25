export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Pagina web personal.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://github.com/ElSenpaiSAMA/PortfolioPag",
    image: "/pagina.png",
  },

  {
    id: 2,
    title: "Sala de reservas",
    description:
      "Pagina para reservar y crear salas con roles de administrador y usuario.",
    tech: [".NET",  "Razor Pages", "Entity Framework", "SQL Server", "Tailwind", "Resend API"],
    link: "https://github.com/ElSenpaiSAMA/SalaReservas",
    image: "/salareserva.jpg",
  },

  {
    id: 3,
    title: "The Legend of Marina",
    description:
      "Videojuego The Legend of Marina, un juego de plataformas 2D basado en Zelda.",
    tech: ["C#", "Unity"],
    link: "https://github.com/ElSenpaiSAMA/project-fire_rpg-game",
    image: "/tlom.png",
  },

  {
    id: 4,
    title: "Study Bot",
    description:
      "Asistente academico con IA para estudiar.",
    tech: ["React", "Python ", "API REST", "SQL Server", "Ollama"],
    link: "https://github.com/ElSenpaiSAMA/Proyecto_Study_Bot",
    image: "/study.jpg",
  },


];

