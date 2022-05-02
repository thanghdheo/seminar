import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../APIs/Products";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import { Input } from "../shared/ui";

const filter = [
  { id: 1, name: "Giá: Tăng dần" },
  { id: 2, name: "Giá: Giảm dần" },
  { id: 3, name: "Cũ nhất" },
  { id: 4, name: "Mới nhất" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Products() {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(filter[0]);
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(selectedPerson);
  }, [selectedPerson]);

  const filteredfilter =
    query === ""
      ? filter
      : filter.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(4);
  const title = ["Tên sản phẩm", "Mô tả", "Loại sản phẩm", "Số lượng", "Giá"];

  useEffect(() => {
    setLoading(true);
    getProducts().then((res) => {
      setLoading(false);
      const resArr = res?.sort((a, b) => {
        if (value?.id === 1) {
          return parseInt(a.price) - parseInt(b.price);
        } else if (value?.id === 2) {
          return parseInt(b.price) - parseInt(a.price);
        } else if (value?.id === 3) {
          return (
            new Date(a?._createdAt).getTime() - new Date(b._createdAt).getTime()
          );
        } else if (value?.id === 4) {
          return (
            new Date(b?._createdAt).getTime() -
            new Date(a?._createdAt).getTime()
          );
        }
      });
      setProduct(resArr);

      !search
      ? setProduct(resArr)
      : setProduct(
          product.filter(
            (item) =>
              item.name
                .toLowerCase()
                .includes(search.toLowerCase())
          )
        );
    });
  }, [value,search]);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPost = product.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="border-2 border-dashed border-gray-200 p-4 mt-0">
      <div className="sm:flex sm:items-center pt-3 ">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold uppercase text-gray-900">
            Danh sách sản phẩm
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <Link to="/products/create">Thêm sản phẩm</Link>
          </button>
        </div>
      </div>
      <div className="sm:flex justify-between sm:items-center">
                <div className=" font-semibold pt-12">
                  Sắp xếp
                  <div className="max-w-sm">
                    <Combobox
                      as="div"
                      value={selectedPerson}
                      onChange={setSelectedPerson}
                    >
                      <div className="relative mt-1">
                        <Combobox.Input
                          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          onChange={(event) => setQuery(event.target.value)}
                          displayValue={(person) => person.name}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                          <SelectorIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>

                        {filteredfilter.length > 0 && (
                          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredfilter.map((person) => (
                              <Combobox.Option
                                key={person.id}
                                value={person}
                                className={({ active }) =>
                                  classNames(
                                    "relative cursor-default select-none py-2 pl-3 pr-9",
                                    active
                                      ? "bg-indigo-600 text-white"
                                      : "text-gray-900"
                                  )
                                }
                              >
                                {({ active, selected }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        "block truncate",
                                        selected && "font-semibold"
                                      )}
                                    >
                                      {person.name}
                                    </span>

                                    {selected && (
                                      <span
                                        className={classNames(
                                          "absolute inset-y-0 right-0 flex items-center pr-4",
                                          active
                                            ? "text-white"
                                            : "text-indigo-600"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    )}
                                  </>
                                )}
                              </Combobox.Option>
                            ))}
                          </Combobox.Options>
                        )}
                      </div>
                    </Combobox>
                  </div>
                </div>
                <div className=" font-semibold pt-12">
                  Lọc
                  <div className="flex justify-center items-start gap-x-2">
                    <Input
                      placeholder="Tìm kiếm....."
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <Table title={title} values={currentPost} type="product" />
      )}
      <Pagination
        postsPerPage={perPage}
        totalPosts={product.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Products;
