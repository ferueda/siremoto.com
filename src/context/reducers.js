export const actions = {
	FETCH_INIT: 'FETCH_INIT',
	FETCH_SUCCESS: 'FETCH_SUCCESS',
	FETCH_ERROR: 'FETCH_ERROR',
};

export const jobsReducer = (state, action) => {
	switch (action.type) {
		case actions.FETCH_INIT:
			return { ...state, isLoading: true, isError: false };
		case actions.FETCH_SUCCESS:
			return { ...state, jobs: [...action.payload], isError: false, isLoading: false };
		case actions.FETCH_ERROR:
			return { ...state, isLoading: false, isError: true };
		default:
			return state;
	}
};
