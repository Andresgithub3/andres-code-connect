import { Download } from "lucide-react";

const CVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/Resume_Andres Tenias_SE.pdf"; 
    link.download = "Andres_Tenias_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 text-base shadow-elegant transition-all duration-300 hover:scale-105 rounded-lg"
    >
      <Download className="h-5 w-5" />
      Download CV
    </button>
  );
};

export default CVButton;
