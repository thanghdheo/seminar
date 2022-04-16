import { client } from "..";

export const getCategory = async () => {
    return await client.fetch(
        `*[_type == "categoryProduct"]{
                _id,
               name
        }`,
        {}
      );
}