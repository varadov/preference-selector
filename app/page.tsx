import { Category } from "@/components/ui/category";
import { Card } from "@/components/ui/card";
import {
  Clapperboard,
  Gamepad2,
  LibraryBig,
  Music,
  Plane,
  Dumbbell,
} from "lucide-react";

const MOCK_CATEGORIES = [
  {
    id: 1,
    name: "Music",
    icon: <Music size={20} />,
  },
  {
    id: 2,
    name: "Movies",
    icon: <Clapperboard size={20} />,
  },
  {
    id: 3,
    name: "Books",
    icon: <LibraryBig size={20} />,
  },
  {
    id: 4,
    name: "Video Games",
    icon: <Gamepad2 size={20} />,
  },
  {
    id: 5,
    name: "Travel",
    icon: <Plane size={20} />,
  },
  {
    id: 6,
    name: "GYM",
    icon: <Dumbbell size={20} />,
  },
];

const MOCK_CHILD_CATEGORIES = [
  {
    id: 11,
    name: "Music",
    icon: <Music size={20} />,
  },
  {
    id: 22,
    name: "Movies",
    icon: <Clapperboard size={20} />,
  },
  {
    id: 33,
    name: "Books",
    icon: <LibraryBig size={20} />,
  },
  {
    id: 44,
    name: "Video Games",
    icon: <Gamepad2 size={20} />,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Card className="w-[500px] flex flex-wrap items-start gap-2 p-6">
        {MOCK_CATEGORIES.map((category) => (
          <Category key={category.id} name={category.name} icon={category.icon}>
            {MOCK_CHILD_CATEGORIES.map((childCategory) => (
              <Category
                key={childCategory.id}
                name={childCategory.name}
                icon={childCategory.icon}
              />
            ))}
          </Category>
        ))}
      </Card>
    </main>
  );
}
