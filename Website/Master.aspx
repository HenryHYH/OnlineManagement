<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Master.aspx.cs" Inherits="Website.Master" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="om" ng-cloak>
<head>
    <%-- For html5mode --%>
    <%--<base href="/" />--%>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>{{$state.current.title || $state.current.breadcrumb || $state.current.name}}</title>
    <link href="/Script/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/Style/fontawesome/css/font-awesome.css" rel="stylesheet" />
    <link href="/Script/hotfix/angular-ui-bootstrap-modal.css" rel="stylesheet" />
    <link href="/Style/Custom.css" rel="stylesheet" />
</head>
<body>
    <div class="navbar navbar-fixed-top navbar-inverse" role="navigation">
        <div class="container container-full">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" ui-sref="home"><i class="fa fa-home"></i>&nbsp;Project name</a>
            </div>
            <div class="collapse navbar-collapse" ui-view="view-navigate">
            </div>
        </div>
    </div>
    <div class="container container-full container-full-height" ui-view>
    </div>
    <div class="footer navbar-inverse">
        <div class="container">
            <p class="text-center">Create by Henry <i class="fa fa-smile-o"></i></p>
        </div>
    </div>
    <!-- jQuery -->
    <script type="text/javascript" src="/Script/jquery/jquery-1.10.2.min.js"></script>

    <!-- bootstrap -->
    <script type="text/javascript" src="/Script/bootstrap/js/bootstrap.min.js"></script>
    <!--[if lt IE 9]>
      <script type="text/javascript" src="/Script/bootstrap/respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript" src="/Script/bootstrap/custom/TooltipLauncher.js"></script>

    <!-- angular -->
    <script type="text/javascript" src="/Script/angular/angular.min.js"></script>
    <script type="text/javascript" src="/Script/angular/angular-ui-router.js"></script>
    <script type="text/javascript" src="/Script/angular/angular-ui-bootstrap-tpls.min.js"></script>
    <script type="text/javascript" src="/Script/angular/angular-breadcrumb.js"></script>
    <script type="text/javascript" src="/Script/angular/angular-cookie.min.js"></script>

    <!-- Custom -->
    <script type="text/javascript" src="/App/App.js"></script>
    <!-- Controller -->
    <script type="text/javascript" src="/App/Controller/NavigateController.js"></script>
    <script type="text/javascript" src="/App/Controller/AsideController.js"></script>
    <script type="text/javascript" src="/App/Controller/ProductController.js"></script>
    <script type="text/javascript" src="/App/Controller/LoginController.js"></script>
    <script type="text/javascript" src="/App/Controller/LogoutController.js"></script>
    <script type="text/javascript" src="/App/Controller/SearchController.js"></script>
    <script type="text/javascript" src="/App/Controller/RegisterController.js"></script>
    <script type="text/javascript" src="/App/Controller/ClockController.js"></script>
    <!-- Service -->
    <script type="text/javascript" src="/App/Service/NavigateService.js"></script>
    <script type="text/javascript" src="/App/Service/AsideService.js"></script>
    <script type="text/javascript" src="/App/Service/UserService.js"></script>

</body>
</html>
