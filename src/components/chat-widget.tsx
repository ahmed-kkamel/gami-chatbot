import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ChatButton from "./chat-button";
import { ChatHeader } from "./chat-header";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { useChatWidget } from "../hooks/use-chatWidget";

export default function ChatWidget() {
    const {
        isOpen,
        setIsOpen,
        messages,
        input,
        setInput,
        showOptions,
        showFeedback,
        setShowFeedback,
        showAssistanceForm,
        messageOptions,
        sendMessage,
        handleCloseAssistanceForm,
        handleCloseFeedback,
        handleReset,
        isLoading,
        setIsLoading,
        textDirection,
        showContact,
        handleShowContact,
        handleCloseContact,
        handleCloseChat,
    } = useChatWidget();

    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <ChatButton isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        width: isExpanded && !isMobile ? "96vw" : "24rem",
                        height: isExpanded && !isMobile ? "85vh" : "75vh",
                        borderRadius: isExpanded && !isMobile ? "0px" : "12px",
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed bottom-2 md:bottom-4 right-1 md:right-6 max-w-[90vw] bg-white shadow-xl flex flex-col overflow-hidden outline outline-[#FFFFFF]"
                >
                    <ChatHeader
                        handleReset={handleReset}
                        handleCloseChat={handleCloseChat}
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded}
                        isMobile={isMobile}
                    />

                    <ChatMessages
                        messages={messages}
                        showOptions={showOptions}
                        showAssistanceForm={showAssistanceForm}
                        messageOptions={messageOptions}
                        sendMessage={sendMessage}
                        showFeedback={showFeedback}
                        setShowFeedback={setShowFeedback}
                        handleCloseFeedback={handleCloseFeedback}
                        handleCloseAssistanceForm={handleCloseAssistanceForm}
                        isLoading={isLoading}
                        isExpanded={isExpanded}
                        isMobile={isMobile}
                        setIsLoading={setIsLoading}
                        textDirection={textDirection}
                        showContact={showContact}
                        handleCloseContact={handleCloseContact}
                        handleCloseChat={handleCloseChat}
                    />

                    <ChatInput
                        input={input}
                        setInput={setInput}
                        sendMessage={sendMessage}
                        showSecondryOptions={false}
                        isLoading={isLoading}
                        isOpen={isOpen}
                    />

                    <div className={`flex items-center justify-center gap-2 ${!isExpanded || isMobile ? 'flex-col' : 'flex-row'}`}>
                        <p className="text-black text-[10px]">GIVA may make mistakes. Please verify important information. Do not share sensitive or personal information.<span>
                            <button
                                onClick={handleShowContact}
                                className="text-[#083032] ml-1 underline text-[12px]"
                            >
                                Contact Us
                            </button>
                        </span></p>

                    </div>

                </motion.div>


            )}

            {/* {showFeedback &&
                <ChatFeedback
                    handleCloseFeedback={handleCloseFeedback}
                />
            } */}
        </>
    );
}