import React, { useState } from 'react';
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
import Empowermint from "./../../../Media/Balloon PNG/Crystalyellow.png";
import Evergreen from "./../../../Media/Balloon PNG/Crystalyellow.png";
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
import Metalicmidnight from "./../../../Media/Balloon PNG/Metalicmidnight.png";
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
import BalloonCarousel from "../../BalloonCarousel";
import { Selectedballoons } from './Selectedballoons';

const balloons = [
    { name: 'Baby Blue', src: './../../../Media/Balloon PNG/Babyblue.png' },
    { name: 'Baby Pink', src: './../../../Media/Balloon PNG/Babypink.png' },
    { name: 'Black', src: './../../../Media/Balloon PNG/Black.png' },
    { name: 'Blue', src: './../../../Media/Balloon PNG/Blue.png' },
    // ... add the rest of the balloons here
  ];
  

  export const BalloonSelector = () => {
    const [selectedBalloons, setSelectedBalloons] = useState([]);
  
    const handleSelectBalloon = (index) => {
      const balloon = balloons[index];
      const isBalloonSelected = selectedBalloons.some(
        (selected) => selected.name === balloon.name
      );
      if (isBalloonSelected) {
        setSelectedBalloons((prevSelected) =>
          prevSelected.filter((selected) => selected.name !== balloon.name)
        );
      } else {
        setSelectedBalloons((prevSelected) => [
          ...prevSelected,
          { name: balloon.name, src: balloon.src },
        ]);
      }
    };
  
    return (
      <div>
        <h2>Select your balloons:</h2>
        <div className="balloon-selector">
          {balloons.map((balloon, index) => (
            <img
              key={index}
              src={balloon.src}
              alt={balloon.name}
              className={`balloon-image ${
                selectedBalloons.some(
                  (selected) => selected.name === balloon.name
                ) && "selected"
              }`}
              onClick={() => handleSelectBalloon(index)}
            />
          ))}
        </div>
        <Selectedballoons balloons={selectedBalloons} />
        <BalloonCarousel balloons={selectedBalloons} />
      </div>
    );
  };
  