// Ensure this entire component is client-side
"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LayoutProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const isPrivateRoute = !["/sign-in", "/sign-up"].includes(pathname);

  const [menuToShow, setMenuToShow] = useState<any[]>([]);

  const menuForAdmin = [
    { title: "Home", path: "/" },
    { title: "Event", path: "/admin/events" },
    { title: "Bookings", path: "/admin/bookings" },
    { title: "Users", path: "/admin/users" },
    { title: "Report", path: "/admin/reports" },
  ];

  const menuForUser = [
    { title: "Home", path: "/" },
    { title: "Bookings", path: "/admin/bookings" },
  ];

  const getUserData = async () => {
    try {
      const response = await axios.get("/api/current-user");
      if (response.data.user?.isAdmin) {
        setMenuToShow(menuForAdmin);
      } else {
        setMenuToShow(menuForUser);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="bg-gray-100 h-screen lg:px-20 px-5">
      {isPrivateRoute && (
        <div className="bg-white flex justify-between items-center shadow p-3">
          <h1 className="text-gray-600 font-semibold text-2xl">Event</h1>
          <div className="flex gap-8 items-center">
            <Dropdown size="sm">
              <DropdownTrigger>
                <Button variant="bordered">Profile</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {menuToShow.map((menu, index) => (
                  <DropdownItem
                    key={index}
                    onClick={() => {
                      router.push(menu.path);
                    }}
                  >
                    {menu.title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
      <div className="py-3">{children}</div>
    </div>
  );
};

export default LayoutProvider;
