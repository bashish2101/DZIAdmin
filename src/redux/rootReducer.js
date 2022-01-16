import { combineReducers } from "redux";
import * as auth from "../app/modules/Auth/redux/authReducer";
import * as environnment from "../app/modules/GetEnvironment/getEnvironmentReducer";
import * as userManagement from "../app/modules/user_management/redux";
import * as emailManagement from "../app/modules/email_management/redux";
import * as profile from "../app/modules/profile_settings/redux";
import * as dashboard from "../app/modules/dashboards/redux";
import * as thirdParty from "../app/modules/third_party_services/redux";
import * as notificationManagement from "../app/modules/notification_management/redux";
import * as cms from "../app/modules/cms_pages/redux";
import * as defaultPassword from "../app/modules/default_password/redux";
import * as projectManagement from "../app/modules/projectManagement/redux";
import * as wtRequests from "../app/modules/wtRequests/redux";
import snackBarReducer from "../app/modules/snackBar/snackbarReducer";
import * as masterManagement from "../app/modules/masterManagement/redux";
import * as ticketsAndSupport from "../app/modules/ticketSupportManagement/redux";

export const rootReducer = combineReducers({
  snackBar: snackBarReducer,
  environnment: environnment.reducer,
  dashboard: dashboard.reducer,
  auth: auth.reducer,
  userManagement: userManagement.reducer,
  emailManagement: emailManagement.reducer,
  projectManagement: projectManagement.reducer,
  wtRequests: wtRequests.reducer,
  masterManagement: masterManagement.reducer,
  notificationManagement: notificationManagement.reducer,
  profile: profile.reducer,
  thirdParty: thirdParty.reducer,
  cms: cms.reducer,
  defaultPassword: defaultPassword.reducer,
  ticketsAndSupport: ticketsAndSupport.reducer,
});
