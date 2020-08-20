import React from "react";
import peekameet from "../img/peekameet.png";
import firelab from "../img/firelab.png";
import papersource from "../img/papersource.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid bg-light mt-5">
          <div className=" project-container container bg-light pb-5">
            <h1
              id="projects"
              className={"text-center " + this.props.fadeInRight}>
              Projects
						</h1>
            <div className="row my-5">
              <div
                className={
                  "testbg col-12 col-sm-12 col-md-4 " +
                  this.props.fadeIn
                }>
                <div className="overlay">
                  <div className="text">
                    <h2>PEEKaMEET  Smart Networking Starts Here</h2>
                  </div>
                  <div>
                    <button
                      id="vmarine-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById(
                          "gallery-card"
                        );
                        var marineModal = document.getElementById(
                          "vmarine"
                        );
                        modalBG.style.display = "block";
                        marineModal.style.display =
                          "block";
                      }}>
                      Learn More
										</button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "aguabg col-12 col-sm-12 col-md-4 " +
                  this.props.fadeIn
                }>
                <div className="overlay">
                  <div className="text">
                    <h2>Firelab Aries</h2>
                  </div>
                  <div>
                    <button
                      id="agua-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById(
                          "gallery-card"
                        );
                        var aguaModal = document.getElementById(
                          "agualuz"
                        );
                        modalBG.style.display = "block";
                        aguaModal.style.display =
                          "block";
                      }}>
                      Learn More
										</button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "todobg col-12 col-sm-12 col-md-4 " +
                  this.props.fadeIn
                }>
                <div className="overlay">
                  <div className="text">
                    <h2>To Do List</h2>
                  </div>
                  <div>
                    <button
                      id="todo-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById(
                          "gallery-card"
                        );
                        var todoModal = document.getElementById(
                          "todolist"
                        );
                        modalBG.style.display = "block";
                        todoModal.style.display =
                          "block";
                      }}>
                      Learn More
										</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*hidden modals*/}
        <div id="gallery-card">
          <div id="vmarine" className="modal-card">
            <div className="visual">
              <img src={peekameet} alt="" />
            </div>
            <div className="modal-info">
              <h2>PEEKaMEET - Smart Networking Starts Here</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    It is the business networking application
                    which can be used to connect with those that can
                    make a difference in your career and business
									</li>
                  <li>
                    Designed with HTML5, CSS3, Bootstrap,
                    Webpack, Wordpress, and ReactJS.
									</li>
                </ul>
              </div>
              <div className="modal-bottom">
                <span
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => window.open('https://www.peekameet.com', '_blank')}>
                  <h3>View live demo</h3>
                </span>
                <p
                  className="close-icon"
                  style={{
                    textAlign: "right",
                    fontWeight: 900,
                    fontSize: 2 + "rem",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById(
                      "gallery-card"
                    );
                    var aguaModal = document.getElementById(
                      "vmarine"
                    );
                    modalBG.style.display = "none";
                    aguaModal.style.display = "none";
                  }}>
                  &#10005;
								</p>
              </div>
            </div>
          </div>

          <div id="agualuz" className="modal-card">
            <div className="visual">
              <img src={firelab} alt="" />
            </div>
            <div className="modal-info">
              <h2>Firelab Aries</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    Designed specifically for fire protection companies and
                    manage your inspections, scheduling, inventory, invoicing and much more
									</li>
                  <li>
                    Developed with HTML5, CSS3, Bootstrap,
                    Webpack, Parallax Effect,
                    SmoothScrolling(UI), and VanillaJS.
									</li>
                </ul>
              </div>
              <div className="modal-bottom">
                <span
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => window.open('https://dev.customer.aries4.firelabinc.com/')}>
                  <h3>View live demo</h3>
                </span>
                <p
                  className="close-icon"
                  style={{
                    textAlign: "right",
                    fontWeight: 900,
                    fontSize: 2 + "rem",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById(
                      "gallery-card"
                    );
                    var aguaModal = document.getElementById(
                      "agualuz"
                    );
                    modalBG.style.display = "none";
                    aguaModal.style.display = "none";
                  }}>
                  &#10005;
								</p>
              </div>
            </div>
          </div>

          <div id="todolist" className="modal-card">
            <div className="visual">
              <img src={papersource} alt="" />
            </div>
            <div className="modal-info">
              <h2>Paper Source</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    Designed each boutique Paper Source location,
                    down to the very last card on the shelf, to be your inspiration haven.
									</li>
                  <li>
                    Developed with HTML5, CSS3, Bootstrap,
									</li>
                </ul>
              </div>
              <div className="modal-bottom">
                <span
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => window.open('https://www.papersource.com/')}>
                  <h3>View live demo</h3>
                </span>
                <p
                  className="close-icon"
                  style={{
                    textAlign: "right",
                    fontWeight: 900,
                    fontSize: 2 + "rem",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById(
                      "gallery-card"
                    );
                    var todoModal = document.getElementById(
                      "todolist"
                    );
                    modalBG.style.display = "none";
                    todoModal.style.display = "none";
                  }}>
                  &#10005;
								</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
