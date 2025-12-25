
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
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // 導覽列高度補償
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
    <div className="relative min-h-screen bg-[#FDFCF8] text-stone-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-2.5 md:px-12 flex justify-between items-center bg-white/90 backdrop-blur-xl border-b border-orange-50/50">
        <div className="flex flex-col">
          <div className="text-base font-bold tracking-tighter uppercase font-heading text-stone-900">
            Safety<span className="text-amber-700">Lab</span>
          </div>
          <div className="text-[8px] font-bold tracking-[0.4em] text-stone-400 uppercase">
            Yuan-Wei Wu
          </div>
        </div>
        <!-- 順序調整：INTERESTS, TEACHING, PUBLICATIONS, PROJECTS -->
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-500">
          <a href="#research-interests" onClick={(e) => scrollToSection(e, 'research-interests')} className="hover:text-amber-700 transition-colors">INTERESTS</a>
          <a href="#teaching" onClick={(e) => scrollToSection(e, 'teaching')} className="hover:text-amber-700 transition-colors">TEACHING</a>
          <a href="#publications" onClick={(e) => scrollToSection(e, 'publications')} className="hover:text-amber-700 transition-colors">PUBLICATIONS</a>
          <a href="#research-projects" onClick={(e) => scrollToSection(e, 'research-projects')} className="hover:text-amber-700 transition-colors">PROJECTS</a>
        </div>
      </nav>

      <main className="relative z-10 pt-12">
        {/* Hero Section - 底色稍微加深至 300/50 */}
        <section id="hero" className="relative px-6 md:px-24 pt-16 pb-16 overflow-hidden min-h-[75vh] flex items-center bg-stone-300/50">
          <HeroCanvas />
          <div className="max-w-6xl relative z-10 pointer-events-auto">
            <div className="mb-4 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
              <div className="inline-block px-3 py-0.5 bg-orange-50 text-orange-800 text-[9px] font-bold uppercase tracking-[0.4em] mb-2 rounded-full border border-orange-100">
                Assistant Professor
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 font-heading leading-[1.05] mb-2">
                吳元維 <br />
                <span className="text-amber-800/80 font-light text-2xl md:text-4xl tracking-tight">Yuan-Wei Wu</span>
              </h1>
              <div className="flex flex-col border-l-4 border-amber-500 pl-4">
                <p className="text-stone-800 text-sm font-medium tracking-wide">{AFFILIATION}</p>
                <p className="text-stone-400 text-[10px] font-light uppercase tracking-wider">{AFFILIATION_EN}</p>
              </div>
            </div>

            <h2 className="text-lg md:text-2xl font-bold leading-tight mb-4 tracking-tighter text-stone-400 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards] uppercase">
              Engineering <span className="text-stone-900">Empirical</span> <br />
              Accountability in <span className="text-amber-700">Traffic</span>
            </h2>
            
            <p className="text-base text-stone-500 max-w-lg leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
              透過 <span className="text-amber-900 font-semibold border-b border-amber-50/50">AI</span> 與 <span className="text-amber-900 font-semibold border-b border-amber-50/50">資料科學</span>，重構交通安全分析的精準度。
            </p>
          </div>
        </section>

        <div className="text-[1.1rem]">
          {/* About Section */}
          <section id="about" className="relative bg-stone-50/50 py-16 px-6 md:px-24 border-y border-stone-100/60">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-6 max-w-2xl">
                <div className="group">
                  <p className="text-lg font-bold text-stone-900">{AFFILIATION}</p>
                  <p className="text-base text-stone-500">助理教授</p>
                </div>
                <div className="pt-4 border-t border-stone-200 group">
                  <p className="text-lg font-bold text-stone-900">國立臺灣大學 土木工程學系 博士</p>
                  <p className="text-base text-stone-500 italic">Ph.D., Civil Engineering, NTU</p>
                </div>
                <div className="pt-2 flex flex-wrap gap-x-6 gap-y-3">
                  {EXPERTISE.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 區塊 1: 研究興趣 */}
          <section id="research-interests" className="relative py-20 px-6 md:px-24 bg-white scroll-mt-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-stone-950 font-heading mb-10 border-b-2 border-amber-50 inline-block">Research Interest <span className="text-stone-300 ml-3">研究興趣</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESEARCH_INTERESTS.map((interest, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-stone-50/50 border border-stone-100 rounded-xl group hover:border-amber-300 transition-all hover:bg-white shadow-sm">
                    <span className="w-10 h-10 flex items-center justify-center bg-white border border-stone-100 rounded-lg text-amber-700 font-mono text-sm font-bold group-hover:bg-amber-700 group-hover:text-white transition-all">0{idx + 1}</span>
                    <span className="text-base font-bold text-stone-800 leading-tight">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 區塊 2: 教學 */}
          <section id="teaching" className="relative py-20 px-6 md:px-24 bg-stone-50/30 scroll-mt-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-stone-950 font-heading mb-14 border-b-2 border-stone-100 inline-block">Teaching <span className="text-stone-300 ml-3">教學</span></h2>
              <div className="space-y-20">
                {/* 2025 Current Courses */}
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-6 bg-amber-600 rounded-full"></span>
                    {TEACHING_DATA.current.title}
                  </h3>
                  <div className="space-y-12 pl-5 border-l border-stone-100">
                    <div>
                      <h4 className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em] mb-6">Undergraduate 大學部</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {TEACHING_DATA.current.undergraduate.map((course, i) => (
                          <div key={i} className="p-4 bg-white border border-stone-100 rounded-2xl flex justify-between items-center hover:bg-white hover:shadow-sm transition-all group">
                            <span className="text-sm font-bold text-stone-800">{course.name}</span>
                            <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter ${
                              course.type.includes('必') ? 'bg-amber-100 text-amber-800' : 'bg-stone-200 text-stone-500'
                            }`}>
                              {course.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em] mb-6">Graduate 研究所</h4>
                      <div className="flex flex-wrap gap-4">
                        {TEACHING_DATA.current.graduate.map((course, i) => (
                          <div key={i} className="px-8 py-5 bg-amber-50/60 border border-amber-100/60 rounded-3xl text-sm font-bold text-amber-900 shadow-sm hover:bg-amber-100/50 hover:border-amber-200 transition-all flex items-center gap-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            {course.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 區塊 3: 論文發表 (Journal & Conference) */}
          <section id="publications" className="relative py-20 px-6 md:px-24 bg-white scroll-mt-24">
            <div className="max-w-5xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-stone-950 font-heading mb-10 border-l-4 border-amber-600 pl-4">Journal Papers <span className="text-stone-200 ml-3">期刊論文</span></h2>
                <div className="space-y-10">
                  {PUBLICATIONS.map((pub, i) => (
                    <div key={i} className="group py-2 border-b border-stone-50 last:border-0">
                      <div className="flex gap-3 items-center mb-1">
                        <span className="px-2 py-0.5 bg-orange-100 text-orange-800 text-[10px] font-bold uppercase tracking-wider rounded-full">{pub.year}</span>
                        <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">{pub.journal}</span>
                      </div>
                      {pub.link ? (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="block hover:text-amber-800 transition-colors">
                          <h5 className="text-xl font-bold text-stone-900 leading-snug mb-1">{pub.title}</h5>
                        </a>
                      ) : (
                        <h5 className="text-xl font-bold text-stone-900 leading-snug mb-1">{pub.title}</h5>
                      )}
                      <p className="text-sm text-stone-500 font-medium">{pub.authors}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="conference-section" className="pt-12 border-t border-stone-100">
                <h2 className="text-2xl font-bold text-stone-950 font-heading mb-10">Conference Papers <span className="text-stone-300 ml-3">研討會論文</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {CONFERENCES.map((conf, i) => (
                    <div key={i} className="border-l-2 border-stone-100 pl-6 pb-2 hover:border-amber-300 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[11px] font-bold text-amber-600 uppercase">{conf.year}</span>
                        <span className="text-[9px] text-stone-400 uppercase tracking-tighter">{conf.event}</span>
                      </div>
                      <h5 className="text-base font-bold text-stone-800 mb-1 leading-snug">{conf.title}</h5>
                      <p className="text-[11px] text-stone-500 italic font-medium">{conf.authors}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 區塊 4: 研究計畫 (依照要求移到研討會論文之後) */}
          <section id="research-projects" className="relative py-20 px-6 md:px-24 bg-stone-50/30 scroll-mt-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold font-heading mb-10 text-stone-900 border-b-2 border-stone-200 inline-block">Research Projects <span className="text-stone-300 ml-3">研究計畫</span></h2>
              <div className="space-y-4">
                {RESEARCH_PROJECTS.map((project, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 border-b border-stone-100 pb-4 hover:bg-white transition-all p-4 rounded-xl group">
                    <span className="md:w-32 text-[12px] font-mono text-stone-400 shrink-0 font-bold uppercase">{project.period}</span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-stone-800 group-hover:text-amber-800 transition-colors leading-snug">{project.title}</h3>
                      <div className="flex gap-4 text-[11px] uppercase tracking-wider font-semibold text-stone-400 mt-1">
                        <span className="text-amber-600/70">{project.org}</span>
                        {'role' in project && <span>| {project.role}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 區塊 5: 學術服務 */}
          <section id="service" className="relative py-20 px-6 md:px-24 bg-white scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-stone-950 font-heading mb-12 text-center">Academic Service <span className="text-stone-300 ml-3">學術服務</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Journal Review 審查", items: SERVICE.journals },
                  { title: "Administration 行政", items: SERVICE.university },
                  { title: "Advisory 政府", items: SERVICE.government }
                ].map((box, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-stone-200/50 shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-lg font-bold text-stone-900 mb-6 pb-2 border-b border-stone-50">{box.title}</h3>
                    <ul className="space-y-3 flex-1">
                      {box.items.map((item, i) => (
                        <li key={i} className="text-[13px] text-stone-600 leading-snug flex items-start gap-3">
                          <span className="text-amber-500 mt-1.5 shrink-0">
                            <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="relative py-16 px-6 md:px-24 bg-stone-200/50 border-t border-stone-300/60 text-stone-800">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                <div>
                  <h3 className="text-3xl font-bold mb-4 font-heading text-stone-900">吳元維 <span className="text-stone-500 font-light text-xl ml-2">Yuan-Wei Wu</span></h3>
                  <p className="text-sm text-stone-500 mb-8">{AFFILIATION} 助理教授</p>
                  <a href="mailto:grantwyw@mail.cpu.edu.tw" className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition-all underline decoration-stone-300 underline-offset-8">
                    grantwyw@mail.cpu.edu.tw
                  </a>
                </div>
              </div>
              <div className="pt-8 border-t border-stone-300 flex flex-col md:flex-row justify-between items-center text-stone-400 text-[11px] uppercase tracking-[0.4em]">
                <span>© {new Date().getFullYear()} Dr. Yuan-Wei Wu | 中央警察大學交通學系</span>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <ChatWidget />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
