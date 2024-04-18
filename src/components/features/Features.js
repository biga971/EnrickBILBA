import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import Reveal from "../reveal";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Reveal>
        <Title title="Features" des="Domaines d'expertises" />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Reveal>
            <Card item={item} key={item.id} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Features;
