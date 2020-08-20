import React from "react";
import PropTypes from "prop-types";
import email from '../img/email.svg'
import github from '../img/github.png';
import contact from '../img/contact.svg';
import linkedin from '../img/linkedin.png';

const data = [
	{
		label: 'ag.aditigupta12@gmail.com',
		icon: email,
		link: 'mailto:ag.aditigupta12@gmail.com'
	},
	{
		label: 'https://www.linkedin.com/in/aditi-gupta-006aab160/',
		icon: linkedin,
		link: 'https://www.linkedin.com/in/aditi-gupta-006aab160/'
	},
	{
		label: 'https://github.com/aaditi2034',
		icon: github,
		link: 'https://github.com/aaditi2034',
	},
	{
		label: '+918979798336',
		icon: contact
	},
]
export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<div className="row mt-5">
					{
						data.map((list, index) => (
							<div
								key={index}
								className={"col-6 col-sm-6 col-md-3 "}>
								<a href={list.link}>
									<div>
										<img
											style={{ background: '#8a7f7f4f', padding: '12px', borderRadius: '50%' }}
											src={list.icon} alt="" />
									</div>
									<span style={{ color: 'black !important' }}>{list.label}</span>
								</a>
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
