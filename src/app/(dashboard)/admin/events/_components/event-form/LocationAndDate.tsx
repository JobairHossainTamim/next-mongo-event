import React from "react";
import { EventFormStepProps } from "./General";
import { Button, Input } from "@nextui-org/react";

const LocationAndDate = ({
  event,
  setEvent,
  activeStep,
  setActiveStep,
}: EventFormStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Location"
        label="Location"
        value={event?.location}
        onChange={(e) => setEvent({ ...event, location: e.target.value })}
        isRequired
        labelPlacement="outside"
      />
      <div className="flex gap-5">
        <Input
          placeholder="Date"
          label="Date"
          isRequired
          labelPlacement="outside"
          value={event?.date}
          onChange={(e) => {
            setEvent({ ...event, date: e.target.value });
          }}
          type="date"
        />

        <Input
          placeholder="Time"
          label="Time"
          isRequired
          labelPlacement="outside"
          value={event?.time}
          onChange={(e) => {
            setEvent({ ...event, time: e.target.value });
          }}
          type="time"
        />
      </div>

      <div className="flex justify-center gap-5">
        <Button
          onClick={() => {
            setActiveStep(activeStep - 1);
          }}
        >
          Previous
        </Button>
        <Button
          color="primary"
          onClick={() => {
            setActiveStep(activeStep + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default LocationAndDate;
