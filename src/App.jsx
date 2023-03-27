import { motion } from "framer-motion";
import SummaryItem from "./components/SummaryItem";
import { CounterUp } from "./components/CounterUp";
import data from "./assets/data.json";
import { parentVariant } from "./utils";
import { childrenVariant } from "./utils";

const App = () => {

  return (
    <main className='flex justify-center min-h-[120vh] bg-pale-blue'>

      <motion.div
        className='flex-1 bg-white md:overflow-hidden md:self-center md:flex-[0_1_736px] md:flex md:shadow-[0px_30px_60px_rgba(61,108,236,0.15)] md:rounded-[32px]'
        /* initial={{ opacity: 0, scale: .3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }} */
      >

        <motion.div
          className='grid gap-[24px] bg-gradient-to-b from-light-slate-blue to-light-royal-blue pt-[24px] px-[57px] pb-[40px] text-center rounded-b-[32px] md:flex-1 md:rounded-[32px] md:pt-[38px] md:px-[54px] md:pb-[46px] md:gap-[35px]'
          //{...parentVariant}
        >
          <motion.h1
            className='text-[18px] text-light-lavender font-bold leading-[23px] md:text-[24px] md:leading-[31px]'
            //variants={childrenVariant}
          >
            Your Result
          </motion.h1>
          <motion.div
            className='w-[140px] aspect-square rounded-full justify-self-center grid content-center bg-gradient-to-b from-violet-blue to-persian-blue md:w-[200px] md:gap-[4px]'
            /* initial={{ opacity: 0, scale: .3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: .6,
              delay: 1
            }} */
          >
            <span className='font-extrabold text-white text-[56px] leading-[72px] md:text-[72px]'>
              <CounterUp from={0} to={76} />
            </span>
            <span className='font-bold text-[#CAC9FF] text-[16px] leading-[21px] opacity-[.52] md:text-[18px] md:leading-[23px]'>of 100</span>
          </motion.div>
          <div className='grid gap-[8px] md:gap-[14px] md:max-w-[260px] md:mx-auto'>
            <motion.h2 variants={childrenVariant} className='font-bold text-white text-[24px] leading-[31px] md:text-[32px] md:leading-[42px]'>Great</motion.h2>
            <motion.p variants={childrenVariant} className='font-medium text-light-lavender text-[16px] leading-[21px] md:text-[18px] md:leading-[23px]'>
              Your performance exceed 65% of the people conducting the test here!
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className='grid gap-[24px] p-[30px] pt-[24px] md:flex-1 md:pt-[38px] md:px-[40px] md:pb-[46px] md:gap-0'
          /* {...parentVariant} */
        >
          <motion.h1 /* variants={childrenVariant} */ className='text-dark-gray-blue font-bold text-[18px] leading-[23px] md:text-[24px] md:leading-[31px] md:mb-[28px]'>
            Summary
          </motion.h1>

          <div className='grid gap-[16px] text-[16px] leading-[21px] md:mb-[41px] md:text-[18px] md:leading-[23px]'>
            {data.map(item => <SummaryItem key={item.category} item={item} />)}
          </div>

          <motion.button
            className="relative overflow-hidden text-[18px] leading-[23px] font-bold bg-dark-gray-blue text-white rounded-[128px] pt-[17px] pb-[16px] before:absolute before:opacity-0 before:rounded-full before:w-[30px] before:aspect-square before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:hover:w-[150%] before:hover:opacity-100 before:transition-all before:duration-500 before:bg-light-royal-blue after:bg-gradient-to-b from-light-slate-blue to-transparent after:absolute after:inset-0 after:opacity-0 after:hover:opacity-100 after:transition-all after:duration-500 focus-visible:outline focus-visible:outline-light-royal-blue/30 focus-visible:outline-4"
            variants={childrenVariant}
          >
            <span className="relative z-10">Continue</span>
          </motion.button>

        </motion.div>
      </motion.div>
    </main>
  )
}

export default App;