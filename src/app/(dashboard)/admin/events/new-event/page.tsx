import PageTitle from "@/components/PageTitle";
import EventForm from "../_components/event-form";

const NewEvent = () => {
  return (
    <div className="bg-white p-5">
      <PageTitle title="New Event"></PageTitle>

      <div className="mt-5 ">
        <EventForm />
      </div>
    </div>
  );
};

export default NewEvent;
