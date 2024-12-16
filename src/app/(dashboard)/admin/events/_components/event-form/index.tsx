"use client";
import Steps from "@/components/Steps";
import General from "./General";
import LocationAndDate from "./LocationAndDate";
import Media from "./Media";
import Tickets from "./Tickets";
import { useState } from "react";
import { uploadToFirebaseUrl } from "@/helper/image-upload";
import toast from "react-hot-toast";

const EventForm = () => {
  const [activeStep = 0, setActiveStep] = useState<number>(0);
  const [event, setEvent] = useState<any>(null);
  // images
  const [newlySelectedImages = [], setNewlySelectedImages] = useState<any[]>(
    []
  );

  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();
      event.images = await uploadToFirebaseUrl(
        newlySelectedImages.map((image: any) => image.file)
      );
      console.log(event);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const commonProps = {
    event,
    setEvent,
    activeStep,
    setActiveStep,

    // images
    newlySelectedImages,
    setNewlySelectedImages,
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Steps
          stepNames={["General", "Location & Date", "Media", "Tickets"]}
          stepContent={[
            <General {...commonProps} />,
            <LocationAndDate {...commonProps} />,
            <Media {...commonProps} />,
            <Tickets {...commonProps} />,
          ]}
          activeStep={activeStep}
        ></Steps>
      </form>
    </div>
  );
};

export default EventForm;
