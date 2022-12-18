import React from "react";

export const DashView = () => {
  return (
    <div class='gridm grid-cols-4'>
      <div className="w-full">
        <div>
          <h1 class=" p-6 font-extrabold text-transparent text-5xl py-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Welcome,User_From_DataBase
          </h1>
          <ul>
            <ul></ul>
          </ul>
        </div>
        <div class="">
          <div>
            <div class="flex justify-center">
              <div class="w-40 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  YTD
                </h5>
                <p class="text-gray-700 text-base mb-4">10</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="w-40 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  MTD
                </h5>
                <p class="text-gray-700 text-base mb-4">10</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="w-40 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Toddler
                </h5>
                <p class="text-gray-700 text-base mb-4">10</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class=" w-40 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Castle
                </h5>
                <p class="text-gray-700 text-base mb-4">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
