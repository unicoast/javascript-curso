import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { User } from '../models/user';

/**
 * 
 * @param {Number} page 
 * @returns { Promise<User[]> }
 */
export const loadUsersByPage = async( page = 1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    const res = await fetch(url);
    const data = await res.json();

    // En json-server v1.0.0-beta+, la respuesta es un objeto que contiene una propiedad "data" cuando se pagina
    const { data: usersData = data } = data;

    const users = usersData.map( localhostUserToModel );

    return users;
}
