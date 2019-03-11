import React, {Component} from 'react';

class SocialProfile extends Component{
    render(){
        const {link, image} = this.props.socialProfile;

        return (
            <div style= {{ display: 'inline-block', margin:10}}>
                <a href={link}><img src={image} alt='social-profile' style={{ width: 30, height:30}}/></a>
            </div>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        const DATA = this.props.data;
        return (
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        DATA.map(SOCIAL_PROFILE => {
                            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;