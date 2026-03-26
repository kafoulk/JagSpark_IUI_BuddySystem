import svgPaths from "./svg-w9ia5m2xl2";
import imgImage5 from "figma:asset/a8c19530c11fd500464c48794a0ea058f9d93dcc.png";
import imgHeart1 from "figma:asset/27a4b0f219fd6413fee7fe64c66b745cf5cf2d18.png";
import imgUser1 from "figma:asset/57f407a5b8185a6caa0131c6e7a9f7e943b1fb16.png";
import imgHome2 from "figma:asset/e0d6c340531af4ecb9c748210ab3335f79171002.png";

function Time() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pl-[16px] pr-[6px] top-[19px] w-[139px]" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Levels() {
  return (
    <div className="absolute h-[13px] left-[263px] top-[23.5px] w-[139px]" data-name="Levels">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 13">
        <g id="Levels">
          <path clipRule="evenodd" d={svgPaths.p19a48a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p34949700} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="76.5068" y="0.5" />
            <path d={svgPaths.p109dc00} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="78.0068" y="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[19px]">
      <Time />
      <Levels />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents leading-[normal] left-[61px] top-[416px]">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[55px] left-[61px] text-[24px] text-black top-[416px] w-[286px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Thank you for always helping people understand assignments.
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[19px] left-[61px] text-[#bebebe] text-[16px] top-[509px] w-[257px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        -anonymous
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[39px] top-[392px]">
      <div className="-translate-x-1/2 absolute bg-white border border-[#d9d9d9] border-solid h-[162px] left-[calc(50%-0.5px)] rounded-[13px] top-[392px] w-[323px]" />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[261px]">
      <div className="-translate-x-1/2 absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid h-[352px] left-[calc(50%-0.5px)] rounded-[20px] top-[261px] w-[359px]" />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[68px] leading-[normal] left-1/2 text-[32px] text-black text-center top-[290px] w-[308px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        You received a compliment!
      </p>
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[108px] top-[572px]">
      <div className="absolute left-[108px] size-[19px] top-[572px]" data-name="heart 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeart1} />
      </div>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold h-[19px] leading-[0] left-[132px] text-[16px] text-black top-[572px] w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['DM_Sans:Bold',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'opsz' 14" }}>{`12 People `}</span>
        <span className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal]" style={{ fontVariationSettings: "'opsz' 14" }}>
          liked this
        </span>
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[71px] top-[764px]">
      <div className="absolute bg-[#b22222] border border-[#720000] border-solid h-[46px] left-[71px] rounded-[57px] top-[764px] w-[259px]" />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[calc(50%+0.5px)] text-[17px] text-center text-white top-[776px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Send a Reply
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[71px] top-[764px]">
      <Group1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="-translate-x-1/2 absolute left-1/2 size-[176px] top-[93px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-multiply object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <Group />
      <div className="absolute h-0 left-[47px] top-[887px] w-[316px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 1">
            <line id="Line 11" stroke="var(--stroke-0, #D9D9D9)" x2="316" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-black bottom-[9px] h-[4px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
      <Group5 />
      <Group4 />
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] absolute decoration-solid font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[calc(50%-0.5px)] text-[16px] text-black text-center top-[634px] underline whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Report or Block
      </p>
      <Group6 />
      <div className="absolute left-[354px] size-[24px] top-[61px]" data-name="user 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUser1} />
      </div>
      <div className="absolute left-[313px] size-[26px] top-[60px]" data-name="home 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHome2} />
      </div>
    </div>
  );
}