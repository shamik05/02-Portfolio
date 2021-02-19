import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => (
  <>
    { /* Start Portfolio Area */ }
    <div id="portfolio" className="fix">
      <div className="portfolio-area ptb--120 bg_color--1">
        <div className="portfolio-carousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Latest Project</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <ProjectCard styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="view-more-btn mt--60 mt_sm--30 text-center">
                  <a className="rn-button-style--2 btn-solid" href="/blog"><span>View More</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    { /* End Portfolio Area */ }
  </>
);
export default Projects;
