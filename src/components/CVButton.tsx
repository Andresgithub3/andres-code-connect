import { Download } from "lucide-react";
import { useState } from "react";

const CVButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDownload = () => {
    setIsClicked(true);

    const link = document.createElement("a");
    link.href = "/cv/Resume_Andres Tenias_SE.pdf";
    link.download = "Andres_Tenias_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset after animation
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <button
      onClick={handleDownload}
      className="group relative inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 text-base shadow-elegant transition-all duration-300 hover:scale-105 rounded-lg overflow-hidden"
    >
      <span
        className={`
        ${isClicked ? "w-full" : "w-0"}
        absolute left-0 h-full
        transition-all duration-500
      `}
      />

      <div className="flex items-center gap-2 relative">
        <Download
          className={`h-5 w-5 transition-all duration-200 ${
            isClicked
              ? "opacity-0 translate-x-[-100%]"
              : "opacity-100 translate-x-0"
          }`}
        />
        <span
          className={`transition-all duration-200 ${
            isClicked
              ? "opacity-0 translate-x-[-100%]"
              : "opacity-100 translate-x-0"
          }`}
        >
          Download CV
        </span>
      </div>

      <span
        className={`
        absolute flex items-center gap-2 transition-all duration-200 ${
          isClicked ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }
      `}
      >
        Talk soon!
      </span>

      <span
        className={`
        ${isClicked ? "w-full" : "w-0"}
        absolute right-0 h-full
        transition-all duration-500
      `}
      />
    </button>
  );
};

export default CVButton;
