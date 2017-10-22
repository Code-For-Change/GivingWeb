import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import css from './FeaturedMemberSelector.scss'
import * as charityDashBoardContentActionCreators from '../../../../actions/charityDashBoardContentActionCreators'
import * as helSomeoneActionCreators from '../../../../actions/helpSomeoneActionCreators'

class FeaturedMemberSelector extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			feat_member: true
		}
	}

	componentDidMount(){
		if(this.props.members.length === 0){
			this.props.getMembers()
		}
	}

	onChangeSelector(event) {
		this.addMember(event.target.value)
	}

	addMember(id) {
		const newFeatMember = {
			charity_id: this.props.charity_id,
			member_id: id,
			position: this.props.position
		}
		this.props.createFeaturedMember(newFeatMember)
	}

	onClickAddMember() {
		this.setState({
			feat_member: false
		})
	}

	renderMembers(){
		if(this.state.feat_member){
			return(
				<button
					className="member-placeholder"
					onClick={this.onClickAddMember.bind(this)}>
					Click To Add Member
				</button>
			)
		}else{
			return this.buildMemberDropDown()
		}
	}

	buildMemberDropDown(){
		const disabledOption = [<option key={0} value={-1} disabled>Select A Member</option>]
		const members = this.props.members.map((member)=> {
			return (
				<option key={member.id} value={member.id}>
					{member.name}
				</option>
			)
		})
		const options = disabledOption.concat(members)
		return (
			<select onChange={this.onChangeSelector.bind(this)} defaultValue={-1}>
				{options}
			</select>
		)
	}

	render() {
		return (
			<div className="featured-member-controller-element">
				<div>
					<div className="del-div"></div>
					<div className="content-div">{this.renderMembers()}</div>
					<h3 className="feat-member-name">member</h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.helpSomeone, ...state.charityDashboardContent, ...routing }
}

function mapDispatchToProps(dispatch) {
	const creators = Object.assign({}, charityDashBoardContentActionCreators, helSomeoneActionCreators)
	return bindActionCreators(creators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMemberSelector)
