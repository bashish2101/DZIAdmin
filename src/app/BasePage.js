import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { UserManagement } from "./modules/user_management";
import { DashboardPage } from "./pages/DashboardPage";
import { UserManagementDetail } from "./modules/user_management";
import { EmailManagement } from "./modules/email_management";
import { ProfileSettings } from "./modules/profile_settings";
import { ThirdPartyServices } from "./modules/third_party_services";
import AddTemplate from "./modules/email_management/pages/AddTemplate";
import { CmsPages } from "./modules/cms_pages";
import { CmsPageDetail } from "./modules/cms_pages";
import AddNotificationTemplate from "./modules/notification_management/pages/AddNotification";
import { NotificationManagement } from "./modules/notification_management/pages/notificationManagement";
import { DefaultPassword } from "./modules/default_password";
import { FaqManagement } from "./modules/faq_management/pages/faqManagement";
import UpdateFAQ from "./modules/faq_management/pages/updateFAQ";
import { ProjectManagement } from "./modules/projectManagement/pages/projectManagement";
import { ticketSupportManagement } from "./modules/ticketSupportManagement/pages/ticketSupportManagement";
import { MasterManagement } from "./modules/masterManagement/pages/masterManagement";
import { WtRequests } from "./modules/wtRequests/pages/wtRequests";

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/" to="/dashboard" />}
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/profile-settings" component={ProfileSettings} />
        <ContentRoute
          exact
          path="/user-management"
          component={UserManagement}
        />
        <ContentRoute
          path="/user-management/user-management-detail"
          component={UserManagementDetail}
        />
        <ContentRoute
          exact
          path="/email-management"
          component={EmailManagement}
        />

        <ContentRoute
          exact
          path="/email-management/add-template"
          component={AddTemplate}
        />
        <ContentRoute
          exact
          path="/email-management/edit-template/:id"
          component={AddTemplate}
        />
        <ContentRoute
          exact
          path="/notification-management"
          component={NotificationManagement}
        />
        <ContentRoute
          exact
          path="/notification-management/add-template"
          component={AddNotificationTemplate}
        />
        <ContentRoute
          exact
          path="/notification-management/edit-template/:id"
          component={AddNotificationTemplate}
        />

        <ContentRoute
          path="/third-party-services"
          component={ThirdPartyServices}
        />
        <ContentRoute exact path="/cms-pages" component={CmsPages} />
        <ContentRoute
          path="/cms-pages/cms-page-detail"
          component={CmsPageDetail}
        />
        <ContentRoute
          path="/cms-pages/cms-page-detail"
          component={CmsPageDetail}
        />
        <ContentRoute path="/default-password" component={DefaultPassword} />
        <ContentRoute exact path="/faq-management" component={FaqManagement} />
        {/* <ContentRoute exact path="/faq-management/add-faq" component={AddFAQ} /> */}
        <ContentRoute
          exact
          path="/faq-management/edit-faq"
          component={UpdateFAQ}
        />
        <ContentRoute
          exact
          path="/project-management"
          component={ProjectManagement}
        />
        <ContentRoute
          exact
          path="/ticket-support-management"
          component={ticketSupportManagement}
        />
        <ContentRoute
          exact
          path="/master-management"
          component={MasterManagement}
        />
        <ContentRoute
          exact
          path="/wtRequests"
          component={WtRequests}
        />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
