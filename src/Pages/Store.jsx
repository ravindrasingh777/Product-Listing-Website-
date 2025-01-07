import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import { useContext } from "react";
import { Context } from "../Context/Contextmain";
import { toast } from "react-toastify";
const Store = () => {
  const inpref = useRef();

  const limit = 20;

  const [Category, setCategory] = useState([]);
  const [Products_response, setProduct_response] = useState({});
  const [Listingmode, setListingmode] = useState(0);
  const [page, setpage] = useState(0);
  const { category_slug } = useParams();
  const [Searchitem, setSearchitem] = useState("");

  const [SearchQuary, setSearchQuary] = useSearchParams();
  // console.log(SearchQuary.get("page"));
  // console.log(SearchQuary.get("name"));
  // console.log(SearchQuary.get("contact"));

  const [Loader, setLoader] = useState(false);

  function search() {
    setSearchitem(inpref.current.value);
    // console.log(inpref.current.value);
  }

  const fetchCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        if (response.status == 200) {
          setCategory(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  const fetchProduct = () => {
    const skip = Number((SearchQuary.get("page")) ?? page) * limit;
  
    console.log("Page value:", Number(SearchQuary.get("page")));

    setLoader(true);
    let API = "https://dummyjson.com/products";
    if (category_slug != undefined) {
      API += `/category/${category_slug}`;
    } else if (Searchitem != "") {
      API += `/search?q=${Searchitem}`;
    } else {
      API += `?limit=${limit}&skip=${skip}`;
    }
    console.log(API)
    axios
      .get(API)
      .then((response) => {
        if (response.status == 200) {
          setLoader(false);
          setProduct_response(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Pagechangehandler = (pagename) => {
    setSearchQuary({ page: pagename });
    setpage(pagename);
  };

  useEffect(() => {
    const search_page = SearchQuary.get("page");
    if (search_page != null) {
      setpage(search_page);
    }
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [category_slug, page , Searchitem]);

  const { carthandler } = useContext(Context);

  return (
    <>
      <div className="max-w-[1100px] relative mx-auto flex justify-between p-2 items-center">
        <div className="w-full grid grid-cols-4">
          <div className="border md:h-[1000px]  h-[1025px] sticky  top-14 left-0">
            <div className="text-center bg-slate-600 p-3 text-white">
              Category
            </div>
            <ul className="md:text-lg text-sm">
              <li
                className={`p-1 border text-center ${
                  category_slug == undefined && "bg-blue-600 text-white"
                }`}
              >
                <Link to="/store">All</Link>
              </li>
              {Loader == true ? (
                <>
                  <div className="animate-pulse mx-auto w-[200px] space-y-4 p-4 bg-gray-200 rounded-lg">
                    {/* Skeleton Image */}

                    {/* Skeleton Text */}
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </div>
                  </div>
                </>
              ) : (
                Category.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`p-1 border text-center ${
                        category_slug == item.slug && "bg-blue-500 text-white"
                      }`}
                    >
                      <Link to={`/${item.slug}`}>{item.name}</Link>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <div className="border col-span-3 ">
            <div className="text-center  bg-slate-600 p-[11px] flex justify-end text-lg text-white">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <input
                  // onChange={(e)=> console.log(e.target)}
                    ref={inpref}
                    className="h-[25px] md:w-full w-[120px] rounded p-[5px] text-black outline-none"
                    type="text"
                    placeholder="search item"
                  />
                  <button
                    onClick={search}
                    className=" h-[20px] text-[12px]  flex items-center justify-center"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
                <div className="flex gap-2">
                  <IoGrid
                    className={`${
                      Listingmode == 0 && "text-[orange]"
                    } cursor-pointer`}
                    onClick={() => setListingmode(0)}
                  />
                  <FaListUl
                    className={`${
                      Listingmode == 1 && "text-[orange]"
                    } cursor-pointer`}
                    onClick={() => setListingmode(1)}
                  />
                </div>
              </div>
            </div>
            <div className="gap-2 justify-between w-full flex flex-wrap">
              {Loader == true ? (
                <>
                  <div className="animate-pulse mx-auto w-[600px] space-y-4 p-4 bg-gray-200 rounded-lg">
                    {/* Skeleton Image */}
                    <div className="h-48 bg-gray-300 rounded"></div>

                    {/* Skeleton Text */}
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </div>
                  </div>
                </>
              ) : (
                Products_response.products?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`${
                        Listingmode == 0
                          ? "md:w-[23%] w-[47%] mt-1 ml-1 p-2 border"
                          : "w-full py-3 flex border items-center justify-start"
                      }`}
                    >
                      <Link to={`/details/${item.id}`}>
                        <img
                          className="md:w-[200px] w-[200px]"
                          src={item.thumbnail}
                          alt=""
                        />
                      </Link>
                      <div className="flex-col w-full">
                        <h5 className=" text-xs">{item.title}</h5>
                        <div
                          className={`${
                            Listingmode == 0
                              ? "flex text-sm justify-between mt-2"
                              : "mt-0"
                          }`}
                        >
                          <h6 className="hidden md:block">{item.brand}</h6>
                          <h6 className="text-xs text-red-500">
                            ${item.price}
                          </h6>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              carthandler({
                                id: item.id,
                                Image: item.thumbnail,
                                price: item.price,
                              }, toast.success("Item Added!!"))
                            }
                            className="border-[1px] w-full rounded bg-blue-600 text-white mt-2 border-black py-1 px-2"
                          >
                            + Cart
                          </button>
                        </div>
                        {Listingmode == 1 && (
                          <p className="mt-2 md:block hidden">
                            {item.description}
                          </p>
                        )}
                        {Listingmode == 1 && (
                          <p className="text-green-600 font-bold mt-2">
                            {item.availabilityStatus}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="m-4 ">
              <Pagination
                currentpage={page}
                Pagechangehandler={Pagechangehandler}
                limit={limit}
                total_records={Products_response.total}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Pagination = ({
  limit,
  total_records,
  Pagechangehandler,
  currentpage,
}) => {
  const total_pages = Math.ceil(total_records / limit);

  const total_elem = [];

  if (isNaN(total_pages) == false) {
    for (let i = 0; i < total_pages; i++) {
      total_elem.push(
        <li onClick={() => {Pagechangehandler(i);console.log("li clicked")}}>
          <span
            className={`flex ${
              currentpage == i && "!bg-blue-600 text-white"
            } cursor-pointer items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {i + 1}
          </span>
        </li>
      );
    }
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className=" -space-x-px text-sm  flex flex-wrap">
        <li>
          <span
            onClick={() => Pagechangehandler(currentpage - 1)}
            style={{ pointerEvents: currentpage == 0 && "none" }}
            className="flex items-center justify-center px-3 h-8 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </span>
        </li>
        {total_elem}
        <li>
          <span
            onClick={() => Pagechangehandler(currentpage + 1)}
            style={{ pointerEvents: currentpage == total_pages - 1 && "none" }}
            className="flex items-center justify-center px-3 h-8 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Store;
