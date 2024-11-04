"use client";

import Steps from "@/components/Steps";
import General from "./General";
import LocationAndDate from "./LocationAndDate";
import Media from "./Media";
import Tickets from "./Tickets";
import { useState } from "react";

const EventForm = () => {
  const [activeStep = 0, setActiveStep] = useState(0);
  return (
    <div>
      <Steps
        stepNames={["General", "Location & Date", "Media", "Tickets"]}
        stepContent={[<General />, <LocationAndDate />, <Media />, <Tickets />]}
        activeStep={activeStep}
      ></Steps>
    </div>
  );
};

export default EventForm;
