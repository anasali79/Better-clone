"use client"

import { useState, useEffect, useCallback } from "react"

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000)
  const [downPayment, setDownPayment] = useState(60000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [zipCode, setZipCode] = useState("462039")

  // New state variables for payment breakdown
  const [principalAndInterest, setPrincipalAndInterest] = useState(0)
  const [propertyTaxes, setPropertyTaxes] = useState(1111110)
  const [homeownersInsurance, setHomeownersInsurance] = useState(111115)
  const [hoaFees, setHoaFees] = useState(360)
  const [utilities, setUtilities] = useState(100)
  const [pmi, setPmi] = useState(100)
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0)
  const [showUtilitiesDropdown, setShowUtilitiesDropdown] = useState(false)
  const [showHelpSection, setShowHelpSection] = useState(false)

  const calculateMonthlyPayment = useCallback(() => {
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12
    if (monthlyRate === 0) return (principal / numPayments).toFixed(2)
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments))
    return monthlyPayment.toFixed(2)
  }, [homePrice, downPayment, interestRate, loanTerm])

  useEffect(() => {
    const piPayment = Number.parseFloat(calculateMonthlyPayment())
    setPrincipalAndInterest(piPayment)

    // Calculate total monthly payment
    const total = piPayment + propertyTaxes + homeownersInsurance + hoaFees + utilities + pmi
    setTotalMonthlyPayment(total)
  }, [calculateMonthlyPayment, propertyTaxes, homeownersInsurance, hoaFees, utilities, pmi])

  // Calculate percentages for the progress bars
  const calculatePercentage = (value) => {
    return (value / totalMonthlyPayment) * 100
  }

  const handleInputChange = (e, setter) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setter(Number.parseFloat(value) || 0)
  }

  return (
    <div className="bg-[#F0F7F1] p-6 md:p-12 mt-20 rounded-lg max-w-full mx-auto">
      <h2 className="text-3xl font-bold">Mortgage calculator</h2>
      <p className="text-gray-600 mb-4">
        Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private
        mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
      </p>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Home price</h3>
          <input
            type="text"
            value={`$${homePrice.toLocaleString()}`}
            onChange={(e) => setHomePrice(Number(e.target.value.replace(/\D/g, "")))}
            className="text-2xl font-bold border rounded-lg p-2 w-40"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Monthly payment</h3>
          <p className="text-2xl font-bold">${calculateMonthlyPayment()}/mo</p>
        </div>
      </div>
      <input
        type="range"
        min="50000"
        max="1000000"
        step="5000"
        value={homePrice}
        onChange={(e) => setHomePrice(Number(e.target.value))}
        className="w-full my-4"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="border rounded-lg p-2"
          placeholder="ZIP code"
        />
        <div className="flex">
          <input
            type="text"
            value={`$${downPayment.toLocaleString()}`}
            onChange={(e) => setDownPayment(Number(e.target.value.replace(/\D/g, "")))}
            className="border rounded-lg p-2 w-2/3"
          />
          <input
            type="text"
            value={`${((downPayment / homePrice) * 100).toFixed(0)}%`}
            className="border rounded-lg p-2 w-1/3 text-center"
            readOnly
          />
        </div>
        <input
          type="text"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="border rounded-lg p-2"
          placeholder="Interest rate"
        />
        <select
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
          className="border rounded-lg p-2"
        >
          <option value={15}>15 years</option>
          <option value={20}>20 years</option>
          <option value={30}>30 years</option>
        </select>
      </div>
      <button className="bg-[#004733] text-white py-2 px-6 rounded-lg mt-6">Get pre-approved</button>

      {/* Monthly Payment Breakdown Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Monthly payment breakdown</h3>

        <div className="mb-6">
          <p className="text-5xl font-bold mb-6">${totalMonthlyPayment.toLocaleString()}/mo</p>

          <div className="relative h-12 flex mb-8">
            {/* Progress bars */}
            <div
              className="h-full bg-green-600 rounded-l-full"
              style={{ width: `${calculatePercentage(principalAndInterest)}%` }}
            ></div>
            <div className="h-full bg-indigo-500" style={{ width: `${calculatePercentage(propertyTaxes)}%` }}></div>
            <div
              className="h-full bg-indigo-400"
              style={{ width: `${calculatePercentage(homeownersInsurance)}%` }}
            ></div>
            <div className="h-full bg-yellow-400" style={{ width: `${calculatePercentage(hoaFees)}%` }}></div>
            <div className="h-full bg-orange-300" style={{ width: `${calculatePercentage(utilities)}%` }}></div>
            <div
              className="h-full bg-orange-600 rounded-r-full"
              style={{ width: `${calculatePercentage(pmi)}%` }}
            ></div>
          </div>

          {/* Breakdown items */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-green-600 mr-3"></div>
                <span>Principal & interest</span>
              </div>
              <span className="font-semibold">${principalAndInterest.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-indigo-500 mr-3"></div>
                <span>Property taxes</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-4">${propertyTaxes.toLocaleString()}</span>
                <div className="border rounded-lg overflow-hidden">
                  <input
                    type="text"
                    value={propertyTaxes}
                    onChange={(e) => handleInputChange(e, setPropertyTaxes)}
                    className="p-2 w-32 text-right"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-indigo-400 mr-3"></div>
                <span>Homeowners insurance</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-4">${homeownersInsurance.toLocaleString()}</span>
                <div className="border rounded-lg overflow-hidden">
                  <input
                    type="text"
                    value={homeownersInsurance}
                    onChange={(e) => handleInputChange(e, setHomeownersInsurance)}
                    className="p-2 w-32 text-right"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-yellow-400 mr-3"></div>
                <span>HOA fees</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-4">${hoaFees.toLocaleString()}</span>
                <div className="border rounded-lg overflow-hidden">
                  <input
                    type="text"
                    value={hoaFees}
                    onChange={(e) => handleInputChange(e, setHoaFees)}
                    className="p-2 w-32 text-right"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-orange-300 mr-3"></div>
                <span>Utilities</span>
              </div>
              <div className="flex items-center relative">
                <span className="font-semibold mr-4">${utilities.toLocaleString()}</span>
                <button onClick={() => setShowUtilitiesDropdown(!showUtilitiesDropdown)} className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showUtilitiesDropdown && (
                  <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg p-4 z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span>Electricity</span>
                      <input type="text" className="border rounded p-1 w-20 text-right" placeholder="0" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span>Water</span>
                      <input type="text" className="border rounded p-1 w-20 text-right" placeholder="0" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Gas</span>
                      <input type="text" className="border rounded p-1 w-20 text-right" placeholder="0" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-orange-600 mr-3"></div>
                <span>PMI</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-4">${pmi.toLocaleString()}</span>
                <div className="border rounded-lg overflow-hidden">
                  <input
                    type="text"
                    value={pmi}
                    onChange={(e) => handleInputChange(e, setPmi)}
                    className="p-2 w-32 text-right"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-gray-100 text-gray-700 py-2 px-6 rounded-lg w-full">Copy estimate link</button>
      </div>

      {/* Help Section Toggle Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setShowHelpSection(!showHelpSection)}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg"
        >
          {showHelpSection ? "Hide Help Section" : "Show Help Section"}
        </button>
      </div>

      {/* Mortgage Calculator Help Section */}
      {showHelpSection && (
        <div className="mt-12 bg-[#F0F7F1] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">How does a mortgage calculator help me?</h2>
          <p className="text-gray-700 mb-6">
            When deciding how much house you can afford, one of the most important pieces to determine is whether a home
            will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home.
            And ours will allow you to enter different down payments and interest rates to help determine what's
            affordable for you.
          </p>

          <h2 className="text-2xl font-bold mb-4">How much monthly mortgage payment can I afford?</h2>
          <p className="text-gray-700 mb-4">
            Lenders determine how much you can afford on a monthly housing payment by calculating your{" "}
            <span className="text-blue-600 font-medium">debt-to-income ratio (DTI)</span>. The maximum DTI you can have
            in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs
            included.
          </p>
          <p className="text-gray-700 mb-4">
            Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it
            is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for
            by creditors, and how much of it is left over to you as disposable income. It's most commonly written as a
            percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
          </p>

          <p className="text-gray-700 font-medium mb-2">Formula for calculating your debt-to-income (DTI) ratio:</p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <div className="text-right mr-2">
                  <p className="text-green-700 font-medium">Monthly Debt Payments</p>
                  <p className="text-green-700 font-medium">Monthly Gross Income</p>
                </div>
                <p className="mx-2">×</p>
                <p className="mx-2">100</p>
                <p className="mx-2">=</p>
                <p className="text-green-700 font-medium">
                  Debt-to-Income
                  <br />
                  Ratio
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-4">Here's an example of what calculating your DTI might look like:</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Debts</h3>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-gray-700">Auto loan</p>
                  <p className="text-right">$350/month</p>
                  <p className="text-gray-700">Student loans</p>
                  <p className="text-right">$220/month</p>
                  <p className="text-gray-700">Credit cards</p>
                  <p className="text-right">$130/month</p>
                  <p className="text-gray-700">Expected housing costs</p>
                  <p className="text-right">$1,800/month</p>
                </div>
                <div className="border-t border-gray-300 mt-4 pt-2">
                  <p className="font-bold">$2,500 monthly debt obligation</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Income</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-gray-700">Monthly salary</p>
                    <p className="text-gray-500 text-sm">$60,000/12</p>
                  </div>
                  <p className="text-right">$5,000/month</p>
                  <p className="text-gray-700">Monthly side-gig income</p>
                  <p className="text-right">$1,500/month</p>
                </div>
                <div className="border-t border-gray-300 mt-4 pt-2">
                  <p className="font-bold">$6,500 monthly income</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <div className="flex items-center mb-4">
                <div className="border-b border-gray-400 text-center px-8">
                  <p className="font-bold">$2,500</p>
                </div>
                <p className="mx-4">×</p>
                <p className="mx-4">100</p>
                <p className="mx-4">=</p>
                <p className="font-bold text-green-700 text-xl">38% DTI</p>
              </div>
              <div className="border-b border-gray-400 text-center px-8 mb-4">
                <p className="font-bold">$6,500</p>
              </div>
              <p className="text-gray-500 text-sm">The above scenario is for illustrative purposes only.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">How to calculate monthly mortgage payments?</h2>
          <p className="text-gray-700 mb-4">
            Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance,
            and mortgage insurance (PMI) if applicable. While not typically included in your mortgage payment,
            homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it's a good
            idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly
            costs so you can really crunch the numbers.
          </p>

          <h3 className="text-xl font-bold mb-4">Formula for calculating monthly mortgage payments</h3>
          <p className="text-gray-700 mb-4">
            The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or
            mathematically inclined, here's the formula for calculating principal and interest yourself:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <p className="mr-2">Monthly mortgage payments (M)</p>
                <p className="mx-2">=</p>
                <p className="mx-2">P</p>
                <p className="mx-2">×</p>
                <div className="flex flex-col items-center">
                  <div className="border-b border-gray-400 px-8 text-center">
                    <p>
                      r(1+r)<sup>n</sup>
                    </p>
                  </div>
                  <p>
                    (1+r)<sup>n</sup>-1
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-2">Where:</p>
          <ul className="list-disc pl-8 mb-6 space-y-4">
            <li>
              <p className="text-gray-700">
                <span className="font-medium">M</span> is monthly mortgage payments
              </p>
            </li>
            <li>
              <p className="text-gray-700">
                <span className="font-medium">P</span> is the principal loan amount (the amount you borrow)
              </p>
            </li>
            <li>
              <p className="text-gray-700">
                <span className="font-medium">r</span> is the monthly interest rate
              </p>
              <p className="text-gray-500 text-sm">(annual interest rate divided by 12 and expressed as a decimal)</p>
              <p className="text-gray-500 text-sm">For example:</p>
              <p className="text-gray-500 text-sm">If the annual interest rate is 5%,</p>
              <p className="text-gray-500 text-sm">the monthly rate would be 0.05/12 = 0.0417 = .417%</p>
            </li>
            <li>
              <p className="text-gray-700">
                <span className="font-medium">n</span> is the total number of payments in months
              </p>
              <p className="text-gray-500 text-sm">For example:</p>
              <p className="text-gray-500 text-sm">for a 30-year loan, n = 30×12 = 360 months</p>
            </li>
          </ul>

          <p className="text-gray-700 mb-4">Here's a simple example:</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <p className="mb-2">P = $200,000</p>
                <p className="mb-2">r = 0.05/12 = 0.00417</p>
                <p>n = 30×12 = 360</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <p className="mb-2">
                  M = 200,000 ×{" "}
                  <span className="whitespace-nowrap">
                    0.00417 (1+0.00417)<sup>360</sup>
                  </span>
                </p>
                <p className="mb-2 whitespace-nowrap">
                  (1+0.00417)<sup>360</sup> -1
                </p>
                <p className="font-bold">M = $1,074 per month</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center">
              The above scenario is for illustrative purposes only. Your actual monthly payment will differ.
            </p>
          </div>

          <p className="text-gray-700 mb-8">
            This formula assumes a fixed-rate mortgage where the interest rate remains constant throughout the loan
            term. And remember, you'll still need to add on taxes, insurance, utilities, and HOA fees if applicable.
          </p>

          <h2 className="text-2xl font-bold mb-4">How to use this mortgage calculator?</h2>
          <p className="text-gray-700 mb-4">
            Play around with different home prices, locations, <span className="text-blue-600">down payments</span>,
            interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
          </p>
          <p className="text-gray-700 mb-4">
            Increasing your down payment and decreasing your interest rate and mortgage length will make your monthly
            payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount
            that's less than 20% of the home price,{" "}
            <span className="text-blue-600">private mortgage insurance (PMI)</span> costs will be added to your monthly
            mortgage payment. As the costs of utilities can vary from county to county, we haven't included utilities
            estimates. If you're thinking about buying a condo or home in a community with a Homeowners Association
            (HOA) you can add HOA fees.
          </p>
          <p className="text-gray-700 mb-4">
            If you haven't calculated the money you'll need to save for annual home maintenance/repairs or the cost of
            home improvements. To see how much home you can afford including these costs, take a look at the{" "}
            <span className="text-blue-600">Better home affordability calculator</span>.
          </p>
          <p className="text-gray-700 mb-4">
            Keep in mind that two homes of roughly the same size and quality on either side of a municipal border could
            have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you
            to afford a higher-priced home.
          </p>

          <h2 className="text-2xl font-bold mb-4">Do you know your property tax rate?</h2>
        </div>
      )}
    </div>
  )
}

export default MortgageCalculator

