/**
 * Interactive Portfolio Logic — Thiraphat Thongsing
 * Zero external runtime dependencies; works seamlessly under both file:// and http://.
 */
(function () {
  "use strict";

  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) return;

  // ---------------- Helper Utilities ----------------
  const el = (id) => document.getElementById(id);

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---------------- Mobile Menu & Active Scroll Nav ----------------
  const mobileMenuBtn = el("mobileMenuBtn");
  const navLinks = el("navLinks");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Active Scroll-Spy for Sticky Navbar
  const navAnchors = navLinks ? Array.from(navLinks.querySelectorAll('a[href^="#"]')) : [];
  const spyTargets = navAnchors
    .map((a) => ({ link: a, section: document.querySelector(a.getAttribute("href")) }))
    .filter((item) => item.section);

  if (spyTargets.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => a.classList.remove("active"));
            const activeItem = spyTargets.find((t) => t.section === entry.target);
            if (activeItem) activeItem.link.classList.add("active");
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0.01 }
    );
    spyTargets.forEach((t) => observer.observe(t.section));
  }

  // ---------------- Bilingual (EN / TH) & Recruiter Brief Rendering ----------------
  let currentLang = "en";
  try {
    const savedLang = localStorage.getItem("portfolio_lang");
    if (savedLang === "th" || savedLang === "en") currentLang = savedLang;
  } catch {
    // Ignore storage errors in restricted contexts
  }

  const defaultEnHtml = new Map();
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    defaultEnHtml.set(node, node.innerHTML);
  });

  function renderInternshipBrief(lang) {
    const container = el("internshipBriefContainer");
    if (!container || !DATA.internshipBrief) return;
    const brief = DATA.internshipBrief[lang] || DATA.internshipBrief.en;

    const rolesHtml = brief.roles
      .map((r) => `<span class="badge badge-cyan">${escapeHtml(r)}</span>`)
      .join("");

    const factsHtml = brief.facts
      .map(
        (f) => `
        <div class="fact-card accent-${escapeHtml(f.accent)}">
          <small>${escapeHtml(f.label)}</small>
          <strong>${escapeHtml(f.value)}</strong>
          <span>${escapeHtml(f.detail)}</span>
        </div>`
      )
      .join("");

    const pillarsHtml = brief.pillars
      .map(
        (p) => `
        <div class="pillar-card">
          <span class="badge">${escapeHtml(p.tag)}</span>
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.summary)}</p>
        </div>`
      )
      .join("");

    container.innerHTML = `
      <div class="recruiter-dossier">
        <div class="role-bar">
          <span class="role-bar-label">${escapeHtml(brief.rolesLabel)}:</span>
          ${rolesHtml}
        </div>
        <div class="recruiter-facts">${factsHtml}</div>
        <div>
          <div class="pillars-heading">${escapeHtml(brief.pillarsHeading)}</div>
          <div class="pillar-grid">${pillarsHtml}</div>
        </div>
      </div>`;
  }

  function renderProjectContributions(lang) {
    if (!DATA.projectContributions) return;
    ["p1", "p2", "p3"].forEach((key) => {
      const box = el(`contrib-${key}`);
      const entry = DATA.projectContributions[key];
      if (!box || !entry) return;
      const c = entry[lang] || entry.en;
      box.innerHTML = `
        <div class="contrib-col">
          <small>${escapeHtml(c.roleLabel)}</small>
          <p>${escapeHtml(c.owned)}</p>
        </div>
        <div class="contrib-col contrib-impact">
          <small>${escapeHtml(c.impactLabel)}</small>
          <strong>${escapeHtml(c.impact)}</strong>
        </div>`;
    });
  }

  function applyLanguage(lang) {
    currentLang = lang === "th" ? "th" : "en";
    document.documentElement.lang = currentLang;
    try {
      localStorage.setItem("portfolio_lang", currentLang);
    } catch {
      // Ignore storage errors
    }

    const thMap = (DATA.i18n && DATA.i18n.th) || {};
    defaultEnHtml.forEach((enHtml, node) => {
      const key = node.getAttribute("data-i18n");
      if (currentLang === "th" && thMap[key]) {
        node.innerHTML = thMap[key];
      } else {
        node.innerHTML = enHtml;
      }
    });

    document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });

    renderInternshipBrief(currentLang);
    renderProjectContributions(currentLang);
  }

  document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
  });

  applyLanguage(currentLang);

  // Copy Portfolio Link & Print/Save PDF Buttons
  const copyPortfolioBtn = el("copyPortfolioBtn");
  let copyUrlTimer = null;
  if (copyPortfolioBtn) {
    copyPortfolioBtn.addEventListener("click", async () => {
      const url = (DATA.profile && DATA.profile.portfolioUrl) || window.location.href;
      try {
        await navigator.clipboard.writeText(url);
        clearTimeout(copyUrlTimer);
        copyPortfolioBtn.textContent = currentLang === "th" ? "คัดลอกลิงก์แล้ว!" : "Copied URL!";
        copyUrlTimer = setTimeout(() => {
          const thMap = (DATA.i18n && DATA.i18n.th) || {};
          copyPortfolioBtn.innerHTML =
            currentLang === "th" && thMap["intern.btnCopy"]
              ? thMap["intern.btnCopy"]
              : defaultEnHtml.get(copyPortfolioBtn) || "Copy Portfolio Link";
        }, 1800);
      } catch {
        window.prompt("Copy portfolio URL:", url);
      }
    });
  }

  const printPortfolioBtn = el("printPortfolioBtn");
  if (printPortfolioBtn) {
    printPortfolioBtn.addEventListener("click", () => window.print());
  }

  // ---------------- Render Hero Telemetry Strip ----------------
  const heroKpis = el("heroKpis");
  if (heroKpis) {
    heroKpis.innerHTML = DATA.heroMetrics
      .map(
        (m) => `
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-value">${escapeHtml(m.value)}</span>
            <span class="kpi-unit">${escapeHtml(m.unit)}</span>
          </div>
          <div class="kpi-label">${escapeHtml(m.label)}</div>
          <div class="kpi-detail">${escapeHtml(m.detail)}</div>
        </div>`
      )
      .join("");
  }

  // ---------------- Render Scorebook Tracks (score.jpg breakdown) ----------------
  const scoreTracksContainer = el("scoreTracksContainer");
  if (scoreTracksContainer) {
    scoreTracksContainer.innerHTML = DATA.scorebook.tracks
      .map((track) => {
        const rowsHtml = track.stages
          .map((s) => {
            const pct = s.score !== null && s.max ? Math.min(100, (s.score / s.max) * 100) : 0;
            const scoreStr = s.score !== null ? `${s.score} / ${s.max}` : "N/A";
            const rankBadgeClass =
              s.rank === "#1"
                ? "badge-emerald"
                : s.rank === "#2" || s.rank === "#3"
                ? "badge-cyan"
                : "badge";
            return `
              <div class="stage-row">
                <span>${escapeHtml(s.stage)}</span>
                <div class="stage-bar-wrap" aria-hidden="true">
                  <div class="stage-bar-fill" style="width: ${pct.toFixed(1)}%"></div>
                </div>
                <span class="stage-score">
                  <span>${escapeHtml(scoreStr)}</span>
                  <span class="badge ${rankBadgeClass}">${escapeHtml(s.rank)}</span>
                </span>
              </div>`;
          })
          .join("");
        return `
          <div class="track-card ${track.highlight ? "highlight" : ""}">
            <div class="track-head">
              <h3>${escapeHtml(track.name)}</h3>
              <span class="badge">${escapeHtml(track.weight)}</span>
            </div>
            <div class="stage-rows">${rowsHtml}</div>
          </div>`;
      })
      .join("");
  }

  // ---------------- Render Official Certificates ----------------
  const certificatesContainer = el("certificatesContainer");
  if (certificatesContainer && Array.isArray(DATA.certificates)) {
    certificatesContainer.innerHTML = DATA.certificates
      .map((cert) => {
        const signatoriesHtml = cert.signatories
          .map(
            (sig) => `
            <div class="signatory-item">
              <strong>${escapeHtml(sig.name)}</strong>
              <span>${escapeHtml(sig.role)}</span>
            </div>`
          )
          .join("");
        const highlightsHtml = cert.highlights
          .map(
            (h, idx) =>
              `<span class="badge ${idx === 0 ? "badge-emerald" : idx === 1 ? "badge-cyan" : "badge-amber"}">${escapeHtml(h)}</span>`
          )
          .join("");
        return `
          <article class="certificate-card">
            <div class="certificate-grid">
              <div
                class="certificate-frame"
                role="button"
                tabindex="0"
                data-lightbox="${escapeHtml(cert.imageUrl)}"
                data-caption="${escapeHtml(cert.caption)}"
                title="Click to inspect full-resolution certificate"
              >
                <img
                  src="${escapeHtml(cert.imageUrl)}"
                  alt="${escapeHtml(cert.title)} — ${escapeHtml(cert.recipient)} (${escapeHtml(cert.teamCode)})"
                />
                <div class="certificate-overlay">
                  <span>TESA · KMITL · ${escapeHtml(cert.teamCode)}</span>
                  <span class="badge badge-amber">Zoom Full Resolution ⤢</span>
                </div>
              </div>

              <div class="certificate-details">
                <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
                  <span class="badge badge-amber">${escapeHtml(cert.badge)}</span>
                  <span class="badge badge-cyan">Team ${escapeHtml(cert.teamCode)}</span>
                  <span class="badge badge-emerald">Verified Signed Original</span>
                </div>

                <div>
                  <h3>${escapeHtml(cert.title)}</h3>
                  <p class="certificate-subtitle" style="margin-top: 0.35rem;">${escapeHtml(cert.subtitle)}</p>
                </div>

                <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">${escapeHtml(cert.summary)}</p>

                <div class="cert-meta-grid">
                  <div class="cert-meta-item">
                    <small>Recipient</small>
                    <strong>${escapeHtml(cert.recipient)}</strong>
                  </div>
                  <div class="cert-meta-item">
                    <small>Camp &amp; Rally Dates</small>
                    <strong>${escapeHtml(cert.dates)}</strong>
                  </div>
                  <div class="cert-meta-item" style="grid-column: 1 / -1;">
                    <small>Host Venue</small>
                    <strong>${escapeHtml(cert.location)}</strong>
                  </div>
                </div>

                <div class="signatory-list">
                  <div class="signatory-list-title">Signed &amp; Endorsed By</div>
                  ${signatoriesHtml}
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
                  ${highlightsHtml}
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.15rem;">
                  <button
                    class="btn btn-primary btn-sm"
                    type="button"
                    data-lightbox="${escapeHtml(cert.imageUrl)}"
                    data-caption="${escapeHtml(cert.caption)}"
                  >
                    Zoom Full Certificate ⤢
                  </button>
                  <a
                    class="btn btn-secondary btn-sm"
                    href="${escapeHtml(cert.imageUrl)}"
                    target="_blank"
                    rel="noopener"
                  >
                    Open Original Image ↗
                  </a>
                </div>
              </div>
            </div>
          </article>`;
      })
      .join("");
  }

  // ---------------- Project Tabs ----------------
  document.querySelectorAll(".tab-bar[data-tab-group]").forEach((bar) => {
    const buttons = bar.querySelectorAll(".tab-btn[data-tab]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab");
        buttons.forEach((b) => {
          b.classList.remove("active");
          const pane = el(b.getAttribute("data-tab"));
          if (pane) pane.classList.remove("active");
        });
        btn.classList.add("active");
        const targetPane = el(targetId);
        if (targetPane) targetPane.classList.add("active");
      });
    });
  });

  // ---------------- Project 01: Moisture + Seam Hub Simulator ----------------
  const mLab = DATA.moistureLab;
  const pts = mLab.calPoints;

  // Compute exact OLS Linear Regression (same math as esp32_coffee_moisture_meter.ino recomputeRegressionModels)
  const meanX = pts.reduce((acc, p) => acc + p.cTotalPf, 0) / pts.length;
  const meanM = pts.reduce((acc, p) => acc + p.moisturePct, 0) / pts.length;
  let sXX = 0;
  let sXM = 0;
  let sMM = 0;
  pts.forEach((p) => {
    const dx = p.cTotalPf - meanX;
    const dm = p.moisturePct - meanM;
    sXX += dx * dx;
    sXM += dx * dm;
    sMM += dm * dm;
  });
  const linA = sXM / sXX;
  const linB = meanM - linA * meanX;
  const ssRes = pts.reduce((acc, p) => {
    const err = p.moisturePct - (linA * p.cTotalPf + linB);
    return acc + err * err;
  }, 0);
  const linR2 = 1 - ssRes / sMM;

  // Compute exact 3-point Lagrange Quadratic (same math as lines 753-774)
  const [p0, p1, p2] = pts;
  const l0 = p0.moisturePct / ((p0.cTotalPf - p1.cTotalPf) * (p0.cTotalPf - p2.cTotalPf));
  const l1 = p1.moisturePct / ((p1.cTotalPf - p0.cTotalPf) * (p1.cTotalPf - p2.cTotalPf));
  const l2 = p2.moisturePct / ((p2.cTotalPf - p0.cTotalPf) * (p2.cTotalPf - p1.cTotalPf));
  const quadC2 = l0 + l1 + l2;
  const quadC1 = -(l0 * (p1.cTotalPf + p2.cTotalPf) + l1 * (p0.cTotalPf + p2.cTotalPf) + l2 * (p0.cTotalPf + p1.cTotalPf));
  const quadC0 = l0 * p1.cTotalPf * p2.cTotalPf + l1 * p0.cTotalPf * p2.cTotalPf + l2 * p0.cTotalPf * p1.cTotalPf;

  function evalMoistureByModel(cPf, model) {
    if (cPf - mLab.c0EmptyPf <= mLab.emptyDeadbandPf) return 0.0;
    let m = 0;
    if (model === "LIN") {
      m = linA * cPf + linB;
    } else if (model === "QUAD") {
      m = quadC2 * cPf * cPf + quadC1 * cPf + quadC0;
    } else {
      // PWL with global OLS extrapolation
      if (cPf <= p0.cTotalPf) {
        m = p0.moisturePct + (cPf - p0.cTotalPf) * linA;
      } else if (cPf >= p2.cTotalPf) {
        m = p2.moisturePct + (cPf - p2.cTotalPf) * linA;
      } else if (cPf <= p1.cTotalPf) {
        m = p0.moisturePct + ((cPf - p0.cTotalPf) / (p1.cTotalPf - p0.cTotalPf)) * (p1.moisturePct - p0.moisturePct);
      } else {
        m = p1.moisturePct + ((cPf - p1.cTotalPf) / (p2.cTotalPf - p1.cTotalPf)) * (p2.moisturePct - p1.moisturePct);
      }
    }
    return Math.max(0, Math.min(45, Math.round(m * 100) / 100));
  }

  // Exact Seam Hub True Value engine from member-3/backend/valuation.py
  function computeSeamValuation(defectPct, moisturePct, screenSize) {
    const d = Math.max(0, defectPct);
    let grade = "REJECT";
    let step = 0.6;
    if (d <= 1.0) {
      grade = "PREMIUM";
      step = 1.08;
    } else if (d <= 3.0) {
      grade = "GRADE_1";
      step = 1.04;
    } else if (d <= 5.0) {
      grade = "GRADE_2";
      step = 1.0;
    } else if (d <= 7.0) {
      grade = "GRADE_3";
      step = 0.96;
    } else if (d <= 15.0) {
      grade = "BELOW_STANDARD";
      step = 0.85;
    }
    const gD = (1.0 - d / 100.0) * step;

    let mM = 1.0;
    if (moisturePct > 15.0) {
      mM = 0.6;
    } else if (moisturePct > 12.5) {
      mM = (1.0 - moisturePct / 100.0) / 0.875 - 0.02 * (moisturePct - 12.5);
    }

    let sS = 1.06;
    if (screenSize <= 12) sS = 0.92;
    else if (screenSize === 13) sS = 0.97;
    else if (screenSize === 14 || screenSize === 15) sS = 1.0;
    else if (screenSize === 16 || screenSize === 17) sS = 1.03;

    const tv = 120.0 * gD * mM * sS;
    return { grade, gD, mM, sS, tv };
  }

  let activeModel = "PWL";
  const capSlider = el("capSlider");
  const defectSlider = el("defectSlider");
  const screenSelect = el("screenSelect");
  const moisturePresetsWrap = el("moisturePresets");

  if (moisturePresetsWrap) {
    moisturePresetsWrap.innerHTML = mLab.presets
      .map(
        (pr, idx) =>
          `<button class="preset-btn ${idx === 2 ? "active" : ""}" type="button" data-cap="${pr.cPf}" title="${escapeHtml(
            pr.note
          )}">${escapeHtml(pr.label)}</button>`
      )
      .join("");
  }

  function renderCalibrationSvg(currentC, currentM) {
    const svg = el("calCurveSvg");
    if (!svg) return;
    const w = 460;
    const h = 280;
    const pad = { l: 48, r: 20, t: 20, b: 36 };
    const xMin = 10;
    const xMax = 33;
    const yMin = 0;
    const yMax = 18;
    const xToPx = (x) => pad.l + ((x - xMin) / (xMax - xMin)) * (w - pad.l - pad.r);
    const yToPx = (y) => h - pad.b - ((y - yMin) / (yMax - yMin)) * (h - pad.t - pad.b);

    let grid = "";
    [0, 5, 10, 12.5, 15].forEach((yv) => {
      const py = yToPx(yv);
      const isCrit = yv === 12.5;
      grid += `<line x1="${pad.l}" y1="${py.toFixed(1)}" x2="${w - pad.r}" y2="${py.toFixed(1)}" stroke="${
        isCrit ? "rgba(245,158,11,0.45)" : "rgba(148,163,184,0.15)"
      }" stroke-dasharray="${isCrit ? "4 4" : "none"}" />`;
      grid += `<text x="${pad.l - 8}" y="${(py + 4).toFixed(1)}" fill="${
        isCrit ? "#f59e0b" : "#9aa7b8"
      }" font-size="10" font-family="JetBrains Mono, monospace" text-anchor="end">${yv}%</text>`;
    });

    [10, 15, 20, 25, 30].forEach((xv) => {
      const px = xToPx(xv);
      grid += `<line x1="${px.toFixed(1)}" y1="${pad.t}" x2="${px.toFixed(1)}" y2="${h - pad.b}" stroke="rgba(148,163,184,0.12)" />`;
      grid += `<text x="${px.toFixed(1)}" y="${h - 14}" fill="#9aa7b8" font-size="10" font-family="JetBrains Mono, monospace" text-anchor="middle">${xv} pF</text>`;
    });

    // Build sampled polyline for active regression curve from 13.0 to 32.5 pF
    const curvePts = [];
    for (let cx = 13.0; cx <= 32.5; cx += 0.35) {
      const my = evalMoistureByModel(cx, activeModel);
      curvePts.push(`${xToPx(cx).toFixed(1)},${yToPx(Math.min(yMax, my)).toFixed(1)}`);
    }

    // Deadband highlight zone (10.0 to 12.92 pF)
    const dbW = xToPx(mLab.c0EmptyPf + mLab.emptyDeadbandPf) - xToPx(10.0);

    const refDots = pts
      .map(
        (p) =>
          `<circle cx="${xToPx(p.cTotalPf).toFixed(1)}" cy="${yToPx(p.moisturePct).toFixed(
            1
          )}" r="5" fill="#f59e0b" stroke="#080c12" stroke-width="1.5" />`
      )
      .join("");

    const curX = xToPx(currentC);
    const curY = yToPx(Math.min(yMax, currentM));

    svg.innerHTML = `
      <rect x="${xToPx(10.0).toFixed(1)}" y="${pad.t}" width="${dbW.toFixed(1)}" height="${h - pad.t - pad.b}" fill="rgba(148,163,184,0.08)" />
      <text x="${(xToPx(10.0) + 4).toFixed(1)}" y="${pad.t + 14}" fill="#6c7a8d" font-size="9" font-family="JetBrains Mono, monospace">DEADBAND</text>
      ${grid}
      <text x="${w - pad.r - 4}" y="${(yToPx(12.5) - 5).toFixed(1)}" fill="#f59e0b" font-size="9.5" font-family="JetBrains Mono, monospace" text-anchor="end">SCA / GI 12.5% Limit</text>
      <polyline fill="none" stroke="#22d3ee" stroke-width="2.5" points="${curvePts.join(" ")}" />
      ${refDots}
      <line x1="${curX.toFixed(1)}" y1="${pad.t}" x2="${curX.toFixed(1)}" y2="${h - pad.b}" stroke="rgba(16,185,129,0.5)" stroke-dasharray="3 3" />
      <circle cx="${curX.toFixed(1)}" cy="${curY.toFixed(1)}" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
    `;
  }

  function updateMoistureSim() {
    if (!capSlider || !defectSlider || !screenSelect) return;
    const cPf = parseFloat(capSlider.value);
    const defectPct = parseFloat(defectSlider.value);
    const screenSize = parseInt(screenSelect.value, 10);

    const mPct = evalMoistureByModel(cPf, activeModel);
    const cSample = cPf - mLab.c0EmptyPf;
    const epsR = cPf / mLab.c0EmptyPf;
    const tNs = mLab.t0OpenNs + (cPf - mLab.lcrOffsetPf) / mLab.slopePfPerNs;

    const val = computeSeamValuation(defectPct, mPct, screenSize);

    el("capSliderVal").textContent = `${cPf.toFixed(2)} pF`;
    el("defectSliderVal").textContent = `${defectPct.toFixed(1)}% · #${screenSize}`;
    el("simMoistureOut").textContent = `${mPct.toFixed(2)} %`;
    el("simTimeNsOut").textContent = `${Math.round(tNs).toLocaleString()} ns`;
    el("simTvOut").textContent = `${val.tv.toFixed(2)} ฿/kg`;

    const modelEqLabel = el("modelEqLabel");
    if (modelEqLabel) {
      modelEqLabel.textContent =
        activeModel === "PWL"
          ? "PWL 3-Point"
          : activeModel === "LIN"
          ? `M = ${linA.toFixed(3)}·C ${linB.toFixed(2)} (R²=${linR2.toFixed(3)})`
          : "Lagrange Quadratic";
    }

    const seamBadge = el("seamGradeBadge");
    if (seamBadge) {
      seamBadge.textContent = `${val.grade} · M=${val.mM.toFixed(3)}×`;
      seamBadge.className = `badge ${mPct > 12.5 ? "badge-amber" : "badge-emerald"}`;
    }

    const terminal = el("moistureTerminal");
    if (terminal) {
      const mClass = mPct > 12.5 ? "terminal-line-warn" : "terminal-line-ok";
      terminal.innerHTML = `
        <div class="terminal-line-cyan">[RAW 157ms] M=${mPct.toFixed(2)}% (Model=${activeModel}), C_tot=${cPf.toFixed(2)} pF, C_samp=${cSample >= 0 ? "+" : ""}${cSample.toFixed(2)} pF, eps_r=${epsR.toFixed(2)}, t=${tNs.toFixed(2)} ns, std=0.00 ns</div>
        <div class="${mClass}">TGR-51</div>
        <div class="${mClass}">Moisture Level = ${mPct.toFixed(2)} %</div>
        <div style="color: #9aa7b8;">[SEAM HUB] TV = 120 × G(${val.gD.toFixed(3)}) × M(${val.mM.toFixed(3)}) × S(${val.sS.toFixed(2)}) = <strong>${val.tv.toFixed(2)} THB/kg</strong></div>
      `;
    }

    renderCalibrationSvg(cPf, mPct);
  }

  if (capSlider) capSlider.addEventListener("input", () => {
    document.querySelectorAll("#moisturePresets .preset-btn").forEach((b) => b.classList.remove("active"));
    updateMoistureSim();
  });
  if (defectSlider) defectSlider.addEventListener("input", updateMoistureSim);
  if (screenSelect) screenSelect.addEventListener("change", updateMoistureSim);

  document.querySelectorAll("#moisturePresets .preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#moisturePresets .preset-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      capSlider.value = btn.getAttribute("data-cap");
      updateMoistureSim();
    });
  });

  document.querySelectorAll("#fitModelBtns .preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#fitModelBtns .preset-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeModel = btn.getAttribute("data-model");
      updateMoistureSim();
    });
  });

  updateMoistureSim();

  // ---------------- Populate Project 01 Tables ----------------
  const pinoutBody = el("moisturePinoutBody");
  if (pinoutBody) {
    pinoutBody.innerHTML = mLab.pinout
      .map(
        (row) => `
        <tr>
          <td><code>${escapeHtml(row.signal)}</code></td>
          <td><span class="badge badge-cyan">${escapeHtml(row.gpio)}</span></td>
          <td>${escapeHtml(row.connection)}</td>
        </tr>`
      )
      .join("");
  }

  const v18TableBody = el("v18TableBody");
  if (v18TableBody) {
    v18TableBody.innerHTML = mLab.v18Benchmarks
      .map(
        (r) => `
        <tr>
          <td><strong>${escapeHtml(r.sample)}</strong></td>
          <td class="mono">${r.refMiniGac.toFixed(2)} %</td>
          <td class="mono">${r.runs.map((v) => v.toFixed(2)).join(", ")}</td>
          <td class="mono" style="color: var(--emerald);"><strong>${r.mean.toFixed(3)} %</strong></td>
          <td class="mono">±${r.sdJitter.toFixed(3)} %</td>
          <td class="mono">${r.relError.toFixed(2)} %</td>
          <td class="mono">${r.relRmse.toFixed(2)} %</td>
          <td><span class="badge badge-emerald">${escapeHtml(r.score)}</span></td>
        </tr>`
      )
      .join("");
  }

  const day1TableBody = el("day1TableBody");
  if (day1TableBody) {
    day1TableBody.innerHTML = mLab.day1LcrPoints
      .map(
        (r) => `
        <tr>
          <td><strong>${escapeHtml(r.nom)}</strong></td>
          <td class="mono">${r.lcrCp.toFixed(2)} pF</td>
          <td class="mono">${escapeHtml(r.rawEsp)}</td>
          <td class="mono" style="color: var(--cyan);"><strong>${escapeHtml(r.calEsp)}</strong></td>
        </tr>`
      )
      .join("");
  }

  // ---------------- Project 02: 13-Scenario Trial Grid ----------------
  const trialGrid = el("trialGrid");
  function renderTrials(filter) {
    if (!trialGrid) return;
    const rows = DATA.doorLockTrials.filter((t) => {
      if (filter === "100") return t.pass === 100;
      if (filter === "edge") return t.pass < 100;
      return true;
    });
    trialGrid.innerHTML = rows
      .map((t) => {
        const isWarn = t.pass < 100;
        return `
          <div class="trial-item">
            <div class="trial-top">
              <span class="badge ${isWarn ? "badge-amber" : "badge-emerald"}">${escapeHtml(t.id)} · ${escapeHtml(t.rate)}</span>
              <span style="color: var(--text-muted);">${t.pass}/100 pass</span>
            </div>
            <div class="trial-name">${escapeHtml(t.name)}</div>
            <div class="trial-bar ${isWarn ? "warn" : ""}">
              <span style="width: ${t.pass}%"></span>
            </div>
          </div>`;
      })
      .join("");
  }
  renderTrials("all");

  document.querySelectorAll("#trialFilterBtns .preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#trialFilterBtns .preset-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderTrials(btn.getAttribute("data-trial-filter"));
    });
  });

  // ---------------- Project 03: Interactive Alarm Node Simulator ----------------
  const alarmState = {
    lastNode: "",
    lastText: "",
    lastCmd: "",
    muted: false,
    relayOn: false,
    logs: [">> System boot (NRF24L01 RX Ch.66 addr 'CE05')"]
  };

  function pad16(s) {
    return (s + "                ").slice(0, 16);
  }

  function renderAlarmUi(overrideRow0) {
    const r0 = el("lcdRow0");
    const r1 = el("lcdRow1");
    const bulb = el("relayLedBulb");
    const txt = el("relayStatusTxt");
    const logBox = el("alarmSerialLog");

    if (overrideRow0) {
      if (r0) r0.textContent = pad16(overrideRow0);
      if (r1) r1.textContent = pad16("");
    } else if (!alarmState.lastNode) {
      if (r0) r0.textContent = pad16("Alarm Ready");
      if (r1) r1.textContent = pad16("");
    } else {
      const top = `Node${alarmState.lastNode} ${alarmState.lastCmd}`;
      const bot = alarmState.muted ? "MUTED" : alarmState.lastText || "SIREN ON";
      if (r0) r0.textContent = pad16(top);
      if (r1) r1.textContent = pad16(bot);
    }

    if (bulb) bulb.classList.toggle("on", alarmState.relayOn);
    if (txt) {
      txt.textContent = alarmState.relayOn
        ? "RELAY ON (LOW) · 12V SIREN ACTIVE"
        : alarmState.muted && alarmState.lastCmd === "ON"
        ? "RELAY OFF (MUTED)"
        : "RELAY OFF (HIGH) · SIREN IDLE";
    }
    if (logBox) {
      logBox.innerHTML = alarmState.logs
        .slice(-4)
        .map((l) => `<div>${escapeHtml(l)}</div>`)
        .join("");
    }
  }

  function handleAlarmPacket(raw) {
    const parts = raw.split(",");
    if (parts[0] !== "AL" || parts.length < 4) return;
    let nodeToken = parts[1].trim();
    if (nodeToken[0] === "N" || nodeToken[0] === "n") nodeToken = nodeToken.slice(1);
    const text = parts[2].trim().slice(0, 16);
    const cmd = parts[3].trim().toUpperCase();

    alarmState.lastNode = nodeToken;
    alarmState.lastText = text;
    alarmState.lastCmd = cmd;
    alarmState.relayOn = !alarmState.muted && cmd === "ON";
    alarmState.logs.push(
      `RX: node=${nodeToken} msg=${text} cmd=${cmd}${alarmState.muted ? " (MUTED)" : ""}`
    );
    renderAlarmUi();
  }

  const alarmPacketBtns = el("alarmPacketBtns");
  if (alarmPacketBtns) {
    alarmPacketBtns.innerHTML = DATA.alarmPresets
      .map(
        (p) =>
          `<button class="preset-btn" type="button" data-pkt="${escapeHtml(p.packet)}" title="${escapeHtml(
            p.desc
          )}">${escapeHtml(p.label)}</button>`
      )
      .join("");
    alarmPacketBtns.querySelectorAll(".preset-btn").forEach((b) => {
      b.addEventListener("click", () => handleAlarmPacket(b.getAttribute("data-pkt")));
    });
  }

  // Tactile Button state machine matching handleButtonOne() (short < 1200ms mute, hold >= 1200ms reset)
  const alarmHwBtn = el("alarmHwBtn");
  let btnDownAt = 0;
  let holdResetTimer = null;

  function pressStart() {
    if (!alarmHwBtn) return;
    alarmHwBtn.classList.add("pressed");
    btnDownAt = Date.now();
    clearTimeout(holdResetTimer);
    holdResetTimer = setTimeout(() => {
      // Long press >= 1200 ms -> resetAll()
      alarmState.relayOn = false;
      alarmState.muted = false;
      alarmState.lastNode = "";
      alarmState.lastCmd = "";
      alarmState.lastText = "";
      alarmState.logs.push(">> RESET ALL (held >= 1200 ms)");
      renderAlarmUi("Alarm ready");
      btnDownAt = 0;
    }, 1200);
  }

  function pressEnd() {
    if (!alarmHwBtn) return;
    alarmHwBtn.classList.remove("pressed");
    clearTimeout(holdResetTimer);
    if (!btnDownAt) return;
    const held = Date.now() - btnDownAt;
    btnDownAt = 0;
    if (held < 1200) {
      alarmState.muted = !alarmState.muted;
      alarmState.relayOn = !alarmState.muted && alarmState.lastCmd === "ON";
      alarmState.logs.push(alarmState.muted ? ">> MUTE ON (short press)" : ">> MUTE OFF (short press)");
      renderAlarmUi(alarmState.muted ? "* MUTE ON *" : "* MUTE OFF *");
      setTimeout(() => renderAlarmUi(), 900);
    }
  }

  if (alarmHwBtn) {
    alarmHwBtn.addEventListener("mousedown", pressStart);
    alarmHwBtn.addEventListener("mouseup", pressEnd);
    alarmHwBtn.addEventListener("mouseleave", () => {
      if (btnDownAt) pressEnd();
    });
    alarmHwBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      pressStart();
    });
    alarmHwBtn.addEventListener("touchend", (e) => {
      e.preventDefault();
      pressEnd();
    });
    alarmHwBtn.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
        e.preventDefault();
        pressStart();
      }
    });
    alarmHwBtn.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pressEnd();
      }
    });
  }

  // Trigger initial sample packet so LCD starts alive
  handleAlarmPacket("AL,N1,HOTTEMP,ON");

  // ---------------- Technical Skills Matrix ----------------
  const skillsGrid = el("skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = DATA.skills
      .map(
        (cat) => `
        <div class="skill-card">
          <h3>${escapeHtml(cat.category)}</h3>
          <div class="chip-cloud">
            ${cat.items.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>`
      )
      .join("");
  }

  // ---------------- Course Engineering Labs ----------------
  const labsGrid = el("labsGrid");
  function renderLabs(domain) {
    if (!labsGrid) return;
    const filtered = DATA.courseLabs.filter((l) => domain === "all" || l.domain === domain);
    labsGrid.innerHTML = filtered
      .map(
        (l) => `
        <article class="lab-card">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
            <span class="badge badge-cyan">${escapeHtml(l.domainLabel)}</span>
            <span class="mono" style="font-size: 0.74rem; color: var(--text-dim);">${escapeHtml(l.course)}</span>
          </div>
          <h3>${escapeHtml(l.title)}</h3>
          <p>${escapeHtml(l.summary)}</p>
          <div class="chip-cloud">
            ${l.tools.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
          </div>
          ${
            l.hasRackPreview
              ? `<div>
                   <button class="btn btn-secondary btn-sm" type="button" data-lightbox="assets/rack-67200368.png" data-caption="Computer Network Laboratory Topology &amp; 47U Data Center Rack (67200368 Thiraphat Thongsing)">
                     Inspect Rack &amp; VLAN Diagram (rack-67200368.png) ⤢
                   </button>
                 </div>`
              : ""
          }
          <div class="lab-verified">✓ ${escapeHtml(l.verified)}</div>
        </article>`
      )
      .join("");
    bindLightboxTriggers(labsGrid);
  }
  renderLabs("all");

  document.querySelectorAll("#labFilters .tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#labFilters .tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderLabs(btn.getAttribute("data-domain"));
    });
  });

  // ---------------- Copy Email Button ----------------
  const copyEmailBtn = el("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(DATA.profile.email);
        copyEmailBtn.textContent = "Copied!";
        setTimeout(() => (copyEmailBtn.textContent = "Copy"), 1800);
      } catch {
        copyEmailBtn.textContent = DATA.profile.email;
      }
    });
  }

  // ---------------- Lightbox Modal ----------------
  const modal = el("lightboxModal");
  const modalImg = el("lightboxImg");
  const modalCap = el("lightboxCaption");
  const modalClose = el("lightboxCloseBtn");

  function openLightbox(src, caption) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modalImg.alt = caption || "Engineering diagram preview";
    if (modalCap) modalCap.textContent = caption || "";
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function bindLightboxTriggers(root) {
    (root || document).querySelectorAll("[data-lightbox]").forEach((node) => {
      if (node.dataset.lbBound) return;
      node.dataset.lbBound = "1";
      const trigger = () => openLightbox(node.getAttribute("data-lightbox"), node.getAttribute("data-caption"));
      node.addEventListener("click", trigger);
      if (node.tagName !== "BUTTON" && node.tagName !== "A") {
        node.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            trigger();
          }
        });
      }
    });
  }

  bindLightboxTriggers(document);

  if (modalClose) modalClose.addEventListener("click", closeLightbox);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
})();
