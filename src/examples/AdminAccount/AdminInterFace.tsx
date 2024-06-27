export interface AdminProp {
    Details: {
      card_Details: string;
      Currency: string;
      Currecys: string[];
      fullName: string;
      Email: string;
      Address: string;
    };
    ChangePassword: () => void;
    Logout: () => void;
    DeleteAccount: () => void;
    handleBack: () => void;
    handleNext: () => void;
    handleChange: (e: any) => void;
    handleEdit: () => void;
  }
  