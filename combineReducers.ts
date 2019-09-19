/*
*
*
 combineReducers for Context Api
*
*
* */

const getInitialState=(reducerDict:any)=> {
    return Object.keys(reducerDict).reduce((acc, curr) => {
        const slice = reducerDict[curr](undefined, { type: undefined });
        return { ...acc, [curr]: slice };
    }, {});
};

export const combineReducers=(reducerDict:any)=> {
    const _initialState = getInitialState(reducerDict);
    return function(state = _initialState, action) {
        return Object.keys(reducerDict).reduce((acc, curr) => {
            let slice = reducerDict[curr](state[curr], action);
            return { ...acc, [curr]: slice };
        }, state);
    };
};
