import React, { useEffect, useState } from "react";
import { getMapping } from "../APIs/Mapping";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";
import { Tab } from "../components/Tab";
import { getProducts } from "../APIs/Products";
import Products from "./Products";

const filter = [
  { id: 1, name: "Giá: Tăng dần" },
  { id: 2, name: "Giá: Giảm dần" },
  { id: 3, name: "Cũ nhất" },
  { id: 4, name: "Mới nhất" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Home() {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(filter[0]);
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState();
  const [currentTab, setCurrentTab] = useState(1);
  const [array, setArray] = useState({
    products: [],
    mapping: [],
  });

  useEffect(() => {
    setValue(selectedPerson);
    getMapping().then((res) =>
      setArray((prev) => {
        return {
          ...prev,
          mapping: res,
        };
      })
    );
    getProducts().then((res) =>
      setArray((prev) => {
        return {
          ...prev,
          products: res,
        };
      })
    );
  }, [selectedPerson]);

  console.log(currentTab);

  const filteredfilter =
    query === ""
      ? filter
      : filter.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  const [mapping, setMapping] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const title = [
    "RFID",
    "Tên sản phẩm",
    "Barcode",
    "Mô tả",
    "Loại sản phẩm",
    "Giá",
  ];

  useEffect(() => {
    setTabs([
      {
        id: 1,
        name: "Danh sách sản phẩm",
        count: array.products.length.toString(),
      },
      {
        id: 2,
        name: "Danh sách sản phẩm mapping",
        count: array.mapping.length.toString(),
      },
    ]);
  }, [array]);

  console.log(array);

  useEffect(() => {
    setLoading(true);
    getMapping().then((res) => {
      setLoading(false);
      const resArr = res?.sort((a, b) => {
        if (value?.id === 1) {
          return (
            parseInt(a.code_product.price) - parseInt(b.code_product.price)
          );
        } else if (value?.id === 2) {
          return (
            parseInt(b.code_product.price) - parseInt(a.code_product.price)
          );
        } else if (value?.id === 3) {
          return (
            new Date(a?._updatedAt).getTime() -
            new Date(b?._updatedAt).getTime()
          );
        } else if (value?.id === 4) {
          return (
            new Date(b?._updatedAt).getTime() -
            new Date(a?._updatedAt).getTime()
          );
        }
      });
      setMapping(resArr);
    });
  }, [value]);
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPost = mapping.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <div className="md:pl-64 flex flex-col flex-1 py-6 ">
      <main className="flex-1">
        <div className="px-4 sm:px-6 lg:px-8">
          <Tab
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          {currentTab !== 1 ? (
            <div className="border-2 border-dashed border-gray-200 p-4 mt-0">
              <div className="sm:flex sm:items-center pt-3 ">
                <div className="sm:flex-auto ">
                  <h1 className="text-xl font-semibold uppercase text-gray-900">
                    Danh sách sản phẩm mapping
                  </h1>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <button
                    // onClick={(e) => exportToCSV(mapping, "Mapping")}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    <CSVLink
                      data={mapping.map((item) => ({
                        ID: item._id,
                        UPDATE_DATE: item._updatedAt,
                        ID_PRODUCT: item.code_product._id,
                        NAME_PRODUCT: item.code_product.name,
                        BARCODE: item.code_product.barcode.current,
                        CATEGORY: item.code_product.categoryProduct?.name,
                        DESCRIPTION: item.code_product.description,
                        PRICE: item.code_product.price,
                      }))}
                      filename={"Mapping"}
                    >
                      Export sản phẩm mapping
                    </CSVLink>
                  </button>
                </div>
              </div>
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto font-semibold pt-12">
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
              </div>
              {loading ? (
                <p>Loading....</p>
              ) : (
                <Table title={title} values={currentPost} type="mapping" />
              )}
              <Pagination
                postsPerPage={perPage}
                totalPosts={mapping.length}
                paginate={paginate}
              />
            </div>
          ) : (
            <Products />
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
