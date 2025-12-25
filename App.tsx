
import React from 'react';
import HeroCanvas from './components/HeroCanvas';
import ChatWidget from './components/ChatWidget';
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
} from './constants';

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
              {/* 姓名縮小版 */}
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-stone-900 font-heading leading-[0.9] mb-6">
                吳元維 <br />
                <span className="text-amber-800/80 font-light text-xl md:text-4xl tracking-tight">Yuan-Wei Wu</span>
              </h1>
              {/* 單位與職稱合併展示 */}
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

        {/* 內容區域 */}
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
              <div className="flex-1 h-[1px] bg-stone-100"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESEARCH_INTERESTS.map((interest, idx) => (
                <div key={idx} className="p-8 bg-white rounded-[2rem] shadow-sm border border-stone-100 flex gap-5 items-start group hover:bg-stone-50 transition-all">
                  <span className="text-3xl font-bold text-amber-100 font-heading group-hover:text-amber-200">0{idx + 1}</span>
                  <p className="text-lg font-bold text-stone-800 leading-snug pt-1 font-serif-tc">{interest}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Teaching */}
          <section id="teaching-section" className="max-w-6xl mx-auto scroll-mt-32">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-stone-950 font-heading">Teaching</h2>
              <p className="text-stone-400 text-[10px] uppercase tracking-[0.4em] font-bold mt-1">Academic Courses & Professional Training</p>
            </div>
            
            <div className="w-full p-10 bg-white rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden">
               <h3 className="text-xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                 <span className="w-1.5 h-8 bg-amber-600 rounded-full"></span>
                 {TEACHING_DATA.current.title}
               </h3>
               {/* 三欄佈局：大學部、研究所、進修訓練 */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                  {/* Undergraduate */}
                  <div className="space-y-4">
                     <h4 className="text-[9px] font-bold text-stone-300 uppercase tracking-widest border-b border-stone-50 pb-2">Undergraduate</h4>
                     <div className="space-y-3">
                       {TEACHING_DATA.current.undergraduate.map((c, i) => (
                         <div key={i} className="flex justify-between items-center text-[22.5px] font-semibold p-2.5 hover:bg-stone-50 rounded-xl transition-colors">
                           <span className="text-stone-700">{c.name}</span>
                           <span className="text-[9px] bg-amber-50 px-3 py-1 rounded-full text-amber-700 border border-amber-100 ml-2 whitespace-nowrap">{c.type}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                  
                  {/* Graduate */}
                  <div className="space-y-4">
                     <h4 className="text-[9px] font-bold text-stone-300 uppercase tracking-widest border-b border-stone-50 pb-2">Graduate</h4>
                     <div className="space-y-3">
                       {TEACHING_DATA.current.graduate.map((c, i) => (
                         <div key={i} className="flex items-center gap-4 text-[22.5px] font-semibold p-2.5 hover:bg-amber-50 rounded-xl transition-colors text-amber-900">
                           <div className="w-2 h-2 bg-amber-500 rounded-full shrink-0"></div>
                           {c.name}
                         </div>
                       ))}
                     </div>
                  </div>

                  {/* Continuing Professional Ed. */}
                  <div className="space-y-4 border-l border-stone-50 pl-6 h-full">
                     <h4 className="text-[9px] font-bold text-stone-300 uppercase tracking-widest border-b border-stone-50 pb-2">Continuing Professional Ed.</h4>
                     <div className="space-y-5 pt-2">
                        {TEACHING_DATA.current.professional.map((c, i) => (
                          <div key={i} className="group cursor-default">
                            <p className="text-[9px] text-amber-600/80 font-bold uppercase mb-1 tracking-widest">{c.group}</p>
                            <p className="text-[21px] font-bold leading-tight text-stone-700 group-hover:text-amber-900 transition-colors font-serif-tc">{c.name}</p>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </section>

          {/* 3. Publications */}
          <section id="publications-section" className="max-w-5xl mx-auto scroll-mt-32">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-stone-950 font-heading mb-2">Selected Publications</h2>
               <div className="h-1 w-16 bg-amber-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.4em] mb-8">I. Journal Papers 期刊論文</h3>
                <div className="space-y-10">
                  {PUBLICATIONS.map((pub, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -left-12 top-0 text-2xl font-bold text-stone-100 font-heading group-hover:text-amber-100 transition-colors">{pub.year}</div>
                      <div className="space-y-2">
                        <span className="text-[9px] font-bold text-stone-300 uppercase tracking-[0.2em]">{pub.journal}</span>
                        {pub.link ? (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <h5 className="text-xl font-bold text-stone-900 leading-snug group-hover:text-amber-800 transition-colors underline decoration-stone-100 decoration-2 underline-offset-4 font-serif-tc">{pub.title}</h5>
                          </a>
                        ) : (
                          <h5 className="text-xl font-bold text-stone-900 leading-snug font-serif-tc">{pub.title}</h5>
                        )}
                        <p className="text-[13px] text-stone-500 font-medium">{pub.authors}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="conference-papers" className="pt-12 border-t border-stone-100">
                <h3 className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.4em] mb-8">II. Conference Papers 研討會論文</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {CONFERENCES.map((conf, i) => (
                    <div key={i} className="group space-y-3 p-6 hover:bg-white rounded-[2rem] transition-all hover:shadow-sm">
                      <div className="flex justify-between items-center">
                         <span className="text-lg font-bold text-amber-600 font-heading">{conf.year}</span>
                         <span className="text-[8px] font-bold text-stone-300 uppercase tracking-tighter">{conf.event}</span>
                      </div>
                      <h5 className="text-base font-bold text-stone-800 leading-snug group-hover:text-amber-900 transition-colors font-serif-tc">{conf.title}</h5>
                      <p className="text-xs text-stone-400">{conf.authors}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. Research Projects */}
          <section id="projects-section" className="max-w-5xl mx-auto scroll-mt-32">
             <div className="mb-10 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-stone-950 font-heading">Research Projects</h2>
                <div className="text-[9px] font-bold text-stone-300 uppercase tracking-widest">Grants & Projects</div>
             </div>
             <div className="grid gap-3">
                {RESEARCH_PROJECTS.map((p, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2rem] border border-stone-100 shadow-sm flex flex-col md:flex-row gap-8 md:items-center group hover:border-amber-200 hover:shadow-lg transition-all">
                    <div className="md:w-28 text-xs font-bold text-stone-300 uppercase tracking-widest">{p.period}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-stone-900 leading-snug mb-2 group-hover:text-amber-900 transition-colors font-serif-tc">{p.title}</h4>
                      <div className="flex gap-4 text-[10px] font-bold uppercase text-amber-700/80">
                         <span>{p.org}</span>
                         {p.role && <span className="text-stone-300">| {p.role}</span>}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </section>

          {/* 5. Academic Service */}
          <section id="service" className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-stone-100 space-y-6 group hover:shadow-lg transition-all">
                <h3 className="text-[9px] font-bold text-amber-700 uppercase tracking-[0.5em] border-b border-stone-50 pb-4">Journal Review</h3>
                <ul className="space-y-4">
                  {SERVICE.journals.map((item, i) => (
                    <li key={i} className="text-xs text-stone-500 leading-snug italic font-medium hover:text-stone-900 transition-colors">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-stone-100 space-y-6 group hover:shadow-lg transition-all">
                <h3 className="text-[9px] font-bold text-amber-700 uppercase tracking-[0.5em] border-b border-stone-50 pb-4">Administration</h3>
                <ul className="space-y-4">
                  {SERVICE.university.map((item, i) => (
                    <li key={i} className="text-xs text-stone-600 leading-snug font-semibold border-l-2 border-transparent hover:border-amber-400 pl-3 transition-all">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-stone-100 space-y-6 group hover:shadow-lg transition-all">
                <h3 className="text-[9px] font-bold text-amber-700 uppercase tracking-[0.5em] border-b border-stone-50 pb-4">Advisory</h3>
                <ul className="space-y-4">
                  {SERVICE.government.map((item, i) => (
                    <li key={i} className="text-xs text-stone-600 leading-snug font-semibold border-l-2 border-transparent hover:border-amber-400 pl-3 transition-all">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="max-w-6xl mx-auto pt-16 pb-8 border-t border-stone-200">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold font-heading text-stone-950 font-serif-tc">吳元維 <span className="text-stone-300 text-xl font-light ml-3 font-heading">Yuan-Wei Wu</span></h3>
                <div className="space-y-1">
                  <p className="text-stone-500 font-medium text-xs">{AFFILIATION}</p>
                  <a href="mailto:grantwyw@mail.cpu.edu.tw" className="text-xl font-bold text-amber-700 hover:text-amber-800 transition-all underline decoration-stone-200 underline-offset-4">
                    grantwyw@mail.cpu.edu.tw
                  </a>
                </div>
              </div>
              <div className="text-stone-300 text-[9px] font-bold uppercase tracking-[0.5em] flex flex-col justify-end text-right">
                <span>© 2025 SafetyLab Portfolio</span>
                <span>Central Police University, Taiwan</span>
              </div>
            </div>
          </footer>
        </div>
      </main>

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
