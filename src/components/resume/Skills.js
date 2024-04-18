import React from 'react'
import { motion } from 'framer-motion';
import { SkillOne, SkillTwo } from '../../data/data';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Compétences Principales</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
        {SkillOne.map( (data, index) => (
          <div key={index} className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">{data.title}</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                style={{ width: data.percentage,}}
              >
                <span className="absolute -top-7 right-0">{data.percentage}</span>
              </motion.span>
            </span>
          </div>
        ))}
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Autres compétences</h2>
        </div>
        <div className="flex flex-col gap-6">
        {SkillTwo.map( (data, index) => (
          <div key={index} className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">{data.title}</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                style={{ width: data.percentage,}}
              >
                <span className="absolute -top-7 right-0">{data.percentage}</span>
              </motion.span>
            </span>
          </div>
        ))}
        </div> 
      </div>
    </motion.div>
  );
}

export default Skills