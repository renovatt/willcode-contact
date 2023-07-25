import { z } from "zod";
import { ReactNode } from "react";
import { contactSchema } from "@/zod";

export type ContactProps = z.infer<typeof contactSchema>;

export type ContainerTypeProps ={
    children: ReactNode;
};