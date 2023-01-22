import React from "react";
import "./../../src/App.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Tabs } from "antd";
import { Link } from "react-router-dom";
import Castle from "./../Media/castle.png";
import { Caro } from "./Caro";
const { Meta } = Card;
export const RentalDetails = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-24">
        <div className="col-start-1 lg:col-start-1 lg:row-start-1 flex justify-center">
          <div className="col-start-2 row-start-1 flex justify-center items-center">
            <div
              href="#"
              class="flex flex-col bg-white border  rounded-lg shadow-lg md:flex-row "
            >
              <div className="w-72 flex flex-col justify-center">
                <Caro />
              </div>

              <div className="lg:left-shadow">
                <div class="flex flex-col justify-start  leading-normal p-4 bg-[#c0a58e] rounded-r left-shadow">
                  <h5
                    class="mb-2 p-1 text-xl font-bold tracking-tight text-white"
                    className="test-font-2"
                  >
                    The Toddler
                  </h5>
                  <div class="flex flex-row w-72 justify-between">
                    <p class=" text-[.75rem] text-gray-700">13x13</p>
                    <p class=" text-[.75rem] text-gray-700">
                      4-8 Jumpers, Adult Friendly!
                    </p>
                  </div>
                  <Divider
                    style={{
                      marginBottom: ".5rem",
                      marginTop: ".5rem",
                      borderColor: "black",
                    }}
                  />
                  <p class="mb-3 font-normal text-white">Starting at $300.00</p>
                  <p class="mb-3 font-normal text-white">
                    Check out our
                    <Link to="/">
                      <span className="text-grey-400 underline pl-2 hover:text-white">
                        Add-ons
                      </span>
                    </Link>
                  </p>
                  <div className="flex flex-row justify-between mb-2">
                    <ul className="flex flex-row justify-between">
                      <li className=" flex items-center text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        $500/ 8 Hrs
                      </li>
                      <li className=" flex items-center text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        $500/ 8 Hrs
                      </li>
                      <li className=" flex items-center text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        $500/ 8 Hrs
                      </li>
                    </ul>
                  </div>
                  <div className=" m-1">
                    <Tabs
                      style={{ marginTop: "-1rem" }}
                      defaultActiveKey="1"
                      items={[
                        {
                          label: "Whats Included",
                          key: "1",
                          children: (
                            <div className="grid grid-cols-2 gap-4 h-auto">
                              <ul>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Generator
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  13X13 Tarp
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Shoe Rack
                                </li>
                              </ul>
                              <ul>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Blower
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Rules Sign
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                        {
                          label: "Add-Ons",
                          key: "2",
                          children: (
                            <div className="grid grid-cols-2 gap-4 h-auto">
                              <ul>
                                <li class="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  Photography
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  Vinyl Themes
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  Balloon Garland
                                </li>
                              </ul>
                              <ul>
                                <li class="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  Fringe Garland
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                  <Link to="/checkout">
                    <button className="bg-white text-black rounded-md w-36  border-black border shadow-lg hover:bg-stone-400 hover:border-white hover:text-black">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 lg:col-start-2 lg:row-start-1 flex justify-center items-center">
          <div className="col-start-2 row-start-1 flex justify-center items-center">
            <div
              href="#"
              class="flex flex-col bg-white border  rounded-lg shadow-lg md:flex-row "
            >
              <div className="w-72 flex flex-col justify-center">
                <Caro />
              </div>

              <div className="lg:left-shadow">
                <div class="flex flex-col justify-start  leading-normal p-4 bg-[#c0a58e] rounded-r left-shadow">
                  <h5
                    class="mb-2 p-1 text-xl font-bold tracking-tight text-white"
                    className="test-font-2"
                  >
                    Classic Castle
                  </h5>
                  <div class="flex flex-row w-72 justify-between">
                    <p class=" text-[.75rem] text-gray-700 ">13x13</p>
                    <p class=" text-[.75rem] text-gray-700">
                      4-8 Jumpers, Adult Friendly!
                    </p>
                  </div>
                  <Divider
                    style={{
                      marginBottom: ".5rem",
                      marginTop: ".5rem",
                      borderColor: "black",
                    }}
                  />
                  <p class="mb-3 font-normal text-gray-700  ">
                    Starting at $300.00
                  </p>
                  <p class="mb-3 font-normal text-gray-700 ">
                    Check out our
                    <Link to="/">
                      <span className="text-grey-400 underline pl-2 hover:text-white">
                        Add-ons
                      </span>
                    </Link>
                  </p>
                  <div className="flex flex-row justify-between mb-2">
                    <ul className="flex flex-row justify-between">
                      <li className=" flex items-center text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        $500/ 8 Hrs
                      </li>
                      <li className=" flex items-center text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        $500/ 8 Hrs
                      </li>
                      <li className=" flex items-center text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        $500/ 8 Hrs
                      </li>
                    </ul>
                  </div>
                  <div className=" m-1">
                    <Tabs
                      style={{ marginTop: "-1rem" }}
                      defaultActiveKey="1"
                      items={[
                        {
                          label: "Whats Included",
                          key: "1",
                          children: (
                            <div className="grid grid-cols-2 gap-4 h-auto">
                              <ul>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Generator
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  13X13 Tarp
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Shoe Rack
                                </li>
                              </ul>
                              <ul>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Blower
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  Rules Sign
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                        {
                          label: "Add-Ons",
                          key: "2",
                          children: (
                            <div className="grid grid-cols-2 gap-4 h-auto">
                              <ul>
                                <li class="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  Photography
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  Vinyl Themes
                                </li>
                                <li class="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  Balloon Garland
                                </li>
                              </ul>
                              <ul>
                                <li class="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  Fringe Garland
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                  <Link to="/checkout">
                    <button className="bg-white text-black rounded-md w-36  border-black border shadow-lg hover:bg-stone-400 hover:border-white hover:text-black">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 lg:col-start-1 lg:row-start-2 flex justify-center items-center ">
          <div
            href="#"
            class="flex flex-col bg-white border  rounded-lg shadow-lg md:flex-row "
          >
            <div className="w-72 flex flex-col justify-center">
              <Caro />
            </div>

            <div className="lg:left-shadow">
              <div class="flex flex-col justify-start  leading-normal p-4 bg-[#c0a58e] rounded-r left-shadow">
                <h5
                  class="mb-2 p-1 text-xl font-bold tracking-tight text-white"
                  className="test-font-2"
                >
                  The Bastille
                </h5>
                <div class="flex flex-row w-72 justify-between">
                  <p class=" text-[.75rem] text-gray-700 ">13x13</p>
                  <p class=" text-[.75rem] text-gray-700">
                    4-8 Jumpers, Adult Friendly!
                  </p>
                </div>
                <Divider
                  style={{
                    marginBottom: ".5rem",
                    marginTop: ".5rem",
                    borderColor: "black",
                  }}
                />
                <p class="mb-3 font-normal text-gray-700  ">
                  Starting at $300.00
                </p>
                <p class="mb-3 font-normal text-gray-700 ">
                  Check out our
                  <Link to="/">
                    <span className="text-grey-400 underline pl-2 hover:text-white">
                      Add-ons
                    </span>
                  </Link>
                </p>
                <div className="flex flex-row justify-between mb-2">
                  <ul className="flex flex-row justify-between">
                    <li className=" flex items-center text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      $500/ 8 Hrs
                    </li>
                    <li className=" flex items-center text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      $500/ 8 Hrs
                    </li>
                    <li className=" flex items-center text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      $500/ 8 Hrs
                    </li>
                  </ul>
                </div>
                <div className=" m-1">
                  <Tabs
                    style={{ marginTop: "-1rem" }}
                    defaultActiveKey="1"
                    items={[
                      {
                        label: "Whats Included",
                        key: "1",
                        children: (
                          <div className="grid grid-cols-2 gap-4 h-auto">
                            <ul>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Generator
                              </li>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                13X13 Tarp
                              </li>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Shoe Rack
                              </li>
                            </ul>
                            <ul>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Blower
                              </li>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Rules Sign
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                      {
                        label: "Add-Ons",
                        key: "2",
                        children: (
                          <div className="grid grid-cols-2 gap-4 h-auto">
                            <ul>
                              <li class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Photography
                              </li>
                              <li class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Vinyl Themes
                              </li>
                              <li class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Balloon Garland
                              </li>
                            </ul>
                            <ul>
                              <li class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Fringe Garland
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <Link to="/checkout">
                  <button className="bg-white text-black rounded-md w-36  border-black border shadow-lg hover:bg-stone-400 hover:border-white hover:text-black">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 lg:col-start-2 lg:row-start-2 flex  justify-center items-center">
          <div
            href="#"
            class="flex flex-col bg-white border  rounded-lg shadow-lg md:flex-row "
          >
            <div className="w-72 flex flex-col justify-center">
              <Caro />
            </div>

            <div className="lg:left-shadow">
              <div class="flex flex-col justify-start  leading-normal p-4 bg-[#c0a58e] rounded-r left-shadow">
                <h5
                  class="mb-2 p-1 text-xl font-bold tracking-tight text-white"
                  className="test-font-2"
                >
                    Pop-ups
                </h5>
                <div class="flex flex-row w-72 justify-between">
                  <p class=" text-[.75rem] text-gray-700 ">13x13</p>
                  <p class=" text-[.75rem] text-gray-700">
                    4-8 Jumpers, Adult Friendly!
                  </p>
                </div>
                <Divider
                  style={{
                    marginBottom: ".5rem",
                    marginTop: ".5rem",
                    borderColor: "black",
                  }}
                />
                <p class="mb-3 font-normal text-gray-700  ">
                  Starting at $300.00
                </p>
                <p class="mb-3 font-normal text-gray-700 ">
                  Check out our
                  <Link to="/">
                    <span className="text-grey-400 underline pl-2 hover:text-white">
                      Add-ons
                    </span>
                  </Link>
                </p>
                <div className="flex flex-row justify-between mb-2">
                  <ul className="flex flex-row justify-between">
                    <li className=" flex items-center text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      $500/ 8 Hrs
                    </li>
                    <li className=" flex items-center text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      $500/ 8 Hrs
                    </li>
                    <li className=" flex items-center text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      $500/ 8 Hrs
                    </li>
                  </ul>
                </div>
                <div className=" m-1">
                  <Tabs
                    style={{ marginTop: "-1rem" }}
                    defaultActiveKey="1"
                    items={[
                      {
                        label: "Whats Included",
                        key: "1",
                        children: (
                          <div className="grid grid-cols-2 gap-4 h-auto">
                            <ul>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Generator
                              </li>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                13X13 Tarp
                              </li>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Shoe Rack
                              </li>
                            </ul>
                            <ul>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Blower
                              </li>
                              <li class="flex items-center">
                                <svg
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Rules Sign
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                      {
                        label: "Add-Ons",
                        key: "2",
                        children: (
                          <div className="grid grid-cols-2 gap-4 h-auto">
                            <ul>
                              <li class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Photography
                              </li>
                              <li class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Vinyl Themes
                              </li>
                              <li class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Balloon Garland
                              </li>
                            </ul>
                            <ul>
                              <li class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-4 h-4 mr-1.5 text-white flex-shrink-0"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Fringe Garland
                              </li>
                            </ul>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <Link to="/checkout">
                  <button className="bg-white text-black rounded-md w-36  border-black border shadow-lg hover:bg-stone-400 hover:border-white hover:text-black">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
