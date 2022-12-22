import Kanban from "./kanban";

export default function Project() {
	return (   
		<div className="flex flex-col max-w-screen">
			<div className="flex flex-row  px-[26px] [border-bottom:1px_solid_#F4F4F4]">
        <div className="relative py-[17px] flex flex-row ">
          <div className="relative tracking-[0.2px] leading-[20px] font-medium text-gray-1600 inline-block">
            Projects
          </div>
          <img
            className="relative mt-[1px] w-[16px] h-[16px] overflow-hidden"
            alt=""
            src="../eichevronright.svg"
          />
          <div className="tracking-[0.2px] leading-[20px] font-medium inline-block">
            Cloud Platform
          </div>
          <div className="rounded-[5px] bg-gray-800 w-[45px] h-[20px] ml-[5px]">
            <div className="text-base mx-[6px] tracking-[0.2px] leading-[20px] inline-block">
              FLYTE
            </div>
          </div>
        </div>

        <div className="flex py-[12px] flex-row absolute right-[29px]">
          <div className="[border:none] flex flex-row bg-gray-600 rounded-[8px] w-[175px] h-[32px]">
            <div>
              <img
                className="m-[8px]  w-[16px] h-[16px] overflow-hidden"
                alt=""
                src="../akariconssearch.svg"
              />
            </div>
            <div className="my-[6px] text-base tracking-[0.2px] leading-[20px] font-medium text-gray-1400 inline-block">
              Search
            </div>
          </div>

          <div className="rounded-[8px] mx-[12px] bg-white [border:1px_solid_#dfe1e4] box-border w-[32px] h-[32px]">
            <img className="mx-[7px] my-[7px] w-[16px] h-[16px] overflow-hidden" alt="" src="../bilayoutsidebarreverse.svg" />
          </div>
        </div>

			</div>

			<div className="flex flex-row pt-[7px] pb-[11px] px-[26px] [border-bottom:1px_solid_#F4F4F4]">
				<div className="relative flex flex-row relative">
          <div className="button rounded-[8px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border w-[68px] h-[30px]">
            <div className="flex flex-row mt-[4px] mx-[8px]">
              <img
                className="w-[18px] h-[18px]overflow-hidden"
                alt=""
                src="../akariconscloud.svg"
              />
              <div className="tracking-[0.2px] ml-[6px] leading-[20px] font-medium inline-block">
                25%
              </div>
            </div>
          </div>

          <div className="button rounded-[8px] ml-[6px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border w-[68px] h-[30px]">
            <div className="flex flex-row mt-[4px] mx-[16px]">
              <div className="tracking-[0.2px] leading-[20px] font-medium inline-block">
                Filter
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row absolute right-[40px]">

          <img className="p-[3px] w-[28px] h-[28px] object-cover" alt="" src="../ellipse-30@2x.png" />
          <img className="p-[3px] w-[28px] h-[28px] object-cover" alt="" src="../ellipse-31@2x.png" />

          <div className="button ml-[12px] rounded-[8px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border h-[30px]">
            <div className="flex flex-row mt-[4px] mx-[6px]">
            <div className=" rounded-[5px] bg-gray-900 w-[22px] h-[20px]">
              <img className="my-[3px] mx-[4px] w-[14px] h-[14px] overflow-hidden" alt="" src="../bilist.svg" />
            </div>
              <img className="m-[5px] w-[14px] h-[10px] max-w-full overflow-hidden max-h-full" alt="" src="../Line 85.svg" />
              <img className="my-[3px] w-[14px] h-[14px] overflow-hidden" alt="" src="../vector.svg" />
            </div>
          </div>

          <div className="button mx-[12px] rounded-[8px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border h-[30px]">
            <div className="flex flex-row mt-[4px] mx-[8px]">
              <img
                className="w-[18px] h-[18] overflow-hidden"
                alt=""
                src="../headphonesnew.svg"
              />
            </div>
          </div>

          <div className="button rounded-[8px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border h-[30px]">
            <div className="flex flex-row mt-[4px] mx-[8px]">
              <img
                className="w-[12px] h-[12px]overflow-hidden ml-[4px]"
                alt=""
                src="../link.svg"
              />
              <div className="tracking-[0.2px] mx-[6px] leading-[20px] font-medium inline-block">
                Share
              </div>
            </div>
          </div>

        </div>
			</div>

			<Kanban />
		
		</div>		
	)
}


{/*
 <div className="absolute top-[-0.5px] left-[298.5px] border-r-[1px_solid_#f4f4f4] box-border w-[1px] h-[983px]" />
      <div className="absolute top-[53.5px] left-[299.5px] border-t-[1px_solid_#f4f4f4] box-border w-[853px] h-[1px]" />
      <div className="absolute top-[101.5px] left-[299.5px] border-t-[1px_solid_#f4f4f4] box-border w-[854px] h-[1px]" />
      <div className="absolute top-[17px] left-[325px] tracking-[0.2px] leading-[20px] font-medium text-gray-1600 inline-block">
        Projects
      </div>
      <div className="absolute top-[17px] left-[496px] rounded-[5px] bg-gray-800 w-[45px] h-[20px]" />
      <div className="absolute top-[17px] left-[390px] tracking-[0.2px] leading-[20px] font-medium inline-block">
        Cloud Platform
      </div>
      <img
        className="absolute top-[20px] left-[375px] w-[16px] h-[16px] overflow-hidden"
        alt=""
        src="../eichevronright.svg"
      />
      <div className="absolute top-[62px] left-[1062px] rounded-[8px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border w-[74px] h-[28px]" />
      <div className="absolute top-[62px] left-[1018px] rounded-[8px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border w-[38px] h-[28px]" />
      <div className="absolute top-[12px] left-[1104px] rounded-[8px] bg-white [border:1px_solid_#dfe1e4] box-border w-[32px] h-[32px]" />
      <div className="absolute top-[66px] left-[1092px] text-base tracking-[0.2px] leading-[20px] font-medium text-gray-1400 inline-block">
        Share
      </div>
      <img
        className="absolute h-[1.13%] w-[0.95%] top-[70px] left-[1074px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../group1.svg"
      />
      <input
        className="[border:none] bg-gray-600 absolute top-[12px] left-[917px] rounded-[8px] w-[175px] h-[32px]"
        type="text"
      />
      <img
        className="absolute top-[20px] left-[925px] w-[16px] h-[16px] overflow-hidden"
        alt=""
        src="../akariconssearch.svg"
      />
      <div className="absolute top-[18px] left-[949px] text-base tracking-[0.2px] leading-[20px] font-medium text-gray-1400 inline-block">
        Search
      </div>
      <div className="absolute top-[18px] left-[949px] text-base tracking-[0.2px] leading-[20px] font-medium text-gray-1400 inline-block">
        Search
      </div>
      <img
        className="absolute top-[69px] left-[1030px] w-[14px] h-[14px] overflow-hidden"
        alt=""
        src="../headphonesnew.svg"
      />
      <img
        className="absolute top-[63px] left-[866px] w-[28px] h-[28px] object-cover"
        alt=""
        src="../ellipse-30@2x.png"
      />
      <img
        className="absolute top-[63px] left-[898px] w-[28px] h-[28px] object-cover"
        alt=""
        src="../ellipse-31@2x.png"
      />
      <div className="absolute top-[61px] left-[942px] rounded-[8px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border w-[70px] h-[30px]" />
      <div className="absolute top-[61px] left-[399px] rounded-[8px] bg-white shadow-[0px_3px_0px_#dfe1e4] [border:1px_solid_#dfe1e4] box-border w-[57px] h-[30px]" />
      <div className="absolute top-[66px] left-[411px] tracking-[0.2px] leading-[20px] font-medium inline-block">
        Filter
      </div>
      
      <div className="absolute top-[66px] left-[948px] rounded-[5px] bg-gray-900 w-[22px] h-[20px]" />
      <div className="absolute top-[70.5px] left-[975.5px] border-r-[1px_solid_#dfe1e4] box-border w-[1px] h-[11px]" />
      <img
        className="absolute top-[69px] left-[952px] w-[14px] h-[14px] overflow-hidden"
        alt=""
        src="../bilist.svg"
      />
      <img
        className="absolute top-[71px] left-[970px] w-[14px] h-[10px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../Line 85.svg"
      />
      <img
        className="absolute top-[71px] left-[992px] w-[12px] h-[12px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector.svg"
      /> 
		*/}