import React from "react";
import ripHero from "./../Media/LeftHeroRip.png";
import roundTop from "./../Media/RoundTop.png";
import gravity from "./../Media/Test.png";
import Castle from "./../Media/CastlePol.png";
import logo from "./../Media/logo.png";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import { SubHero } from "../clientComps/SubHero";
const { Title } = Typography;

export const Homepage = () => {
  return (
    <div>
      <div class="grid grid-cols-2  grid-rows-6  md:grid-cols-4 lg:grid-cols-5 lg:grid-rows-6">
        {/* imageholder left */}
        <div
          class="grid col-span-1 row-span-4 md:col-span-2 lg:col-span-2 lg:row-span-6 lg:z-10 lg:row-start-1 lg:col-start-1"
          style={{ position: "relative" }}
        >
          <img class="h-auto w-11/12" src={ripHero}></img>
          <div style={{
          position: "absolute",
          zIndex:10,
          top: "70px",
          left: "10px",
          width: "250px",
          height: "90px",
          background: `url(${logo}) no-repeat`,
          backgroundSize: "cover"
        }}>
     
</div>

        </div>
        <div
          class="grid col-end-3 col-span-2  row-span-3 md:col-span-2 lg:col-span-2 lg:col-end-6 lg:row-start-2 lg:mt-16 lg:row-span-6 lg:z-20 
           "
        >
          <img class="h-auto w-10/12 p-4 ml-14" src={roundTop} />
        </div>
        <div class=" flex flex-row lg:col-start-4 lg:col-span-2 z-30 lg:row-start-1 m-0">
          {/* <Link to="/">
            <div class="-ml-10">
              <img class="h-auto max-w-full" src={Castle} />
            </div>
          </Link>
          <Link to="/route1">
            <div class="-ml-10">
              <img class="h-auto max-w-full" src={Castle} />
            </div>
          </Link>

          <Link to="/route1">
            <div class="-ml-10">
              <img class="h-auto max-w-full" src={Castle} />
            </div>
          </Link> */}
        </div>
        <div
          class="lg:col-start-2 lg:col-end-5 lg:row-start-3 lg: lg:z-50 -mt-32
           "
        >
          <img class="h-auto w-10/12 p-1" src={gravity} />
        </div>
        <div class="lg:col-start-3  lg:row-start-4 lg:row-span-3">
          <Title level={5} style={{ fontWeight: "lighter" }}>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc
          </Title>
          <div class="mt-10">
            <Link to="/">
              <Button>Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
      <SubHero />
    </div>
  );
};
