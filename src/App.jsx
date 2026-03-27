import { useEffect, useRef, useState } from 'react'
import heroImage from './assets/profile-pic.jpg'
import githubPreview from './assets/github.png'
import projectStore from './assets/kpc-store.png'
import projectTtv from './assets/ttv-web.png'
import projectSoaris from './assets/soaris-mobile-app.png'
import projectCdms from './assets/CDMS-DocumentPage.png'

const navLinks = [    
  { href: '#branding', label: 'Branding' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#sprint-project', label: 'Sprint Project' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const toolkitGroups = [
  {
    title: 'Front-End Stack',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'React Native'],
  },
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'Dart', 'Python (Basic)', 'Java (Basic)'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Firebase', 'Responsive UI development'],
  },
  {
    title: 'Strengths',
    items: ['User interface design', 'Mobile-first layouts', 'Authentication flows', 'Component-based development'],
  },
]

const sprintHighlights = [
  'Built the Documents and View Document pages with search, filters, status indicators, routing, preview areas, and action controls.',
  'Implemented admin workflows for Alerts, User Management, Add User, View User, View Admin, and Edit User pages.',
  'Refactored the codebase into reusable components, routed screens cleanly, and standardized layout spacing to match the approved prototype.',
  'Improved interaction quality with dropdown behavior, outside-click detection, hover states, controlled forms, and responsive layout refinements.',
]

const achievementCards = [
  {
    title: 'Certifications',
    items: [
      'Creative Web Design - TESDA (2023)',
      'Programming Java NC III - TESDA (2023)',
      'Git Good at Version Control - ICpEP.SE Seminar (2023)',
    ],
  },
  {
    title: 'Project Wins',
    items: [
      'Shipped a full SOARIS front-end experience for drone-assisted agricultural monitoring.',
      'Integrated authentication and dynamic state handling for real user flows.',
      'Built multiple portfolio-ready web and mobile projects with live demos and public repositories.',
    ],
  },
  {
    title: 'Education & Honors',
    items: [
      'BS in Computer Engineering, Cebu Technological University - Danao Campus',
      'STEM strand with honors, Consolacion National High School',
      'Ongoing growth in UI/UX, front-end development, and product thinking',
    ],
  },
]

const featuredProjects = [
  {
    title: 'SOARIS Mobile Application',
    subtitle: 'Sprint and capstone project',
    image: projectSoaris,
    text: 'A cross-platform mobile product for drone-assisted agricultural monitoring with responsive screens, authentication, and streamlined user flows.',
    tags: ['React Native', 'Firebase', 'Mobile UI'],
    code: 'https://github.com/g-pallas/autonomous-uav',
  },
  {
    title: 'KPC Store',
    subtitle: 'Frontend e-commerce concept',
    image: projectStore,
    text: 'A storefront interface with product highlights, clear hierarchy, and a shopping flow designed for readability and quick browsing.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/g-pallas/KPC-Store',
    demo: 'https://kpc-store.vercel.app/',
  },
  {
    title: 'TTV Web',
    subtitle: 'Content-focused web experience',
    image: projectTtv,
    text: 'A blog-style website for main battle tank news, built with structured navigation and article layouts that stay readable across screen sizes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/g-pallas/TTV',
    demo: 'https://ttv-kappa.vercel.app/',
  },
]

const contactItems = [
  { label: 'Email', value: 'kylesabatin9999@gmail.com', href: 'mailto:kylesabatin9999@gmail.com' },
  { label: 'Phone', value: '+63 947 245 4652', href: 'tel:+639472454652' },
  { label: 'Location', value: 'Jugan, Consolacion, Cebu', href: null },
  { label: 'LinkedIn', value: 'linkedin.com/in/kyle-sabatin', href: 'https://www.linkedin.com/in/kyle-sabatin/' },
  { label: 'GitHub', value: 'github.com/g-pallas', href: 'https://github.com/g-pallas' },
]

function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        className="social-link"
        href="https://www.linkedin.com/in/kyle-sabatin/"
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.41c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.51H9.47V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2zM5.44 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.22 20.45H3.66V9h3.56v11.45z" />
        </svg>
      </a>
      <a
        className="social-link"
        href="https://github.com/g-pallas"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.47 2 2 6.58 2 12.24c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.91-.64.07-.62.07-.62 1.01.07 1.54 1.06 1.54 1.06.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.58.69.48 3.96-1.36 6.83-5.21 6.83-9.75C22 6.58 17.52 2 12 2z" />
        </svg>
      </a>
    </div>
  )
}

function App() {
  const [isIdleVisible, setIsIdleVisible] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isIdleVisibleRef = useRef(false)

  useEffect(() => {
    isIdleVisibleRef.current = isIdleVisible
  }, [isIdleVisible])

  useEffect(() => {
    let idleTimer

    const scheduleIdle = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => setIsIdleVisible(true), 5000)
    }

    const handleActivity = () => {
      if (!isIdleVisibleRef.current) {
        scheduleIdle()
      }
    }

    const updateScrollState = () => {
      const scrolled = window.innerHeight + window.scrollY
      const maxScroll = document.documentElement.scrollHeight
      setIsAtBottom(scrolled >= maxScroll - 4)
    }

    const handleScroll = () => {
      handleActivity()
      updateScrollState()
    }

    scheduleIdle()
    updateScrollState()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleActivity)
    window.addEventListener('keydown', handleActivity)
    window.addEventListener('touchstart', handleActivity)

    return () => {
      clearTimeout(idleTimer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleActivity)
      window.removeEventListener('keydown', handleActivity)
      window.removeEventListener('touchstart', handleActivity)
    }
  }, [])

  const handleScrollIndicator = () => {
    setIsIdleVisible(false)
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: 'smooth' })
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const honeypot = formData.get('website')
    if (honeypot) return

    const secret = import.meta.env.VITE_CONTACT_SECRET

    if (!secret) {
      setFormStatus({ type: 'error', message: 'Missing secret key configuration.' })
      return
    }

    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
      secret,
    }

    if (!payload.name || !payload.email || !payload.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all fields before sending.' })
      return
    }

    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbybTAKDzwJP1AcdlqxV-sK6dhcTVx5iCeLqQPyK1oWCF8XSYPoLV-yOSMG4PrxHOypN9Q/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(payload),
        }
      )

      if (response.type === 'opaque') {
        form.reset()
        setFormStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' })
        return
      }

      const responseText = await response.text()
      let result
      try {
        result = JSON.parse(responseText)
      } catch {
        result = null
      }

      if (!response.ok) {
        throw new Error(result?.message || `Request failed (${response.status}).`)
      }

      if (result?.status !== 'success') {
        throw new Error(result?.message || 'Failed to send message.')
      }

      form.reset()
      setFormStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' })
    } catch (error) {
      setFormStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollIndicatorClass = `fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950 text-lg text-white shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition ${
    isIdleVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
  }`

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-slate-100">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.35),_transparent_70%)] blur-2xl" />
        <div className="absolute right-[-10rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.22),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[15%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.22),_transparent_70%)] blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="flex items-center justify-between w-full max-w-6xl gap-6 px-4 py-4 mx-auto">
          <a className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white" href="#home">
            <span className="flex items-center justify-center w-10 h-10 border rounded-full border-amber-300/40 bg-white/10 text-amber-200">
              KS
            </span>
            <span className="hidden sm:inline">KYLE SABATIN</span>
          </a>

          <nav className="items-center hidden gap-8 text-sm text-slate-300 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="transition hover:text-white" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <SocialLinks className="hidden sm:flex" />
            <a className="hero-button hero-button--secondary !px-4 !py-2 text-xs" href="#contact">
              Let&apos;s connect
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative px-4 pb-20 overflow-hidden pt-14 lg:pb-24 lg:pt-20" id="home">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200/90">Professional Portfolio</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                Front-end work shaped for clarity, responsiveness, and real users.
              </h1>
              <p className="max-w-2xl mt-6 text-base leading-7 text-slate-300">
                I&apos;m Kyle Sabatin, an aspiring Front-End Developer and Computer Engineering student building polished web
                and mobile interfaces with React, React Native, and a strong focus on user experience.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a className="hero-button" href="#sprint-project">
                  View sprint project
                </a>
                <a className="hero-button hero-button--secondary" href="#projects">
                  Explore featured work
                </a>
              </div>

              <div className="grid gap-4 mt-10 sm:grid-cols-3">
                <div className="info-pill">
                  <span className="info-pill__label">Professional title</span>
                  <strong className="info-pill__value">Front-End Developer</strong>
                </div>
                <div className="info-pill">
                  <span className="info-pill__label">Current focus</span>
                  <strong className="info-pill__value">React and React Native</strong>
                </div>
                <div className="info-pill">
                  <span className="info-pill__label">Location</span>
                  <strong className="info-pill__value">Cebu, Philippines</strong>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-sky-400/10 to-transparent blur-sm" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur">
                <img className="h-[28rem] w-full rounded-[1.5rem] object-cover object-center" src={heroImage} alt="Kyle Sabatin portrait" />
                <div className="grid gap-3 mt-4 sm:grid-cols-2">
                  <div className="p-4 border rounded-2xl border-white/10 bg-slate-950/70">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Professional summary</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Hands-on experience building responsive web and mobile applications with clean UI, authentication,
                      and practical product thinking.
                    </p>
                  </div>
                  <div className="p-4 border rounded-2xl border-white/10 bg-slate-950/70">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Education</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      BS Computer Engineering
                      <br />
                      Cebu Technological University - Danao Campus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" id="branding">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="section-card">
              <p className="section-kicker">Section 1</p>
              <h2 className="section-title">Personal Branding</h2>
              <p className="section-copy">
                This portfolio presents my work, strengths, and development process as a Front-End Developer who enjoys
                turning product ideas into usable digital experiences.
              </p>

              <div className="grid gap-4 mt-8 sm:grid-cols-2">
                <div className="branding-panel">
                  <span className="branding-panel__label">Full name</span>
                  <strong className="branding-panel__value">Kyle Sabatin</strong>
                </div>
                <div className="branding-panel">
                  <span className="branding-panel__label">Professional title</span>
                  <strong className="branding-panel__value">Aspiring Front-End Developer</strong>
                </div>
                <div className="branding-panel sm:col-span-2">
                  <span className="branding-panel__label">About me</span>
                  <p className="branding-panel__text">
                    I enjoy designing responsive interfaces, refining details that improve usability, and building products
                    that feel modern, approachable, and dependable across devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-card">
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Professional Details</h2>
              <div className="grid gap-4 mt-8">
                {contactItems.map((item) => (
                  <div key={item.label} className="contact-row">
                    <span className="contact-row__label">{item.label}</span>
                    {item.href ? (
                      <a className="contact-row__value" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-row__value">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" id="toolkit">
          <div className="w-full max-w-6xl mx-auto">
            <div className="max-w-2xl">
              <p className="section-kicker">Section 2</p>
              <h2 className="section-title">Skills &amp; Toolkit</h2>
              <p className="section-copy">
                My toolkit centers on front-end development, component-based interfaces, and building layouts that remain
                readable and functional on both desktop and mobile.
              </p>
            </div>

            <div className="grid gap-5 mt-10 md:grid-cols-2 xl:grid-cols-4">
              {toolkitGroups.map((group) => (
                <article key={group.title} className="section-card">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-6">
                        <span className="w-2 h-2 mt-2 rounded-full bg-amber-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" id="sprint-project">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="section-card">
              <p className="section-kicker">Section 3</p>
                <h2 className="section-title">Project Experience</h2>
                <p className="section-copy">
                This section now highlights the web application project documented in my accomplishment reports, which better
                represents my sprint-based frontend work.
                </p>

                <div className="grid gap-4 mt-8 sm:grid-cols-3">
                  <div className="branding-panel">
                    <span className="branding-panel__label">Project name</span>
                  <strong className="branding-panel__value">Certicode Compliance &amp; Document Management Web Application</strong>
                  </div>
                  <div className="branding-panel">
                    <span className="branding-panel__label">Role</span>
                  <strong className="branding-panel__value">Frontend Developer</strong>
                  </div>
                  <div className="branding-panel">
                    <span className="branding-panel__label">Date</span>
                  <strong className="branding-panel__value">March 5-12, 2026</strong>
                  </div>
                </div>

              <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6">
                <p className="text-sm leading-7 text-slate-300">
                  Certicode is a compliance and document management web application built around document tracking, admin-side
                  user management, alerts, and structured viewing flows. My focus was implementing the frontend experience to
                  match the approved prototype while keeping the interface interactive, organized, and responsive.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  {sprintHighlights.map((item) => (
                    <li key={item} className="flex gap-3 leading-6">
                      <span className="w-2 h-2 mt-2 rounded-full bg-sky-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden section-card">
              <img className="h-64 w-full rounded-[1.75rem] object-cover object-top" src={projectCdms} alt="Certicode document page preview" />
              <div className="grid gap-4 mt-6">
                <div className="branding-panel">
                  <span className="branding-panel__label">Key technologies</span>
                  <p className="branding-panel__text">React, Vite, Tailwind CSS, reusable components, routing, dropdown logic, and responsive layouts</p>
                </div>
                <div className="branding-panel">
                  <span className="branding-panel__label">Implemented pages</span>
                  <p className="branding-panel__text">Documents, View Document, Alerts, User Management, Add User, View Admin, View User, and Edit User</p>
                </div>
                <div className="branding-panel">
                  <span className="branding-panel__label">Why it matters</span>
                  <p className="branding-panel__text">
                    This project shows my ability to turn design references into working product screens, improve UI behavior,
                    and support a multi-page web application through iterative frontend delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" id="achievements">
          <div className="w-full max-w-6xl mx-auto">
            <div className="max-w-2xl">
              <p className="section-kicker">Section 4</p>
              <h2 className="section-title">Achievements &amp; Certifications</h2>
              <p className="section-copy">
                The task asked for visible achievements and certifications, so this section brings together the credentials,
                project outcomes, and milestones that support my portfolio.
              </p>
            </div>

            <div className="grid gap-5 mt-10 lg:grid-cols-3">
              {achievementCards.map((card) => (
                <article key={card.title} className="section-card">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="w-2 h-2 mt-2 bg-orange-300 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" id="projects">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">Featured Work</p>
                <h2 className="section-title">Additional Projects</h2>
                <p className="section-copy">
                  Beyond the highlighted sprint project, these builds show how I approach layout, storytelling, and
                  front-end execution in different product contexts.
                </p>
              </div>
              <a className="self-start hero-button hero-button--secondary" href="https://github.com/g-pallas" target="_blank" rel="noreferrer">
                View GitHub profile
              </a>
            </div>

            <div className="grid gap-6 mt-10 xl:grid-cols-3">
              {featuredProjects.map((project) => (
                <article key={project.title} className="project-card">
                  <img className="object-cover object-top w-full h-56" src={project.image} alt={project.title} />
                  <div className="flex flex-col h-full p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-amber-200/85">{project.subtitle}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{project.text}</p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold border rounded-full border-white/10 bg-white/5 text-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6 text-sm font-semibold text-white">
                      <a href={project.code} target="_blank" rel="noreferrer">
                        Source code
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" id="contact">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="section-card">
              <p className="section-kicker">Get in touch</p>
              <h2 className="section-title">Let&apos;s build something useful.</h2>
              <p className="section-copy">
                I&apos;m open to internship, collaboration, and front-end opportunities where I can keep improving through
                real-world product work.
              </p>

              <div className="grid gap-4 mt-8">
                {contactItems.slice(0, 3).map((item) => (
                  <div key={item.label} className="contact-row">
                    <span className="contact-row__label">{item.label}</span>
                    {item.href ? (
                      <a className="contact-row__value" href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-row__value">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-4">
                <img className="w-full rounded-[1.25rem]" src={githubPreview} alt="GitHub profile preview" />
              </div>
            </div>

            <form className="grid gap-4 section-card" onSubmit={handleContactSubmit}>
              <p className="section-kicker">Message form</p>
              <h2 className="section-title">Send a direct message</h2>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Name
                <input className="form-input" type="text" placeholder="Your name" name="name" required />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Email
                <input className="form-input" type="email" placeholder="your@email.com" name="email" required />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Message
                <textarea className="resize-y form-input min-h-40" rows="5" placeholder="Tell me about your project or opportunity." name="message" required />
              </label>
              <input className="hidden" type="text" name="website" tabIndex="-1" autoComplete="off" />
              {formStatus && (
                <p
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                    formStatus.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-200'
                      : 'bg-rose-500/10 text-rose-200'
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
              <button className="justify-center w-full hero-button disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="px-4 py-8 border-t border-white/10">
        <div className="flex flex-col w-full max-w-6xl gap-3 mx-auto text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Built as a live professional portfolio aligned with the 2026 portfolio task.</p>
          <p>© 2026 Kyle Sabatin</p>
        </div>
      </footer>

      <button
        className={scrollIndicatorClass}
        type="button"
        aria-label={isAtBottom ? 'Scroll to top' : 'Scroll down'}
        onClick={handleScrollIndicator}
      >
        {isAtBottom ? '↑' : '↓'}
      </button>
    </div>
  )
}

export default App
