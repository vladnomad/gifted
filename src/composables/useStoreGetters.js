import { computed } from "vue"
import { useStore } from "vuex"

const useStoreGetters = () => {
    const store = useStore()

    if (!store.getters) return {}

    return Object.fromEntries(
        Object.keys(store.getters).map(
            getter => [getter, computed(() => store.getters[getter])]
        )
    )
}

export { useStoreGetters }
