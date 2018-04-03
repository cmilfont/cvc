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
            
            return next(action);
        }
    }
}

export default middleware;