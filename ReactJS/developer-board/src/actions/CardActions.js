import * as ActionTypes from './../constants/ActionTypes'
import uuid from 'uuid/v4'

const createCard = (value) => {
	return {
		type: ActionTypes.CREATE_CARD,
		payload: {
			id: uuid(),
			edit: false,
			text: value
		}
	}
}

const editCard = (edited) => {
		return {
			type: ActionTypes.EDIT_CARD,
			payload: edited
	}
}


export default {
  createCard,
	editCard
}