import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import FitCallCta from "@/components/FitCallCta";
import AnimatedJB from "@/components/AnimatedJB";
import ParallaxImage from "@/components/ParallaxImage";
import CredentialMarquee from "@/components/CredentialMarquee";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";
import {
  homeHero,
  contact,
  credentials,
  experience,
  confusingForFamilies,
  whoThisIsFor,
  whatThisProvides,
  whoThisIsNotFor,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      {/* HERO — action coaching scene, no portrait */}
      <Hero
        src="/images/college-jb-golf.png"
        alt="Jason Barry coaching a junior golfer at Springdale Golf Club"
        objectPosition="60% 30%"
        eyebrow="Honest recruiting strategy"
        headline={
          <>
            <span className="block">Former College Coach.</span>
            <span className="block">Honest Recruiting Strategy.</span>
          </>
        }
        body={<>{homeHero.sub}</>}
        cta={<Cta href={contact.bookingUrl}>Schedule a Recruiting Fit Call</Cta>}
      />

      {/* CREDENTIAL MARQUEE — kinetic strip under hero */}
      <CredentialMarquee />

      {/* 01 EXPERIENCE & BACKGROUND — two-column with parallax photo */}
      <Section
        eyebrow="Experience & background"
        num="01"
        title={<>Eleven years inside the college game.</>}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <ul className="space-y-0">
              {experience.map((e, i) => (
                <Reveal key={e} delay={i * 70} as="li" className="border-t border-[color:var(--color-line)] py-5 flex items-baseline gap-6">
                  <span className="eyebrow-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-display text-[20px] md:text-[26px] tracking-tight leading-[1.05]">{e}</span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-12 grid grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {credentials.map((c) => (
                <StatCard key={c.label} value={c.value} label={c.label} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage src="/images/portrait-1.jpg" alt="Jason coaching a player" aspect="4/5" />
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 eyebrow-num">On the practice grounds · Springdale Golf Club</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 02 THE PROBLEM — text-focused, no photo (not about Jason) */}
      <Section
        eyebrow="The problem"
        num="02"
        title={<>Recruiting has become confusing for families.</>}
      >
        <div className="max-w-3xl space-y-6">
          {confusingForFamilies.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="body text-[17px] lg:text-[19px] leading-[1.7]">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <div className="pt-4 inline-flex flex-wrap gap-3">
              {["Honest evaluation", "Experienced perspective", "Clear guidance"].map((t) => (
                <span key={t} className="tag"><span>{t}</span></span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 03 WHAT THIS PROVIDES — clean list layout */}
      <section className="relative bg-[color:var(--color-bg-deep)] rule overflow-hidden">
        <AnimatedJB size={620} opacity={0.05} position="right" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-24 lg:py-36">
          <header className="max-w-4xl">
            <p className="eyebrow"><span className="eyebrow-num">03</span>What this advisory provides</p>
            <Reveal as="h2" className="section-h2 mt-5">Strategic guidance, end to end.</Reveal>
          </header>
          <div className="mt-12 lg:mt-16 grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
            {whatThisProvides.map((title, i) => (
              <Reveal key={title} delay={i * 50} as="div" className="border-t border-[color:var(--color-line)] py-5 flex items-baseline gap-5">
                <span className="text-[color:var(--color-accent)] mono text-[13px] font-medium">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-display text-[18px] md:text-[20px] lg:text-[22px] tracking-tight leading-[1.15] text-[color:var(--color-fg)]">{title}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 WHO THIS IS FOR — cream block, clean list */}
      <Section
        eyebrow="Who this is for"
        num="04"
        title={<>Built for families who want the truth.</>}
        tone="paper"
      >
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
          {whoThisIsFor.map((n, i) => (
            <Reveal key={n} delay={i * 50} as="div" className="border-t border-black/15 py-5 flex items-baseline gap-5">
              <span className="text-[color:var(--color-accent)] mono text-[13px] font-medium">{String(i + 1).padStart(2, "0")}</span>
              <span className="h-display text-[18px] md:text-[20px] lg:text-[22px] tracking-tight leading-[1.15] text-black/90">{n}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 05 WHO THIS IS NOT FOR — with parallax background, clean list */}
      <Section
        eyebrow="Who this is not for"
        num="05"
        title={<>Honest about who this isn't for.</>}
        bgImage="/images/NCAA-tee-markers.jpg"
        bgPosition="center 60%"
      >
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
          {whoThisIsNotFor.map((n, i) => (
            <Reveal key={n} delay={i * 50} as="div" className="border-t border-white/15 py-5 flex items-baseline gap-5">
              <span className="text-[color:var(--color-accent)] mono text-[13px] font-medium">{String(i + 1).padStart(2, "0")}</span>
              <span className="h-display text-[18px] md:text-[20px] lg:text-[22px] tracking-tight leading-[1.15] text-white">{n}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FIT CALL CTA */}
      <FitCallCta />
    </>
  );
}
