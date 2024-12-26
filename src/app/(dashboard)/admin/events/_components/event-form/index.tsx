"use client";
import Steps from "@/components/Steps";
import General from "./General";
import LocationAndDate from "./LocationAndDate";
import Media from "./Media";
import Tickets from "./Tickets";
import { useState } from "react";
import toast from "react-hot-toast";
import { uploadToCloudinaryAPI } from "@/helper/image-upload";
import axios from "axios";
import { useRouter } from "next/navigation";

const EventForm = () => {
  const [activeStep = 0, setActiveStep] = useState<number>(0);
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // images
  const [newlySelectedImages = [], setNewlySelectedImages] = useState<any[]>(
    []
  );

  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();
      event.images = await uploadToCloudinaryAPI(
        newlySelectedImages.map((image: any) => image.file)
      );

      await axios.post("/api/admin/event", event);
      toast.success("Event Create Successful");
      router.refresh();
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(true);
    }
  };

  const commonProps = {
    event,
    setEvent,
    activeStep,
    setActiveStep,
    loading,
    // images
    newlySelectedImages,
    setNewlySelectedImages,
  };

  return (
    <div className="h-screen w-full">
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
