import React from "react";
import layers from "../img/layers.png";
import myImage from "../img/myImage.jpg";
import resume from '../img/resume.svg';
import PropTypes from "prop-types";
import resumeFile from '../Resume.pdf';

const data = [
  {
    label: 'Responsive',
  },
  {
    label: 'Design',
  },
  {
    label: 'API Integration',
  },
  {
    label: 'Performance',
  },
  {
    label: 'Agile & Scrum',
  },
  {
    label: 'Big Data With Hadoop',
  },
  {
    label: 'Core Java',
  },
  {
    label: 'Project Management',
  },
]
const skills = [
  {
    label: 'React JS',
    progress: '90',
  },
  {
    label: 'Java Script',
    progress: '80',
  },
  {
    label: 'API Integration',
    progress: '85'
  },
  {
    label: 'HTML5',
    progress: '80',
  },
  {
    label: 'CSS',
    progress: '80',
  },
  {
    label: 'Bootstrap',
    progress: '75',
  },
  {
    label: 'Core Java',
    progress: '60',
  },
  {
    label: 'Node JS',
    progress: '40',
  },
  {
    label: 'Project Management',
    progress: '70'
  },
]
export default class About extends React.Component {
  render() {
    return (
      <div
        id="about-container"
        className="content-containers container text-center mt-5">
        <h1 id="about" className={this.props.bounceLeft}>
          About
				</h1>
        <div className="row mt-5">
          {
            data.map((list, index) => (
              <div
                key={index}
                className={
                  "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
                }>
                <img src={layers} alt="" />
                <h4>{list.label}</h4>
              </div>
            ))
          }
        </div>

        <div className="row" style={{ marginTop: 7 + "rem" }}>
          <div className="col-12 col-lg-6 hidden">
            <img
              className={"img-fluid " + this.props.fadeIn}
              src={myImage}
              alt=""
              style={{
                borderRadius: '32px',
                width: '206px',
              }}
            />

          </div>
          <div
            className={
              "col-12 col-sm-12 col-md-12 col-lg-6 " +
              this.props.tada
            }>
            <p className={"mytext pt-3 " + this.props.fadeIn}>
              I am seeking a professional opportunity as a front-end
              or full-stack web developer. I love the culture and unique
              challenges in the industry, and I am eager for the chance
              to work professionally as a developer.
						</p>
            <p className={"mytext pt-3 " + this.props.fadeIn}>
              Revealed my passion for problem solving, and creating quality products
              through collaborative teamwork. I specialize in HTML, CSS, JavaScript,
              and React on the front-end as well as know basics of Core Java, Node and
              MySQL/Mongo on the back-end to create beautiful and secure applications.
              My biggest priority is developing clear, high-quality code while
              cultivating a fun and encouraging workplace culture.
            </p>
          </div>
        </div>
        <div style={{ margin: '16px', marginTop: '7rem' }} className='row'>
          <div
            className="col-12 col-lg-6 hidden"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
            <div style={{ background: 'black', color: 'white', width: '50%', borderRadius: '50px', margin: '16px' }}>
              <div style={{ padding: '18px 20%' }}>
                Skills
              </div>
            </div>
          </div>
          <div
            className={
              "col-12 col-sm-12 col-md-12 col-lg-6 " +
              this.props.tada
            }>
            {
              skills.map((skill, index) => (
                <div className="progress mb-3">
                  <div
                    className={`progress-bar fill-${skill.progress}-bar`}
                    role="progressbar"
                    style={{ width: `${skill.progress}%` }}
                    aria-valuemin="0"
                    aria-valuemax="100">
                    {skill.label}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div
          className='row'
          style={{ alignItems: 'center', fontSize: '18px', background: 'black', color: 'white', fontWeight: 'bold', padding: '8px' }}>
          If you want to see my resume, you can download it from here
          <form action={resumeFile} method='get'>
            <button type='submit' style={{ margin: '0 16px' }}>
              <img src={resume} alt='' width='36px' style={{ cursor: 'pointer' }} />DOWNLOAD
            </button>
          </form>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
