
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartMarket from "@/assets/project-iot.jpg";
import zephyrRtos from "@/assets/project-automation.jpg";
import uefiBootloader from "@/assets/project-wearable.jpg";

const projects = [
  {
    title: "Smart Market AI (Fraud Detection)",
    description:
      "A Graph Neural Network-based fraud detection dashboard built with Streamlit + PyG + Neo4j. Designed for e-commerce marketplaces.",
    image: smartMarket,
    tech: ["Python", "PyTorch Geometric", "Streamlit", "Neo4j"],
    github: "https://github.com/nikita-sinhaa/Smart-Market-AI",
    live: ""
  },
  {
    title: "Real-Time Sensor Hub (Zephyr RTOS)",
    description:
      "Built on STM32, this platform uses DMA, low-power modes, and circular buffers to communicate with sensors in real time.",
    image: zephyrRtos,
    tech: ["C", "Zephyr RTOS", "STM32", "DMA", "I2C/SPI"],
    github: "https://github.com/nikita-sinhaa/zephyr-rtos-sensor-hub",
    live: ""
  },
  {
    title: "UEFI Bootloader for ARM SoC",
    description:
      "A UEFI-compliant bootloader for ARMv8 using EDK II. Initializes UART, SPI, and I2C in PEIM phase for custom board bring-up.",
    image: uefiBootloader,
    tech: ["C", "UEFI", "ARMv8", "EDK II"],
    github: "https://github.com/nikita-sinhaa/uefi-bootloader-arm",
    live: ""
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-md border border-yellow-500 rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold text-yellow-400">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline" size="icon" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                {project.live && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
