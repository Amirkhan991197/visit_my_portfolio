import { useState } from "react";

function Projects() {
  // Static projects data
  const [projects] = useState([
    {
      id: 1,
      title: "Multi-branch Private Library Management System",
      description: "A web application to manage multiple library branches, membership, seat booking, QR verification, and staff access.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTqY3kO2rbl_ntWbC7R-fq-Ps-cJRejLbZw&s", // Replace with actual image
      link: "#", // Replace with live demo or repo link
    },
    {
      id: 2,
      title: "Web-based Quiz Application",
      description: "A responsive web app for creating and attempting quizzes. Built with HTML, CSS, JS, and Bootstrap.",
      image: "data:image/jpeg;base64,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",
      link: "#",
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description: "Classic Tic Tac Toe game implemented using HTML, CSS, and JavaScript.",
      image: "https://images-cdn.ubuy.co.in/6384dbcd36b86141032134b3-tic-tac-toe-game-board-classic-board.jpg",
      link: "#",
    },
  ]);

  return (
    <div
      id="projects"
      className="container my-5"
      style={{ scrollMarginTop: "100px" }}
    >
      <h1 className="text-center   mb-4">My Projects</h1>

      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-lg bg-dark text-light border-0 hover-card">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-info">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info mt-auto"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
