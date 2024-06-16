import { useStore } from "vuex"

const useStoreMutations = () => {
    const store = useStore()

    if (!store._mutations) return {}

    return Object.fromEntries(
        Object.keys(store._mutations).map(
            mutation => [mutation, payload => store.commit(mutation, payload)]
        )
    )
}

export { useStoreMutations }
