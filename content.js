/* =============================================================================
   網站內容檔  content.js  —— 這支檔案專門放「文字內容」,可以直接編輯!
   -----------------------------------------------------------------------------
   ✅ 改這裡的文字、增刪清單項目後,存檔上傳 GitHub,約 1 分鐘網站就更新。
   ✅ 不需要打包、不需要工具、不需要 Claude。
   =============================================================================
   ⚠️ 三個保命規則(違反會讓網頁空白):
     1. 每一項結尾的「逗號 ,」不要刪。
     2. 文字要用「引號」包住:中文用 '單引號',若文字內含單引號請用 "雙引號"。
     3. 大括號 { } 和中括號 [ ] 要成對,不要刪到。
   👉 建議:改之前先複製一份現有項目,照著格式改字,最安全。
   -----------------------------------------------------------------------------
   你最常改的四區,往下找這些星號標記:
     ★ 教學 Teaching          → 在 DATA 裡(中文版 zh、英文版 en 各一份)
     ★ 研究計畫 Projects       → 在 DATA 裡(zh / en 各一份)
     ★ 專業服務 Service        → 在 DATA 裡(zh / en 各一份)
     ★ 論文 Publications       → 在 SHARED_DATA 裡(中英共用,只需改一次)
   ============================================================================= */

window.SITE_CONTENT = {

  DATA: {
      zh: {
        meta: {
          title: "吳元維",
          subtitle: "Yuan-Wei Wu",
          affiliation: "中央警察大學 交通學系 助理教授",
          affiliationEn: "Assistant Professor, Department of Traffic Science, Central Police University",
          heroText: '結合 <span class="text-stone-950 font-bold border-b-2 border-amber-200">工程實務</span> 與 <span class="text-stone-950 font-bold border-b-2 border-amber-200">實證數據分析</span>，<br /> 致力於透過 AI 技術重構更具效率與安全性的交通調查與執法體系。'
        },
        nav: {
          interests: "INTERESTS",
          teaching: "TEACHING",
          publications: "PUBLICATIONS",
          projects: "PROJECTS",
          langZh: "中",
          langEn: "EN"
        },
        profile: {
          title: "Profile & Affiliation",
          phdTitle: "國立臺灣大學 土木工程學系 博士",
          phdSub: "Ph.D. in Civil Engineering, National Taiwan University",
          roleTitle: "中央警察大學 交通學系 助理教授",
          roleSub: "Assistant Professor",
          expTitle: "Experience",
          expList: [
            "國立臺灣科技大學營建工程系 兼任助理教授",
            "桃園市政府警察局交通警察大隊",
            "桃園市政府警察局刑事警察大隊",
            "桃園市政府警察局桃園分局",
            "臺北市政府警察局交通警察大隊"
          ]
        },
        expertise: {
          title: "Expertise Fields",
          list: [
            "Traffic Policing 交通警察實務",
            "Road Safety & Crash Investigation 交通安全與事故調查",
            "AI & Data Science 應用人工智慧與資料科學",
            "Transportation Engineering 運輸工程",
            "Mathematical Planning 數學規劃"
          ]
        },
        interests: {
          title: "Research Interests",
          list: [
            "交通執法成效分析",
            "交通行為與衝突之在地化探討",
            "交通事故調查與重建技術",
            "交通安全政策與專業能力發展"
          ]
        },
        /* ★★★ 教學 Teaching(中/英各一份) ★★★ */ teaching: {
          title: "Teaching",
          sectionTitle: "開設課程",
          undergraduate: "Undergraduate",
          graduate: "Graduate",
          professional: "Professional",
          courses: {
            undergraduate: [
              { name: "交通執法專題", type: "系必" },
              { name: "交通事故處理", type: "校訂必修" },
              { name: "道路工程與衝擊評估", type: "系選" },
              { name: "交通警察學", type: "系必" },
              { name: "交通警察實務", type: "系選" }, 
              { name: "程式語言", type: "系必" },
            ],
            graduate: [
              { name: "交通安全分析" },
              { name: "交通專題研究" }
            ],
            professional: [
              { name: "交通事故現場重建與原因分析", group: "警正班" },
              { name: "道路交通事故蒐證與處理規範", group: "警佐班" },
              { name: "砂石車及遊覽車管理", group: "警佐班" },
              { name: "交通警察業務", group: "特考班一般生" },
              { name: "交通警察勤業務概論、交通管制", group: "特考班警職組" }
            ]
          }
        },
        publications: {
          title: "Selected Publications",
          journalTitle: "Journal Papers",
          confTitle: "Conference Papers",
          viewPaper: "VIEW PAPER"
        },
        /* ★★★ 研究計畫 Research Projects(中/英各一份) ★★★ */ projects: {
          title: "Research Projects",
          list: [
            {
              title: "A Multi-Scale Spatio-Temporal Framework for Analyzing Traffic Enforcement and Road Safety: From Spatial Statistics to Reaction-Diffusion Dynamics and Microscopic Simulation",
              org: "國家科學及技術委員會 (NSTC)",
              period: "2026.08 ~ 2029.07"
            },
            {
              title: "Integration of Advanced Measurement Techniques, 3D Modeling, and an Evidence Recognition Model for Traffic Crash Scene Reconstruction",
              org: "國家科學及技術委員會 (NSTC)",
              period: "2025.08 ~ 2026.07"
            },
            {
              title: "國家道路交通安全綱要計畫（117-120年）委託專業服務案",
              role: "協同主持人",
              org: "交通部",
              period: "2026 ~ 2027"
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
          ]
        },
        /* ★★★ 專業服務 Professional Service(中/英各一份) ★★★ */ service: {
          title: "Professional Service",
          journal: "Journal Reviews",
          uni: "University Service",
          gov: "Government Service",
          uniList: [
            "鑑識科學委員會委員 (2025 迄今)",
            "交通學報編輯委員 (2025 迄今)",
            "智慧科技執法研究中心 - 智慧交通組執行秘書 (2025 迄今)",
            "警察科技學院 - 助理教授 (2024.08 ~ 2025.07)"
          ],
          govList: [
            "桃園市政府交通局交通維持計畫審查委員 (2025 迄今)"
          ]
        },
        footer: {
          desc: "結合工程實務與實證數據分析，建構高效安全的交通系統。",
          nav: "Navigation",
          contact: "Contact",
          address: '中央警察大學 交通學系<br /> 桃園市龜山區大崗里樹人路56號',
          rights: "© 2025 YUAN-WEI WU. ALL RIGHTS RESERVED."
        }
      },
      en: {
        meta: {
          title: "Yuan-Wei Wu",
          subtitle: "Ph.D.",
          affiliation: "Assistant Professor",
          affiliationEn: "Department of Traffic Science, Central Police University",
          heroText: 'Integrating <span class="text-stone-950 font-bold border-b-2 border-amber-200">Engineering Practice</span> with <span class="text-stone-950 font-bold border-b-2 border-amber-200">Empirical Data Analysis</span>,<br /> dedicated to reconstructing efficient and safer traffic investigation and enforcement systems through AI.'
        },
        nav: {
          interests: "INTERESTS",
          teaching: "TEACHING",
          publications: "PUBLICATIONS",
          projects: "PROJECTS",
          langZh: "中",
          langEn: "EN"
        },
        profile: {
          title: "Profile & Affiliation",
          phdTitle: "Ph.D. in Civil Engineering",
          phdSub: "National Taiwan University",
          roleTitle: "Assistant Professor",
          roleSub: "Department of Traffic Science, Central Police University",
          expTitle: "Experience",
          expList: [
            "Adjunct Assistant Professor, Dept. of Civil and Construction Engineering, NTUST",
            "Traffic Police Corps, Taoyuan City Police Department",
            "Criminal Investigation Corps, Taoyuan City Police Department",
            "Taoyuan Precinct, Taoyuan City Police Department",
            "Traffic Police Corps, Taipei City Police Department"
          ]
        },
        expertise: {
          title: "Expertise Fields",
          list: [
            "Traffic Policing",
            "Road Safety & Crash Investigation",
            "AI & Data Science",
            "Transportation Engineering",
            "Mathematical Planning"
          ]
        },
        interests: {
          title: "Research Interests",
          list: [
            "Traffic Enforcement Effectiveness Analysis",
            "Localization Study of Driving Behaviors and Traffic Conflicts",
            "Traffic Crash Investigation & Reconstruction",
            "Road Safety Policy & Professional Development"
          ]
        },
        /* ★★★ 教學 Teaching(中/英各一份) ★★★ */ teaching: {
          title: "Teaching",
          sectionTitle: "2025 Academic Year Courses",
          undergraduate: "Undergraduate",
          graduate: "Graduate",
          professional: "Professional",
          courses: {
            undergraduate: [
              { name: "Seminar on Traffic Enforcement", type: "Required" },
              { name: "Traffic Crash Investigation", type: "Required" },
              { name: "Traffic Policing Science", type: "Required" },
              { name: "Programming Lamguage", type: "Required" },
              { name: "Road Engineering & Impact Assessment", type: "Elective" },
              { name: "Traffic Policing Practice", type: "Elective" }
            ],
            graduate: [
              { name: "Traffic Safety Analysis" },
              { name: "Special Topics in Traffic" }
            ],
            professional: [
              { name: "Traffic Crash Scene Reconstruciton and Cause Analysis", group: "Police Commander Class" },
              { name: "Gravel and Tour Bus Management", group: "Police Sergeant Class" },
              { name: "Traffic Accident Evidence Investigation and Regulation", group: "Police Sergeant Class" },
              { name: "Traffic Police Operations", group: "Police Special Exam Class" },
              { name: "Traffic Control and Operations", group: "Police Special Exam Class" }
            ]
          }
        },
        publications: {
          title: "Selected Publications",
          journalTitle: "Journal Papers",
          confTitle: "Conference Papers",
          viewPaper: "VIEW PAPER"
        },
        /* ★★★ 研究計畫 Research Projects(中/英各一份) ★★★ */ projects: {
          title: "Research Projects",
          list: [
            {
              title: "A Multi-Scale Spatio-Temporal Framework for Analyzing Traffic Enforcement and Road Safety: From Spatial Statistics to Reaction-Diffusion Dynamics and Microscopic Simulation",
              org: "National Science and Technology Council (NSTC)",
              period: "2026.08 ~ 2029.07"
            },
             {
              title: "Integration of Advanced Measurement Techniques, 3D Modeling, and an Evidence Recognition Model for Traffic Crash Scene Reconstruction",
              org: "National Science and Technology Council (NSTC)",
              period: "2025.08 ~ 2026.07"
            },
            {
              title: "Regional Transportation Development Center Service Upgrade 3.0 Plan - Northern Region Road Safety Plan",
              role: "Co-Principal Investigator",
              org: "Institute of Transportation, MOTC",
              period: "2025 ~ Present"
            },
            {
              title: "Analysis of Strategy for Road Safety Professional Training and Knowledge Platform",
              org: "Institute of Transportation, MOTC",
              period: "2025 ~ Present"
            },
            {
              title: "Capacity Building for Road Safety Improvement",
              org: "Institute of Transportation, MOTC",
              period: "2024"
            },
            {
              title: "Academic Research on the Establishment of Road Traffic Safety Data Integration and Analysis Platform",
              org: "Ministry of Transportation and Communications",
              period: "2019"
            }
          ]
        },
        /* ★★★ 專業服務 Professional Service(中/英各一份) ★★★ */ service: {
          title: "Professional Service",
          journal: "Journal Reviews",
          uni: "University Service",
          gov: "Government Service",
          uniList: [
            "Member, Forensic Science Committee (2025 - Present)",
            "Editorial Board Member, Journal of Traffic Science (2025 - Present)",
            "Executive Secretary, Intelligent Traffic Group, Smart Tech Enforcement Research Center (2025 - Present)",
            "Assistant Professor, College of Police Science and Technology (2024.08 - 2025.07)"
          ],
          govList: [
            "Review Committee Member, Traffic Maintenance Plan, Taoyuan City Government (2025 - Present)"
          ]
        },
        footer: {
          desc: "Integrating engineering practice with empirical data analysis to reconstruct efficient and safe traffic systems.",
          nav: "Navigation",
          contact: "Contact",
          address: 'Dept. of Traffic Science, Central Police University<br /> No. 56, Shuren Rd., Guishan Dist., Taoyuan City',
          rights: "© 2025 YUAN-WEI WU. ALL RIGHTS RESERVED."
        }
      }
    },

  SHARED_DATA: {
      /* ★★★ 審稿期刊 Journal Reviews(中英共用一份) ★★★ */ serviceJournals: [
        "Accident Analysis and Prevention (SSCI)",
        "Engineering Application of Artificial Intelligence (SCI)",
        "Scientific Reports (SCI)"
      ],
      /* ★★★ 期刊論文 Journal Papers(中英共用一份) ★★★ */ publications: [
        {
          year: '2024',
          journal: 'Journal of Traffic Science, Vol. 24',
          title: '道路交通安全從業人員專業培訓需求分析之初探 (Preliminary Analysis of Professional Training Needs for Road Safety Practitioners)',
          authors: 'Wu, Y.W.*, Yang, F.R.',
          link: 'https://ts.cpu.edu.tw/p/406-1020-44159,r647.php'
        },
        {
          year: '2023',
          journal: 'Journal of Traffic Science, Vol. 23',
          title: '基於多元線性回歸模型及可解釋機器學習模型之精準執法成效分析 (Effectiveness Analysis of Precision Enforcement Using ML Models)',
          authors: 'Lu, K.R., Wu, Y.W.*',
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
      ],
      /* ★★★ 研討會論文 Conference Papers(中英共用一份) ★★★ */ conferences: [
        {
          year: '2026',
          event: '2026台灣地理資訊學會年會暨學術研討會(2026 TGIS)',
          title: '應用無人機攝影測量技術於交通事故重建之探討 (A study on the Application of UAV Photogrammetry to Traffic Accident Reconstruction)',
          authors: 'Yu, X.W., Wu, Y.W.*'
        },
        {
          year: '2025',
          event: 'Road Safety and Enforcement Conference',
          title: '應用遙測技術於交通事故現場重建之探討 (Application of Remote Sensing in Crash Reconstruction)',
          authors: 'Yu, X.W., Wu, Y.W.*, Li, M.H., Pan, C.W.'
        },
        {
          year: '2024',
          event: 'Road Safety and Enforcement Conference',
          title: '道路交通安全從業人員專業培訓需求分析之初探 (Analysis of Road Safety Training Needs)',
          authors: 'Wu, Y.W.*, et al.'
        },
        {
          year: '2023',
          event: 'Road Safety and Enforcement Conference',
          title: '基於多元線性回歸模型及可解釋機器學習模型之精準執法成效分析 (Precision Enforcement Analysis)',
          authors: 'Lu, K.R., Wu, Y.W.*'
        },
        {
          year: '2019',
          event: '13th EASTS Conference (Colombo, Sri Lanka)',
          title: 'Mining characteristics of speeding and red light running violations using association rules.',
          authors: 'Wu, Y.W.*, Hsu, T.P.'
        }
      ]
    }
};
