import axios from "axios"

 const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export const Api = {
    CarregarAlbums: async (id: number | null) => {
        if (id) {
            let response = await axiosInstance.get(`/albums/${id}`);
            return response.data; 
        }
        let response = await axiosInstance.get(`/albums`);
        return response.data;
    },
    CarregarFotos: async (id: number) => {
        let response = await axiosInstance.get(`/photos?albumId=${id}`);
        return response.data;
    },
    CarregarFoto: async (id: number) => {
        let response = await axiosInstance.get(`/photos/${id}`);
        return response.data;
    }
}