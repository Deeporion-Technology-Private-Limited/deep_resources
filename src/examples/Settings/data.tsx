import { SubscriptionPage } from "../SubscriptionPage";
import { AccountSetting } from "../AccountSetting";
import NotificationSettings from "../NotificationSettings";
import PrivacyPolicy from "../PrivacyPolicy";

export const tabData = [
  { label: "Account", content: <AccountSetting /> },
  { label: "Subscription", content: <SubscriptionPage /> },
  { label: "Notification Settings", content: <NotificationSettings /> },
  { label: "Privacy Policy", content: <PrivacyPolicy /> },
];
