import svgPaths from "./svg-td1ixll6yb";

function Group1() {
  return (
    <div className="absolute contents left-[71px] top-[530px]">
      <div className="absolute bg-[#b22222] border border-[#720000] border-solid h-[46px] left-[71px] rounded-[57px] top-[530px] w-[259px]" />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[calc(50%+0.5px)] text-[17px] text-center text-white top-[542px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Request reset link
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[71px] top-[530px]">
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[52.86%_20.9%_45.08%_74.63%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group 60">
          <path d={svgPaths.p108e6cf0} fill="var(--fill-0, #B22222)" id="Vector" />
          <path d={svgPaths.p180a6bc0} fill="var(--fill-0, #B22222)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[71px] top-[448px]">
      <div className="absolute bg-white border border-[#e5e5e5] border-solid h-[46px] left-[71px] rounded-[57px] top-[448px] w-[259px]" />
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[calc(37.5%-63.75px)] text-[14px] text-black top-[460px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Jamesg@iu.edu
      </p>
      <Group4 />
    </div>
  );
}

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
    <div className="absolute h-[13px] left-[calc(50%+62px)] top-[23.5px] w-[139px]" data-name="Levels">
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

export default function ForgotPassword() {
  return (
    <div className="bg-white relative size-full" data-name="Forgot Password">
      <div className="-translate-x-1/2 absolute left-1/2 size-[306px] top-[126px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-multiply object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="-translate-x-1/2 absolute bg-black bottom-[9px] h-[4px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
      <Group3 />
      <Group2 />
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] absolute decoration-solid font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[calc(50%-0.5px)] text-[#b22222] text-[16px] text-center top-[598px] underline whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Back to Login
      </p>
      <Group />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-1/2 text-[18px] text-black text-center top-[354px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Forgot your password
      </p>
      <div className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-0.5px)] text-[12px] text-black text-center top-[380px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px] mb-0">Please enter your university email address</p>
        <p className="leading-[16px]">to get the reset information.</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] left-1/2 text-[12px] text-black text-center top-[642px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Please check your IU inbox and follow
        <br aria-hidden="true" />
        the instructions
      </p>
    </div>
  );
}