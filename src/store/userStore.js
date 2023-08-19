import { create } from "zustand";

export const useUserStore = create((set) => ({
    id: "",
    photo: "",
   
    setId: (id) => set(state => ({
        id: id
    })),

    setPhoto: (photo) => set(state => ({
        photo: photo
    })),

    upUser: (id, photo) => set(state => ({
        id: String(id),
        photo: photo
    })),
}))