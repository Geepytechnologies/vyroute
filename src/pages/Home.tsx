import React, { useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";
import Hero from "../components/Hero";
import OurRoutes from "../components/OurRoutes";
import Values from "../components/Values";
import Mapcomponent from "../components/admin/Mapcomponent";

type Props = {};

const Home = (props: Props) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error(`Error getting location: ${error.message}`);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []);
  return (
    <div>
      <BasicLayout>
        <Hero />
        <Values />
        <OurRoutes />
        {/* <Mapcomponent /> */}
      </BasicLayout>
    </div>
  );
};

export default Home;
