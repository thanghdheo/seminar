import { client } from "..";

export const getMapping = async () => {
  return await client.fetch(
    `*[_type == "mapping"]{
        _id,
        _updatedAt,
        _createdAt,
        rfid,
        code_product -> {
            _id,
            categoryProduct -> {
                _id,
                name
            },
            barcode{
                current
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
            
        },
        warehouse -> {
            name
        }
    }`,
    {}
  );
};
