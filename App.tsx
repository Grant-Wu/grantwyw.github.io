import React from 'react';
import HeroCanvas from './components/HeroCanvas.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import { 
  PUBLICATIONS, 
  CONFERENCES, 
  EXPERTISE, 
  AFFILIATION, 
  AFFILIATION_EN, 
  RESEARCH_PROJECTS, 
  RESEARCH_INTERESTS,
  TEACHING_DATA, 
  SERVICE 
} from './constants.tsx';

const App: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    let targetId = id;
    if (id === 'teaching') targetId = 'teaching-section';
    if (id === 'publications') targetId = 'publications-section';
    if (id === 'research-projects') targetId = 'projects-section';

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* 磨砂玻璃導覽列 */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center bg-white/70 backdrop-blur-xl border-b border-stone-200/40">
        <div className="flex flex-col">
          <div className="text-lg font-bold tracking-tighter uppercase font-heading text-stone-900">
            Safety<span className="text-amber-700">Lab</span>
          </div>
          <div className="text-[9px] font-bold tracking-[0.4em] text-stone-400 uppercase">
            Yuan-Wei Wu
          </div>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-widest text-stone-500">
          <a href="#interests" onClick={(e) => scrollToSection(e, 'research-interests')} className="hover:text-amber-700 transition-all relative group py-2">
            INTERESTS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#teaching" onClick={(e) => scrollToSection(e, 'teaching')} className="hover:text-amber-700 transition-all relative group py-2">
            TEACHING
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#publications" onClick={(e) => scrollToSection(e, 'publications')} className="hover:text-amber-700 transition-all relative group py-2">
            PUBLICATIONS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'research-projects')} className="hover:text-amber-700 transition-all relative group py-2">
            PROJECTS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative px-6 md:px-24 pt-32 pb-20 overflow-hidden min-h-[75vh] flex items-center bg-gradient-to-br from-stone-100/80 via-white to-orange-50/30">
          <HeroCanvas />
          <div className="max-w-6xl relative z-10 w-full">
            <div className="animate-[fadeIn_1s_ease-out_forwards]">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-stone-900 font-heading leading-[0.9] mb-6">
                吳元維 <br />
                <span className="text-amber-800/80 font-light text-xl md:text-4xl tracking-tight">Yuan-Wei Wu</span>
              </h1>
              <div className="flex flex-col border-l-8 border-amber-600 pl-8 py-2">
                <p className="text-stone-800 text-lg font-medium tracking-wide font-serif-tc">{AFFILIATION}</p>
                <p className="text-stone-400 text-[10px] font-light uppercase tracking-widest mt-1 font-heading">{AFFILIATION_EN}</p>
              </div>
            </div>
            
            <div className="mt-12 animate-[fadeIn_1s_ease-out_0.3s_forwards] opacity-0">
              <p className="text-lg text-stone-500 max-w-2xl leading-relaxed">
                結合 <span className="text-stone-950 font-bold border-b-2 border-amber-200">工程實務</span> 與 <span className="text-stone-950 font-bold border-b-2 border-amber-200">實證數據分析</span>，<br />
                致力於透過 AI 技術重構更具效率與安全性的交通調查與執法體系。
              </p>
            </div>
          </div>
        </section>

        <div className="px-6 md:px-24 py-12 space-y-16 bg-white/50 backdrop-blur-3xl">
          
          {/* About Section */}
          <section id="about" className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="space-y-6">
               <h2 className="text-[10px] font-bold tracking-[0.5em] text-amber-700 uppercase">Profile & Affiliation</h2>
               <div className="space-y-4">
                  <div className="p-8 bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-stone-100 hover:shadow-lg transition-all group">
                     <p className="text-xl font-bold text-stone-950 mb-1 font-serif-tc">國立臺灣大學 土木工程學系 博士</p>
                     <p className="text-stone-400 text-xs italic font-heading group-hover:text-amber-600 transition-colors">Ph.D. in Civil Engineering, National Taiwan University</p>
                  </div>
                  <div className="p-8 bg-amber-900 rounded-[2.5rem] shadow-lg text-white group relative overflow-hidden">
                     <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform">
                        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 7L12 12L23 7L12 2M1 12L12 17L23 12M1 17L12 22L23 17"/></svg>
                     </div>
                     <p className="text-xl font-bold mb-1 font-serif-tc">{AFFILIATION}</p>
                     <p className="text-amber-200/80 text-xs font-heading">Assistant Professor</p>
                  </div>
               </div>
             </div>
             <div className="space-y-6">
               <h2 className="text-[10px] font-bold tracking-[0.5em] text-amber-700 uppercase">Expertise Fields</h2>
               <div className="flex flex-wrap gap-3">
                 {EXPERTISE.map((item, idx) => (
                   <div key={idx} className="px-7 py-4 bg-white/80 border border-stone-200 rounded-[2rem] text-[19.5px] font-semibold text-stone-700 hover:border-amber-400 hover:text-amber-800 transition-all shadow-sm">
                     {item}
                   </div>
                 ))}
               </div>
             </div>
          </section>

          {/* 1. Research Interests */}
          <section id="research-interests" className="max-w-5xl mx-auto scroll-mt-32">
            <div className="flex items-center gap-6 mb-8">
              <h2 className="text-3xl font-bold text-stone-950 font-heading">Research Interests</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_INTERESTS.map((interest, idx) => (
                <div key={idx} className="p-4 bg-stone-50 border border-stone-100 rounded-xl hover:bg-amber-50 transition-colors">
                  <p className="font-serif-tc font-medium text-stone-800">{interest}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Teaching */}
          <section id="teaching-section" className="max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold text-stone-950 font-heading mb-8">Teaching</h2>
            <div className="space-y-12">
              <div className="p-8 bg-white border border-stone-100 rounded-[3rem] shadow-sm">
                <h3 className="text-xl font-bold text-amber-800 mb-8 border-b border-amber-50 pb-4">{TEACHING_DATA.current.title}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase">Undergraduate</h4>
                    {TEACHING_DATA.current.undergraduate.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-50">
                        <span className="text-base font-bold text-stone-700">{course.name}</span>
                        <span className="text-[9px] px-2 py-0.5 bg-stone-100 text-stone-500 rounded uppercase">{course.type}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase">Graduate</h4>
                    {TEACHING_DATA.current.graduate.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2.5 border-b border-stone-50">
                        <span className="text-base font-bold text-stone-700">{course.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase">Professional</h4>
                    {TEACHING_DATA.current.professional.map((course, idx) => (
                      <div key={idx} className="flex flex-col py-2 border-b border-stone-50">
                        <span className="text-base font-bold text-stone-700">{course.name}</span>
                        <span className="text-[9px] text-amber-600 font-bold uppercase mt-1 tracking-widest">{course.group}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Publications */}
          <section id="publications-section" className="max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold text-stone-950 font-heading mb-8">Selected Publications</h2>
            <div className="space-y-6">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="group p-6 bg-white border border-stone-100 rounded-2xl hover:border-amber-200 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold px-2 py-1 bg-amber-50 text-amber-700 rounded-md">{pub.year}</span>
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">{pub.journal}</span>
                      </div>
                      <h3 className="text-lg font-bold text-stone-800 leading-tight group-hover:text-amber-900 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-stone-500 italic">{pub.authors}</p>
                    </div>
                    {pub.link && (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors gap-1">
                        VIEW PAPER
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Projects */}
          <section id="projects-section" className="max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold text-stone-950 font-heading mb-8">Research Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESEARCH_PROJECTS.map((project, idx) => (
                <div key={idx} className="p-8 bg-stone-900 text-stone-100 rounded-3xl border border-white/5 relative overflow-hidden group">
                  <span className="text-[10px] font-bold text-amber-500/80 uppercase tracking-widest mb-4 block">{project.period}</span>
                  <h3 className="text-lg font-bold mb-4 leading-tight">{project.title}</h3>
                  <div className="space-y-1">
                    <p className="text-xs text-stone-400 uppercase tracking-wide">{project.org}</p>
                    {project.role && <p className="text-xs font-bold text-amber-600">{project.role}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Professional Service */}
          <section id="service-section" className="max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold text-stone-950 font-heading mb-8">Professional Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em]">Journal Reviews</h4>
                <ul className="space-y-3">
                  {SERVICE.journals.map((j, idx) => (
                    <li key={idx} className="text-sm text-stone-600 font-medium border-l-2 border-stone-100 pl-4">{j}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em]">University Service</h4>
                <ul className="space-y-3">
                  {SERVICE.university.map((s, idx) => (
                    <li key={idx} className="text-sm text-stone-600 font-medium border-l-2 border-stone-100 pl-4">{s}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.3em]">Government Service</h4>
                <ul className="space-y-3">
                  {SERVICE.government.map((s, idx) => (
                    <li key={idx} className="text-sm text-stone-600 font-medium border-l-2 border-stone-100 pl-4">{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className="px-6 md:px-24 py-20 bg-stone-100 border-t border-stone-200">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm space-y-6">
               <div className="text-2xl font-bold tracking-tighter uppercase font-heading text-stone-900">
                 Safety<span className="text-amber-700">Lab</span>
               </div>
               <p className="text-stone-500 text-sm leading-relaxed">
                 Integrating engineering practice with empirical data analysis to reconstruct efficient and safe traffic systems.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-16">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-stone-900 uppercase tracking-widest">Navigation</h4>
                  <ul className="space-y-2 text-xs text-stone-500 font-medium">
                     <li><a href="#hero" className="hover:text-amber-700 transition-colors">Home</a></li>
                     <li><a href="#about" className="hover:text-amber-700 transition-colors">About</a></li>
                     <li><a href="#publications-section" className="hover:text-amber-700 transition-colors">Publications</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-stone-900 uppercase tracking-widest">Contact</h4>
                  <p className="text-xs text-stone-500 leading-loose">
                    中央警察大學 交通學系<br />
                    桃園市龜山區大崗里樹人路56號
                  </p>
               </div>
            </div>
         </div>
         <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase">© 2025 YUAN-WEI WU. ALL RIGHTS RESERVED.</p>
         </div>
      </footer>

      <ChatWidget />
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;