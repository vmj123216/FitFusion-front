import instance from "../context/axios";

export const login = async (email, password) => {
    const response = await instance.post('login', { email, password });
    return response.data;
};

export const Register = async (FormData) => {
    const response = await instance.post('registration', FormData);
    return response.data;
}

export const userStats = async (weight, height, goal) => {
    const response = await instance.post('validateUserStats', { weight, height, goal });
    return response.data;
}

export default async function getUserData() {
    const response = await instance.get('userData');
    return response.data;
}

export const SendUserWorkout = async (workoutData) => {
    const response = await instance.post('UserWorkout', workoutData);
    return response.data;
}

export const Logout = async () => {
    const response = await instance.post('logout');
    return response.data;
}

export const profileUpdate = async (payload) => {
    const response = await instance.put('updateUsers', payload);
    return response;
}

export const getAllUsers = async () => {
    const response = await instance.get('admin/getUser');
    return response.data;
}

export const getUserById = async (id) => {
    const response = await instance.get(`admin/${id}`);
    return response.data;
}

export const EditUser = async (id, user) => {
    const response = await instance.put(`admin/EditUser/${id}`, user);
    return response.data;
}

export const RemoveUser = async (id) => {
    const response = await instance.post(`admin/removeUser/${id}`);
    return response;
}

export const viewUser = async (id) => {
    const response = await instance.get(`admin/viewUser/${id}`);
    return response.data;
}