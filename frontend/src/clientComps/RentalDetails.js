import React from "react";
import './../../src/App.css'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Tabs } from "antd";
import { Link } from "react-router-dom";
import Castle from "./../Media/castle.jpeg";
const { Meta } = Card;
export const RentalDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4">
        <div className="col-start-1 lg:col-start-1 lg:row-start-1 flex justify-center">
          <div className="col-start-2 row-start-1 flex justify-center items-center">
            <div
              href="#"
              class="flex flex-col bg-white  border rounded-lg shadow-lg md:flex-row md:max-w-xl "
            >
              <img
                alt="example"
                src={Castle}
                style={{ height: 400, borderRadius: ".5rem" }}
                className=""
              />
              <div class="flex flex-col justify-between ml-4 mr-4 leading-normal bg-white">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Classic Castle
                </h5>
                <p class=" text-[.75rem] text-gray-700 dark:text-gray-400">
                  13x13
                </p>
                <Divider
                  style={{ marginBottom: ".5rem", marginTop: ".5rem" }}
                />
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Starting at $300.00
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Check out our{" "}
                  <Link to="/">
                    <span className="text-stone-500"> Add-ons</span>
                  </Link>
                  !
                </p>
                <div className=" m-1">
                  <Tabs
                    style={{ marginTop: "-1rem" }}
                    defaultActiveKey="1"
                    items={[
                      {
                        label: "Whats Included",
                        key: "1",
                        children: (
                          <div className="grid grid-cols-2 gap-4 h-36">
                            <ul>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Generator
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                13x13 Tarp
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Shoe Rack
                              </li>
                            </ul>
                            <ul>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Blower
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Rules Sign
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                      {
                        label: "Rates",
                        key: "2",
                        children: (
                          <div className="grid grid-cols-1 gap-4">
                            <ul>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                4-Hours $300
                              </li>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                6-Hours $400
                              </li>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                8-Hours $500
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <button className="bg-stone-500 text-white rounded-md w-36 m-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 lg:col-start-2 lg:row-start-1 flex justify-center items-center">
          <div className="col-start-2 row-start-1 flex justify-center justify-center items-center">
            <div
              href="#"
              class="flex flex-col bg-white  border rounded-lg shadow-lg md:flex-row md:max-w-xl "
            >
              <img
                alt="example"
                src={Castle}
                style={{ height: 400, borderRadius: ".5rem" }}
                className=""
              />
              <div class="flex flex-col justify-between ml-4 mr-4 leading-normal bg-white">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Classic Castle
                </h5>
                <p class=" text-[.75rem] text-gray-700 dark:text-gray-400">
                  13x13
                </p>
                <Divider
                  style={{ marginBottom: ".5rem", marginTop: ".5rem" }}
                />
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Starting at $300.00
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Check out our{" "}
                  <Link to="/">
                    <span className="text-stone-500"> Add-ons</span>
                  </Link>
                  !
                </p>
                <div className=" m-1">
                  <Tabs
                    style={{ marginTop: "-1rem" }}
                    defaultActiveKey="1"
                    items={[
                      {
                        label: "Whats Included",
                        key: "1",
                        children: (
                          <div className="grid grid-cols-2 gap-4 h-36">
                            <ul>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Generator
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                13x13 Tarp
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Shoe Rack
                              </li>
                            </ul>
                            <ul>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Blower
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Rules Sign
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                      {
                        label: "Rates",
                        key: "2",
                        children: (
                          <div className="grid grid-cols-1 gap-4">
                            <ul>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                4-Hours $300
                              </li>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                6-Hours $400
                              </li>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                8-Hours $500
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <button className="bg-stone-500 text-white rounded-md w-36 m-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 lg:col-start-1 lg:row-start-2 flex justify-center items-center ">
            <div
              href="#"
              class="flex flex-col bg-stone-500  border rounded-lg shadow-lg md:flex-row lg:w-11/12"
            >
              <img
                alt="example"
                src={Castle}
                style={{ height: 400, borderRadius: ".5rem", }}
                className=""
              />
              <div class="flex flex-col justify-between ml-4 mr-4 leading-normal bg-stone-050">
                <h5 class="mb-2 p-1 text-2xl font-bold tracking-tight text-white">
                  Classic Castle
                </h5>
                <p class=" text-[.75rem] text-gray-700 dark:text-white">
                  13x13
                </p>
                <p class=" text-[.75rem] text-gray-700 dark:text-white">
                  4-8 Jumpers, Adult Friendly!
                </p>
                <Divider
                  style={{ marginBottom: ".5rem", marginTop: ".5rem" }}
                />
                <p class="mb-3 font-normal text-gray-700 dark:text-white">
                  Starting at $300.00
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-white">
                  Check out our
                  <Link to="/">
                    <span className="text-grey-400"> Add-ons</span>
                  </Link>
                  !
                </p>
                <div className="flex flex-row">
                            <ul className="flex flex-row">
                            <li className=" border border-black text-black  bg-white rounded-full w-24 h-7 text-center m-1">
                                $300/ 4 Hrs
                              </li>
                              <li className=" border border-black text-black  bg-white rounded-full w-24 h-7 text-center m-1">
                              $400/ 6 Hrs
                              </li>
                              <li className=" border border-black text-black  bg-white rounded-full w-24 h-7 text-center m-1">
                              $500/ 8 Hrs
                              </li>
                            </ul>
                          </div>
                <div className=" m-1">
                  <Tabs
                    style={{ marginTop: "-1rem", }}
                    defaultActiveKey="1"
                    items={[
                      {
                        label: "Whats Included",
                        key: "1",
                        children: (
                          <div className="grid grid-cols-2 gap-4 h-auto">
                            <ul>
                              <li className="border border-black text-black  bg-white rounded-full w-28 h-7 text-center m-1">
                                Generator
                              </li>
                              <li className="border border-black text-black  bg-white rounded-full w-28 h-7 text-center m-1">
                                13x13 Tarp
                              </li>
                              <li className="border border-black text-black  bg-white rounded-full w-28 h-7 text-center m-1">
                                Shoe Rack
                              </li>
                            </ul>
                            <ul>
                            <li className="border border-black text-black  bg-white rounded-full w-28 h-7 text-center m-1">
                                Blower
                              </li>
                              <li className="border border-black text-black  bg-white rounded-full w-28 h-7 text-center m-1">
                               Rules Sign
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                      {
                        label: "Rates",
                        key: "2",
                        children: (
                          <div className="grid grid-cols-1 gap-4">
                            <ul>
                            <li className="border border-black text-black  bg-white rounded-full w-28 h-7 text-center m-1">
                                Generator
                              </li>
                              <li className="border border-black text-black  bg-white rounded-full w-28 h-7 text-center m-1">
                                Generator
                              </li>
                              <li className="border border-black text-black  bg-white rounded-full w-28 h-7 text-center m-1">
                                Generator
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <Link to='/checkout'>
                <button className="bg-stone-500 text-white rounded-md w-36 m-4 hover:m-4 hover:border hover:border-stone-500 hover:bg-white hover:text-stone-500">
                  Book Now
                </button>
                </Link>
              </div>
            </div>
          </div>

        <div className="col-start-1 lg:col-start-2 lg:row-start-2 flex  justify-center items-center">
            <div
              href="#"
              class="flex flex-col bg-white  border rounded-lg shadow-lg md:flex-row md:max-w-xl "
            >
              <img
                alt="example"
                src={Castle}
                style={{ height: 400, borderRadius: ".5rem" }}
                className=""
              />
              <div class="flex flex-col justify-between ml-4 mr-4 leading-normal bg-white">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Classic Castle
                </h5>
                <p class=" text-[.75rem] text-gray-700 dark:text-gray-400">
                  13x13
                </p>
                <Divider
                  style={{ marginBottom: ".5rem", marginTop: ".5rem" }}
                />
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Starting at $300.00
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Check out our{" "}
                  <Link to="/">
                    <span className="text-stone-500"> Add-ons</span>
                  </Link>
                  !
                </p>
                <div className=" m-1">
                  <Tabs
                    style={{ marginTop: "-1rem" }}
                    defaultActiveKey="1"
                    items={[
                      {
                        label: "Whats Included",
                        key: "1",
                        children: (
                          <div className="grid grid-cols-2 gap-4 h-36">
                            <ul>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Generator
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                13x13 Tarp
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Shoe Rack
                              </li>
                            </ul>
                            <ul>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Blower
                              </li>
                              <li className="border border-black rounded-full w-auto text-center m-2 p-2">
                                Rules Sign
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                      {
                        label: "Rates",
                        key: "2",
                        children: (
                          <div className="grid grid-cols-1 gap-4">
                            <ul>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                4-Hours $300
                              </li>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                6-Hours $400
                              </li>
                              <li className="border border-black rounded-full w-36 text-center m-2 p-2">
                                8-Hours $500
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <button className="bg-stone-500 text-white rounded-md w-36 m-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
