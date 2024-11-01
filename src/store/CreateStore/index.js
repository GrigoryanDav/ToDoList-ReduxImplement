export const CreateStore = (reducer, initialState) => {
    let state = initialState
    let listeners = []
    
    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    const subscribe = listener => {
        listeners.push(listener)
        return () => listeners.filter(l => l !== listener)
    }

    return {
        getState,
        dispatch,
        subscribe,
    }
}