import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Card from "react-bootstrap/Card";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            {/* <a href={projects.url} title={projects.title}> */}
            <img
              className="portfolio-img"
              alt={projects.title}
              src={projectImage}
            />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
                <p>{projects.tech}</p>
              </div>
            </div>
            <div className="icons-pack">
              <div className="link-icon">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={projects.url}
                >
                  <i className="fa fa-link"></i>
                </a>
                {projects.api ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projects.api}
                  >
                    <i className="fa fa-link"></i>
                  </a>
                ) : null}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={projects.client}
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={projects.server}
                >
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
            {/* </a> */}
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
