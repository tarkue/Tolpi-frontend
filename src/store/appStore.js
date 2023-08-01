import { create } from "zustand";

export const useAppStore = create((set) => ({
    panel: null,
    popup: null,

    profileId: "",
    profilePhoto: "",
    profileStatus: "",
    profileName: "",
    profileTolpies: [],
    profileStats: [],
    
    countries: [],
    
    setPanel: (panel) => set(state => ({
        panel: panel
    })),
    setPopup: (popup) => set(state => ({
        popup: popup
    })),

    setProfileId: (profileId) => set(state => ({
        profileId: profileId
    })),
    setProfilePhoto: (profilePhoto) => set(state => ({
        profilePhoto: profilePhoto
    })),
    setProfileStatus: (profileStatus) => set(state => ({
        profileStatus: profileStatus
    })),
    setProfileName: (profileName) => set(state => ({
        profileName: profileName
    })),
    setProfileTolpies: (profileTolpies) => set(state => ({
        profileTolpies: profileTolpies
    })),
    setProfileStats: (profileStats) => set(state => ({
        profileStats: profileStats
    })),

    setCountries: (countries) => set(state => ({
        countries: countries
    })),
}))