"use client";
import Button from "@/components/website/button";
import Dialog from "@/components/website/Dialog";
import { useState } from "react";
import sponsorData from "../../app/(website)/sponsor/sponsorData";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export default function SponsorCard({
  data,
  className,
}: {
  data: (typeof sponsorData.sponsors)[0]["items"][0];
  className?: string;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <motion.img
        src={`/2024/sponsor/${data.image}`}
        className={twMerge(
          "mx-auto w-full cursor-pointer rounded transition-all hover:drop-shadow-lg",
          className,
        )}
        alt={data.title}
        onClick={() => setIsDialogOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
      <Dialog open={isDialogOpen} setOpen={setIsDialogOpen}>
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between text-2xl font-bold md:text-3xl">
            {data.title}
          </div>
          <img
            src={`/2024/sponsor/${data.image}`}
            className="mx-auto w-full max-w-[240px] rounded"
            alt={data.title}
          />
          <div>{data.description}</div>
          <div className="flex items-center justify-center gap-6">
            <Button
              color="blue"
              url={data.url}
              className="text-base md:text-xl"
            >
              前往網站
            </Button>
          </div>
        </div>
        <div
          className="h-4 w-full md:rounded-b-[10px]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(56, 90, 172, 0.80) 0%, rgba(148, 110, 52, 0.75) 58.96%, #462002 100%)`,
          }}
        />
      </Dialog>
    </>
  );
}
