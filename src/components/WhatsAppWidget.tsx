import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+17809722452"; // Your phone number
  const defaultMessage = "Hi Andres! I'm interested in discussing a project opportunity.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Bubble */}
        {isOpen && (
          <div className="mb-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/20 max-w-xs animate-fade-in-up">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Andres Tenias</div>
                  <div className="text-xs text-green-500 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="bg-gray-100 p-3 rounded-lg text-sm">
                👋 Hi there! Ready to discuss your next project?
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-sm">
                Let's chat about how I can help bring your ideas to life!
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Start WhatsApp Chat
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center relative"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6" />
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">1</span>
              </div>
              {/* Pulse animation */}
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default WhatsAppWidget;