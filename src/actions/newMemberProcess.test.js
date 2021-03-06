import * as actions from './newMemberProcess'

describe('New member process action creators', () => {

	it(`editNewMemberName: returns an object with properties type (set to
		EDIT_NEW_MEMBER_NAME) and name (set to given argument)`, () => {

		const result = actions.editNewMemberName("name")
		const expected = {
			type: "EDIT_NEW_MEMBER_NAME",
			name: "name"
		}
		expect(result).toEqual(expected);
	})

	it(`editNewMemberGoalAmount: returns an object with properties type (set to
		EDIT_NEW_MEMBER_GOAL) and amount (set to given argument)`, () => {

		const result = actions.editNewMemberGoal(100)
		const expected = {
			type: "EDIT_NEW_MEMBER_GOAL",
			amount: 100
		}
		expect(result).toEqual(expected);
	})

	it(`editNewMemberLocation: returns an object with properties type (set to
		EDIT_NEW_MEMBER_LOCATION) and location (set to given argument)`, () => {

		const result = actions.editNewMemberLocation("Riften")
		const expected = {
			type: "EDIT_NEW_MEMBER_LOCATION",
			location: "Riften"
		}
		expect(result).toEqual(expected);
	})

	it(`editNewMemberReasonForUse: returns an object with properties type (set to
		EDIT_NEW_MEMBER_REASON) and value (set to given argument)`, () => {

		const result = actions.editNewMemberReasonForUse("I want a towel")
		const expected = {
			type: "EDIT_NEW_MEMBER_REASON",
			value: "I want a towel"
		}
		expect(result).toEqual(expected);
	})

	it(`editNewMemberStory: returns an object with properties type (set to
		EDIT_NEW_MEMBER_STORY) and value (set to given argument)`, () => {

		const result = actions.editNewMemberStory("I want a towel")
		const expected = {
			type: "EDIT_NEW_MEMBER_STORY",
			value: "I want a towel"
		}
		expect(result).toEqual(expected);
	})

	it(`editNewMemberFutureGoals: returns an object with properties type (set to
		EDIT_NEW_MEMBER_FUTURE_GOALS) and value (set to given argument)`, () => {

		const result = actions.editNewMemberFutureGoals("I want a towel")
		const expected = {
			type: "EDIT_NEW_MEMBER_FUTURE_GOALS",
			value: "I want a towel"
		}
		expect(result).toEqual(expected);
	})

	it(`moveToStoryTab: returns an object with properties type (set to TO_STORY_TAB)`, () => {

		const result = actions.moveToStoryTab()
		const expected = {
			type: "TO_STORY_TAB"
		}
		expect(result).toEqual(expected);
	})

	it(`moveToCoverPhotoTab: returns an object with properties type (set to TO_PHOTO_TAB)`, () => {

		const result = actions.moveToCoverPhotoTab()
		const expected = {
			type: "TO_PHOTO_TAB"
		}
		expect(result).toEqual(expected);
	})

})
