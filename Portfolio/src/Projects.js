import React, { Component } from 'react';

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
        const DATA = this.props.data;
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        DATA.map(PROJECT => {
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