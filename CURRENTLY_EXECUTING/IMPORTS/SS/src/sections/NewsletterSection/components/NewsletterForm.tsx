export const NewsletterForm = () => {
  return (
    <form className="text-base box-border caret-transparent leading-6 max-w-full min-h-0 min-w-0 md:text-lg md:leading-7 md:min-h-[auto] md:min-w-[auto]">
      <fieldset className="text-base box-border caret-transparent leading-6 p-0 md:text-lg md:leading-7">
        <div className="text-base content-start items-start box-border caret-transparent gap-x-5 flex flex-wrap leading-6 gap-y-5 w-auto md:text-lg md:flex-nowrap md:leading-7 md:w-[570px]">
          <div className="text-base box-border caret-transparent leading-6 max-w-full w-full md:text-lg md:leading-7">
            <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
              <input
                name="Email"
                placeholder="Email address"
                title="Must be valid email. example@yourdomain.com"
                type="text"
                className="text-sm bg-black shadow-[rgb(118,118,118)_0px_0px_0px_1px_inset] box-border caret-transparent block tracking-[0.14px] leading-[21px] w-full px-4 py-3 rounded-[10px]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-xs bg-transparent caret-transparent block shrink-0 leading-3 text-center p-0 rounded-[100px] md:text-sm md:leading-[14px]"
          >
            <span className="relative text-black text-xs font-medium items-center box-border caret-transparent inline-flex justify-center leading-3 min-w-[120px] px-5 py-4 rounded-[100px] md:text-sm md:leading-[14px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-black before:block before:text-xs before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-3 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border before:rounded-[100px] before:border-separate before:border-solid before:border-white before:inset-0 before:font-square_sans_text_vf before:md:text-sm before:md:leading-[14px]">
              <span className="relative text-xs box-border caret-transparent block leading-3 md:text-sm md:leading-[14px]">
                Submit{" "}
                <span className="text-xs box-border caret-transparent shrink-0 leading-3 text-nowrap md:text-sm md:leading-[14px]"></span>
              </span>
            </span>
          </button>
        </div>
      </fieldset>
      <input
        name="Square_AVT__c"
        type="hidden"
        value="08d3baff-ddd7-45d3-b4d8-3b27bb2388cf"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="formType"
        type="hidden"
        value="Leads"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="Country"
        type="hidden"
        value="US"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="Language__c_account"
        type="hidden"
        value="EN"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="referrer"
        type="hidden"
        value="https://squareup.com/us/en"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="formDetail"
        type="hidden"
        value="Passive"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="Sync_to_Marketo__c"
        type="hidden"
        value="true"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="cookieAffiliate"
        type="hidden"
        value=""
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="cookieCode"
        type="hidden"
        value=""
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="cookieEntireURL"
        type="hidden"
        value=""
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="experiments"
        type="hidden"
        value=""
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="RecordTypeId"
        type="hidden"
        value="012E0000000Vckz"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="LeadSource"
        type="hidden"
        value="Marketing Sourced"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="Source_Detail__c_account"
        type="hidden"
        value="Public Web (Passive Lead Form)"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="audienceSegment"
        type="hidden"
        value="Sales Leads"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="squareBU"
        type="hidden"
        value="Square"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="_mkt_trk"
        type="hidden"
        value="id:424-IAB-218&token:_mch-squareup.com-99f35534f62e129cc04608111848bb7"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <input
        name="followUpList"
        type="hidden"
        value="[{'followupType':'none','followupValue':null,'default':true}]"
        className="text-base bg-transparent box-border caret-transparent hidden leading-6 p-0 md:text-lg md:leading-7"
      />
      <p className="text-zinc-400 text-xs box-border caret-transparent tracking-[0.12px] leading-[18px] max-w-full w-auto mt-5 font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px] md:w-[570px]">
        *This information may be transcribed, used, and stored by third parties
        in accordance with our{" "}
        <a
          href="https://squareup.com/us/en/legal/general/privacy"
          className="text-xs box-border caret-transparent tracking-[0.12px] leading-[18px] underline underline-offset-[2.4px] md:text-sm md:tracking-[0.14px] md:leading-[21px] md:underline-offset-[2.8px]"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};
