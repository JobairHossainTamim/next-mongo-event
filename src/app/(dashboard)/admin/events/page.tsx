import EventModel from "@/app/modules/event/event.model";
import PageTitle from "@/components/PageTitle";

import Link from "next/link";
import EventTable from "./_components/event-table";
import { IEvent } from "@/interfaces/event";
import { connectDB } from "@/config/dbConfig";

const EventPage = async () => {
  await connectDB();

  const events: IEvent = (await EventModel.find()
    .sort({ createdAt: -1 })
    .lean()
    .exec()) as any;

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title={"Events"}></PageTitle>
        <Link
          href={"/admin/events/new-event"}
          className="bg-primary text-white px-5 py-2 rounded-sm"
        >
          Create Event
        </Link>
      </div>

      <EventTable events={events} />
    </div>
  );
};

export default EventPage;
