"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const PageTitle = ({ title }: { title: String }) => {
  const router = useRouter();

  return (
    <div className="flex gap-5 items-center">
      <Button isIconOnly onClick={() => router.back()}>
        <i className="ri-arrow-left-line"></i>
      </Button>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
