import PageTitle from "@/components/PageTitle";
import Link from "next/link";

const EventPage = () => {
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
    </div>
  );
};

export default EventPage;
