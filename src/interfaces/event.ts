interface ITicketType {
  type: string;
  price: number;
  quantity: number;
}

// Interface for guest
interface IGuest {
  name: string;
  email?: string;
  role?: string;
}

// Main event interface
export interface IEvent {
  _id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  guest: IGuest[];
  images: string[];
  ticketTypes: ITicketType[];
  user?: string | null;
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}
