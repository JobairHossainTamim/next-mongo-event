import PageTitle from "@/components/PageTitle";
import EventForm from "../../_components/event-form";
import EventModel from "@/app/modules/event/event.model";

interface Props {
  params: {
    eventId: string;
  };
}
const EditEvent = async ({ params }: Props) => {
  const eventId = params.eventId;

  const event = await EventModel.findById(eventId);

  return (
    <div>
      <PageTitle title="Edit Event"></PageTitle>

      <div className="bg-white p-5 mt-5">
        <EventForm />
      </div>
    </div>
  );
};

export default EditEvent;
