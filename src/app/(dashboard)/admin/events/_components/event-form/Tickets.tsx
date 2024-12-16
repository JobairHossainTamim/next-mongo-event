import React from "react";
import { EventFormStepProps } from "./General";
import { Button, Input } from "@nextui-org/react";
import toast from "react-hot-toast";

const Tickets = ({
  event,
  setEvent,
  activeStep,
  setActiveStep,
}: EventFormStepProps) => {
  const onAddTicketType = () => {
    try {
      const tempEvent = { ...event };

      if (event?.ticketTypes) {
        tempEvent.ticketTypes.push({
          name: "",
          price: 0,
          quantity: 0,
        });
      } else {
        tempEvent.ticketTypes = [
          {
            name: "",
            price: 0,
            quantity: 0,
          },
        ];
      }

      setEvent(tempEvent);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const onTicketPropertyChange = ({
    index,
    property,
    value,
  }: {
    index: number;
    property: string;
    value: any;
  }) => {
    const tempEvent = { ...event };
    tempEvent.ticketTypes[index][property] = value;
    setEvent(tempEvent);
  };

  const onTicketTypeDelete = (index: number) => {
    const temEvent = { ...event };
    temEvent.ticketTypes.splice(index, 1);
    setEvent(temEvent);
  };

  return (
    <div>
      {event?.ticketTypes && event?.ticketTypes?.length > 0 ? (
        <div>
          <div className="grid grid-cols-4 bg-gray-300  rounded justify-between p-2 gap-5">
            {["Name", "Price", "Limit", "Action"].map((item, index) => (
              <h1 className="font-semibold" key={index}>
                {item}
              </h1>
            ))}
          </div>
        </div>
      ) : (
        <p></p> // Fallback UI
      )}

      {event?.ticketTypes?.map((ticketType: any, index: number) => (
        <div className="grid grid-cols-4 gap-5 mt-4" key={index}>
          <Input
            placeholder="Name"
            onChange={(e) => {
              onTicketPropertyChange({
                index,
                property: "name",
                value: e.target.value,
              });
            }}
          />
          <Input
            placeholder="Price"
            type="number"
            onChange={(e) => {
              onTicketPropertyChange({
                index,
                property: "price",
                value: e.target.value,
              });
            }}
          />
          <Input
            placeholder="Limit"
            type="number"
            onChange={(e) => {
              onTicketPropertyChange({
                index,
                property: "limit",
                value: e.target.value,
              });
            }}
          />
          <Button isIconOnly onClick={() => onTicketTypeDelete(index)}>
            <i className="ri-delete-bin-line"></i>
          </Button>
        </div>
      ))}

      <Button className="mt-5" onClick={onAddTicketType}>
        Add Ticket Type
      </Button>
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
          type="submit"
          isDisabled={event?.ticketTypes?.length === 0}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Tickets;
