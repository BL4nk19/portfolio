import type { Metadata } from 'next'
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { WorkExperienceOrbit } from "@/components/work-experience-orbit";
import Link from "next/link";
import Markdown from "react-markdown";
import { HexagonBackground } from '@/components/animate-ui/backgrounds/hexagon'; 

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Josh's Portfolio | UX/UI Product Designer",
  description: "Epic UX/UI Designer Portfolio showcasing creative projects and design work",
  keywords: ["UX Designer", "UI Designer", "Portfolio", "Creative Design"],
  authors: [{ name: "Josh" }],
  creator: "Josh",
  openGraph: {
    title: "Josh's Portfolio | UX/UI Designer",
    description: "Epic UX/UI Designer Portfolio showcasing creative projects and design work",
    type: "website",
  },
}

export default function Page() {
  return (
    <main className="relative flex flex-col min-h-[100dvh] space-y-10">
      <HexagonBackground className="fixed inset-0 -z-10 opacity-30 dark:opacity-50" />
      
      {/* HERO SECTION - Elliot Style */}
<section id="hero" className="flex items-center justify-center min-h-[50vh]">
  <div className="flex items-end gap-8">
    <BlurFade delay={BLUR_FADE_DELAY}>
      <Avatar className="size-48 border-4">
        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
        <AvatarFallback>{DATA.initials}</AvatarFallback>
      </Avatar>
    </BlurFade>
    
    <div className="space-y-4">
      <BlurFadeText
        delay={BLUR_FADE_DELAY * 2}
        className="text-6xl font-bold tracking-tight"
        yOffset={8}
        text="Josh Vilensky"
      />
      
      <div className="flex items-center gap-2 text-xl text-muted-foreground">
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 3}
          className="-mt-0.25"
          text="Lead Product Designer"
        />
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <span>·</span>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex items-center gap-3 -mt-1">
            <span>Working at</span>
            <img 
              src="/ombank-logo-green.svg" 
              alt="OM Bank"
              className="h-8 dark:hidden"
            />
            <img 
              src="/ombank-logo-white.svg" 
              alt="OM Bank"
              className="h-8 hidden dark:block"
            />
          </div>
        </BlurFade>
      </div>
    </div>
  </div>
</section>

      {/* TWO-COLUMN CONTENT SECTION */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN - About Content */}
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                {DATA.summary.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>

        {/* RIGHT COLUMN - Work Experience Orbit */}
        <div className="min-h-[500px]">
  <WorkExperienceOrbit />
</div>
      </section>

      {/* EXISTING SECTIONS - Keep everything from work onwards */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 7 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 13 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. Professional enquiries welcome.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}