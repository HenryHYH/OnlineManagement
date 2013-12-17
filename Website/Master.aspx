<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Master.aspx.cs" Inherits="Website.Master" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="om" ng-cloak>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>{{$state.current.title || $state.current.breadcrumb || $state.current.name}}</title>
    <link href="/Script/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/Style/fontawesome/css/font-awesome.css" rel="stylesheet" />
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
                <a class="navbar-brand" ui-sref="index">Project name</a>
            </div>
            <div class="collapse navbar-collapse" ui-view="view-navigate">
            </div>
        </div>
    </div>
    <div class="container container-full container-full-height">
        <div class="row">
            <div class="col-md-12" ng-include="'/App/View/BreadCrumb.html'"></div>
        </div>
        <div class="row">
            <div class="col-md-2" ui-view="view-aside">
            </div>
            <div class="col-md-10">
                <div class="well" ui-view></div>
                <div class="well"><a href="#" ui-sref="index" ui-sref-active="btn btn-success">Test</a></div>
            </div>
        </div>
    </div>
    <div class="footer navbar-inverse">
        <div class="container">
            <p class="text-center">Create by Henry <i class="fa fa-smile-o"></i></p>
        </div>
    </div>
    <!-- jQuery -->
    <script type="text/javascript" src="/Script/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="/Script/jquery-migrate-1.2.1.min.js"></script>

    <!-- bootstrap -->
    <script type="text/javascript" src="/Script/bootstrap/js/bootstrap.min.js"></script>
    <!--[if lt IE 9]>
      <script type="text/javascript" src="/Script/bootstrap/respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript" src="/Script/bootstrap/custom/TooltipLauncher.js"></script>

    <!-- angular -->
    <script type="text/javascript" src="/Script/angular/angular.min.js"></script>
    <script type="text/javascript" src="/Script/angular/angular-ui-router.js"></script>
    <script type="text/javascript" src="/Script/angular/angular-breadcrumb.js"></script>

    <!-- Custom -->
    <script type="text/javascript" src="/App/App.js"></script>
    <script type="text/javascript" src="/App/Controller/NavigateController.js"></script>
    <script type="text/javascript" src="/App/Controller/AsideController.js"></script>
    <script type="text/javascript" src="/App/Controller/ProductController.js"></script>
    <script type="text/javascript" src="/App/Controller/LoginController.js"></script>

    <script type="text/javascript" src="/App/Service/User.js"></script>

</body>
</html>
