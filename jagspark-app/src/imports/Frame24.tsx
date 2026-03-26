import svgPaths from "./svg-ep1a4awwlc";
import imgRectangle from "figma:asset/3f5e9ccf479c628a0f6b1ad462e4d72f38718102.png";
import imgPin1 from "figma:asset/edd0208aaf8031da25aacd97033a10d72628a6de.png";
import imgComputerIconsRoyaltyFreeClipArtXDeleteButtonPng6E361F77C292Cd22Bce4462Ce3F32E1D2 from "figma:asset/32a1c60e81742df019b417da7e65d038010f5a41.png";
import imgHome1 from "figma:asset/e0d6c340531af4ecb9c748210ab3335f79171002.png";
import { imgEllipse10 } from "./svg-t9mwx";

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

function Group4() {
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

function AvatarFrame() {
  return <div className="absolute bg-[#e6e6e6] left-[142px] rounded-[100000px] size-[119px] top-[122px]" data-name="Avatar Frame" />;
}

function Layer() {
  return (
    <div className="absolute h-[220.618px] left-[113.92px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[28.079px_5.349px] mask-size-[119px_119px] overflow-clip top-[116.65px] w-[171.146px]" data-name="Layer_1" style={{ maskImage: `url('${imgEllipse10}')` }}>
      <div className="absolute inset-[0_1.29%_1.02%_0]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[113.92px] top-[116.65px]">
      <div className="absolute left-[176px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-34px_-22.667px] mask-size-[119px_119px] size-[48.167px] top-[144.67px]" style={{ maskImage: `url('${imgEllipse10}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.1667 48.1667">
          <circle cx="24.0833" cy="24.0833" fill="var(--fill-0, #B0B0B0)" id="Ellipse 10" r="24.0833" />
        </svg>
      </div>
      <div className="absolute h-[102px] left-[147.67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.667px_-62.333px] mask-size-[119px_119px] top-[184.33px] w-[104.833px]" style={{ maskImage: `url('${imgEllipse10}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.833 102">
          <ellipse cx="52.4167" cy="51" fill="var(--fill-0, #B0B0B0)" id="Ellipse 11" rx="52.4167" ry="51" />
        </svg>
      </div>
      <Layer />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[142px] top-[122px]" data-name="Mask group">
      <AvatarFrame />
      <Group1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[128px] top-[253px] whitespace-nowrap">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[128px] text-[20px] text-black top-[253px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Maya Robinson
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[14px] left-[147px] text-[#c0c0c0] text-[16px] top-[279px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        @iamrobinson
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[66px] top-[714px]">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[55px] leading-[normal] left-[66px] text-[24px] text-black top-[740px] w-[292px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        You’re the best programmer ever!
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[66px] text-[#bebebe] text-[16px] top-[802px] w-[257px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        -anonymous
      </p>
      <div className="absolute left-[343px] size-[26px] top-[714px]" data-name="Pin 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPin1} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[62px] top-[531px]">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[55px] leading-[normal] left-[62px] text-[24px] text-black top-[549px] w-[273px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Thanks for helping me today in class!
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[62px] text-[#bebebe] text-[16px] top-[611px] w-[257px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        -anonymous
      </p>
      <div className="absolute left-[340px] size-[18px] top-[531px]" data-name="computer-icons-royalty-free-clip-art-x-delete-button-png-6e361f77c292cd22bce4462ce3f32e1d 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComputerIconsRoyaltyFreeClipArtXDeleteButtonPng6E361F77C292Cd22Bce4462Ce3F32E1D2} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[66px] top-[867px]">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[55px] leading-[normal] left-[66px] text-[24px] text-black top-[889px] w-[273px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        I love your blue Star Wars shirt!
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[66px] text-[#bebebe] text-[16px] top-[951px] w-[257px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        -anonymous
      </p>
      <div className="absolute left-[343px] size-[26px] top-[867px]" data-name="Pin 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPin1} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[67px] top-[1014px]">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[55px] leading-[normal] left-[67px] text-[24px] text-black top-[1038px] w-[277px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        You always bring positive energy to class
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[67px] text-[#bebebe] text-[16px] top-[1100px] w-[257px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        -anonymous
      </p>
      <div className="absolute left-[341px] size-[26px] top-[1014px]" data-name="Pin 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPin1} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Group />
      <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[4px] left-[calc(50%+8px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
      <Group4 />
      <MaskGroup />
      <Group5 />
      <div className="-translate-x-1/2 absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid h-[129px] left-[calc(50%+2.5px)] rounded-[14px] top-[716px] w-[327px]" />
      <div className="-translate-x-1/2 absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid h-[129px] left-[calc(50%-0.5px)] rounded-[14px] top-[525px] w-[327px]" />
      <div className="-translate-x-1/2 absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid h-[129px] left-[calc(50%+2.5px)] rounded-[14px] top-[865px] w-[327px]" />
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[32px] text-[18px] text-black top-[489px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pinned Compliments:
      </p>
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[43px] text-[18px] text-black top-[680px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Recent Compliments:
      </p>
      <Group6 />
      <Group3 />
      <Group7 />
      <div className="absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid left-[38px] rounded-[16px] size-[91px] top-[338px]" />
      <div className="absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid left-[156px] rounded-[16px] size-[91px] top-[338px]" />
      <div className="absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid left-[274px] rounded-[16px] size-[91px] top-[338px]" />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[20px] leading-[14px] left-[83px] text-[32px] text-black text-center top-[363px] w-[38px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        14
      </p>
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[20px] leading-[14px] left-[202px] text-[32px] text-black text-center top-[363px] w-[38px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        12
      </p>
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[20px] leading-[14px] left-[319px] text-[32px] text-black text-center top-[363px] w-[38px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        6
      </p>
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[82px] text-[14px] text-black text-center top-[390px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sent
      </p>
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[201.5px] text-[14px] text-black text-center top-[390px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Received
      </p>
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[318.5px] text-[14px] text-black text-center top-[390px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Likes
      </p>
      <div className="absolute flex h-[61px] items-center justify-center left-[142px] top-[353px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[61px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 1">
                <line id="Line 19" stroke="var(--stroke-0, #D9D9D9)" x2="61" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[61px] items-center justify-center left-[260px] top-[353px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[61px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 1">
                <line id="Line 19" stroke="var(--stroke-0, #D9D9D9)" x2="61" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[354px] size-[26px] top-[60px]" data-name="home 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHome1} />
      </div>
      <div className="-translate-x-1/2 absolute bg-[#fff9e9] border border-[#d9d9d9] border-solid h-[129px] left-[calc(50%+3.5px)] rounded-[14px] top-[1014px] w-[327px]" />
      <Group2 />
    </div>
  );
}