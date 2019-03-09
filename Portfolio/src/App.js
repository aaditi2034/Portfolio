import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profileImg from './assets/profileImg.jpg';

class App extends Component{

    constructor(){
        super();
        this.state = {displayBio : false};
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio(){
        this.setState({ displayBio: !this.state.displayBio});         
    }
    
    render(){ 
        return(
            <div>
                <img src={profileImg} alt='profileImg' className='profileImg'/>
                <h1>Hello!</h1>
                <p>My name is Aditi Gupta.</p>
                <p> I work as Jr. Associate IT in Daffodils Software Pvt. Ltd.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p> Currently I am in training phase.</p>
                            <p>My hobbies are playing badminton and swimming.</p>
                            <button onClick={this.toggleDisplayBio}>Read Less</button>
                        </div>
                    ) : (
                        <div> <button onClick={this.toggleDisplayBio}>Read More</button> </div>
                    )
                }

                <hr />
                <Projects />
                <hr />
                <SocialProfiles />

            </div>   
        )
    }
}
export default App;