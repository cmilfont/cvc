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

export default function(store) {

    return function(next) {

        return function(action) {

            if (action.type === 'FETCH_ACTIVITIES') {
                store.dispatch({
                    type: 'FETCH_ACTIVITIES_SUCCESSFUL',
                    payload: result
                })
            }

            return next(action);
        }
    }
}