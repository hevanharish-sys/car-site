import { Phone } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4'

function XtrmeLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M15 2.25L25.5 8.25V21.75L15 27.75L4.5 21.75V8.25L15 2.25Z"
          stroke="white"
          strokeOpacity="0.9"
          strokeWidth="1.6"
        />
        <path
          d="M9 15C9 11.6863 11.6863 9 15 9C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 21L12.7 18.7"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[18px] font-semibold tracking-[-0.02em]">
        xtrme
      </span>
    </div>
  )
}

export default function XtrmeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#000000]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-100"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="pointer-events-none absolute inset-0 bg-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1200px] flex-col px-8 py-8 md:px-16 md:py-8">
        <header className="flex items-center justify-between">
          <a href="#" className="pointer-events-auto select-none">
            <XtrmeLogo />
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.16em] text-white/86 md:flex">
            <a
              className="pointer-events-auto transition-opacity hover:opacity-100"
              href="#"
            >
              Home
            </a>
            <a
              className="pointer-events-auto transition-opacity hover:opacity-100"
              href="#"
            >
              About
            </a>
            <a
              className="pointer-events-auto transition-opacity hover:opacity-100"
              href="#"
            >
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="pointer-events-auto hidden text-[13px] font-medium uppercase tracking-[0.16em] text-white/86 hover:text-white md:inline"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="pointer-events-auto xtrme-clip inline-flex items-center justify-center bg-[#EE3F2C] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_55px_rgba(238,63,44,0.26)] transition-transform hover:translate-y-[-1px] active:translate-y-0"
            >
              Contact Us
            </a>
          </div>
        </header>

        <div className="mt-16 md:mt-20">
          <div className="max-w-[720px]">
            <h1 className="text-left text-[42px] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-[64px]">
              Swift and Simple Transport
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="pointer-events-auto xtrme-clip inline-flex items-center justify-center bg-[#EE3F2C] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_22px_70px_rgba(238,63,44,0.28)] transition-transform hover:translate-y-[-1px] active:translate-y-0"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 z-10 md:bottom-10 md:left-16">
        <div className="pointer-events-auto xtrme-glass w-[min(420px,calc(100vw-64px))] rounded-2xl p-5 md:p-6">
          <div className="relative z-10">
            <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">
              Book a Free Consultation
            </div>
            <div className="mt-2 text-[16px] font-semibold tracking-[-0.02em] text-white">
              Let’s plan your next shipment.
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="xtrme-clip inline-flex items-center justify-center gap-2 bg-white px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-black shadow-[0_18px_55px_rgba(0,0,0,0.28)] transition-transform hover:translate-y-[-1px] active:translate-y-0"
              >
                <Phone size={16} />
                Book a Call
              </a>
              <div className="text-[12px] font-medium text-white/70">
                15 min • No obligation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
