import { ajax } from "../../utils/AjaxUtils";

export async function fetchAds() {
    return await ajax({ method: 'get', url: 'ad/' }).then((response) => {
        console.log("Successful response", response.data)
        return response
    }).catch((error) => {
        console.log("Error response", error)
    })
}

export async function createAds(data) {
    return await ajax({ method: 'post', url: 'ad/add', data: { data: data } }).then((response) => {
        console.log("Successful response", response.data)
        return response
    }).catch((error) => {
        console.log("Error response", error)
    })
}

export async function deleteAds() {
    return await ajax({ method: 'delete', url: 'ad/delete' }).then((response) => {
        console.log("Successful response", response.data)
        return response
    }).catch((error) => {
        console.log("Error response", error)
    })
}

export async function generateRandomAds(randomSize) {
    return await ajax({
        method: 'POST',
        url: 'ad/random',
        data: { size: randomSize }
    })
    .then((response) => {
        console.log("Successful response", response.data)
        return response
    })
    .catch((error) => {
        console.log("Error response", error)
    })
}
