import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import { Experience as Exp } from '../../data/data';

const Experience = () => {
  const date = new Date();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - {date.getFullYear()}</p>
          <h2 className="text-4xl font-bold">Expérience professionnel</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {Exp.map( (data,index) => (
            <ResumeCard
              key={index}
              title={data.title}
              subTitle={data.subTitle}
              result={data.result}
              des={data.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
