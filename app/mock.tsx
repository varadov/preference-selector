import { Clapperboard, Gamepad2, LibraryBig, Music, Plane } from "lucide-react";
import { ReactNode } from "react";

type TCategory = {
  id: number;
  name: string;
  icon?: ReactNode;
  subCategories?: TCategory[];
};

const categories: TCategory[] = [
  {
    id: 1,
    name: "Music",
    icon: <Music size={20} />,
    subCategories: [
      {
        id: 11,
        name: "Rock",
      },
      {
        id: 12,
        name: "Pop",
      },
    ],
  },
  {
    id: 2,
    name: "Movies",
    icon: <Clapperboard size={20} />,
    subCategories: [
      {
        id: 21,
        name: "Horror",
      },
    ],
  },
  {
    id: 3,
    name: "Books",
    icon: <LibraryBig size={20} />,
    subCategories: [
      {
        id: 31,
        name: "Fiction",
      },
      {
        id: 32,
        name: "Romance",
      },
    ],
  },
  {
    id: 4,
    name: "Video Games",
    icon: <Gamepad2 size={20} />,
    subCategories: [
      {
        id: 41,
        name: "RPG",
      },
      {
        id: 42,
        name: "Shooter",
      },
    ],
  },
  {
    id: 5,
    name: "Travel",
    icon: <Plane size={20} />,
  },
];

export default categories;
