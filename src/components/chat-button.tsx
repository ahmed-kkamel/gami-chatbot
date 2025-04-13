import { motion } from "framer-motion";
import { ChatButtonProps } from "../types/chat-wedgit-types";
import Image from "next/image";

const ChatButton = ({ isOpen, setIsOpen }: ChatButtonProps) => {
    return (
        <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed bottom-3 md:bottom-6 end-6 flex items-center gap-2 bg-white ps-3 pe-2 py-2 rounded-[26px] hover:scale-110 transition-all`}
            whileTap={{ scale: 0.9 }}
        >
            <p className="text-[#616161]">Welcome to GIVA</p>
            <Image src="/assets/chat-icon.svg" alt="Chat Icon" width={24} height={24} />
        </motion.button>
    )
}

export default ChatButton