import React from "react";

function Table({ title, values, type }) {
  const format = (n) => {
    return n.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div className="mt-2 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  ></th>
                  {title.map((item, index) => {
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-[700] text-gray-900"
                      >
                        {item.toUpperCase()}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {type === "mapping" &&
                  values?.map((item) => (
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={item.code_product.image.asset.url}
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-medium text-gray-900 text-ellipsis overflow-hidden w-[150px]">
                          {item._id}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-medium text-gray-900 text-ellipsis overflow-hidden w-[150px]">
                          {item.rfid}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-medium text-gray-900">
                          {item.code_product.name}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-medium text-gray-900">
                          {" "}
                          {item.code_product.barcode.current}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-medium text-gray-900">
                          {format(item.warehouse.name)}
                        </div>
                      </td>
                    </tr>
                  ))}
                {type === "product" &&
                  values?.map((item) => (
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={item.image.asset.url}
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 break-normal">
                        <div className="font-medium text-gray-900 ">
                          {item.name}
                        </div>
                      </td>
                      <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 break-normal">
                        <div className="font-medium text-gray-900 text-ellipsis overflow-hidden w-[150px]">
                          {item.description}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-medium text-gray-900">
                          {item.categoryProduct.name}
                        </div>
                      </td>
                      <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500 ">
                        <div className="font-medium text-gray-900">
                          {item.quantity}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-medium text-gray-900">
                          {format(item.price)}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
