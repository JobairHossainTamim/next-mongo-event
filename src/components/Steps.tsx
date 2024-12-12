import EventForm from "@/app/(dashboard)/admin/events/_components/event-form";

interface StepsProps {
  stepNames: string[];
  stepContent: React.ReactNode[];
  activeStep: number;
}

const Steps = ({ stepNames, stepContent, activeStep }: StepsProps) => {
  return (
    <div>
      <div className="flex justify-between w-screen">
        {stepNames.map((stepName, index) => {
          const isActiveStep = index === activeStep;
          const isLastStep = index === stepNames.length - 1;
          const isCompletedStep = activeStep > index;

          return (
            <div
              key={index}
              className={`flex flex-col gap-2 w-full ${
                isLastStep && "w-full"
              } `}
            >
              <div className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full bg-black text-white flex justify-center items-center ${
                    isCompletedStep || isActiveStep
                      ? "bg-black text-white"
                      : "bg-gray-500 text-gray-200"
                  }`}
                >
                  {index + 1}
                </div>

                {!isLastStep && (
                  <div
                    className={`h-1 w-full ${
                      isCompletedStep ? "bg-black" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
              <h1 className="text-sm">{stepName}</h1>
            </div>
          );
        })}
      </div>

      {/*  */}
      <div className="mt-5">{stepContent[activeStep]}</div>
    </div>
  );
};

export default Steps;
