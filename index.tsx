import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// ==========================================
// 1. TYPES
// ==========================================
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseVx: number;
  baseVy: number;
}

export interface Publication {
  year: string;
  journal: string;
  title: string;
  authors: string;
  link?: string;
}

// ==========================================
// 2. CONSTANTS
// ==========================================
export const AFFILIATION = "中央警察大學 交通學系 助理教授";
export const AFFILIATION_EN = "Assistant Professor, Department of Traffic Science, Central Police University";

export const EXPERTISE = [
  "Traffic Policing 交通警察實務",
  "Road Safety & Crash Investigation 交通安全與事故調查",
  "AI & Data Science 應用人工智慧與資料科學",
  "Transportation Engineering 運輸工程",
  "Mathematical Planning 數學規劃"
];

export const RESEARCH_INTERESTS = [
  "交通執法成效分析",
  "交通衝突之在地化探討",
  "交通事故調查與重建技術",
  "交通安全政策與專業能力發展"
];

export const PRACTICE_EXPERIENCE = [
  "臺北市政府警察局交通警察大隊",
  "桃園市政府警察局桃園分局",
  "桃園市政府警察局刑事警察大隊",
  "桃園市政府警察局交通警察大隊"
];

export const TEACHING_DATA = {
  current: {
    title: "2025 學年開設課程",
    undergraduate: [
      { name: "交通執法專題", type: "系必" },
      { name: "交通事故處理", type: "校訂必修" },
      { name: "智慧型運輸系統概論", type: "系選" },
      { name: "道路工程與衝擊評估", type: "系選" },
      { name: "交通警察實務", type: "系選" }
    ],
    graduate: [
      { name: "交通安全分析" },
      { name: "交通專題研究" }
    ],
    professional: [
      { name: "砂石車及遊覽車管理", group: "警佐班" },
      { name: "交通警察業務", group: "特考班一般生" },
      { name: "交通警察勤業務概論", group: "特考班警職組" }
    ]
  },
  past: {
    title: "曾開設課程",
    undergraduate: [
      { name: "肇事重建與原因分析", type: "系必" },
      { name: "作業研究", type: "系必" }
    ]
  }
};

export const RESEARCH_PROJECTS = [
  {
    title: "Integration of Advanced Measurement Techniques, 3D Modeling, and an Evidence Recognition Model for Traffic Crash Scene Reconstruction",
    org: "國家科學及技術委員會 (NSTC Projects)",
    period: "2025.08 ~ 2026.07"
  },
  {
    title: "區域運輸發展研究中心服務升級 3.0 計畫 - 北區區域道安計畫",
    role: "協同主持人",
    org: "交通部運輸研究所",
    period: "2025 ~ 迄今"
  },
  {
    title: "道安專業人力培訓暨知識平台策略內容研析",
    org: "交通部運輸研究所",
    period: "2025 ~ 迄今"
  },
  {
    title: "道安改善專業能力建構",
    org: "交通部運輸研究所",
    period: "2024"
  },
  {
    title: "道路交通安全資料整合與分析平台建置學術研究",
    org: "交通部",
    period: "2019"
  }
];

export const SERVICE = {
  journals: [
    "Accident Analysis and Prevention (SSCI)",
    "Engineering Application of Artificial Intelligence (SCI)",
    "Scientific Reports (SCI)"
  ],
  university: [
    "鑑識科學委員會委員 (2025 迄今)",
    "交通學報編輯委員 (2025 迄今)",
    "智慧科技執法研究中心 - 智慧交通組執行秘書 (2025 迄今)",
    "警察科技學院 - 助理教授 (2024.08 ~ 2025.07)"
  ],
  government: [
    "桃園市政府交通局交通維持計畫審查委員 (2025 迄今)"
  ]
};

export const PROJECTS: Project[] = []; 

export const PUBLICATIONS: Publication[] = [
  {
    year: '2024',
    journal: '交通學報，第二十四卷',
    title: '道路交通安全從業人員專業培訓需求分析之初探',
    authors: '吳元維*、楊馥榕',
    link: 'https://ts.cpu.edu.tw/p/406-1020-44159,r647.php'
  },
  {
    year: '2023',
    journal: '交通學報，第二十三卷',
    title: '基於多元線性回歸模型及可解釋機器學習模型之精準執法成效分析',
    authors: '盧冠仁、吳元維*',
    link: 'https://ts.cpu.edu.tw/p/406-1020-42081,r647.php'
  },
  {
    year: '2022',
    journal: 'Accident Analysis and Prevention (SSCI)',
    title: 'Temporal stability of associations between crash characteristics: A multiple correspondence analysis.',
    authors: 'Hsu, T.P., Wu, Y.W.*, Chen, A.Y.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0001457522000264'
  },
  {
    year: '2021',
    journal: 'Accident Analysis and Prevention (SSCI)',
    title: 'Mid-term prediction of at-fault crash driver frequency using fusion deep learning with city-level traffic violation data.',
    authors: 'Wu, Y.W.*, Hsu, T.P.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0001457520317309'
  }
];

export const CONFERENCES = [
  {
    year: '2025',
    event: '道路交通安全與執法研討會',
    title: '應用遙測技術於交通事故現場重建之探討',
    authors: '游薛武、吳元維*、李旻晃、潘啟文'
  },
  {
    year: '2024',
    event: '道路交通安全與執法研討會',
    title: '道路交通安全從業人員專業培訓需求分析之初探',
    authors: '吳元維*、周文生、楊馥榕、曾群明、王冠堯、葉文健、黃士軒'
  },
  {
    year: '2023',
    event: '道路交通安全與執法研討會',
    title: '基於多元線性回歸模型及可解釋機器學習模型之精準執法成效分析',
    authors: '盧冠仁、吳元維*'
  },
  {
    year: '2019',
    event: '13th EASTS Conference (Colombo, Sri Lanka)',
    title: 'Mining characteristics of speeding and red light running violations using association rules.',
    authors: 'Wu, Y.W.*, Hsu, T.P.'
  }
];

// ==========================================
// 4. COMPONENTS
// ==========================================
const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 200;
    const mouse = { x: -2000, y: -2000, radius: 350 };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.25;
        const vy = (Math.random() - 0.5) * 0.25;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx,
          vy: vy,
          baseVx: vx,
          baseVy: vy,
          size: Math.random() * 1.5 + 0.8,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const rect = canvas.getBoundingClientRect();
        const mouseRelX = mouse.x - rect.left;
        const mouseRelY = mouse.y - rect.top;
        const dx = p.x - mouseRelX;
        const dy = p.y - mouseRelY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        
        if (distToMouse < mouse.radius) {
          const force = (mouse.radius - distToMouse) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 0.3;
          p.vy -= Math.sin(angle) * force * 0.3;
          
          const mouseLineOpacity = (1 - distToMouse / mouse.radius) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(217, 119, 6, ${mouseLineOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRelX, mouseRelY);
          ctx.stroke();
        } else {
          p.vx += (p.baseVx - p.vx) * 0.01;
          p.vy += (p.baseVy - p.vy) * 0.01;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = distToMouse < mouse.radius 
          ? `rgba(180, 83, 9, 0.3)` 
          : `rgba(168, 162, 158, 0.15)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

          if (distNodes < connectionDistance) {
            const opacity = (1 - distNodes / connectionDistance) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 162, 158, ${opacity * 0.4})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-80" />
  );
};

// ==========================================
// 5. MAIN APP
// ==========================================
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

               <div className="pt-6">
                 <h2 className="text-[10px] font-bold tracking-[0.5em] text-amber-700 uppercase mb-4">Practice Experience</h2>
                 <div className="grid gap-2">
                   {PRACTICE_EXPERIENCE.map((exp, idx) => (
                     <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-100 hover:border-amber-200 transition-colors shadow-sm">
                       <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></span>
                       <span className="text-sm font-medium text-stone-700 font-serif-tc">{exp}</span>
                     </div>
                   ))}
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

          <section id="projects-section" className="max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold text-stone-950 font-heading mb-8">Research Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESEARCH_PROJECTS.map((project, idx) => (
                <div key={idx} className="p-8 bg-stone-100 rounded-3xl border border-stone-200 relative overflow-hidden group hover:bg-white hover:shadow-lg hover:border-amber-100 transition-all duration-300">
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-4 block">{project.period}</span>
                  <h3 className="text-lg font-bold mb-4 leading-tight text-stone-900 group-hover:text-amber-800 transition-colors">{project.title}</h3>
                  <div className="space-y-1">
                    <p className="text-xs text-stone-500 uppercase tracking-wide">{project.org}</p>
                    {project.role && <p className="text-xs font-bold text-amber-700">{project.role}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>

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
                    桃園市龜山區大崗里樹人路56號<br />
                    <a href="mailto:grantwyw@mail.cpu.edu.tw" className="hover:text-amber-700 transition-colors">grantwyw@mail.cpu.edu.tw</a>
                  </p>
               </div>
            </div>
         </div>
         <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase">© 2025 YUAN-WEI WU. ALL RIGHTS RESERVED.</p>
         </div>
      </footer>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// ==========================================
// 6. RENDER
// ==========================================
const container = document.getElementById('root');
if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("React Render Error:", err);
  }
}