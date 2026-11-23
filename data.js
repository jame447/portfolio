/**
 * Verified Engineering Portfolio Dataset — Thiraphat Thongsing (67200368)
 * Every metric, pinout, calibration constant, lab configuration, and score is
 * sourced directly from workspace project files, firmware source code, lab PDFs,
 * and official competition scorebook screenshot (score.jpg).
 */
window.PORTFOLIO_DATA = {
  profile: {
    nameEn: "Thiraphat Thongsing",
    nameTh: "ธีรภัทร ทองสิงห์",
    studentId: "67200368",
    role: "Embedded Systems & IoT Engineering Intern Candidate",
    tagline:
      "Hardware–firmware co-design, cycle-accurate deterministic sensing, custom 2-layer EasyEDA PCBs, and reliable edge-to-cloud IoT telemetry.",
    university: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
    campus: "Prince of Chumphon Campus, Thailand",
    degree: "B.Eng. in Computer Engineering — Year 3",
    gpa: "≥ 3.20 / 4.00",
    graduation: "Expected 2028",
    email: "tudtudtudut05@gmail.com",
    githubUrl: "https://github.com/jame447",
    portfolioUrl: "https://jame447.github.io/portfolio/",
    location: "Chumphon, Thailand (Ready to relocate: Bangkok / Metro / EEC)",
    teamCode: "TGR-51 (กาแฟอยู่นี่ / Coffee-is-Here)",
    activities: "University Badminton Player / Club Member",
    resumeUrl: "assets/Resume-Thiraphat-Thongsing.pdf",
    portraitUrl: "assets/myface.jpg",
    scorePhotoUrl: "assets/score.jpg",
    certificateUrl: "assets/certificate.jpg",
    rackPhotoUrl: "assets/rack-67200368.png"
  },

  internshipBrief: {
    en: {
      rolesLabel: "Target Internship Roles",
      roles: [
        "Embedded Systems Intern",
        "Firmware Engineer Intern (ESP32 / C/C++)",
        "IoT Hardware & PCB Design Intern"
      ],
      facts: [
        { label: "Internship Status", value: "Open for Embedded & IoT Internship", detail: "Flexible schedule & duration", accent: "emerald" },
        { label: "Location & Mobility", value: "Ready to Relocate", detail: "Bangkok · Metro · EEC (Chonburi / Rayong) · On-site & Hybrid", accent: "cyan" },
        { label: "Academic Standing", value: "B.Eng. Computer Engineering (Year 3)", detail: "KMITL Prince of Chumphon · GPAX ≥ 3.20 / 4.00 · Exp. 2028", accent: "amber" },
        { label: "Verified Track Record", value: "#1 TESA Top Gun Rally 2026", detail: "52.8/55 Integration · Official TESA/KMITL Certificate", accent: "emerald" }
      ],
      pillarsHeading: "What I Can Contribute on Day 1",
      pillars: [
        {
          tag: "FIRMWARE · C / C++",
          title: "Bare-Metal & Real-Time MCU Bring-Up",
          summary:
            "Write deterministic ESP32 & Arduino C/C++ firmware using hardware timers, Xtensa CCOUNT polling, non-blocking state machines, NVS Flash persistence, and clean SPI / I2C / UART drivers."
        },
        {
          tag: "HARDWARE · PCB · LAB",
          title: "Analog Front-Ends, 2-Layer PCB & Bench Debug",
          summary:
            "Design schematics and custom 2-layer PCBs in EasyEDA with voltage dividers & flyback protection, and validate circuits using Tektronix oscilloscopes, LCR meters, and DMMs."
        },
        {
          tag: "IOT · VERIFICATION",
          title: "Edge-to-Cloud Telemetry & Quantitative QA",
          summary:
            "Integrate ESP-NOW, NRF24L01, MQTT, and HTTP/REST links with Python test validators, Linux/Docker tooling, and structured multi-scenario hardware reliability testing."
        }
      ]
    },
    th: {
      rolesLabel: "ตำแหน่งฝึกงานที่สนใจสมัคร",
      roles: [
        "Embedded Systems Intern",
        "Firmware Engineer Intern (ESP32 / C/C++)",
        "IoT Hardware & PCB Design Intern"
      ],
      facts: [
        { label: "สถานะการฝึกงาน", value: "เปิดรับโอกาสฝึกงาน Embedded & IoT", detail: "ยืดหยุ่นช่วงเวลาและระยะเวลาฝึกงานได้", accent: "emerald" },
        { label: "พื้นที่ที่สะดวกฝึกงาน", value: "พร้อมย้ายที่อยู่ไปฝึกงานได้", detail: "กรุงเทพฯ · ปริมณฑล · EEC (ชลบุรี / ระยอง) · On-site & Hybrid", accent: "cyan" },
        { label: "การศึกษา", value: "วิศวกรรมคอมพิวเตอร์ ปี 3 (สจล.)", detail: "KMITL วิทยาเขตชุมพรเขตรอุดมศักดิ์ · GPAX ≥ 3.20 · คาดจบปี 2028", accent: "amber" },
        { label: "ผลงานระดับประเทศ", value: "อันดับ 1 TESA Top Gun Rally 2026", detail: "Embedded Integration 52.8/55 · มีเกียรติบัตรรับรอง", accent: "emerald" }
      ],
      pillarsHeading: "สิ่งที่พร้อมช่วยทีมตั้งแต่วันแรก (Day-1 Readiness)",
      pillars: [
        {
          tag: "FIRMWARE · C / C++",
          title: "พัฒนาเฟิร์มแวร์ ESP32 / Arduino แบบ Real-Time",
          summary:
            "เขียน C/C++ ระดับ Register/Timer (Xtensa CCOUNT, PCNT, PWM), Non-blocking State Machine, บันทึกค่าลง NVS Flash และสื่อสาร SPI / I2C / UART ได้เสถียร"
        },
        {
          tag: "HARDWARE · PCB · LAB",
          title: "ออกแบบวงจร PCB 2 ชั้น และวัดสัญญาณหน้างาน",
          summary:
            "ออกแบบ Schematic และ Custom 2-Layer PCB บน EasyEDA พร้อมวงจรป้องกัน (Divider / Flyback) และไล่ดีบักฮาร์ดแวร์ด้วย Oscilloscope, LCR Meter และ DMM"
        },
        {
          tag: "IOT · VERIFICATION",
          title: "เชื่อมต่อระบบ IoT และทดสอบเชิงปริมาณ",
          summary:
            "เชื่อมระบบไร้สาย ESP-NOW, NRF24L01, MQTT, HTTP/REST ร่วมกับสคริปต์ทดสอบ Python, Linux/Docker และทดสอบความเสถียรเชิงระบบหลายร้อยรอบ"
        }
      ]
    }
  },

  projectContributions: {
    p1: {
      en: {
        roleLabel: "My Personal Ownership (Track 1 Lead · Team TGR-51)",
        owned:
          "Engineered the LM393 inverting comparator circuit, 3-slot PCB capacitive box, 240 MHz CCOUNT ESP32 firmware (v1–v24), 3-model regression + NVS Flash, and Python validator vs. DICKEY-john mini GAC (while teammates built RPi 5 Edge AI, FastAPI backend, Trading Agent, and Next.js UI).",
        impactLabel: "Verified Engineering Result",
        impact: "#1 Embedded Integration (52.8/55) · #3 Day 2 Precision Sensing (38.4/40) · 0.00 ns SD jitter"
      },
      th: {
        roleLabel: "บทบาทและส่วนที่รับผิดชอบโดยตรง (หัวหน้าสาย Embedded · ทีม TGR-51)",
        owned:
          "ออกแบบวงจร LM393 Comparator และกล่องวัดความจุไฟฟ้า 3 ช่อง, เขียนเฟิร์มแวร์ ESP32 จับเวลา CCOUNT 240 MHz (v1–v24), ระบบคาลิเบรต 3 โมเดลพร้อม NVS Flash และสคริปต์ Python เทียบเครื่องมาตรฐาน mini GAC (แยกจากส่วน Edge AI, Backend และ Dashboard ของเพื่อนร่วมทีม)",
        impactLabel: "ผลลัพธ์ที่ตรวจสอบได้",
        impact: "อันดับ 1 Embedded Integration (52.8/55) · อันดับ 3 Day 2 Sensing (38.4/40) · ความนิ่ง 0.00 ns SD"
      }
    },
    p2: {
      en: {
        roleLabel: "My Personal Ownership (Hardware & PCB Design Lead)",
        owned:
          "Designed the custom 2-layer EasyEDA carrier PCB, isolated VSPI/HSPI dual MFRC522 bus wiring, 1 kΩ/2 kΩ ultrasonic Echo level protection, 1N4007 flyback solenoid relay stage, ESP32↔ESP32-CAM ESP-NOW wake architecture, and 3D-printed dual-unit enclosure.",
        impactLabel: "Verified Engineering Result",
        impact: "99.62% pass rate across 1,300 hardware/E2E trials (11/13 test scenarios achieved 100%)"
      },
      th: {
        roleLabel: "บทบาทและส่วนที่รับผิดชอบโดยตรง (หัวหน้าด้าน Hardware & ออกแบบ PCB)",
        owned:
          "ออกแบบ Custom 2-Layer PCB บน EasyEDA, แยกบัส Dual-SPI (VSPI/HSPI) สำหรับ RFID 2 ตัว, วงจร Divider 1kΩ/2kΩ ป้องกันขา Echo 5V, ไดโอด 1N4007 Flyback คุมกลอน 12V, ระบบปลุก ESP32-CAM ผ่าน ESP-NOW และเคส 3D-Printed 2 ชิ้น",
        impactLabel: "ผลลัพธ์ที่ตรวจสอบได้",
        impact: "ผ่านการทดสอบ 99.62% จาก 1,300 รอบ (1,295/1,300) โดยผ่านเต็ม 100% ถึง 11 จาก 13 สถานการณ์"
      }
    },
    p3: {
      en: {
        roleLabel: "My Personal Ownership (Embedded Software Developer · Node 2 / Group CE04)",
        owned:
          "Built the Arduino Uno R3 NRF24L01 Ch.66 RF packet parser (AL,<node>,<text>,<cmd>), 80 ms debounced mute & ≥1.2 s long-press reset state machine, active-LOW 12 V siren relay + 16×2 I2C LCD feedback, and SolidWorks 3D-printed enclosure.",
        impactLabel: "Verified Engineering Result",
        impact: "Reliable real-time RF alarm subsystem integrated across a 6-node MQTT / Node-RED / Looker IoT pipeline"
      },
      th: {
        roleLabel: "บทบาทและส่วนที่รับผิดชอบโดยตรง (ผู้พัฒนา Firmware · Node 2 กลุ่ม CE04)",
        owned:
          "พัฒนาเฟิร์มแวร์ Arduino Uno R3 รับและแยกแพ็กเก็ต NRF24L01 ช่อง 66 (AL,<node>,<text>,<cmd>), ลอจิกปุ่มกด Debounce 80 ms (กดสั้น Mute / กดค้าง ≥1.2 วิ Reset), คุมรีเลย์ไซเรน 12V + จอ LCD 16×2 และออกแบบกล่อง 3D ด้วย SolidWorks",
        impactLabel: "ผลลัพธ์ที่ตรวจสอบได้",
        impact: "ระบบแจ้งเตือนไร้สายทำงานเชื่อมต่อจริงร่วมกับระบบ IoT 6 โหนด (MQTT / Node-RED / Looker Studio)"
      }
    }
  },

  i18n: {
    th: {
      "nav.internship": "ข้อมูลฝึกงาน",
      "nav.scorebook": "คะแนน TESA",
      "nav.certificate": "เกียรติบัตร",
      "nav.projects": "โปรเจกต์หลัก",
      "nav.sim": "จำลองเฟิร์มแวร์",
      "nav.stack": "ทักษะ",
      "nav.labs": "แล็บวิศวกรรม",
      "nav.contact": "ติดต่อ",
      "nav.resume": "เรซูเม่ PDF",
      "hero.badgeAvail": '<span class="pulse-dot"></span> เปิดรับโอกาสฝึกงาน Embedded &amp; IoT (พร้อมย้ายพื้นที่)',
      "hero.title": 'วิศวกรรม <span class="accent">Hardware–Firmware</span> ความแม่นยำสูงสำหรับระบบ Real-Time IoT',
      "hero.subtitle": "ธีรภัทร ทองสิงห์ (Thiraphat Thongsing) — นักศึกษาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 3 สจล. วิทยาเขตชุมพรฯ",
      "hero.desc":
        'พัฒนาเฟิร์มแวร์ ESP32 &amp; Arduino (C/C++), วงจรแอนะล็อก/คอมพาเรเตอร์, ออกแบบบอร์ด PCB 2 ชั้นด้วย EasyEDA และระบบรับส่งข้อมูล IoT (MQTT / ESP-NOW) คว้ารางวัล <strong>อันดับ 1 Embedded Integration (52.8/55)</strong> และ <strong>อันดับ 3 Day 2 Sensing (38.4/40)</strong> จากการแข่งขัน TESA Top Gun Rally 2026',
      "hero.ctaBrief": "ดูข้อมูลสำหรับยื่นฝึกงาน",
      "hero.ctaProjects": "ดูโปรเจกต์วิศวกรรมหลัก",
      "hero.ctaResume": "เปิดเรซูเม่ (PDF)",
      "hero.specRelocLabel": "พื้นที่ฝึกงาน",
      "hero.specRelocVal": "กทม. / EEC / Hybrid",
      "intern.eyebrow": "Recruiter Quick-Brief · สำหรับฝ่ายบุคคลและหัวหน้าทีมวิศวกร",
      "intern.title": "ข้อมูลความพร้อมสำหรับการฝึกงาน (Internship Readiness)",
      "intern.sub":
        "สรุปตำแหน่งที่สนใจ ความพร้อมในการย้ายพื้นที่ และทักษะที่สามารถลงมือช่วยทีมวิศวกรรมได้ตั้งแต่วันแรก พร้อมหลักฐานผลงานที่ตรวจสอบได้จริง",
      "intern.btnResume": "ดาวน์โหลดเรซูเม่ PDF",
      "intern.btnCopy": "คัดลอกลิงก์ Portfolio",
      "intern.btnPrint": "พิมพ์ / บันทึกเป็น PDF",
      "score.eyebrow": "หลักฐานผลการแข่งขัน · 15–21 พ.ย. 2026",
      "score.title": "ตารางคะแนนทางการ TESA Top Gun Rally 2026 ครั้งที่ 20",
      "score.sub":
        'ผลคะแนนอย่างเป็นทางการของทีม <strong>TGR-51 (กาแฟอยู่นี่ / Coffee-is-Here)</strong> จากระบบ <code>tesa-score.c333m.site</code> โดยสายงาน Embedded ได้ <strong>อันดับ 1 รอบ Integration (52.8/55)</strong> และ <strong>อันดับ 3 รอบ Day 2 (38.4/40)</strong>',
      "cert.eyebrow": "เกียรติบัตรรับรอง · 15–21 พ.ย. 2026",
      "cert.title": "เกียรติบัตรการแข่งขันระดับประเทศ (Verified Certificate)",
      "cert.sub":
        "เกียรติบัตรฉบับจริงลงนามรับรองร่วมกันโดย <strong>สมาคมสมองกลฝังตัวไทย (TESA)</strong> และ <strong>คณะวิศวกรรมศาสตร์ สจล. &amp; วิทยาเขตชุมพรเขตรอุดมศักดิ์</strong>",
      "proj.eyebrow": "Hardware · Firmware · Telemetry",
      "proj.title": "โปรเจกต์วิศวกรรมระบบสมองกลฝังตัวหลัก (Flagship Systems)",
      "proj.sub":
        "สรุปบทบาทที่รับผิดชอบโดยตรง สถาปัตยกรรมวงจรและเฟิร์มแวร์ พร้อมเครื่องมือจำลองการทำงาน ผังวงจรจริง และผลทดสอบเชิงปริมาณ",
      "skills.eyebrow": "Capabilities Matrix",
      "skills.title": "ทักษะทางเทคนิคตั้งแต่ระดับฮาร์ดแวร์ถึงคลาวด์",
      "skills.sub":
        "ไมโครคอนโทรลเลอร์ เครื่องมือวัดทางไฟฟ้า โปรโตคอลสื่อสาร งานออกแบบ PCB/FPGA และพื้นฐานระบบเครือข่าย/ความปลอดภัยที่ผ่านการใช้งานจริง",
      "labs.eyebrow": "ปฏิบัติการวิศวกรรม · กว่า 37 รายงานแล็บ",
      "labs.title": "คลังปฏิบัติการวิศวกรรมหลัก (Core Engineering Labs)",
      "labs.sub":
        "ประสบการณ์ลงมือทำจริงด้าน FPGA, การวัดคลื่นสัญญาณด้วย Oscilloscope, ตั้งค่าอุปกรณ์เครือข่าย Huawei ระดับองค์กร และความมั่นคงปลอดภัย Linux/Docker",
      "contact.eyebrow": "การศึกษาและการติดต่อสำหรับฝึกงาน",
      "contact.title": "พร้อมเข้าร่วมทีมวิศวกรรม Embedded Hardware &amp; Firmware",
      "contact.sub":
        '<strong>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.)</strong> — วิทยาเขตชุมพรเขตรอุดมศักดิ์<br />วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์ (ชั้นปีที่ 3) · เกรดเฉลี่ยสะสม: <strong>≥ 3.20 / 4.00</strong> · คาดว่าจะสำเร็จการศึกษา: <strong>2028</strong><br />กิจกรรม: นักกีฬาแบดมินตันมหาวิทยาลัย / สมาชิกชมรมแบดมินตัน',
      "contact.reloc": "ฐานที่ตั้ง สจล. ชุมพร · พร้อมย้ายไปฝึกงาน กรุงเทพฯ / ปริมณฑล / EEC (ชลบุรี–ระยอง) — On-site & Hybrid"
    }
  },

  heroMetrics: [
    {
      value: "#1",
      unit: "52.8 / 55",
      label: "Embedded Integration",
      detail: "TESA Top Gun Rally 2026 · Team TGR-51"
    },
    {
      value: "#3",
      unit: "38.4 / 40",
      label: "Day 2 Precision Sensing",
      detail: "Capacitive Coffee Moisture Analyzer"
    },
    {
      value: "4.17 ns",
      unit: "0.00 ns SD",
      label: "Xtensa CCOUNT Timing",
      detail: "384-Cycle 50 Hz Mains Hum Rejection"
    },
    {
      value: "99.62%",
      unit: "1,295 / 1,300",
      label: "Access Control Pass Rate",
      detail: "13 Scenarios × 100 Hardware/E2E Trials"
    }
  ],

  scorebook: {
    event: "TESA Top Gun Rally 2026 #20",
    dates: "November 15–21, 2026",
    host: "KMITL Prince of Chumphon Campus",
    teamCode: "TGR-51",
    teamNameTh: "กาแฟอยู่นี่",
    teamNameEn: "Coffee-is-Here",
    universityTh: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    totalScore: 79.53,
    totalMax: 100,
    specialProblem: { score: 2, max: 2, note: "Extra credit" },
    tracks: [
      {
        name: "Embedded Systems (Track 1)",
        weight: "26% of total",
        highlight: true,
        stages: [
          { stage: "Day 1 (pF Capacitance Meter)", score: null, max: null, rank: "N/A" },
          { stage: "Day 2 (Coffee Moisture Sensing)", score: 38.4, max: 40, rank: "#3" },
          { stage: "Integration (Seam Hub Telemetry)", score: 52.8, max: 55, rank: "#1" }
        ]
      },
      {
        name: "Edge AI & Vision (Track 2)",
        weight: "26% of total",
        highlight: false,
        stages: [
          { stage: "Day 1", score: 12.86, max: 15, rank: "#2" },
          { stage: "Day 2", score: 8.77, max: 25, rank: "#48" },
          { stage: "Integration", score: 49.53, max: 60, rank: "#9" }
        ]
      },
      {
        name: "The Next-Gen Market (Track 3)",
        weight: "26% of total",
        highlight: false,
        stages: [
          { stage: "Day 1", score: 12.6, max: 15, rank: "#18" },
          { stage: "Day 2", score: 25.51, max: 35, rank: "#36" },
          { stage: "Integration", score: 33.22, max: 50, rank: "#30" }
        ]
      },
      {
        name: "Project Management & Presentation",
        weight: "Integration Stage",
        highlight: false,
        stages: [
          { stage: "PM (Agile / Risk / Reporting)", score: 8.39, max: 10, rank: "#15" },
          { stage: "Presentation (Pitching)", score: 7.13, max: 10, rank: "#18" },
          { stage: "Special Problem", score: 2, max: 2, rank: "Full 2/2" }
        ]
      }
    ]
  },

  certificates: [
    {
      id: "tesa-tgr-2026",
      badge: "Certificate of Participation",
      title: "The TESA Top Gun Rally 2026",
      subtitle: "Jointly organized by Thai Embedded Systems Association (TESA) & King Mongkut's Institute of Technology Ladkrabang (School of Engineering and Prince of Chumphon Campus)",
      recipient: "Thiraphat Thongsing",
      teamCode: "TGR-51",
      dates: "November 15–21, 2026",
      location: "KMITL Prince of Chumphon Campus, Chumphon, Thailand",
      summary:
        "Awarded in recognition of successful participation in and completion of the national embedded systems & AIoT training camp and competition (20th TESA Top Gun Rally).",
      signatories: [
        { name: "Assoc.Prof. Wiroon Sriborrirux", role: "President, Thailand Embedded Systems Association" },
        { name: "Assoc.Prof.Dr. Somyot Kaitwanidvilai", role: "Dean, School of Engineering, KMITL" },
        { name: "Assoc.Prof.Dr. Siriwan Srisang", role: "Executive Vice President, KMITL Prince of Chumphon Campus" }
      ],
      highlights: [
        "#1 Embedded Integration (52.8 / 55)",
        "#3 Day 2 Precision Sensing (38.4 / 40)",
        "Special Problem (2 / 2)"
      ],
      imageUrl: "assets/certificate.jpg",
      caption:
        "Official Certificate of Participation — The TESA Top Gun Rally 2026 (Nov 15–21, 2026, KMITL Prince of Chumphon) presented to Thiraphat Thongsing (Team TGR-51)"
    }
  ],

  moistureLab: {
    // Firmware v24 exact constants from esp32_coffee_moisture_meter.ino
    c0EmptyPf: 10.72,
    emptyDeadbandPf: 2.2,
    t0OpenNs: 8099.33,
    slopePfPerNs: 0.00137724,
    lcrOffsetPf: 1.151,
    calPoints: [
      { label: "Bag #1 (Dry)", cTotalPf: 17.45, moisturePct: 6.9, weightG: 35.0 },
      { label: "Bag #2 (Optimal)", cTotalPf: 25.79, moisturePct: 11.3, weightG: 35.0 },
      { label: "Bag #3 (Wet)", cTotalPf: 30.4, moisturePct: 14.4, weightG: 35.0 }
    ],
    presets: [
      { id: "empty", label: "Empty Box (ZERO)", cPf: 10.35, note: "Below C0 + 2.20 pF deadband -> 0.00%" },
      { id: "bag1", label: "Sample #1 (6.90%)", cPf: 17.43, note: "Dry coffee beans · last test v24.txt: 6.89%, 0.00 ns SD" },
      { id: "bag2", label: "Sample #2 (11.30%)", cPf: 25.79, note: "Optimal SCA/GI range · test02 v23: 11.30%, 0.00 ns SD" },
      { id: "bag3", label: "Sample #3 (14.40%)", cPf: 30.4, note: "High moisture boundary · C_tot = 30.40 pF" }
    ],
    v18Benchmarks: [
      {
        sample: "Sample 1 (Dry Coffee)",
        refMiniGac: 6.9,
        runs: [6.86, 6.9, 6.88, 6.89, 6.86],
        mean: 6.878,
        sdJitter: 0.018,
        relError: 0.32,
        relRmse: 0.39,
        score: "25 / 25"
      },
      {
        sample: "Sample 2 (Medium Coffee)",
        refMiniGac: 11.3,
        runs: [11.29, 11.46, 11.38, 11.42, 11.47],
        mean: 11.404,
        sdJitter: 0.073,
        relError: 0.92,
        relRmse: 1.08,
        score: "25 / 25"
      },
      {
        sample: "Sample 3 (Wet Coffee)",
        refMiniGac: 14.3,
        runs: [14.72, 14.68, 14.79, 14.7, 14.7],
        mean: 14.718,
        sdJitter: 0.043,
        relError: 2.92,
        relRmse: 2.94,
        score: "24–25 / 25"
      }
    ],
    day1LcrPoints: [
      { nom: "5 pF", lcrCp: 6.41, rawEsp: "5.16–5.18 pF", calEsp: "6.41–6.42 pF" },
      { nom: "10 pF", lcrCp: 11.45, rawEsp: "10.31–10.33 pF", calEsp: "11.44–11.46 pF" },
      { nom: "15 pF", lcrCp: 16.57, rawEsp: "14.95–14.98 pF", calEsp: "16.56–16.58 pF" },
      { nom: "20 pF", lcrCp: 21.42, rawEsp: "20.24 pF (0 SD)", calEsp: "21.42 pF (0 SD)" }
    ],
    pinout: [
      { signal: "PIN_CHARGE", gpio: "GPIO 18", connection: "R1 (1 MΩ) -> Vc Node & LM393 Pin 2 (IN1-)" },
      { signal: "PIN_COMP_OUT", gpio: "GPIO 19", connection: "LM393 Pin 1 (OUT1) + Pull-up R2 (10 kΩ / 2 kΩ) to 3.3 V" },
      { signal: "Vref Reference", gpio: "Analog Divider", connection: "10 kΩ Trimpot RV1 Wiper -> LM393 Pin 3 (IN1+, ≈ 1.65 V)" },
      { signal: "PIN_BUTTON", gpio: "GPIO 23", connection: "Push button to GND + 0.1 µF debounce (Short=Read, ≥2.5s=ZERO)" },
      { signal: "PIN_LED", gpio: "GPIO 2", connection: "Onboard LED (200 ms pulse on every serial measurement)" },
      { signal: "Pre-Rally PCNT / ADC1", gpio: "GPIO 4 / 34 / 18", connection: "NE555P 508.01 kHz pulse counter, 10 kΩ divider, 25 kHz PWM fan" }
    ]
  },

  doorLockTrials: [
    { id: "T01", name: "Entry RFID Scan + JPEG Capture", pass: 97, fail: 3, rate: "97%" },
    { id: "T02", name: "Exit RFID Scan (HSPI Independent)", pass: 100, fail: 0, rate: "100%" },
    { id: "T03", name: "Unregistered Card Rejection", pass: 100, fail: 0, rate: "100%" },
    { id: "T04", name: "Disabled Card Rejection (isActive=false)", pass: 100, fail: 0, rate: "100%" },
    { id: "T05", name: "Ultrasonic Wake Detection (≤ 45 cm)", pass: 100, fail: 0, rate: "100%" },
    { id: "T06", name: "Standby Sleep Entry (> 46 cm)", pass: 100, fail: 0, rate: "100%" },
    { id: "T07", name: "Backend Offline Graceful Fail-Safe", pass: 100, fail: 0, rate: "100%" },
    { id: "T08", name: "Out-of-Range Card Ignore (> 45 cm)", pass: 100, fail: 0, rate: "100%" },
    { id: "T09", name: "Real-Time Dashboard Socket.IO Sync", pass: 100, fail: 0, rate: "100%" },
    { id: "T10", name: "LINE Messaging Notification (Granted)", pass: 100, fail: 0, rate: "100%" },
    { id: "T11", name: "LINE Messaging Notification (Denied)", pass: 100, fail: 0, rate: "100%" },
    { id: "T12", name: "Dynamic CCTV URL Re-Registration", pass: 98, fail: 2, rate: "98%" },
    { id: "T13", name: "Live MJPEG (:81/stream) Viewport", pass: 100, fail: 0, rate: "100%" }
  ],

  alarmPresets: [
    { label: "Node 1 · High Temp", packet: "AL,N1,HOTTEMP,ON", desc: "Temperature threshold exceeded" },
    { label: "Node 2 · Light Left On", packet: "AL,N2,LIGHTON,ON", desc: "Lighting circuit active alert" },
    { label: "Node 3 · AC Running", packet: "AL,N3,AIRON,ON", desc: "HVAC unit powered ON" },
    { label: "Node 1 · Clear / OFF", packet: "AL,N1,TEMP OK,OFF", desc: "Deactivate relay safely" }
  ],

  skills: [
    {
      category: "MCUs, Sensors & Analog Front-End",
      icon: "cpu",
      items: [
        "ESP32 DevKit V1 / ESP32-S3 / ESP32-CAM",
        "Arduino Uno R3",
        "LM393 Dual Comparator (DIP-8, Inverting)",
        "NE555P Timer & RC Step-Charge Circuits",
        "74LSxx TTL Logic (74LS00/02/04/08/32/86/112)",
        "MFRC522 Dual RFID (VSPI / HSPI)",
        "NRF24L01 2.4 GHz RF Transceiver",
        "HY-SRF05 Ultrasonic (1 kΩ/2 kΩ Divider)",
        "SH1106 I2C OLED & 16×2 I2C LCD (0x27)",
        "1N4007 Flyback Relay & 12V Solenoid / Siren"
      ]
    },
    {
      category: "Languages & Deterministic Firmware",
      icon: "code",
      items: [
        "C / C++ (Arduino Core & ESP-IDF)",
        "Xtensa 240 MHz CCOUNT Register Polling",
        "IRAM_ATTR & Critical-Section Interrupt Control",
        "Single-Cycle GPIO Register I/O (REG_WRITE)",
        "ESP32 Hardware PCNT & 25 kHz LEDC PWM",
        "Non-Blocking State Machines & Edge Debounce",
        "NVS Flash Persistence (Preferences)",
        "Python (Validators, FastAPI, Automation)",
        "PowerShell & Bash Scripting"
      ]
    },
    {
      category: "Protocols, RF & Network Engineering",
      icon: "network",
      items: [
        "UART (SoftwareSerial / 9600-115200 bps)",
        "SPI (Dual-Bus Isolation VSPI & HSPI)",
        "I2C (OLED & LCD Addressing)",
        "ESP-NOW Peer-to-Peer Low-Latency Link",
        "NRF24L01 RF Channel Framing (Ch. 66)",
        "MQTT (Mosquitto Broker / PubSubClient)",
        "HTTP/REST APIs, MJPEG Streams & Socket.IO",
        "Huawei AR651 Router & S5735 L3 Switch",
        "VLAN 802.1Q, Inter-VLAN Routing, DHCP, NAT, SSH"
      ]
    },
    {
      category: "EDA, FPGA, CAD & Security Tooling",
      icon: "layers",
      items: [
        "EasyEDA (Schematics & Custom 2-Layer PCB)",
        "Intel Quartus Prime & Altera Cyclone II FPGA",
        "Logisim-Evolution & TinkerCAD",
        "SolidWorks 2023 & 3D Printing (Bambu / Cura)",
        "Tektronix Oscilloscope & LCR / DMM Bench Testing",
        "Docker, Docker Compose & NGINX TLS 1.2/1.3",
        "Linux Hardening (OpenSSH, UFW, Non-Root)",
        "Snort IDS, Trivy CVE Scanning, Burp Suite, Forensics"
      ]
    }
  ],

  courseLabs: [
    {
      domain: "digital",
      domainLabel: "Digital Systems & FPGA",
      title: "Altera Cyclone II FPGA: K-Map, 4:1 MUX, 74154 7-Segment & MOD-6 Counter",
      course: "Digital System Fundamentals (Labs 4–6)",
      tools: ["Intel Quartus Prime", "ASTRON Cyclone II EDU FPGA", "74LS112", "Logisim"],
      summary:
        "Compiled pin-assigned schematics (PIN_88–91, PIN_128, PIN_135–143) onto an Altera Cyclone II FPGA board: minimized SOP logic via K-Maps, 4:1 MUX41 reduction, 74154 binary-to-7-segment decimal decoder (0–9), and an asynchronous MOD-6 ripple counter using JKFF2 flip-flops resetting automatically on Q2·Q1.",
      verified: "All 16 MUX combinations, 0–9 7-segment hardware states, and 0–5 MOD-6 roll-over captures verified on physical FPGA LEDs."
    },
    {
      domain: "digital",
      domainLabel: "Digital Systems & FPGA",
      title: "TTL Breadboard Adders, Flip-Flops & Asynchronous Pump Controller",
      course: "Digital System Fundamentals (Labs 1–3, 6–7)",
      tools: ["7400/7402/7404/7408/7432/7486", "74LS112 JK-FF", "TinkerCAD", "Logisim"],
      summary:
        "Built and verified physical TTL breadboard Half Adders, Full Adders, and RS/D/JK/T Flip-Flops alongside a 4-bit parallel ripple adder and a hazard-free asynchronous sequential electric water pump controller Y = (S1·y) + S2 derived from primitive flow and implication tables.",
      verified: "100% truth-table and sequential hysteresis match (empty -> lower sensor -> upper cutoff -> hysteresis hold -> refill)."
    },
    {
      domain: "datacomm",
      domainLabel: "Data Comm & Signals",
      title: "Tektronix Oscilloscope Verification: UART Framing, NRZ-L & NRZ-I Encoders",
      course: "Data Communications (Labs 1–3)",
      tools: ["Arduino Uno R3", "Tektronix Digital Oscilloscope", "SoftwareSerial", "PORTD"],
      summary:
        "Generated clock-synchronized digital line codes (NRZ-L and NRZ-I on D8/D2/D13 at 1 Hz) and compared 8-bit parallel PORTD ASCII LED transmission ('A'–'E') against 9600-bps UART serial framing ('Z','E','G','L','M') on Tx Pin 1.",
      verified: "Captured clean 5.00 V/div Tektronix waveforms isolating UART Start bit, 8 data bits, and Stop bit transitions."
    },
    {
      domain: "datacomm",
      domainLabel: "Data Comm & Signals",
      title: "64 Hz Time-Division Multiplexing & HTTP/ThingSpeak Telemetry",
      course: "Data Communications (Lab 5, HTTP/MQTT Labs)",
      tools: ["Logisim-Evolution", "PHP / XAMPP", "ThingSpeak REST API", "MQTT"],
      summary:
        "Engineered a 2-channel 4-bit Time-Division Multiplexer (64.0 Hz clock + latch) driving dual 7-segment decoders, plus PHP-to-ThingSpeak cloud ingestion (Channel 3079662) and MQTT QoS 0/1/2 broker pipelines.",
      verified: "Confirmed Entry ID 4–7 cloud updates via JSON feed retrieval and automated chart telemetry."
    },
    {
      domain: "networks",
      domainLabel: "Computer Networks",
      title: "Enterprise Huawei AR651 Router & S5735 L3 Switch Rack Configuration",
      course: "Computer Networks (Labs 10–11 & Rack Topology)",
      tools: ["Huawei AR651", "Huawei S5735-L16T4X-QA-V2", "PuTTY 9600-8-N-1", "VLAN / NAT"],
      summary:
        "Configured physical Huawei S5735 L3 switches (vlan batch 10 20, access/trunk GE ports, Vlanif 10/20 SVIs, ip routing) and Huawei AR651 routers (GE0/0/1 LAN 192.168.1.1/24, GE0/0/2 WAN 172.16.8.231/20, DHCP LAN-POOL, ACL 2000 NAT outbound, AAA + STelnet SSH) inside a 47U Data Center rack.",
      verified: "0% packet loss across inter-VLAN and NAT uplink pings plus verified display ip routing-table & rack diagram (rack-67200368.png).",
      hasRackPreview: true
    },
    {
      domain: "networks",
      domainLabel: "Computer Networks",
      title: "Cisco Packet Tracer: OSI PDU Inspection, /25–/26 Subnetting, 802.1Q & RIP",
      course: "Computer Networks (Labs 1–9)",
      tools: ["Cisco Packet Tracer 8", "Catalyst 2960/3560", "Router 1941", "DHCP / RIP"],
      summary:
        "Analyzed L2/L3 PDU encapsulation across routers and switches, designed /25 and /26 VLSM subnets, traced dynamic MAC address table re-learning on port swaps, and implemented static routing, RIP, and Router-on-a-Stick 802.1Q subinterfaces.",
      verified: "Confirmed L2 MAC rewrite at router boundaries while preserving end-to-end IPv4 headers and isolated VLAN broadcast domains."
    },
    {
      domain: "security",
      domainLabel: "Security & Linux Hardening",
      title: "OS/Container Hardening, Trivy CVE Audits & Snort IDS DMZ Defense",
      course: "Information & Computer Security (Labs 6–7, 13)",
      tools: ["Ubuntu Linux", "Docker", "UFW", "Trivy", "Snort IDS", "sha256sum Forensics"],
      summary:
        "Hardened OpenSSH (PermitRootLogin no), UFW firewalls, and Docker containers (non-root Alpine USER, --read-only, --cap-drop=ALL blocking raw sockets), eliminated CVEs found by Trivy (nginx:1.14 -> nginx:alpine 0 CVEs), deployed Snort IDS on DMZ bridge br-390f359dd498, and conducted sha256sum/chmod 444 log forensics reconstructing gobuster -> sqlmap -> webshell -> sudo compromise.",
      verified: "Snort alerted on custom SID 1000001 ICMP & SID 1000002 LFI /etc/passwd traversal in real time."
    },
    {
      domain: "security",
      domainLabel: "Security & Linux Hardening",
      title: "OpenSSL PKI, NGINX TLS 1.2/1.3, LAMP AAA RBAC & DVWA Mitigation",
      course: "Information & Computer Security (Labs 2–5, 10)",
      tools: ["OpenSSL", "NGINX TLS", "MySQL/PHP AAA", "DVWA", "Burp Suite", "STRIDE"],
      summary:
        "Performed RSA-2048 encryption & SHA-256 digital signature tamper detection, deployed Dockerized NGINX HTTPS redirects (TLSv1.2/1.3), built a MySQL-backed RBAC audit system, and mitigated SQLi, Reflected XSS, and CSRF in DVWA using Burp Suite + PDO prepared statements.",
      verified: "Tampered contract.txt triggered Verification failure; DVWA Impossible mode blocked all 3 exploit classes."
    }
  ]
};
