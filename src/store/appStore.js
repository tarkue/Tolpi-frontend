import { ProfileName } from "@/components/Screens/names";
import { create } from "zustand";

export const useAppStore = create((set) => ({
    panel: null,
    popup: null,

    loaderPanel: true,

    profileId: "",
    
    country: "Москва",
    tolpiesList: [],

    countries: [],
    lastMainTop: 0,
         
    setPanel: (panel) => set(state => ({
        panel: panel
    })),

    setPopup: (popup) => set(state => ({
        popup: popup
    })),

    setLoaderPanel: (loaderPanel) => set(state => ({
        loaderPanel: loaderPanel
    })),

    setProfileId: (profileId) => set(state => ({
        profileId: profileId
    })),

    setCountry: (country) => set(state => ({
        country: country
    })),

    setCountries: (countries) => set(state => ({
        countries: countries
    })),

    setLastMainTop: (lastMainTop) => set(state => ({
        lastMainTop: lastMainTop
    })),

    setUpdatePosts: (updatePosts) => set(state => ({
        updatePosts: updatePosts
    })),

    goToProfile: (userId, lastMainTop) => set(state => ({
        profileId: userId,
        panel: ProfileName,
        lastMainTop: lastMainTop
    })),

    setTolpiesList: (tolpiesList) => set(state => ({
        tolpiesList: tolpiesList
    })),
}))