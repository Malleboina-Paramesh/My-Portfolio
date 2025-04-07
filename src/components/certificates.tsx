import { Card } from "@/components/ui/card";

const Certificates: React.FC = () => {
  return (
    <section
      id="Certificates"
      className="bg-white py-16 min-h-screen flex items-center scroll-mt-2"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-500">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* Certificate 1 */}
          <div className="relative w-full max-w-md">
            <div className="absolute -top-3 -left-3 w-full h-full border-t-4 border-l-4 border-slate-400 rounded-2xl z-0 pointer-events-none"></div>
            <Card className="w-full aspect-[3/2] shadow-lg overflow-hidden relative z-10 transform transition-transform duration-500 hover:scale-[1.04]">
              <img
                src="/Nptel_Certifcate.jpg"
                alt="Certificate 1"
                className="w-full h-full object-contain"
              />
            </Card>
          </div>

          {/* Certificate 2 */}
          <div className="relative w-full max-w-md">
            <div className="absolute -top-3 -left-3 w-full h-full border-t-4 border-l-4 border-slate-400 rounded-2xl z-0 pointer-events-none"></div>
            <Card className="w-full aspect-[3/2] shadow-lg overflow-hidden relative z-10 transform transition-transform duration-500 hover:scale-[1.05]">
              <img
                src="/Verzeo_Certificate.jpg"
                alt="Certificate 2"
                className="w-full h-full object-contain"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
