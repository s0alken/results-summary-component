import { motion } from "framer-motion";
import { CounterUp } from "./CounterUp";
import iconReaction from "../assets/icon-reaction.svg";
import iconMemory from "../assets/icon-memory.svg";
import iconVerbal from "../assets/icon-verbal.svg";
import iconVisual from "../assets/icon-visual.svg";

const SummaryItem = ({ item, variants }) => {

    const keys = {
        reaction: iconReaction,
        memory: iconMemory,
        verbal: iconVerbal,
        visual: iconVisual,
    }

    const icon = keys[item.category.toLowerCase()];

    return (
        <motion.div variants={variants} className={`flex justify-between pt-[18px] px-[16px] pb-[17px] rounded-[12px] ${item.category.toLowerCase()}`}>
            <div className="flex gap-[12px] font-medium">
                <img src={icon} alt={item.category} />
                {item.category}
            </div>
            <div className="font-bold text-[#303B59]">
                <CounterUp from={0} to={item.score} />
                <span className="opacity-50 ml-[8px]">/ 100</span>
            </div>
        </motion.div>
    )
}

export default SummaryItem