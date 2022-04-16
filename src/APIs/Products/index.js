import { client } from "..";

export const getProducts = async () => {
  return await client.fetch(
    `*[_type == "product"]{
            _id,
            categoryProduct -> {
                _id,
                name
            },
            description,
            name,
            price,
            image{
                asset->{
                    _id,
                    url
                }
            },
            quantity,
            _createdAt
    }`,
    {}
  );
};
