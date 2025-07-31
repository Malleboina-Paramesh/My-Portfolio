const About = () => {
  return (
    <section id="About" className="w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl gap-10">
        
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left text-slate-700 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-500">
            About Me
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-6 sm:leading-7">
  Hello, I’m Malleboina Paramesh, a passionate and determined Computer Science and Engineering graduate from the culturally vibrant town of Yadadri, Telangana. I completed my B.Tech from SR University in 2025 with a CGPA of 8.61. My journey through the tech world has been driven by curiosity, perseverance, and a desire to create meaningful impact.
</p>

<p className="text-sm sm:text-base text-slate-400 leading-6 sm:leading-7">
  Coming from a farmer’s family, I’ve grown up valuing hard work, patience, and resilience—qualities that deeply influence my academic and personal journey. I completed my Intermediate at TSRJC Sarvail (the first residential junior college in Telangana) with 94.4%, and my schooling at ZPHS Gundala with 95%.
</p>

<p className="text-sm sm:text-base text-slate-400 leading-6 sm:leading-7">
  I believe in clear communication, empathetic leadership, and consistent self-improvement. I carry a genuine eagerness to contribute meaningfully wherever I go. Whether it’s guiding peers, taking initiative, or staying consistent—I believe in showing up with purpose and intent. In my free time, I enjoy exploring stock markets and diving into Web3 technologies — for me, learning never really stops.
</p>

        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 sm:w-72 h-96">
            {/* Decorative Border */}
            <div className="absolute -top-3 -left-3 w-full h-full border-t-4 border-l-4 border-slate-400 rounded-2xl z-0"></div>

            {/* Image */}
            <img
              src="/Profile.jpeg"
              alt="Paramesh"
              className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-slate-300 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
