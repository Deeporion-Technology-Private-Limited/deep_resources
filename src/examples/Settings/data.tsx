import { AccountSetting } from "../AccountSetting";
import NotificationSettings from "../NotificationSettings";
import PrivacyPolicy from "../PrivacyPolicy";
import { SubscriptionPage } from "../SubscriptionPage";

export const tabData = [
  { label: "Account", content: <AccountSetting /> },
  { label: "Subscription", content: <SubscriptionPage /> },
  { label: "Notification Settings", content: <NotificationSettings /> },
  { label: "Privacy Policy", content: <PrivacyPolicy /> },
];
