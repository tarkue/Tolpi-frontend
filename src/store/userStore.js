import { create } from "zustand";

export const useUserStore = create((set) => ({
    id: 0,
    status: "",
    token: "",
    photo: "",
    name: "",
    tolpies: 0,
    trackers: 0,
    setId: (id) => set(state => ({
        id: id
    })),
    setStatus: (status) => set(state => ({
        status: status
    })),
    setToken: (token) => set(state => ({
        token: token
    })),
    setName: (name) => set(state => ({
        name: name
    })),
    setPhoto: (photo) => set(state => ({
        photo: photo
    })),
    setTolpies: (count) => set(state => ({
        tolpies: count
    })),
    setTrackers: (count) => set(state => ({
        trackers: count
    })),
}))