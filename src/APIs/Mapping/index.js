import { client } from "..";

export const getMapping = async () => {
  return await client.fetch(
    `*[_type == "mapping"]{
        _id,
        _updatedAt,
        code_product -> {
            _id,
            barcode{
                current
            },
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
            
        }
    }`,
    {}
  );
};
