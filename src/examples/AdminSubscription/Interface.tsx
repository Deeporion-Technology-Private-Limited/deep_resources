

  interface AdminSubscriptionProp {
    initialPlans: Array<{
      id: number;
      PlanName: string;
      Service: string;
      Frequency: string;
      Amount: string;
      Description: string;
    }>;
    data: string[];
  }