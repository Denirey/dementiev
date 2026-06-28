import React, { useState } from 'react'

export default function App() {
  const [activeFaq, setActiveFaq] = useState(null)
  const [dashboardTab, setDashboardTab] = useState('portal')
  const [searchTerm, setSearchTerm] = useState('')
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)

  const brands = [
    { name: 'REWE', category: 'Lebensmittel', discount: '5% Sonderkondition auf jeden Einkauf', tags: ['Täglich', 'Einkauf'] },
    { name: 'Zalando', category: 'Mode & Lifestyle', discount: '10% Einkaufsrabatt ab 50 € Bestellwert', tags: ['Fashion', 'Online'] },
    { name: 'Adidas', category: 'Sport & Outdoor', discount: '15% Exklusiv-Rabatt im Markenshop', tags: ['Sport', 'Schuhe'] },
    { name: 'FlixBus', category: 'Reisen & Mobilität', discount: '12% Preisnachlass auf alle Tickets', tags: ['Reisen', 'Bus'] },
    { name: 'Eventim', category: 'Freizeit & Kultur', discount: 'Bevorzugtes Booking + 5% Ersparnis', tags: ['Tickets', 'Events'] },
    { name: 'Urban Sports', category: 'Fitness & Gesundheit', discount: '20 € Firmenzuschuss auf M/L/XL Tarife', tags: ['Fitness', 'Wellness'] }
  ]

  const filteredBrands = brands.filter(b =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const faqs = [
    {
      q: 'Entstehen für unser Unternehmen oder die Mitarbeitenden versteckte Kosten?',
      a: 'Nein. Die Bereitstellung und Nutzung des Portals ist und bleibt für beide Seiten zu 100% kostenfrei. Es gibt keine Servicegebühren, Einrichtungsentgelte oder Abonnements. Die Refinanzierung der Plattform erfolgt ausschließlich über Vermittlungsprovisionen der teilnehmenden Markenshops.'
    },
    {
      q: 'Wie wird der Datenschutz (DSGVO) gewährleistet?',
      a: 'Höchste Standards beim Datenschutz stehen bei uns an erster Stelle. Wir benötigen keine personenbezogenen Daten oder HR-Listen von Ihnen als Arbeitgeber. Ihre Mitarbeitenden registrieren sich vollkommen selbstständig und anonymisiert über den bereitgestellten Firmen-Code auf sicheren Servern in Deutschland.'
    },
    {
      q: 'Welche Marken sind im Portal vertreten?',
      a: 'Unser Portfolio umfasst wechselnde Sonderkonditionen aus den Bereichen Technik, Mode, Sport, Freizeit, Reisen und Alltagsbedarf von führenden Marken und Onlineshops in Deutschland. Die Aktualisierung erfolgt wöchentlich und vollautomatisch.'
    }
  ]

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    setShowDemoModal(false)
    setShowSuccessToast(true)
    setTimeout(() => setShowSuccessToast(false), 5000)
  }

  return (
    <div class="min-h-screen bg-white text-ink flex flex-col font-sans selection:bg-primary-subdued selection:text-primary-deep overflow-x-hidden">

      {/* Toast */}
      {showSuccessToast && (
        <div class="fixed bottom-6 right-6 z-50 bg-ink text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center space-x-3 text-sm">
          <svg class="h-5 w-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Registrierung erfolgreich! Firmen-Code folgt in Kürze.</span>
        </div>
      )}

      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" class="flex items-center space-x-1.5 text-lg sm:text-xl font-bold tracking-tight text-ink hover:opacity-80 transition-opacity">
            <span class="text-primary font-black text-2xl leading-none">p</span>
            <span>partnerbund</span>
          </a>

          {/* Nav links – hidden on mobile */}
          <nav class="hidden md:flex items-center space-x-7 text-sm font-medium text-ink-secondary">
            <a href="#vorteile" class="hover:text-primary transition-colors">Vorteile</a>
            <a href="#ablauf" class="hover:text-primary transition-colors">Ablauf</a>
            <a href="#preise" class="hover:text-primary transition-colors">Preise</a>
            <a href="#faq" class="hover:text-primary transition-colors">FAQ</a>
          </nav>

          {/* CTA */}
          <button
            onClick={() => setShowDemoModal(true)}
            class="bg-primary text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary-deep transition-all shadow-sm active:bg-primary-press whitespace-nowrap"
          >
            <span class="hidden sm:inline">Jetzt kostenlos einrichten</span>
            <span class="inline sm:hidden">Kostenlos einrichten</span>
          </button>
        </div>
      </header>

      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section class="relative bg-white overflow-hidden border-b border-slate-100 py-24 md:py-32">

        {/* Diagonal SVG ribbon – top right */}
        <div class="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <svg
            class="absolute top-0 right-0 w-[660px] sm:w-[800px] md:w-[1000px] opacity-80"
            viewBox="0 0 1000 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMin slice"
          >
            <defs>
              <linearGradient id="r1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f97316" stop-opacity="0.85" />
                <stop offset="100%" stop-color="#ec4899" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient id="r2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#a855f7" stop-opacity="0.75" />
                <stop offset="100%" stop-color="#6366f1" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient id="r3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#533afd" stop-opacity="0.65" />
                <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.8" />
              </linearGradient>
              <linearGradient id="r4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.45" />
                <stop offset="100%" stop-color="#a5f3fc" stop-opacity="0.3" />
              </linearGradient>
              <filter id="blur-ribbon">
                <feGaussianBlur stdDeviation="18" />
              </filter>
            </defs>
            <ellipse cx="850" cy="120" rx="280" ry="200" fill="url(#r1)" filter="url(#blur-ribbon)" />
            <ellipse cx="780" cy="220" rx="200" ry="140" fill="url(#r2)" filter="url(#blur-ribbon)" />
            <polygon points="400,0 1000,0 1000,180 700,0" fill="url(#r1)" />
            <polygon points="500,0 1000,0 1000,320 800,0" fill="url(#r2)" opacity="0.7" />
            <polygon points="650,0 1000,0 1000,460 900,0" fill="url(#r3)" opacity="0.55" />
            <polygon points="800,0 1000,0 1000,600 1000,0" fill="url(#r4)" opacity="0.4" />
          </svg>
        </div>

        {/* Content – centered single column */}
        <div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-6">

          <div class="inline-flex">
            <span class="bg-primary/10 border border-primary/20 text-primary-deep px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Exklusiv für den Mittelstand &amp; Startups
            </span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-light text-ink leading-[1.08] tracking-display-xl lg:tracking-display-xxl">
            Erleichterter Zugang zu exklusiven{' '}
            <span class="text-primary font-normal">Mitarbeiterangeboten</span>.
          </h1>

          <p class="text-base sm:text-lg text-ink-secondary font-light leading-relaxed max-w-2xl">
            Bieten Sie Ihrem Team (bis zu 50&nbsp;Mitarbeitende) erstklassige Sonderkonditionen namhafter Marken. Komplett kostenfrei, ohne administrativen Aufwand und absolut DSGVO-konform.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
            <button
              onClick={() => setShowDemoModal(true)}
              class="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-deep transition-all shadow-lg active:bg-primary-press text-sm"
            >
              Jetzt kostenlos einrichten
            </button>
            <a
              href="#vorteile"
              class="bg-white/80 text-ink border border-slate-200 font-medium px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all text-sm text-center"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Trust hints */}
          <div class="flex flex-wrap justify-center gap-4 text-xs text-ink-mute pt-2">
            <span class="flex items-center gap-1.5">
              <svg class="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              100% Gebührenfrei
            </span>
            <span class="text-slate-300">•</span>
            <span class="flex items-center gap-1.5">
              <svg class="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Keine Weitergabe von HR-Daten
            </span>
            <span class="text-slate-300">•</span>
            <span class="flex items-center gap-1.5">
              <svg class="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Server in Deutschland
            </span>
          </div>

        </div>
      </section>


      {/* ─── TRUST BAR ──────────────────────────────────────────────── */}
      <section class="py-10 border-b border-slate-100 bg-slate-50/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <p class="text-center text-[10px] font-semibold text-ink-mute uppercase tracking-widest mb-6">
            Erstklassige Sonderkonditionen namhafter Marken
          </p>
          <div class="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
            {[
              { text: 'zalando', cls: 'font-bold tracking-tighter text-lg' },
              { text: 'REWE', cls: 'font-black tracking-tight text-lg' },
              { text: 'adidas', cls: 'font-semibold italic tracking-wider text-lg' },
              { text: 'FLIXBUS', cls: 'font-extrabold tracking-tighter text-lg' },
              { text: 'EVENTIM', cls: 'font-light tracking-widest text-base' },
              { text: 'URBAN SPORTS CLUB', cls: 'font-bold text-sm' },
            ].map(b => (
              <span key={b.text} class={`${b.cls} text-slate-400 hover:text-slate-700 transition-colors cursor-default`}>{b.text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ──────────────────────────────────────────── */}
      <section id="vorteile" class="py-20 md:py-28 bg-white border-b border-slate-100 bg-grid-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 class="text-3xl md:text-4xl font-light text-ink tracking-display-lg">
              Arbeitgeber-Attraktivität neu definiert.
            </h2>
            <p class="text-base text-ink-mute leading-relaxed font-light">
              Professionell, sicher und vollkommen kostenfrei — für kleine Unternehmen und wachsende Teams entwickelt.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
                accent: 'from-orange-400 to-pink-500',
                title: 'Attraktiver Arbeitgeberfaktor',
                text: 'Steigern Sie die Bindung und Motivation Ihres Teams. Mit partnerbund bieten Sie Ihrer Belegschaft handfeste wirtschaftliche Vorteile als Teil Ihres modernen Employee-Benefits-Programms.',
                tag: 'Mitarbeiterbindung'
              },
              {
                icon: (
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                ),
                accent: 'from-violet-500 to-indigo-500',
                title: 'Sichere Plattform & DSGVO',
                text: 'Höchste Standards beim Datenschutz. Keine Übermittlung von Mitarbeiterdaten oder HR-Listen erforderlich. Die Verifizierung erfolgt anonymisiert via Firmen-Code auf sicheren Servern in Deutschland.',
                tag: '100% DSGVO-konform'
              },
              {
                icon: (
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
                accent: 'from-emerald-400 to-teal-500',
                title: 'Dauerhaft 100% Gebührenfrei',
                text: 'Die Bereitstellung und Nutzung des Portals ist für Ihr Unternehmen und Ihre Mitarbeitenden vollkommen kostenlos. Die Refinanzierung erfolgt ausschließlich über Vermittlungsprovisionen der Markenshops.',
                tag: 'Null Lohnnebenkosten'
              }
            ].map((card) => (
              <div key={card.title} class="group relative border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 bg-white flex flex-col">
                <div class={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center text-white shadow-sm mb-5`}>
                  {card.icon}
                </div>
                <h3 class="text-lg font-semibold text-ink mb-3">{card.title}</h3>
                <p class="text-sm text-ink-secondary leading-relaxed font-light flex-1">{card.text}</p>
                <div class="mt-5 pt-4 border-t border-slate-50">
                  <span class="text-[10px] font-bold text-primary uppercase tracking-widest">{card.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ───────────────────────────────────────────── */}
      <section id="ablauf" class="py-20 md:py-28 border-b border-slate-100 bg-slate-50/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 class="text-3xl md:text-4xl font-light text-ink tracking-display-lg">
              Einfache Implementierung in drei Schritten
            </h2>
            <p class="text-base text-ink-mute leading-relaxed font-light">
              Kein IT-Projekt, kein Einrichtungsaufwand. In wenigen Minuten einsatzbereit.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* connector line desktop */}
            <div class="hidden md:block absolute top-5 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-slate-200 z-0"/>

            {[
              { n: '1', title: 'Registrierung', text: 'Erstellen Sie in wenigen Schritten das kostenlose Vorteilsprofil für Ihr Unternehmen. Nur Ihre Unternehmensdaten sind erforderlich.' },
              { n: '2', title: 'Code-Aktivierung', text: 'Sie erhalten einen exklusiven, anonymen Zugangsschlüssel (Firmen-Code). Keine Mitarbeiterlisten oder E-Mail-Adressen werden benötigt.' },
              { n: '3', title: 'Vorteile nutzen', text: 'Teilen Sie den Firmen-Code intern via Slack, Teams oder E-Mail. Ihre Mitarbeitenden registrieren sich sofort und sparen direkt.' }
            ].map((step) => (
              <div key={step.n} class="flex flex-col items-center text-center md:items-start md:text-left space-y-3 relative z-10">
                <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white">
                  {step.n}
                </div>
                <h3 class="text-lg font-semibold text-ink">{step.title}</h3>
                <p class="text-sm text-ink-secondary font-light leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING – DARK SECTION ─────────────────────────────────── */}
      <section id="preise" class="relative bg-[#0a1628] py-24 md:py-36 overflow-hidden border-b border-slate-900">
        {/* Grid overlay */}
        <div class="absolute inset-0 bg-grid-dark pointer-events-none"/>

        {/* Glowing SVG wave / network */}
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <svg class="absolute bottom-0 left-0 w-full opacity-30" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#533afd" stop-opacity="0"/>
                <stop offset="40%" stop-color="#a855f7" stop-opacity="1"/>
                <stop offset="70%" stop-color="#38bdf8" stop-opacity="1"/>
                <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ec4899" stop-opacity="0"/>
                <stop offset="50%" stop-color="#f97316" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Wave lines */}
            <path d="M0 340 Q180 260,360 300 T720 280 T1080 310 T1440 260 L1440 400 L0 400Z" fill="#533afd" fill-opacity="0.08"/>
            <path d="M0 320 Q200 250,400 290 T800 270 T1200 295 T1440 250" fill="none" stroke="url(#wg1)" stroke-width="1.5" filter="url(#glow)"/>
            <path d="M0 370 Q300 310,500 350 T900 330 T1300 355 T1440 310" fill="none" stroke="url(#wg2)" stroke-width="1" filter="url(#glow)" opacity="0.6"/>
            {/* Connection nodes */}
            {[[200, 290], [430, 275], [640, 295], [860, 275], [1070, 300], [1260, 258]].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="3" fill="#a78bfa" filter="url(#glow)"/>
                <circle cx={cx} cy={cy} r="6" fill="#a78bfa" fill-opacity="0.2"/>
              </g>
            ))}
          </svg>

          {/* Glowing orbs */}
          <div class="absolute top-1/4 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"/>
          <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"/>
          <div class="absolute top-1/3 right-1/3 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl"/>
        </div>

        {/* Content */}
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div class="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 class="text-3xl md:text-4xl font-light text-white tracking-display-lg">
              Voller Leistungsumfang. Keine Kosten.
            </h2>
            <p class="text-base text-slate-400 leading-relaxed font-light">
              Keine monatlichen Fixkosten, keine versteckten Gebühren. partnerbund ist dauerhaft gebührenfrei für alle Unternehmen mit bis zu 50&nbsp;Mitarbeitenden.
            </p>
          </div>

          <div class="max-w-md mx-auto">
            <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 sm:p-10 shadow-2xl overflow-hidden">
              {/* Inner top glow */}
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full"/>

              <div class="relative z-10">
                <span class="inline-block bg-primary/20 text-primary-subdued border border-primary/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                  Mitarbeiterportal
                </span>

                <div class="flex items-baseline py-4 border-b border-white/10 mb-2">
                  <span class="text-6xl font-extralight text-white tnum tracking-tight">0 €</span>
                  <span class="text-sm text-slate-400 ml-3">/ dauerhaft</span>
                  <span class="ml-4 text-xs text-emerald-400 font-mono uppercase tracking-wider">Gebührenfrei</span>
                </div>
                <p class="text-slate-500 text-xs mb-8 font-light">Für Unternehmen, Startups und Teams bis 50 Mitarbeiter.</p>

                <ul class="space-y-3.5 mb-8">
                  {[
                    'Unbegrenzter Zugriff auf alle geschlossenen Mitarbeiterangebote namhafter Top-Marken',
                    'Keine Einrichtungsgebühren, keine monatlichen Fixkosten',
                    'Kein Vertragslaufzeit-Risiko (jederzeit kündbar)',
                    'DSGVO-Datenschutzpaket inklusive'
                  ].map(item => (
                    <li key={item} class="flex items-start space-x-3">
                      <svg class="h-5 w-5 text-primary-soft shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span class="text-sm text-slate-300 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowDemoModal(true)}
                  class="w-full bg-primary hover:bg-primary-soft text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-lg active:bg-primary-press text-sm"
                >
                  Jetzt kostenloses Portal freischalten
                </button>
                <p class="text-center text-[10px] text-slate-600 mt-3 font-mono">
                  Schnelle Aktivierung · In 2 Minuten startbereit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────────── */}
      <section id="faq" class="py-20 md:py-28 bg-slate-50/40 border-b border-slate-100">
        <div class="max-w-3xl mx-auto px-4 sm:px-6">
          <div class="text-center mb-12 space-y-3">
            <h2 class="text-3xl md:text-4xl font-light text-ink tracking-display-lg">Häufig gestellte Fragen</h2>
            <p class="text-base text-ink-mute font-light">
              Antworten auf wichtige Fragen zur Bereitstellung unseres Corporate-Benefits-Portals.
            </p>
          </div>

          <div class="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} class="bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  class="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span class="text-sm sm:text-base font-semibold text-ink">{faq.q}</span>
                  <svg
                    class={`h-5 w-5 text-slate-400 shrink-0 mt-0.5 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-primary' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div class={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === idx ? 'max-h-60 border-t border-slate-100' : 'max-h-0'}`}>
                  <div class="px-5 sm:px-6 py-4 text-sm text-ink-secondary font-light leading-relaxed bg-slate-50/40">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────── */}
      <footer class="bg-white py-10 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center space-x-1.5 text-sm text-ink-mute">
            <span class="font-black text-primary text-xl leading-none">p</span>
            <span class="font-bold text-ink">partnerbund</span>
            <span class="text-slate-300 mx-2">·</span>
            <span>© {new Date().getFullYear()} Alle Rechte vorbehalten.</span>
          </div>
          <div class="flex items-center gap-5 text-xs font-semibold text-ink-mute uppercase tracking-wider">
            <a href="#" class="hover:text-primary transition-colors">Impressum</a>
            <a href="#" class="hover:text-primary transition-colors">Datenschutzerklärung</a>
            <a href="#" class="hover:text-primary transition-colors">Nutzungsbedingungen</a>
          </div>
        </div>
      </footer>

      {/* ─── REGISTRATION MODAL ─────────────────────────────────────── */}
      {showDemoModal && (
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setShowDemoModal(false)} class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"/>
          <div class="relative bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-6 z-10">
            <button
              onClick={() => setShowDemoModal(false)}
              class="absolute top-4 right-4 text-slate-400 hover:text-ink transition-colors"
            >
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div class="mb-5">
              <h3 class="text-xl font-semibold text-ink">Kostenloses Portal freischalten</h3>
              <p class="text-xs text-ink-mute mt-1 leading-relaxed">
                Tragen Sie Ihre Unternehmensdaten ein. Wir erstellen Ihr Profil und übermitteln den Firmen-Code in Kürze.
              </p>
            </div>

            <form onSubmit={handleDemoSubmit} class="space-y-4">
              {[
                { label: 'Unternehmen', placeholder: 'Mittelstand Co. GmbH', type: 'text' },
                { label: 'Ansprechpartner', placeholder: 'Max Mustermann', type: 'text' },
                { label: 'Geschäftliche E-Mail', placeholder: 'm.mustermann@firma.de', type: 'email' },
              ].map(f => (
                <div key={f.label}>
                  <label class="block text-[10px] font-bold text-ink uppercase tracking-wider mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    class="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              ))}

              <div class="flex items-start space-x-2 pt-1">
                <input type="checkbox" id="agree" required class="mt-0.5 h-4 w-4 rounded text-primary focus:ring-primary"/>
                <label htmlFor="agree" class="text-[11px] text-ink-secondary leading-tight">
                  Ich stimme der Speicherung meiner Kontaktdaten gemäß der{' '}
                  <a href="#" class="text-primary underline">Datenschutzerklärung</a> zu.
                </label>
              </div>

              <button
                type="submit"
                class="w-full bg-primary hover:bg-primary-deep text-white font-semibold py-3 rounded-xl transition-all shadow-md active:bg-primary-press text-sm"
              >
                Jetzt kostenloses Portal freischalten
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}
