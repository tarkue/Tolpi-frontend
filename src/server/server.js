import { API_URL, HH_AREAS_API } from "@/config/config";
import { getVKLink } from "@/service/service";
import axios from "axios";


const client = axios.create({
    baseURL: `https://${API_URL}}`,
})

const server = {
    async subscribe(subId) {
        await client.post(`/subscribe?${getVKLink()}`, null, {
            params: {
                "sub_id": subId,
            }
        })
    },
    
    async unsubscribe(unsubId) {
        await client.post(`/unsubscribe?${getVKLink()}`, null, {
            params: {
                "unsub_id": unsubId
            }
        })
    },

    async getCountry() {
        let countryes = []
        await axios.get(HH_AREAS_API).then((data) => {
            const areas = data.data[0].areas

            for (let i = 0; i < areas.length; i++) {      
                const areasTwo = areas[i].areas
                if (areasTwo.length == 0) {
                    countryes.push(areas[i].name)
                }
                for (let j = 0; j < areasTwo.length; j++) {
                    countryes.push(areasTwo[j].name.split("(")[0])
                }
            }
        })
        return countryes
    }
}

export default server