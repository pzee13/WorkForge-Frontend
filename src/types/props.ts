import { Dispatch, SetStateAction } from "react";

export interface Selected {
    link: string;
    setSelectedLink: Dispatch<SetStateAction<String>>;
  }
