import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Champion from "@/components/Champion";

export const metadata: Metadata = {
    title: "Uzer Pass | ChampionShip | Add New",
};

const CreateNew = () => {
  return (
    <DefaultLayout>
      <Champion />
    </DefaultLayout>
  );
};

export default CreateNew;
