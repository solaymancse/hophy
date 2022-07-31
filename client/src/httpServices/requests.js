import http from "./httpServices";

const baseUrl = "http://localhost:5000/api";
export const adminLogin = () => http.post(`${baseUrl}/adminlogin`);
export const GetBlogById = ({ id }) => http.get(`${baseUrl}/blog/${id}`);
