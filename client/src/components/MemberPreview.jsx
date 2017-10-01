import React from 'react'
import {Link} from 'react-router-dom'

import css from './MemberPreview.scss'

class MemberPreview extends React.Component {

	devMember(){
		return {
			name: "John Smith",
			location: "North Pole",
			snippet: "Please send help I'm cold",
			"goal": 10000,
		}
	}

	render() {
		let member = this.props.member ? this.props.member : this.devMember()
		let imgUrl = "./images/" + member.name + ".png"
		console.log(imgUrl);
		let placeholder = "http://via.placeholder.com/350x350"

		return (
			<div className="member-preview">
				<div className="member-photo-container">
					<img className="member-photo" src={imgUrl} />
				</div>
				<h3 className="member-name">{member.name}</h3>
				<h4 className="member-location"><i className="fa fa-map-marker"></i>{member.location}</h4>
				<p className="member-description">{member.snippet}</p>
				<h4 className="member-verification">
					<i className="fa fa-check-circle-o"></i>
					Verified by <Link className="charity-link" to="charity-page">Streetwork</Link>
				</h4>
				<div className="donation-details">
					<div className="member-progress-bar">
						<div className="bar-fill"></div>
					</div>
					<div className="progress-details">
						<div className="member-progress">
							<p className="progress-percentage">50%</p>
							<p className="progress-label">RAISED</p>
						</div>
						<div className="member-goal">
							<p className="goal-amount">£{member.goal}</p>
							<p className="goal-label">GOAL</p>
						</div>
					</div>
					<button className="donate-button">Donate</button>
				</div>
				<div className="member-donations">Donations</div>
			</div>
		)
	}
}

export default MemberPreview