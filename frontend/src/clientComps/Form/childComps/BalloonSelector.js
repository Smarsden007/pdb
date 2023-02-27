import React from "react";
import "./../../../App.css";
import "./../../../clientComps/clientStyles/Caro.css";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Babyblue from "./../../../Media/Balloon PNG/Babyblue.png";
import Babypink from "./../../../Media/Balloon PNG/Babypink.png";
import Black from "./../../../Media/Balloon PNG/Black.png";
import Blue from "./../../../Media/Balloon PNG/Blue.png";
import Blueslate from "./../../../Media/Balloon PNG/Blueslate.png";
import Blush from "./../../../Media/Balloon PNG/Blush.png";
import Burntorange from "./../../../Media/Balloon PNG/Burntorange.png";
import Cameo from "./../../../Media/Balloon PNG/Cameo.png";
import Canyonrose from "./../../../Media/Balloon PNG/Canyonrose.png";
import Clear from "./../../../Media/Balloon PNG/Clear.png";
import Cocoa from "./../../../Media/Balloon PNG/Cocoa.png";
import Coral from "./../../../Media/Balloon PNG/Coral.png";
import Crystalbburgandy from "./../../../Media/Balloon PNG/Crystalbburgandy.png";
import Crystalemerald from "./../../../Media/Balloon PNG/Crystalemerald.png";
import Crystalmagenta from "./../../../Media/Balloon PNG/Crystalmagenta.png";
import Crystalred from "./../../../Media/Balloon PNG/Crystalred.png";
import Crystalsaphire from "./../../../Media/Balloon PNG/Crystalsaphire.png";
import Crystaltangerine from "./../../../Media/Balloon PNG/Crystaltangerine.png";
import Crystalyellow from "./../../../Media/Balloon PNG/Crystalyellow.png";
import Empowermint from "./../../../Media/Balloon PNG/Empowermint.png";
import Evergreen from "./../../../Media/Balloon PNG/Evergreen.png";
import Fog from "./../../../Media/Balloon PNG/Fog.png";
import Goldenrod from "./../../../Media/Balloon PNG/Goldenrod.png";
import Green from "./../../../Media/Balloon PNG/Green.png";
import Greysmoke from "./../../../Media/Balloon PNG/Greysmoke.png";
import Hotpink from "./../../../Media/Balloon PNG/Hotpink.png";
import Lavender from "./../../../Media/Balloon PNG/Lavender.png";
import Limegreen from "./../../../Media/Balloon PNG/Limegreen.png";
import Metalicsilver from "./../../../Media/Balloon PNG/Matalicsilver.png";
import Metalicblue from "./../../../Media/Balloon PNG/Metalicblue.png";
import Metalicforest from "./../../../Media/Balloon PNG/Metalicforest.png";
import Metalicfusia from "./../../../Media/Balloon PNG/Metalicfusia.png";
import Metalicgold from "./../../../Media/Balloon PNG/Metalicgold.png";
import Metalicgrape from "./../../../Media/Balloon PNG/Metalicgrape.png";
import Metalicgreen from "./../../../Media/Balloon PNG/Metalicgreen.png";
import Metaliclilac from "./../../../Media/Balloon PNG/Metaliclilac.png";
// import Metalicmidnight from "./../../../Media/Balloon PNG/Metalicmidnight.png";
import Metalicrose from "./../../../Media/Balloon PNG/Metalicrose.png";
import Metalicseafoam from "./../../../Media/Balloon PNG/Metalicseafoam.png";
import Metalicskyblue from "./../../../Media/Balloon PNG/Metalicskyblue.png";
import Metalicstarfire from "./../../../Media/Balloon PNG/Metalicstarfire.png";
import Metalicteal from "./../../../Media/Balloon PNG/Metalicteal.png";
import Metalicwhite from "./../../../Media/Balloon PNG/Metalicwhite.png";
import Metalicyellow from "./../../../Media/Balloon PNG/Metalicyellow.png";
import Mustard from "./../../../Media/Balloon PNG/Mustard.png";
import Navy from "./../../../Media/Balloon PNG/Navy.png";
import Orange from "./../../../Media/Balloon PNG/Orange.png";
import Pink from "./../../../Media/Balloon PNG/Pink.png";
import Plumpurple from "./../../../Media/Balloon PNG/Plumpurple.png";
import Purple from "./../../../Media/Balloon PNG/Purple.png";
import Red from "./../../../Media/Balloon PNG/Red.png";
import Sangria from "./../../../Media/Balloon PNG/Sangria.png";
import Seafoam from "./../../../Media/Balloon PNG/Seafoam.png";
import Shimpink from "./../../../Media/Balloon PNG/Shimpink.png";
import Stone from "./../../../Media/Balloon PNG/Stone.png";
import Teal from "./../../../Media/Balloon PNG/Teal.png";
import Turquoise from "./../../../Media/Balloon PNG/Turquoise.png";
import White from "./../../../Media/Balloon PNG/White.png";
import Willow from "./../../../Media/Balloon PNG/Willow.png";
import Yellow from "./../../../Media/Balloon PNG/Yellow.png";

export const BalloonSelector = () => {
  const balloonColors = [
    { name: "Cameo", image: Cameo },
    { name: "Baby Pink", image: Babypink },
    { name: "Shim Pink", image: Shimpink },
    { name: "Pink", image: Pink },
    { name: "Canyon Rose", image: Canyonrose },
    { name: "Coral", image: Coral },
    { name: "Hot Pink", image: Hotpink },
    { name: "Metalic Fuchia", image: Metalicfusia },
    { name: "Crystal Magenta", image: Crystalmagenta },
    { name: "Crystal Burgundy", image: Crystalbburgandy },
    { name: "Sangria", image: Sangria },
    { name: "Red", image: Red },
    { name: "Crystal Red", image: Crystalred },
    { name: "Metalic Starfire", image: Metalicstarfire },
    { name: "Metalic Rose Gold", image: Metalicrose },
    { name: "Burnt Orange", image: Burntorange },
    { name: "Orange", image: Orange },
    { name: "Crystal Tangerine", image: Crystaltangerine },
    { name: "Metalic Yellow", image: Metalicyellow },
    { name: "Crystal Yellow", image: Crystalyellow },
    { name: "Yellow", image: Yellow },
    { name: "Golden Rod", image: Goldenrod },
    { name: "Mustard", image: Mustard },
    { name: "Metalic Gold", image: Metalicgold },
    { name: "Blush", image: Blush },
    { name: "Lime Green", image: Limegreen },
    { name: "Green", image: Green },
    { name: "Metalic Green", image: Metalicgreen },
    { name: "Crystal Emerald", image: Crystalemerald },
    { name: "Metalic Forest", image: Metalicforest },
    { name: "Evergreen", image: Evergreen },
    { name: "Willow", image: Willow },
    { name: "Empower Mint", image: Empowermint },
    { name: "Metalic Teal", image: Metalicteal },
    { name: "Teal", image: Teal },
    { name: "Metalic Seafoam", image: Metalicseafoam },
    { name: "Turquoise", image: Turquoise },
    { name: "Metalic Skyblue", image: Metalicskyblue },
    { name: "Baby Blue", image: Babyblue },
    { name: "Blue Slate", image: Blueslate },
    { name: "Blue", image: Blue },
    { name: "Metalic Blue", image: Metalicblue },
    { name: "Crystal Saphire", image: Crystalsaphire },
    { name: "Navy", image: Navy },
    { name: "Seafoam", image: Seafoam },
    { name: "Metalic Lilac", image: Metaliclilac },
    { name: "Lavender", image: Lavender },
    { name: "Plum Purple", image: Plumpurple },
    { name: "Metalic Grape", image: Metalicgrape },
    { name: "Crystal Purple", image: Purple },
    { name: "Clear", image: Clear },
    { name: "White", image: White },
    { name: "Metalic White", image: Metalicwhite },
    { name: "Fog", image: Fog },
    { name: "Metalic Silver", image: Metalicsilver },
    { name: "Grey Smoke", image: Greysmoke },
    { name: "Black", image: Black },
    { name: "Stone", image: Stone },
    { name: "Cocoa", image: Cocoa },
  ];

  // Define the properties for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="w-11/12">
        <h3 className="text-center test-font-2 p-8">
          Swipe to view our balloon library
        </h3>
        <Carousel
          responsive={responsive}
          id="Caro"
          class="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          {balloonColors.map((balloon, index) => (
            <div
              className="flex flex-col justify-center align-center items-center w-62"
              key={index}
            >
              <p className="text-center test-font-3">{balloon.name}</p>

              <img src={balloon.image} alt={balloon.name} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
