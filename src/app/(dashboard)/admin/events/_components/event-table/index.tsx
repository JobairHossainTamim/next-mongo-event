"use client";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const EventTable = ({ events }: { events: any }) => {
  const router = useRouter();
  return (
    <div className="mt-5">
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Organizer</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>Time</TableColumn>
          <TableColumn>Location</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {events.map((event: any) => (
            <TableRow key={event._id.toString()}>
              <TableCell>{event.name}</TableCell>
              <TableCell className="max-w-md truncate">
                {event.description}
              </TableCell>
              <TableCell>{event.date.toString()}</TableCell>
              <TableCell>{event.time}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>
                <div className="flex gap-5">
                  <Button isIconOnly size="sm">
                    <i className="ri-delete-bin-line"></i>
                  </Button>

                  <Button
                    isIconOnly
                    size="sm"
                    onClick={() => {
                      router.push(`/admin/events/edit-event/${event._id}`);
                    }}
                  >
                    <i className="ri-pencil-line"></i>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EventTable;
