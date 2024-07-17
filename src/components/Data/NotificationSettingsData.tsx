import { useEffect, useState } from "react";
import { Checkbox } from "../Checkbox";
import { initialProp, settingsProps } from "@/components/types";

const NotificationData: React.FC<settingsProps> = ({ setInitialState }) => {
  const [handleToggle, setHandleToggle] = useState({
    toggl1: false,
    toggl2: false,
    toggl3: false,
    toggl4: false,
    toggl5: false,
  });

  useEffect(() => {
    setInitialState((prev: initialProp) => ({ ...prev, PauseNotification: handleToggle.toggl1 }));
    setInitialState((prev: initialProp) => ({ ...prev, innApp: handleToggle.toggl2 }));
    setInitialState((prev: initialProp) => ({ ...prev, Email: handleToggle.toggl3 }));
    setInitialState((prev: initialProp) => ({ ...prev, SMS: handleToggle.toggl4 }));
    setInitialState((prev: initialProp) => ({ ...prev, WhatsApp: handleToggle.toggl5 }));
  }, [handleToggle, setInitialState]);

  const handleToggleChange = (toggleName: string) => {
    setHandleToggle((prev:any) => ({ ...prev, [toggleName]: !prev[toggleName] }));
  };

  const data = [
    { name: "Pause notification", toggle: "toggl1", label: "PauseNotification" },
    { name: "Inn App", toggle: "toggl2", label: "innApp" },
    { name: "Email", toggle: "toggl3", label: "email" },
    { name: "SMS", toggle: "toggl4", label: "SMS" },
    { name: "WhatsApp", toggle: "toggl5", label: "WhatsApp" },
  ];

  return (
    <div className="w-full ">
      <div className="p-3 border w-full">Notification</div>
      <div className="border-red-100 px-4">
        {data.map((item) => (
          <div key={item.name} className="flex w-full justify-between text-sm font-light  pt-2 border-b">
            <div>{item.name}</div>
            <Checkbox
              labelPosition="before"
              type="toggle"
              variant="Basic"
              name={item.label}
              value={item.label}
              onClick={() => handleToggleChange(item.toggle)}
              checked={handleToggle[item.toggle as keyof typeof handleToggle]}
              checkedClassName="w-5 h-5 "
              containerClassName="w-[3.6rem] h-[1.75rem] rounded-full border-none "
              inputClassName="cursor-pointer bg-[#E8EBED]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationData;
