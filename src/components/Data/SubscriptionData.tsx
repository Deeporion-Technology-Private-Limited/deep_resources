import { useState } from "react";
import { Button } from "../Button/DefaultButton";
import { ButtonIconPosition, ButtonSize, ButtonVariant } from "../Button/type";
import { Box } from "../Layout";

import CloseIcon from "../PopupModal /Icons/CloseIcon";
import { ThreeDostIcon } from "../Icons";

export const AdminSubscriptionPage: React.FC<AdminSubscriptionProp> = ({ initialPlans, data }) => {
  const [handlePopup, setHandlePopup] = useState(false);
  const [initialState, setInitialState] = useState({
    id: 0,
    PlanName: "",
    Service: "",
    Frequency: "",
    Amount: "",
    Description: "",
  });

  const [handleError, setHandleError] = useState({
    PlanName: false,
    Service: false,
    Frequency: false,
    Amount: false,
    Description: false,
  });

  const [plans, setPlans] = useState(initialPlans);
  const [editItemId, setEditItemId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInitialState((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    const errors = {
      PlanName: !initialState.PlanName,
      Service: !initialState.Service,
      Frequency: !initialState.Frequency,
      Amount: !initialState.Amount,
      Description: !initialState.Description,
    };
    setHandleError(errors);
    return !Object.values(errors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation()) {
      if (editItemId !== null) {
        setPlans((prev) => prev.map((plan) => (plan.id === editItemId ? { ...initialState, id: editItemId } : plan)));
        setEditItemId(null);
      } else {
        setPlans((prev) => [...prev, { ...initialState, id: plans.length }]);
      }
      setHandlePopup(false);
      setInitialState({
        id: 0,
        PlanName: "",
        Service: "",
        Frequency: "",
        Amount: "",
        Description: "",
      });
    }
  };

  const handleCancel = () => {
    setInitialState({
      id: 0,
      PlanName: "",
      Service: "",
      Frequency: "",
      Amount: "",
      Description: "",
    });
    setHandleError({PlanName:false,Frequency:false,Amount:false,Description:false,Service:false})
    setHandlePopup(false);
    setEditItemId(null);
  };

  const handleEdit = (id: number) => {
    const planToEdit = plans.find((plan) => plan.id === id);
    if (planToEdit) {
      setInitialState({ ...planToEdit });
      setHandlePopup(true);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setHandleError((prev) => ({
      ...prev,
      [name]: false,
    }));
  };


  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-between px-4 py-3">
          <div className="font-bold text-lg md:text-xl h-12 flex justify-center items-center">Plans</div>
          <div className="h-12 flex justify-center items-center cursor-pointer">
            <Button
              hover
              iconPosition={ButtonIconPosition.Left}
              iconUrl="/src/components/Button/ButtonImage/AddItem.svg"
              size={ButtonSize.Small}
              variant={ButtonVariant.DefaultPrimary}
              className="h-10 p-3 text-sm md:text-base"
              onClick={() => {
                setHandlePopup(true);
                setEditItemId(null);
              }}
            >
              Add New Plan
            </Button>
          </div>
        </div>
        <div className="pt-3 px-4 w-full">
          <table className="w-full">
            <thead className="font-bold text-sm">
              <tr>
                {["Plan Name", "Description", "Service", "Frequency", "Amount", ""].map((header) => (
                  <th key={header} className="border-b pb-3 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans.map((item) => (
                <tr className="font-normal text-sm mt-2 border-b" key={item.id}>
                  <td className="py-3">{item.PlanName}</td>
                  <td className="py-3 min-w-[20vw] max-w-[20vw] overflow-hidden">{item.Description}</td>
                  <td className="py-3">{item.Service}</td>
                  <td className="py-3">{item.Frequency}</td>
                  <td className="py-5 flex relative justify-between items-center">
                    {item.Amount}
                    <div
                      className="cursor-pointer hover:shadow h-6 flex justify-center items-center ml-2"
                      onClick={() => setEditItemId(editItemId === item.id ? null : item.id)}
                    >
                      <ThreeDostIcon />
                    </div>
                    {editItemId === item.id && (
                      <div className="absolute bg-white border px-4 py-2 left-0 top-10 z-10">
                        <div
                          className="text-xs font-normal text-[grey] hover:text-black cursor-pointer"
                          onClick={() => handleEdit(item.id)}
                        >
                          EDIT
                        </div>
                        <div
                          className="text-xs font-normal text-[grey] mt-1 hover:text-black cursor-pointer"
                          onClick={() => setPlans(plans.filter((plan) => plan.id !== item.id))}
                        >
                          REMOVE
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {handlePopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto z-[9999]">
          <div className="bg-white p-8 rounded overflow-auto my-auto shadow-md md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col">
            <Box className="flex w-full justify-between font-bold border-b pb-2">
              <div>{editItemId !== null ? "Edit Plan" : "Add Plan"}</div>
              <div className="cursor-pointer" onClick={handleCancel}>
                {FindIconUrl("Close.svg")}
              </div>
            </Box>
            <form onSubmit={handleSubmit}>
              <Box className="w-full">
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex flex-col w-full">
                      <label htmlFor="PlanName">Plan Name</label>
                      <input
                        type="text"
                        name="PlanName"
                        placeholder="Enter Plan Name"
                        className="border w-full rounded p-1 outline-none"
                        onChange={handleChange}
                        value={initialState.PlanName}
                        onFocus={handleFocus}
                      />
                      {handleError.PlanName && (
                        <span className="text-red-500 text-sm">Please Enter Plan Name</span>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="Service">Service</label>
                      <input
                        type="number"
                        name="Service"
                        placeholder="25"
                        className="border rounded p-1 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        onChange={handleChange}
                        value={initialState.Service}
                        onFocus={handleFocus}
                      />
                      {handleError.Service && (
                        <span className="text-red-500 text-sm">Please Add Service</span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-col w-full">
                      <label htmlFor="Frequency">Frequency</label>
                      <select
                        name="Frequency"
                        className="border rounded p-1 bg-transparent outline-none"
                        value={initialState.Frequency || ""}
                        onChange={handleChange}
                        onFocus={handleFocus}
                      >
                        <option value="" disabled>
                          All Products
                        </option>
                        {data.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      {handleError.Frequency && (
                        <span className="text-red-500 text-sm">Please Add Frequency</span>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="Amount">Amount</label>
                      <input
                        type="number"
                        name="Amount"
                        placeholder="Enter Amount"
                        className="border rounded p-1 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        onChange={handleChange}
                        value={initialState.Amount}
                        onFocus={handleFocus}
                      />
                      {handleError.Amount && (
                        <span className="text-red-500 text-sm">Please Enter Amount</span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col pt-2">
                    <label htmlFor="Description" className="font-bold">
                      Description
                    </label>
                    <textarea
                      name="Description"
                      rows={4}
                      className="border rounded outline-none"
                      onChange={handleChange}
                      value={initialState.Description}
                      onFocus={handleFocus}
                    />
                    {handleError.Description && (
                      <span className="text-red-500 text-sm">Please Enter Description</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-end pt-6">
                  <Button
                    hover
                    size={ButtonSize.Small}
                    className="w-1/4 mr-2"
                    variant={ButtonVariant.DefaultPrimary}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    hover
                    variant={ButtonVariant.DefaultPrimary}
                    size={ButtonSize.Small}
                    className="w-1/4"
                    type="submit"
                  >
                    {editItemId !== null ? "Save" : "ADD"}
                  </Button>
                </div>
              </Box>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const SubsData = [
  {
    id: 0,
    PlanName: "Entry",
    Description: "Get access to 10GB of remote data storage and enjoy the convenience of organizing and synchronizing your files",
    Service: "10",
    Frequency: "1 month",
    Amount: "12",
  },
  {
    id: 1,
    PlanName: "Entry",
    Description: "Get access to 10GB of remote data storage and enjoy the convenience of organizing and synchronizing your files",
    Service: "10",
    Frequency: "1 month",
    Amount: "12",
  },
  {
    id: 2,
    PlanName: "Entry",
    Description: "Get access to 10GB of remote data storage and enjoy the convenience of organizing and synchronizing your files",
    Service: "10",
    Frequency: "1 month",
    Amount: "12",
  },]