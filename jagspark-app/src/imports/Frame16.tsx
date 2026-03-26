import svgPaths from "./svg-6gjhxcpebf";
import imgUser1 from "figma:asset/57f407a5b8185a6caa0131c6e7a9f7e943b1fb16.png";
import imgHome1 from "figma:asset/e0d6c340531af4ecb9c748210ab3335f79171002.png";

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

function Group3() {
  return (
    <button className="absolute contents cursor-pointer left-[22px] top-[65px]">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] leading-[normal] left-[calc(50%-165px)] text-[15px] text-black top-[65px] w-[35px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Back
      </p>
      <div className="absolute flex h-[13.848px] items-center justify-center left-[22px] top-[67.15px] w-[7.216px]">
        <div className="flex-none rotate-180">
          <div className="h-[13.848px] relative w-[7.216px]" data-name="Subtract">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.21567 13.8477">
              <path d={svgPaths.p176dd180} fill="var(--fill-0, black)" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[71px] top-[764px]">
      <div className="absolute bg-[#b22222] h-[46px] left-[71px] rounded-[57px] top-[764px] w-[259px]" />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-1/2 text-[17px] text-center text-white top-[776px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Send a Compliment
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[71px] top-[764px]">
      <Group1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Group />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[38px] leading-[1.186] left-1/2 text-[32px] text-black text-center top-[142px] w-[308px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Write Compliment
      </p>
      <div className="absolute h-0 left-[47px] top-[887px] w-[316px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 1">
            <line id="Line 11" stroke="var(--stroke-0, #D9D9D9)" x2="316" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-black bottom-[9px] h-[4px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
      <Group3 />
      <div className="absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid h-[40px] left-[48px] rounded-[100px] top-[277px] w-[307px]" />
      <div className="absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid h-[112px] left-[48px] rounded-[14px] top-[393px] w-[307px]" />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[121px] text-[16px] text-black text-center top-[285px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Maya Robinson
      </p>
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[65px] text-[12px] text-black top-[525px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Suggestions:
      </p>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+4px)] top-[593px] w-[280px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 1">
            <line id="Line 12" stroke="var(--stroke-0, #B2B2B2)" x2="280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+4px)] top-[643px] w-[280px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 1">
            <line id="Line 12" stroke="var(--stroke-0, #B2B2B2)" x2="280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+4px)] top-[693px] w-[280px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 1">
            <line id="Line 12" stroke="var(--stroke-0, #B2B2B2)" x2="280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[65px] text-[12px] text-black top-[557px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        You explain things really clearly in the class.
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[65px] text-[12px] text-black top-[607px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Your presentations are always great!! 💯
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[65px] text-[12px] text-black top-[657px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        You bring positive energy to group meetings 😁
      </p>
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[160.5px] text-[16px] text-black text-center top-[717px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Send anonymously
      </p>
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[64px] text-[18px] text-black top-[247px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        To:
      </p>
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[64px] text-[18px] text-black top-[363px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Your Compliment:
      </p>
      <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[64px] rounded-[3px] size-[18px] top-[719px]" />
      <Group2 />
      <div className="absolute left-[354px] size-[24px] top-[61px]" data-name="user 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUser1} />
      </div>
      <div className="absolute h-[9.804px] left-[67px] top-[723.29px] w-[12.979px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9795 9.80371">
          <path d={svgPaths.p317a4700} fill="var(--fill-0, black)" id="Union" />
        </svg>
      </div>
      <div className="absolute left-[313px] size-[26px] top-[60px]" data-name="home 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHome1} />
      </div>
    </div>
  );
}