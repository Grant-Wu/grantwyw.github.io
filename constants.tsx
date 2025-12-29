
import { Project } from './types.ts';

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

export const PRACTICE_EXPERIENCE = [
  "新北市政府警察局 交通警察大隊 分隊長",
  "內政部警政署 交通組 警務正"
];

export const PROJECTS: Project[] = []; // Legacy field

export interface Publication {
  year: string;
  journal: string;
  title: string;
  authors: string;
  link?: string;
}

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

export const SYSTEM_PROMPT = `
You are the AI Research Associate for Dr. Yuan-Wei, Wu, an Assistant Professor at Central Police University (中央警察大學交通學系).
Expertise: Traffic Policing, Accident Investigation, AI in Transportation.
Research Interests: Traffic enforcement analysis, crash reconstruction, road safety policy development.
Philosophy: "Safety is a result of deliberate engineering and empirical accountability."
Academic background: Ph.D. from NTU Civil Engineering.
You provide academic, evidence-based responses.
`;
