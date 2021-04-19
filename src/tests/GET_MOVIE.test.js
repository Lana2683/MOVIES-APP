import moviesReducer from '../Reducers/moviesReducer';
import  actionTypes  from '../Actions/actionTypes'

describe('post reducer', () => {
    it('should handle GET_MOVIE', () => {
        const startAction = {
            type: actionTypes.GET_MOVIE,
            id: 313369
        };
        expect(moviesReducer({}, startAction)).toEqual({});
    });
})
