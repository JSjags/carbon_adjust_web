import { Button, Input } from "@/components/ui";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Map from "@/components/reusables/Map";
import {
  image1,
  image2,
  image3,
  image4,
  insuranceOptions,
  placeholderFinancialPackages,
  placeholderHIAPackages,
  subContractors,
} from "@/constants";
import PackageCard from "@/components/reusables/PackageCard";
import TopHiaCard from "@/components/ui/TopHiaCard";
import FlyoutSidebar from "@/components/reusables/FlyoutSidebar";
import SubContractorCard from "@/components/reusables/SubContractorCard";
import SelectedPackagesSummaryCard from "@/components/reusables/SelectedPackagesSummaryCard";
import { FaChevronRight } from "react-icons/fa";
import DialogComponent from "@/components/reusables/Dialog";
import { FinanceApplicationSuccess } from "@/components/dialogs";
import InsuranceCard from "@/components/reusables/InsuranceCard";

type Props = {};

const ApplyToFinance = (_: Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tab = searchParams.get("state");

  const [showSheet, setShowSheet] = useState(false);
  const [showInsuranceSheet, setShowInsuranceSheet] = useState(false);
  const [showInsurancePackagesSheet, setShowInsurancePackagesSheet] =
    useState(false);
  const [showSelectedPackagesSheet, setShowSelectedPackagesSheet] =
    useState(false);
  const [showApplicationSuccessDialog, setShowApplicationSuccessDialog] =
    useState(false);

  const selectedPackages = [0, 1];

  const identifyAggregatorApplicationState = () => {
    switch (tab) {
      case "packages":
        return (
          <>
            {/* Select Packages sub contractors Sheet */}
            <FlyoutSidebar isOpen={showSheet} onOpenChange={setShowSheet}>
              <div className="font-poppins relative h-full">
                <div className="px-2 sm:px-6">
                  <div>
                    <p className="font-semibold text-2xl text-black-main">
                      Choose Subcontractors
                    </p>
                    <p className="text-gray-500 mt-1">
                      Select from a list of sub contractors to continue
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-green-600 mt-6">
                      4/8 Subcontractors Selected
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-y-4">
                    {subContractors.map((subcontractor, i) => (
                      <SubContractorCard
                        data={subcontractor}
                        key={i}
                        setShowSheet={setShowSheet}
                      />
                    ))}
                  </div>
                </div>
                <div className="sticky bottom-0 mt-20 bg-white left-0 p-4 flex justify-around gap-2 flex-wrap font-poppins border w-full border-t-black-main/50 z-50">
                  <Button
                    onClick={() => setShowSheet(false)}
                    variant={"outline"}
                    className="border-black-main text-black-main max-w-[192px] w-full min-w-[120px]"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setShowSheet(false)}
                    className="text-white max-w-[192px] w-full min-w-[120px]"
                  >
                    Save selection
                  </Button>
                </div>
              </div>
            </FlyoutSidebar>

            {/* View Selected Packages Sheet */}
            <FlyoutSidebar
              isOpen={showSelectedPackagesSheet}
              onOpenChange={setShowSelectedPackagesSheet}
            >
              <div className="font-poppins relative h-full">
                <div className="px-2 sm:px-6">
                  <div>
                    <p className="font-semibold text-2xl text-black-main">
                      Summary
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-green-600 mt-6">
                      2/8 Packages selected
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-y-4 min-h-screen">
                    {placeholderHIAPackages
                      .slice(0, 1)
                      .map((packageData, i) => (
                        <SelectedPackagesSummaryCard
                          key={i}
                          packageData={packageData}
                          setShowSelectedPackagesSheet={
                            setShowSelectedPackagesSheet
                          }
                          setShowSheet={setShowSheet}
                          subContractorData={subContractors.slice(0, 2)}
                        />
                      ))}
                  </div>
                </div>
                <div className="sticky bottom-0 mt-20 bg-white left-0 p-4 flex justify-around gap-2 flex-wrap font-poppins border w-full border-t-black-main/50 z-50">
                  <Button
                    onClick={() => setShowSelectedPackagesSheet(false)}
                    variant={"outline"}
                    className="border-black-main text-black-main max-w-[192px] w-full min-w-[120px]"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      navigate({
                        pathname: "",
                        search: createSearchParams({
                          state: "pending-applications",
                        }).toString(),
                      })
                    }
                    className="text-white max-w-[192px] w-full min-w-[120px] gap-3"
                  >
                    <span>Apply now</span>
                    <FaChevronRight />
                  </Button>
                </div>
              </div>
            </FlyoutSidebar>

            {/* Show insurance form*/}
            <FlyoutSidebar
              isOpen={showInsuranceSheet}
              onOpenChange={setShowInsuranceSheet}
            >
              <div className="font-poppins relative h-full">
                <div className="px-2 sm:px-6">
                  <div>
                    <p className="font-semibold text-2xl text-black-main">
                      Apply for Insurance
                    </p>
                  </div>
                  <form className="mt-10">
                    <div className="mt-6">
                      <Input
                        name="firstLineOfAddress"
                        label="Value of Carbon Credit"
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="Value of Carbon Credit that will be generated"
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        name="firstLineOfAddress"
                        label="Loan amount"
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="How much loan are you requesting for ?"
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        name="firstLineOfAddress"
                        label="Duration of Carbon Credit"
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="How long will the Carbon Credit be generated for?"
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        name="firstLineOfAddress"
                        label="What is your annual household Income?"
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="Your annual household income"
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        name="postCode/zipCode"
                        label="Other income (Spouse, additional employment, etc. *"
                        required
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="Other income"
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        name="postCode/zipCode"
                        label="Other income (Spouse, additional employment, etc."
                        required
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="Other income"
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        name="postCode/zipCode"
                        label="Household monthly expenses (excluding loans, credit card, etc)"
                        required
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="Other income"
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        name="postCode/zipCode"
                        label="Other monthly expenses"
                        required
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="Other monthly expenses"
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        name="postCode/zipCode"
                        label="Number of dependents"
                        required
                        labelClassName="mb-4 font-poppins text-black-main"
                        inputClassName="bg-gray-100 font-poppins"
                        placeholder="Number of dependents"
                      />
                    </div>
                  </form>
                </div>
                <div className="sticky bottom-0 mt-20 bg-white left-0 p-4 flex justify-around gap-2 flex-wrap font-poppins border w-full border-t-black-main/50 z-50">
                  <Button
                    onClick={() => {
                      setShowInsurancePackagesSheet(true);
                      setShowInsuranceSheet(false);
                    }}
                    className="w-full text-white font-poppins h-12"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </FlyoutSidebar>

            {/* Select Insurance Packages */}
            <FlyoutSidebar
              isOpen={showInsurancePackagesSheet}
              onOpenChange={setShowInsurancePackagesSheet}
            >
              <div className="font-poppins relative h-full">
                <div className="px-2 sm:px-6">
                  <div>
                    <p className="font-semibold text-2xl text-black-main">
                      Insurance Institutions
                    </p>
                    <p className="text-gray-500 mt-1">
                      Select an insurance institution
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-y-4">
                    {insuranceOptions.map((insurance, i) => (
                      <InsuranceCard
                        data={insurance}
                        key={i}
                        setShowSheet={setShowSheet}
                      />
                    ))}
                  </div>
                </div>
                <div className="sticky bottom-0 mt-20 bg-white left-0 p-4 flex justify-around gap-2 flex-wrap font-poppins border w-full border-t-black-main/50 z-50">
                  <Button
                    onClick={() => setShowApplicationSuccessDialog(true)}
                    className="text-white w-full min-w-[120px]"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </FlyoutSidebar>

            <div className="flex justify-between items-center gap-x-4 py-10 px-6">
              <p className="font-semibold font-poppins text-xl text-black-main">
                Financing options
              </p>
              <Input
                name="firstLineOfAddress"
                inputClassName="bg-white font-poppins h-10"
                wrapperClassName="max-w-[400px_!important] rounded-lg border border-black-main/70"
                placeholder="Search here"
                prependIcon={<BiSearch color="grey" size={18} />}
              />
            </div>
            <div className="flex justify-center text-black-main bg-white/80 min-h-screen px-6">
              <div className="w-full flex justify-center gap-x-6">
                <div className="flex-[0.5] h-full">
                  <div className="mt-6 flex flex-col gap-y-5">
                    {placeholderFinancialPackages.map((financePackage, i) => (
                      <PackageCard
                        data={financePackage}
                        key={i}
                        setShowInsuranceSheet={setShowInsuranceSheet}
                        setShowInsurancePackagesSheet={
                          setShowInsurancePackagesSheet
                        }
                        isSelected={selectedPackages.includes(i)}
                        className="bg-[#DBEEF8]"
                        type="finance"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-[0.5] h-full flex flex-col sticky top-0">
                  <div className="w-full h-3/5 max-h-[390px]">
                    <Map />
                  </div>

                  <div className="flex flex-col pt-2 mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[16px] leading-[20px] font-medium font-poppins text-sub-header">
                        Top Financial Institutions
                      </span>
                      <button className="text-[14px] leading-[12px] font-normal font-poppins text-main text-[#2196F3]">
                        See More
                      </button>
                    </div>

                    <div className="p-2 h-full rounded-lg flex flex-col gap-[1px] mt-4 overflow-hidden bg-gray-100">
                      <TopHiaCard
                        name="Microsoft Corporation"
                        image={image1}
                        retrofitCount="267,502"
                        className="rounded-t"
                      />
                      <TopHiaCard
                        name="Apple Inc."
                        image={image2}
                        retrofitCount="217,034"
                      />
                      <TopHiaCard
                        name="Tesla Inc."
                        image={image3}
                        retrofitCount="193,205"
                      />
                      <TopHiaCard
                        name="Real Madrid CF"
                        image={image4}
                        retrofitCount="154,005"
                        className="rounded-b"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <div className="flex justify-center text-black-main bg-white/80 min-h-screen py-10 px-6">
            <div className="max-w-[706px] w-full">
              <div className="flex justify-between items-center gap-x-4">
                <p className="font-semibold font-poppins text-xl">Details</p>
              </div>

              <form className="mt-10">
                <div className="mt-6">
                  <Input
                    name="firstLineOfAddress"
                    label="What is your annual household Income?"
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Your annual household income"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="postCode/zipCode"
                    label="Other income (Spouse, additional employment, etc. *"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Other income"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="postCode/zipCode"
                    label="Other income (Spouse, additional employment, etc."
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Other income"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="postCode/zipCode"
                    label="Household monthly expenses (excluding loans, credit card, etc)"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Other income"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="postCode/zipCode"
                    label="Other monthly expenses"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Other monthly expenses"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    name="postCode/zipCode"
                    label="Number of dependents"
                    required
                    labelClassName="mb-4 font-poppins text-black-main"
                    inputClassName="bg-gray-100 font-poppins"
                    placeholder="Number of dependents"
                  />
                </div>
                <div className="mt-8">
                  <Button
                    onClick={() =>
                      navigate({
                        pathname: "",
                        search: createSearchParams({
                          state: "packages",
                        }).toString(),
                      })
                    }
                    className="w-full text-white font-poppins h-12"
                  >
                    Find
                  </Button>
                </div>
              </form>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-fixed bg-contain bg-bottom bg-[url(/assets/graphics/applications-bg.svg)] bg-opacity-20">
      <DialogComponent
        isOpen={showApplicationSuccessDialog}
        onOpenChange={() =>
          navigate("/dashboard/applications/hia-applications")
        }
      >
        <FinanceApplicationSuccess
          setShowApplicationSuccessDialog={setShowApplicationSuccessDialog}
        />
      </DialogComponent>

      {identifyAggregatorApplicationState()}
    </div>
  );
};

export default ApplyToFinance;
