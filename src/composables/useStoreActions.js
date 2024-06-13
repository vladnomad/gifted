import { useStore } from "vuex"

const useStoreActions = () => {
    const store = useStore()

    if (!store._actions) return {}
    
    return Object.fromEntries(
        Object.keys(store._actions).map(
            action => [action, payload => store.dispatch(action, payload)]
        )
    )
}

export { useStoreActions }
