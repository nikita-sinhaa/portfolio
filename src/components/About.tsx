
import React from "react";
import nikita1 from "@/assets/nikita-1.png";
import nikita2 from "@/assets/nikita-2.png";
import nikita3 from "@/assets/nikita-3.png";
import nikita4 from "@/assets/nikita-4.png";
import nikita5 from "@/assets/nikita-5.png";
import nikita6 from "@/assets/nikita-6.png";

const About = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-white space-y-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">Beyond Firmware</h1>
        <H2 className="text-2xl font-semibold mt-2">Who is Nikita?</H2>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-6 justify-center">
          <img src={nikita1} alt="Nikita" className="w-64 rounded-xl shadow-lg" />
          <p className="text-lg max-w-xl text-left">
            Embedded engineer, sensor enthusiast, and a proud process control fanatic. Storyteller in code and beyond. I build real-time systems that think fast and run clean.
            <br /><br />
            Outside the lab, you’ll find me <span className="text-blue-400">writing</span>, <span className="text-blue-400">exploring new places</span>,
            <span className="text-blue-400"> cooking something spicy</span>, or <span className="text-blue-400">clicking photographs of the most random building around.</span>
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-10">My Firmware Journey 💡</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-blue-500 rounded-lg p-6 backdrop-blur-lg bg-white/5">
            <h4 className="text-xl font-bold text-blue-400 mb-2">The Spark</h4>
            <p>
              Surrounded by mechanical and electrical engineers since childhood, I was sketching circuits and taking apart toys before I learned algebra. By middle school, I knew one thing: I’d become an <span className="text-blue-400">engineer</span>.
            </p>
          </div>
          <div className="border border-blue-500 rounded-lg p-6 backdrop-blur-lg bg-white/5">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Booting into Reality</h4>
            <p>
              My work at <span className="bold">Kirloskar</span> and <span className="bo;d">Kohler</span> brought me face to face with the real challenges of automation. That’s when I discovered the power of firmware in the real world.
            </p>
          </div>
          <div className="border border-blue-500 rounded-lg p-6 backdrop-blur-lg bg-white/5">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Where it All Intersected</h4>
            <p>
              At Manipal Institute of Technology, I chose Instrumentation & Control Engineering. A perfect blend of mechanical logic and electrical depth. This is where I fell in love with <span className="text-blue-400">process control, PLCs, and signal processing.</span>
            </p>
          </div>
          <div className="border border-blue-500 rounded-lg p-6 backdrop-blur-lg bg-white/5">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Talking to Hardware</h4>
            <p>
              Today, I build <span className="text-blue-400">real-time systems</span> that listen, think, and respond. I write code that speaks directly to machines with <span className="text-blue-400">precision, intent, and zero fluff.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-left max-w-xl">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">My Goals 🚀</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>💼 Land my dream job where I could explore my knowledge to the fullest.</li>
            <li>🧘 Stay grounded and growing: physically stronger, mentally sharper.</li>
            <li>🛠 Build a real-time system that genuinely helps people.</li>
            <li>🤝 Be part of impactful work at the intersection of humanity and technology.</li>
            <li>🌍 Travel the world’s national parks and collect stories from every corner.</li>
            <li>🏡 Build my parents’ dream home nestled in the quiet of the hills.</li>
          </ul>
        </div>
        <img src={nikita2} alt="Nikita and dog" className="w-72 rounded-xl shadow-lg" />
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-blue-500 mb-4 text-center">Things That Attract Me 💚</h3>
        <p className="text-center max-w-2xl mx-auto text-md text-gray-300 mb-6 italic">
          Photography is how I see things just quietly, carefully, and sometimes differently 👀📷. It’s not about taking photos. It’s about noticing what’s worth remembering ✨🖼️
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <img src={nikita3} className="rounded-lg shadow-md" />
          <img src={nikita4} className="rounded-lg shadow-md" />
          <img src={nikita5} className="rounded-lg shadow-md" />
          <img src={nikita6} className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default About;
