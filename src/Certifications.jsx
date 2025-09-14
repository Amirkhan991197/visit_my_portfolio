function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "javascript Certificate",
      provider: "Udemy",
      image: "javascript-cert.jpg", 
      link: "https://drive.google.com/file/d/1gcKdOyh2Om0p_7iWbnoq0zr6VvsOkWT9/view?usp=sharing"
    },
    {
      id: 2,
      title: "Django Certificate",
      provider: "Udemy",
      image: "django-cert.jpg", 
      link: "https://drive.google.com/file/d/1QPIi43MYtUJkOqcEu-NhFp9lZF2Ahiiw/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Python Certificate",
      provider: "WScubetech",
      image: "python-cert.jpg", 
      link: "https://drive.google.com/file/d/1LZqcr6podXPUD_aa9XTfQ4ph0f8KL9-i/view?usp=drive_link"
    },
  ];

  return (
    <div
      id="certifications"
      className="container my-5"
      style={{ scrollMarginTop: "100px" }}
    >
      <h1 className="text-center mb-4" >
        My Certifications
      </h1>

      <div className="row">
        {certifications.map((cert) => (
          <div key={cert.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-lg bg-dark text-light border-0">

              {/* ✅ ✅ Image path is constructed here: */}
              <img
                src={`/certificates/${cert.image}`}  // <-- This is the image address
                className="card-img-top"
                alt={cert.title}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-info">{cert.title}</h5>
                <p className="card-text text-muted">{cert.provider}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info mt-auto"
                  >
                    View Certificate
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

export default Certifications;
