import { Card } from "@/components/ui/card";

const Certificates: React.FC = () => {
  return (
    <section
      id="Certificates"
      className="bg-white py-10 min-h-screen flex items-center scroll-mt-2"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-400">Certificates</h2>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          {/* Certificate 1 */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-[470px] h-[320px] border-t-4 border-l-4 border-slate-400 rounded-2xl z-0"></div>
            <Card className="w-[450px] h-[300px] p-0 shadow-lg overflow-hidden relative z-10 transform transition-transform duration-500 hover:scale-104">

              <img
                src="/Nptel_Certifcate.jpg"
                alt="Certificate 1"
                className="w-full h-full object-contain"

              />
            </Card>
          </div>

          {/* Certificate 2 */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-[470px] h-[320px] border-t-4 border-l-4 border-slate-400 rounded-2xl z-0"></div>
            <Card className="w-[450px] h-[300px] p-0 shadow-lg overflow-hidden relative z-10 transform transition-transform duration-500 hover:scale-105">
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
