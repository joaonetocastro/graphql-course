export const makeGetUsers = (fetch) =>  (path='/') => fetch(`${process.env.API_URL}/users${path}`)