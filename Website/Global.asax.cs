using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace Website
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            //routes.Ignore("{*File}", new { File = @".*\.[a-z0-9A-Z]*(/.*)?" });
            System.Web.Routing.RouteTable.Routes.MapPageRoute("Index", "", "~/Master.aspx");
            System.Web.Routing.RouteTable.Routes.MapPageRoute("All", "{*name}", "~/Master.aspx");
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}