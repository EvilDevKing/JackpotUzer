import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Champion from "@/components/Champion";

export const metadata: Metadata = {
    title: "Uzer Pass | ChampionShip",
};

const Championship = () => {
  return (
    <DefaultLayout>
      <Champion />
    </DefaultLayout>
  );
};

export default Championship;
