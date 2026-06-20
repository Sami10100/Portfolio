import { team } from "@/config/site";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-[#F4F5F6] px-7 py-20 text-[#1A1B41]">
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-[#FF6F59]">✦ The Human Growth Engine</span>
            <h2 className="section-title mt-[18px] text-[62px] leading-none">
              Meet the Team<span className="text-[#00E5FF]">.</span>
            </h2>
            <p className="mt-[18px] max-w-[440px] text-[16px] leading-[1.65] text-[#5b5d77]">
              We&apos;re a team of builders, strategists, and innovators dedicated to helping ambitious brands grow smarter.
            </p>
          </Reveal>

          <Reveal className="hide-mobile justify-self-end">
            <div className="relative h-[210px] w-[360px]">
              <div className="absolute right-0 top-5 h-[120px] w-[170px] rotate-[-8deg] rounded-[26px] bg-[linear-gradient(135deg,#2a2e8c,#1A1B41)] shadow-[0_20px_50px_-22px_rgba(26,27,65,.45)]" />
              <div className="absolute left-6 top-2 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#dff7ff,#ffffff)] shadow-[0_18px_45px_-22px_rgba(0,229,255,.7)]">
                <span className="h-[54px] w-[54px] rounded-full bg-[#00E5FF]" />
              </div>
              <div className="absolute bottom-5 left-24 h-[74px] w-[74px] rounded-[22px] bg-[#5b5bf0] shadow-[0_18px_45px_-22px_rgba(91,91,240,.7)]" />
            </div>
          </Reveal>
        </div>

        <div className="mt-9 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([name, role], index) => (
            <Reveal key={name}>
              <div className="member light-card rounded-[22px] px-5 pb-[22px] pt-7 text-center transition-transform">
                <Avatar index={index} />
                <h3 className="font-display mb-1 mt-[14px] text-[19px] font-bold text-[#1A1B41]">{name}</h3>
                <p className="m-0 text-[13px] leading-[1.4] text-[#5b5d77]">{role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5 flex items-center justify-center gap-3 text-center text-[14px] text-[#5b5d77]">
          <span className="text-[#00E5FF]">✦</span>
          <span>
            4 Experts. 1 Mission. <b className="text-[#00E5FF]">Smarter Growth</b> for Ambitious Brands.
          </span>
        </Reveal>
      </Container>
    </section>
  );
}

function Avatar({ index }: { index: number }) {
  const shapes = ["person", "chart", "code", "person"];
  const shape = shapes[index];
  return (
    <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-[28px] bg-[linear-gradient(160deg,#eef8ff,#ffffff)] shadow-[0_14px_38px_-20px_rgba(26,27,65,.25)]">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] bg-[linear-gradient(160deg,#2a2e8c,#1A1B41)] text-[26px] text-[#00E5FF]">
        {shape === "chart" ? "◔" : shape === "code" ? "</>" : "●"}
      </div>
    </div>
  );
}
