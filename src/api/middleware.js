function middleware(store) {

    return function(next) {

        return function(action) {

            if(action.type === 'FETCH_ACTIVITIES') {
                //fiz o ajax
                const result = [
                    {
                      id: 1,
                      description: 'Leitura diaria'
                    },
                    {
                      id: 2,
                      description: 'Workshop'
                    }
                  ]
                store.dispatch({
                    type: 'FETCH_ACTIVITIES_SUCCESSFUL',
                    payload: result,
                })
            }

            if (action.type === 'SAVE_ACTIVITY') {
                // fiz o ajax
                store.dispatch({
                    type: 'SAVE_ACTIVITY_SUCCESSFUL',
                    payload: action.payload,
                })
            }
            
            return next(action);
        }
    }
}

export default middleware;