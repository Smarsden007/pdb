import React from "react";
import SLeftTop from "./../Media/SquareLeftTop.png";
import SRightBottom from "./../Media/SquareRightBottom.png";
import SLeftTopr from "./../Media/local1.png";
import SRightBottomr from "./../Media/local2.png";
import { VscLocation } from "react-icons/vsc";
export const PartnerSquares = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center align-center m-2">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 w-full">
          {/* Box1 */}
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-0">
              <div
                className=" col-start-1 row-start-1"
                style={{
                  backgroundImage: `url(${SLeftTop})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="col-start-2 row-start-1 bg-[#F4CACD]">
                <div className="flex flex-row justify-end align-center items-center mb-6">
                  <div className="text-right p-4">
                    <p className="font-mono font-bold text-[#EE2743] text-3xl lg:text-6xl">
                      SO-SO
                    </p>
                    <p className="font-mono font-bold text-[#EE2743] text-3xl lg:text-6xl">
                      MARKET
                    </p>
                    <p className="font-mono font-semibold text-[#EE2743] text-xl lg:text-2xl">
                      LOCAL VINTAGE
                    </p>
                    <p className="font-mono font-semibold text-[#EE2743] text-xl lg:text-2xl">
                      & GOODS
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-center m-4">
                  <button className="font-mono text-bold text-3xl rounded-2xl w-56 h-12 bg-white text-[#EE2743] font-semibold">
                    WEBSITE
                  </button>
                </div>
              </div>
              <div className="col-start-1 row-start-2 bg-[#EE2743]">
                <div>
                  <div className="flex flex-row justify-center items-center p-4">
                    <VscLocation size={100} style={{ color: "#F4CACD" }} />
                  </div>
                  <div className="flex flex-col justify-start p-4">
                    <p className="font-mono font-bold text-[#F4CACD] text-2xl">
                      Berkley, CA.
                    </p>
                    <p className="font-mono font-bold text-[#F4CACD] text-2xl">
                      SANTA CRUZ, CA.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-start-2 row-start-2 "
                style={{
                  backgroundImage: `url(${SRightBottom})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>

          {/* Box2 */}
          <div  >
            <div className="grid grid-cols-2 grid-rows-2 gap-0 ">
              <div className=" col-start-1 row-start-1  bg-[#d6dfe5]">
                <div className="flex flex-row justify-start align-center items-center mb-6">
                  <div className="text-left p-4">
                    <p className="font-mono font-bold text-[#536e77] text-3xl lg:text-6xl">
                      LOCAL
                    </p>
                    <p className="font-mono font-bold text-[#536e77] text-3xl lg:text-6xl">
                      ROOTS
                    </p>
                    <p className="font-mono font-semibold text-[#536e77] text-xl lg:text-2xl">
                      MAKER'S
                    </p>
                    <p className="font-mono font-semibold text-[#536e77] text-xl lg:text-2xl">
                      MARKET
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-center m-4">
                  <button className="font-mono text-bold text-3xl rounded-2xl w-56 h-12 bg-white text-[#536e77] font-semibold">
                    WEBSITE
                  </button>
                </div>
              </div>
              <div
                className="col-start-2 row-start-1 "
                style={{
                  backgroundImage: `url(${SLeftTopr})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="col-start-1 row-start-2 "
                style={{
                  backgroundImage: `url(${SRightBottomr})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="col-start-2 row-start-2 bg-[#536e77]">
                <div >
                  <div className="flex flex-row justify-center items-center p-4">
                    <VscLocation size={100} style={{ color: "#d6dfe5" }} />
                  </div>
                  <div className="flex flex-col justify-end p-4 text-right">
                    <p className="font-mono font-bold text-[#d6dfe5] text-lg lg:text-2xl">
                      PETAlUMA, CA.
                    </p>
                    <p className="font-mono font-bold text-[#d6dfe5] text-lg lg:text-2xl">
                      SANTA ROSA, CA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
