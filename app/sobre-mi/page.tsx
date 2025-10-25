"use client";

import Image from "next/image";

export default function SobreMiPage() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black px-4 sm:px-6 py-24 sm:py-32">
      <div className="absolute top-20 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-pink-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
            Sobre mí
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-purple-500 to-pink-500 mt-2" />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-start mb-12 md:mb-16">
          <div className="relative group w-full sm:w-[220px] max-w-[220px] mx-auto md:mx-0 flex-shrink-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/104552415.jpg"
                alt="Matias Speroni"
                width={220}
                height={290}
                className="object-cover w-full h-auto"
                quality={95}
                priority
              />
            </div>
          </div>

          <div className="flex-1 space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Desarrollador junior especializado en <span className="text-purple-400">.NET</span> y <span className="text-pink-400">Next.js</span>.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Buenas soy Matias, soy un desarrollador junior especializado en .NET y Next.js. 
                Actualmente trabajo en Novicell ES como desarrollador junior en Backend. 
                Me encuentro formándome en Sitecore actualmente , y aprendiendo sobre DevOps.             
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Me gusta mucho la tecnologia por lo que me gusta estar al dia e informarme
                Sacando la informatica de mi vida me gusta mucho ir al cine y escuchar musica , son dos cosas que adoro.
                Me apasiona viajar y conocer nuevos lugares , me gusta mucho descubir la cultura y especialmente la comida de cada pais jaja</p> 
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Barcelona, España</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>22 años</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-20">
          <h3 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-4 md:mb-6">Stack</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/react-svgrepo-com.svg" alt="React" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">React</h3>
                <p className="text-gray-500 text-xs text-center">Frontend</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/nextjs-icon-svgrepo-com.svg" alt="Next.js" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">Next.js</h3>
                <p className="text-gray-500 text-xs text-center">Framework</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/dotnet-svgrepo-com.svg" alt=".NET" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">.NET</h3>
                <p className="text-gray-500 text-xs text-center">Backend</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/c--4.svg" alt="C#" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">C#</h3>
                <p className="text-gray-500 text-xs text-center">Language</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/typescript-official-svgrepo-com.svg" alt="TypeScript" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">TypeScript</h3>
                <p className="text-gray-500 text-xs text-center">Language</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/node-js-svgrepo-com.svg" alt="Node.js" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">Node.js</h3>
                <p className="text-gray-500 text-xs text-center">Runtime</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/tailwind-svgrepo-com.svg" alt="Tailwind" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">Tailwind</h3>
                <p className="text-gray-500 text-xs text-center">CSS</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/git-svgrepo-com.svg" alt="Git" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">Git</h3>
                <p className="text-gray-500 text-xs text-center">Version Control</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/sitecore-1.svg" alt="Sitecore" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">Sitecore</h3>
                <p className="text-gray-500 text-xs text-center">CMS</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/sql server-svgrepo-com.svg" alt="SQL Server" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">SQL Server</h3>
                <p className="text-gray-500 text-xs text-center">Database</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/mysql-svgrepo-com.svg" alt="MySQL" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">MySQL</h3>
                <p className="text-gray-500 text-xs text-center">Database</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/python-svgrepo-com.svg" alt="Python" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">Python</h3>
                <p className="text-gray-500 text-xs text-center">Language</p>
              </div>
            </div>

            <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="flex flex-col items-center gap-3">
                <Image src="/tecnologias/java-4-logo-svgrepo-com.svg" alt="Java" width={48} height={48} className="w-12 h-12" />
                <h3 className="text-white font-semibold text-sm md:text-base">Java</h3>
                <p className="text-gray-500 text-xs text-center">Language</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

