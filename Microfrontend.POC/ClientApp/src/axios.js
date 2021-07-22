import axios from "axios";

export const axiosInstace= axios.create(
    {
        baseURL:"https://localhost:44305/api"
    }
)