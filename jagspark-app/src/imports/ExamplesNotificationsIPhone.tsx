import svgPaths from "./svg-vpvhycvdak";
import imgExamplesNotificationsIPhone from "figma:asset/b750d7a7a2b0bc37bf3ad2b692dcff8c2ddbf1fc.png";
import imgImage5 from "figma:asset/a8c19530c11fd500464c48794a0ea058f9d93dcc.png";

function CameraButton() {
  return (
    <div className="absolute bottom-[50px] right-[46px] size-[50px]" data-name="Camera Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g data-figma-bg-blur-radius="67.957" id="Camera Button">
          <rect fill="var(--fill-0, black)" fillOpacity="0.26" height="50" rx="25" width="50" />
          <path clipRule="evenodd" d={svgPaths.p1476000} fill="var(--fill-0, white)" fillRule="evenodd" id="Camera Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_8_188_clip_path" transform="translate(67.957 67.957)">
            <rect height="50" rx="25" width="50" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FlashlightButton() {
  return (
    <div className="absolute bottom-[50px] left-[46px] size-[50px]" data-name="Flashlight Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g data-figma-bg-blur-radius="67.957" id="Flashlight Button">
          <rect fill="var(--fill-0, black)" fillOpacity="0.26" height="50" rx="25" width="50" />
          <path clipRule="evenodd" d={svgPaths.p5c01400} fill="var(--fill-0, white)" fillRule="evenodd" id="Flashlight Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_8_185_clip_path" transform="translate(67.957 67.957)">
            <rect height="50" rx="25" width="50" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[32.57px] top-[calc(50%+2.6px)]" data-name="Battery">
      <div className="-translate-y-1/2 absolute border border-solid border-white h-[13px] opacity-35 right-[34.8px] rounded-[4.3px] top-[calc(50%+2.6px)] w-[25px]" data-name="Border" />
      <div className="-translate-y-1/2 absolute h-[4px] right-[32.57px] top-[calc(50%+2.77px)] w-[1.328px]" data-name="Cap">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute bg-white h-[9px] right-[37px] rounded-[2.5px] top-[calc(50%+2.6px)] w-[21px]" data-name="Capacity" />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[53px] left-0 right-0 top-0" data-name="Status Bar">
      <Battery />
      <div className="-translate-y-1/2 absolute h-[12.099px] right-[67.16px] top-[calc(50%+2.75px)] w-[17.142px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1416 12.1">
          <path d={svgPaths.pe79fa80} fill="var(--fill-0, white)" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[12px] right-[91.8px] top-[calc(50%+2.6px)] w-[19.2px]" data-name="Cellular Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2002 12">
          <path d={svgPaths.p367a5c00} fill="var(--fill-0, white)" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function LockScreen() {
  return (
    <div className="absolute bg-[rgba(128,128,128,0.3)] inset-0 overflow-clip" data-name="Lock Screen">
      <div className="absolute bottom-0 h-[34px] left-0 right-0" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <CameraButton />
      <FlashlightButton />
      <div className="-translate-x-1/2 absolute h-[72.898px] left-[calc(50%-8.4px)] top-[119.33px] w-[171.21px]" data-name="Time">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.21 72.8981">
          <g data-figma-bg-blur-radius="40" id="Time">
            <path clipRule="evenodd" d={svgPaths.p244ca400} fill="var(--fill-0, #999999)" fillOpacity="0.8" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p244ca400} fill="var(--fill-1, #707070)" fillRule="evenodd" style={{ mixBlendMode: "color-dodge" }} />
            <path clipRule="evenodd" d={svgPaths.p1c2f22c0} fill="var(--fill-0, #999999)" fillOpacity="0.8" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1c2f22c0} fill="var(--fill-1, #707070)" fillRule="evenodd" style={{ mixBlendMode: "color-dodge" }} />
            <path clipRule="evenodd" d={svgPaths.p1c79bf00} fill="var(--fill-0, #999999)" fillOpacity="0.8" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1c79bf00} fill="var(--fill-1, #707070)" fillRule="evenodd" style={{ mixBlendMode: "color-dodge" }} />
            <path d={svgPaths.p1b22faa0} fill="var(--fill-0, #999999)" fillOpacity="0.8" />
            <path d={svgPaths.p1b22faa0} fill="var(--fill-1, #707070)" style={{ mixBlendMode: "color-dodge" }} />
          </g>
          <defs>
            <clipPath id="bgblur_0_8_177_clip_path" transform="translate(40 40)">
              <path clipRule="evenodd" d={svgPaths.p244ca400} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c2f22c0} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c79bf00} fillRule="evenodd" />
              <path d={svgPaths.p1b22faa0} />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] left-[calc(50%-0.5px)] text-[#707070] text-[22px] text-center top-[76px] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Thur, Mar 5
      </p>
      <div className="absolute backdrop-blur-[14.951px] bg-white h-[2.333px] opacity-35 right-[47.8px] rounded-[1.167px] top-[43.8px] w-[48px]" data-name="Swipe down indicator" />
      <StatusBar />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[120px] top-[284px] whitespace-nowrap">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[120px] text-[18px] text-black top-[284px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jagspark
      </p>
      <div className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] left-[120px] text-[#afafaf] text-[16px] top-[306px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">You received a new</p>
        <p className="leading-[20px]">compliment!</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[120px] top-[397px] whitespace-nowrap">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[120px] text-[18px] text-black top-[397px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Some other app
      </p>
      <div className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] left-[120px] text-[#afafaf] text-[16px] top-[419px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">You received a new</p>
        <p className="leading-[20px]">compliment!</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[120px] top-[510px] whitespace-nowrap">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[120px] text-[18px] text-black top-[510px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Some other app
      </p>
      <div className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] left-[120px] text-[#afafaf] text-[16px] top-[532px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">You received a new</p>
        <p className="leading-[20px]">compliment!</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[120px] top-[623px] whitespace-nowrap">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[120px] text-[18px] text-black top-[623px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Some other app
      </p>
      <div className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] left-[120px] text-[#afafaf] text-[16px] top-[645px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">You received a new</p>
        <p className="leading-[20px]">compliment!</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[27px] top-[380px]">
      <div className="-translate-x-1/2 absolute bg-[#ededed] h-[94px] left-1/2 rounded-[14px] top-[380px] w-[348px]" />
      <div className="-translate-x-1/2 absolute bg-[#ededed] h-[94px] left-1/2 rounded-[14px] top-[493px] w-[348px]" />
      <div className="-translate-x-1/2 absolute bg-[#ededed] h-[94px] left-1/2 rounded-[14px] top-[606px] w-[348px]" />
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-[319px] text-[#afafaf] text-[12px] top-[389px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1m ago
      </p>
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-[319px] text-[#afafaf] text-[12px] top-[502px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1m ago
      </p>
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-[319px] text-[#afafaf] text-[12px] top-[615px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1m ago
      </p>
      <div className="-translate-x-1/2 absolute bg-[#d6d6d6] left-[calc(50%-128px)] rounded-[7px] size-[66px] top-[394px]" />
      <div className="-translate-x-1/2 absolute bg-[#d6d6d6] left-[calc(50%-128px)] rounded-[7px] size-[66px] top-[507px]" />
      <div className="-translate-x-1/2 absolute bg-[#d6d6d6] left-[calc(50%-128px)] rounded-[7px] size-[66px] top-[620px]" />
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

export default function ExamplesNotificationsIPhone() {
  return (
    <div className="relative size-full" data-name="Examples/Notifications - iPhone">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgExamplesNotificationsIPhone} />
      <LockScreen />
      <div className="-translate-x-1/2 absolute bg-[#ededed] border border-[#d9d9d9] border-solid h-[94px] left-1/2 rounded-[14px] top-[267px] w-[348px]" />
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-[319px] text-[#afafaf] text-[12px] top-[276px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1m ago
      </p>
      <div className="-translate-x-1/2 absolute bg-white border border-[#b22222] border-solid left-[calc(50%-128px)] rounded-[7px] size-[66px] top-[281px]" />
      <Group />
      <Group4 />
      <div className="-translate-x-1/2 absolute left-[calc(50%-128px)] size-[66px] top-[281px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-multiply object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}