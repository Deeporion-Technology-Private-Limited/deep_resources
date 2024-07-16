import { AdminProp } from "@/examples/AdminAccount/AdminInterFace";
import { Button } from "../Button/DefaultButton";
import Input from "../Input";
import { InputType, InputVariant } from "../types";
import { DeleteIcon, ExitIcon } from "../Icons";


export const AdminAccountDetails: React.FC<AdminProp> = ({
  Details,
  ChangePassword,
  Logout,
  DeleteAccount,
  handleBack,
  handleNext,
  handleChange,
  handleEdit,
}) => {
  return (
    <>
      <div className="w-full px-4 md:px-10 py-5">
        <div className="w-full py-5">
          <div className="w-full flex flex-col md:flex-row lg:text-base md:text-sm sm:text-xs font-bold gap-4">
            <div className="w-full">
              Payments
            </div>
            <div className="w-full">
              Card Details
              <div className="text-sm font-normal">{Details.card_Details}</div>
            </div>
            <div className="w-full cursor-pointer" onClick={handleEdit}>
              Edit
            </div>
          </div>
          <div className="w-full pt-4 font-bold">
            <label htmlFor="Currency">Currency</label>
            <select
              name="Currency"
              className="w-full bg-transparent border px-2 py-3 font-normal rounded-md outline-none mt-2"
              onChange={handleChange}
            >
              {Details.Currecys.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full border-b pb-3  font-sans">
          <div className="w-full flex flex-col md:flex-row gap-4 pt-6">
            <div className="font-bold md:w-[200px]">Personal details</div>
            <div className="w-full">
              <div className="w-full flex flex-col">
                <label htmlFor="Full Name">Full Name</label>
                <Input
                  type={InputType.Text}
                  name="fullName"
                  className="border mt-2 py-2 rounded-md w-full outline-none"
                  value={Details.fullName}
                  variant={InputVariant.Standard}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col mt-2">
                <label htmlFor="Email">Email</label>
                <Input
                  type={InputType.Text}
                  name="Email"
                  className="border mt-2 py-2 rounded-md w-full outline-none"
                  value={Details.Email}
                  variant={InputVariant.Standard}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col mt-2">
                <label htmlFor="Address">Address</label>
                <Input
                  type={InputType.Text}
                  name="Address"
                  className="border mt-2 py-2 rounded-md w-full outline-none"
                  value={Details.Address}
                  variant={InputVariant.Standard}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col md:flex-row mt-6">
                <div className="w-full">
                  Password
                  <h6>*******</h6>
                </div>
                <div className="font-bold w-full cursor-pointer" onClick={ChangePassword}>
                  Change Password
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 pt-6 justify-between pr-5">
            <div className="font-bold">Personal details</div>
            <div>
              <div className="font-bold cursor-pointer flex" onClick={Logout}><ExitIcon/>Logout</div>
              <div className="text-red-500 mt-2 cursor-pointer flex" onClick={DeleteAccount}><DeleteIcon/>Delete account</div>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 flex gap-2 flex-col md:flex-row md:mt-0 pt-3">
          <Button
            type="button"
            className="w-full md:w-auto h-10 bg-gray-200 text-gray-600 ml-auto"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            className="w-full md:w-auto h-10"
            type="button"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
