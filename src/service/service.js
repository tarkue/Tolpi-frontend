

export const generateStats = (track, tolpi) => [
    {
        title: "отслеживают",
        value: track
    },
    {
        title: "Толпи",
        value: tolpi
    },
]



export function getVKLink() {
    let url = typeof window !== "undefined" ? window.location.search.slice(1) : ""
    return url ? `${url}` : ""
  }

export function sendReportText(userId) {
    return `Жалоба на пользователя https://vk.com/id${userId}, причина: `
}
  
export function tolpiContains(tolpiList, tolpi) {
    return tolpiList.filter(
        t => t.timestamp == tolpi.timestamp && t.text == tolpi.text 
            && t.user.userId == tolpi.user.userId
    ).length > 0
}