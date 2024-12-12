import React, { useState } from "react";
import { Button, Chip, Input, Textarea } from "@nextui-org/react";

// Define the props for the component
export interface EventFormStepProps {
  event: any;
  setEvent: React.Dispatch<React.SetStateAction<any>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  newlySelectedImages: any[];
  setNewlySelectedImages?: React.Dispatch<React.SetStateAction<any[]>>;
}

const General = ({
  event,
  activeStep,
  setActiveStep,
  setEvent,
}: EventFormStepProps) => {
  const [guest, setGuest] = useState<string>("");

  const getCommonProps = (name: string) => {
    return {
      value: event?.[name],
      onchange: (e: any) => setEvent({ ...event, [name]: e.target.value }),
      labelPlacement: "outside",
      isRequired: true,
    } as any;
  };

  const onGuestAdd = () => {
    const newGuests = guest
      .split(",")
      .map((g) => g.trim())
      .filter(Boolean);
    const updatedGuests = event?.guest
      ? [...event.guest, ...newGuests]
      : newGuests;
    setEvent({ ...event, guest: Array.from(new Set(updatedGuests)) }); // Avoid duplicates
    setGuest(""); // Clear the guest input
  };

  const onGuestRemove = (guestToRemove: number) => {
    const newGuests = event?.guest?.filter(
      (_: string, index: number) => index !== guestToRemove
    );

    setEvent({ ...event, guest: newGuests });
  };

  return (
    <div className="flex flex-col gap-5">
      <Input
        label="Event Name"
        placeholder="Event Name"
        {...getCommonProps("name")}
      />
      <Input
        label="Organizer"
        placeholder="Enter Organizer Name"
        {...getCommonProps("organizer")}
      />

      <Textarea
        label="Description"
        placeholder="Enter Description"
        {...getCommonProps("description")}
      />

      <div className="flex gap-5 items-end">
        <Input
          label="Organizer"
          placeholder="Enter Organizer Name"
          value={guest}
          labelPlacement="outside"
          onChange={(e) => {
            setGuest(e.target.value);
          }}
        />
        <Button color="primary" onClick={onGuestAdd}>
          Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-5">
        {event?.guest?.map((guest: string, index: number) => (
          <Chip
            onClose={() => {
              onGuestRemove(index);
            }}
            key={index}
          >
            {guest}
          </Chip>
        ))}
      </div>

      <div className="flex justify-center gap-5">
        <Button>Cancel</Button>
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

export default General;
