export const DisclaimerSection = () => {
  return (
    <section className="relative text-white text-base content-center bg-black box-border caret-transparent grid justify-center leading-6 py-[60px] md:text-lg md:leading-7 md:py-[120px]">
      <div className="relative text-base box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,1fr)] leading-6 gap-y-[30px] w-[335px] z-[1] mx-auto md:text-lg md:leading-7 md:gap-y-[60px] md:w-[1160px]">
        <div className="text-base box-border caret-transparent col-start-[span_12] leading-6 md:text-lg md:leading-7">
          <div className="text-base box-border caret-transparent gap-x-5 flex flex-wrap leading-6 gap-y-5 w-[335px] mx-auto md:text-lg md:gap-x-20 md:leading-7 md:gap-y-20 md:w-[1160px]">
            <div className="text-base box-border caret-transparent leading-6 w-full md:text-lg md:leading-7 md:w-[calc(50%_-_40px)]">
              <p className="text-[10px] box-border caret-transparent leading-[10px]">
                <span className="text-xs box-border caret-transparent inline-block tracking-[0.12px] leading-[18px] max-w-full font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px]">
                  <sup className="relative text-xs tabular-nums box-border caret-transparent tracking-[0.12px] leading-[0px] top-0 md:tracking-[0.14px]">
                    1
                  </sup>
                  All credit sale plans are issued by Block, Inc. Not available
                  to merchants in AL, DE, MO, MS, NH, and TN. Purchase amounts
                  must be from $49 to $10,000. APR is 15%. Available plan
                  lengths vary from 3, 6, 12, and/or 24 month installments,
                  depending on purchase amount. Sales tax, where applicable,
                  will be due at checkout. All plans subject to credit approval
                  and other factors.
                </span>
              </p>
              <p className="text-[10px] box-border caret-transparent leading-[10px] mt-5">
                <span className="text-xs box-border caret-transparent inline-block tracking-[0.12px] leading-[18px] max-w-full font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px]">
                  <sup className="relative text-xs tabular-nums box-border caret-transparent tracking-[0.12px] leading-[0px] top-0 md:tracking-[0.14px]">
                    2
                  </sup>
                  Block, Inc. is a financial services platform and not an
                  FDIC-insured bank. FDIC deposit insurance coverage only
                  protects against the failure of an FDIC-insured deposit
                  institution. If you have a Square Checking account, up to
                  $250,000 of your balance may be covered by FDIC insurance on a
                  pass-through basis through Sutton Bank, Member FDIC, subject
                  to aggregation of the account holder’s funds held at Sutton
                  Bank and if certain conditions have been met.
                </span>
              </p>
            </div>
            <div className="text-base box-border caret-transparent leading-6 w-full md:text-lg md:leading-7 md:w-[calc(50%_-_40px)]">
              <p className="text-[10px] box-border caret-transparent leading-[10px]">
                <span className="text-xs box-border caret-transparent inline-block tracking-[0.12px] leading-[18px] max-w-full font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px]">
                  Square Debit Card is issued by Sutton Bank, Member FDIC,
                  pursuant to a license from Mastercard.
                </span>
              </p>
              <p className="text-[10px] box-border caret-transparent leading-[10px] mt-5">
                <span className="text-xs box-border caret-transparent inline-block tracking-[0.12px] leading-[18px] max-w-full font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px]">
                  Funds generated through Square’s payment processing services
                  are generally available in the Square Checking account balance
                  immediately after a payment is processed. Fund availability
                  times may vary due to technical issues.
                </span>
              </p>
              <p className="text-[10px] box-border caret-transparent leading-[10px] mt-5">
                <span className="text-xs box-border caret-transparent inline-block tracking-[0.12px] leading-[18px] max-w-full font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px]">
                  Square, the Square logo, Square Financial Services, Square
                  Capital, and others are trademarks of Block, Inc. and/or its
                  subsidiaries. Square Financial Services, Inc. is a wholly
                  owned subsidiary of Block, Inc.
                </span>
              </p>
              <p className="text-[10px] box-border caret-transparent leading-[10px] mt-5">
                <span className="text-xs box-border caret-transparent inline-block tracking-[0.12px] leading-[18px] max-w-full font-cash_sans md:text-sm md:tracking-[0.14px] md:leading-[21px]">
                  All loans are issued by Square Financial Services, Inc. Actual
                  fee depends upon payment card processing history, loan amount
                  and other eligibility factors. A minimum payment of 1/18th of
                  the initial loan balance is required every 60 days and full
                  loan repayment is required within 18 months. Loan eligibility
                  is not guaranteed. All loans are subject to credit approval.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
