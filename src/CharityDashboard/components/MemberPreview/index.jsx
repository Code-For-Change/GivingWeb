import React from 'react'
import {Link} from 'react-router-dom'
import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../../Shared/utils/donations'

import css from './MemberPreview.scss'

class MemberPreview extends React.Component {

	renderMembersImage() {
		if (this.props.member.url_image == undefined) {
			return `images/${this.props.member.name}.png`
		} else {
			return this.props.member.url_image
		}
	}

	render() {
		let previewStyle = this.props.style || {}
		const {member} = this.props
		const percentage = calcDonationPercentage(member)
		const textPercentage = percentage.toString() + "%"
		const donationBarStyles = {
			"width": textPercentage,
			"backgroundColor": getDonationBarColour(percentage)
		}
		return (
			<div className="cd-member-preview">
				<div className="image-cover"> 
					<img src={this.renderMembersImage()} alt=""/>
				</div>
				<div className="member-preview-info">
					<h3>{member.name}</h3>
					<h2>{member.snippet}</h2>
					<Link to="" className="view-campaign"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>Manage</Link>
				</div>
				<div className="donation-details">
					<div className="donation-information">
						<h4 className="no-of-donors">{member.donations.length} donors</h4>
						<div className="member-progress-bar">
							<div className="bar-fill" style={donationBarStyles}></div>
						</div>
						<h4 className="donation-ratio">£{calcTotalDonations(member)} / £{member.goal} raised</h4>
					</div>
					<div className="percentage-container">
						<p className="donation-percentage">{textPercentage}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default MemberPreview


