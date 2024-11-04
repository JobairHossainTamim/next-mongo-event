import EventForm from "@/app/(dashboard)/admin/events/_components/event-form";

interface StepsProps {
  stepNames: string[];
  stepContent: React.ReactNode[];
  activeStep: number;
}

const Steps = ({ stepNames, stepContent, activeStep }: StepsProps) => {
  return (
    <div>
      <div className="flex justify-between">
        {stepNames.map((stepName, index) => {
          const isActiveStep = index === activeStep;

          return (
            <div
              key={index}
              className={`flex flex-col gap-2 w-full ${
                index === stepName.length - 1 && "w-full"
              } `}
            >
              <div className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full bg-black text-white flex justify-center items-center ${
                    activeStep >= index
                      ? "bg-black text-white"
                      : "bg-gray-500 text-gray-200"
                  }`}
                >
                  {index + 1}
                </div>

                {activeStep >= index && activeStep !== stepName.length - 1 && (
                  <div className="h-2 w-full bg-black"></div>
                )}
              </div>
              <h1 className="text-sm">{stepName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
