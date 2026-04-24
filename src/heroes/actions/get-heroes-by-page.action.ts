import { heroApi } from "../pages/api/hero.api"


export const getHeroesByPageAction = async() => {
   const { data } = await heroApi.get('/');

   console.log({data});

   return data;
}