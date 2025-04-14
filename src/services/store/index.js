import { create } from "zustand";
import { devtools } from "zustand/middleware";


const store = (set) => ({
    user: null,
    isAuthencated: false,
    breadcrumbs: [],
    setUser: (user) => set((state) => ({ ...state, user })),
    setAuth: (isAuthencated) => set((state) => ({ ...state, isAuthencated }))
})

const storeValue = devtools(store)

export const useStore = create(storeValue)