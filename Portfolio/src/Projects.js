import React, { Component } from 'react';
import PROJECTS from './data/projects';
import { ClientRequest } from 'http';

class Project extends Component{
    render(){
        const {title, discription, link, image} = this.props.project;
        return (
            <div style = {{ display:'inline-block', width:300, margin:20}}> 
                <h3>{title}</h3>
                <img src ={image} alt='profile' style = {{width: 300, height:200}}/>
                <p>{discription}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Projects;