/*
* Name : getDSLI.js
* Location : ./modules/actions/
*
* History :
*
* Version         Date           Programmer
* =================================================
* 0.1.0           2016-08-30     Guido Santi
* -------------------------------------------------
* Codifica modulo
* =================================================
*/
import request from 'superagent'

function requestDSLI() {
	return {
		type: 'waiting',
		operation: 'getDSLI'
	}
}

function receiveDSLI(bool, data) {
	if(bool) return {
		type: 'getDSLI',
		dsli: data
	}
	else return {
		type: 'error',
		error: data
	}
}

export function getDSLI(id) {
	return function(dispatch, getState, api){
		dispatch(requestDSLI())
		return request
			.get(api + 'companies/'+getState().loggedUser.company+'/dsls/'+id+'?access_token='+getState().loggedUser.token)
			.then(
				function(result){
					dispatch(receiveDSLI(true, result.body))
				},
				function(error){
					dispatch(receiveDSLI(false, error.status))
				}
			)
	}
}
