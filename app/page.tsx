import Image from "next/image";
import Container from "./components/Container";
import MeBanner from "./sections/MeBanner";
import Description from "./sections/Description";
import { projects } from "./utils/projectsUtil";
import WebApplicationCard from "./sections/WebApplicationCard";
import GameApplicationCard from "./sections/GameCard";
import { games } from "./utils/gamesUtil";

export default function Home() {
  return (
    <div>
      <MeBanner />
      <Description />
      <div id="ProductCard">
        <h1 className="text-center text-3xl pt-8 font-bold">Web Application</h1>
        <div className="grid grid-cols-1  lg:grid-cols-2 mx-8 gap-8 mt-8 pb-8">
          {projects.map((product: any) => {
            return <WebApplicationCard data={product} key={product.id} />;
          })}
        </div>
      </div>
      <div id="Games" className=" ">
        <h1 className="text-center text-3xl pt-8 font-bold">Games</h1>
        <div className="grid grid-cols-1 pb-8 lg:grid-cols-1 gap-8 mt-8 size-1/2 mx-auto">
          {games.map((product: any) => {
            return <GameApplicationCard data={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
