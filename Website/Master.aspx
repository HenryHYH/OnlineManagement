<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Master.aspx.cs" Inherits="Website.Master" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="om" ng-cloak>
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>{{$state.current.title}}</title>
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
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#"><i class="fa fa-home"></i>&nbsp;Home</a></li>
                    <li><a href="#about"><i class="fa fa-briefcase"></i>&nbsp;About</a></li>
                    <li><a href="#contact"><i class="fa fa-phone"></i>&nbsp;Contact</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li class="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">My account <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-power-off"></i>&nbsp;Sign out</a></li>
                </ul>
                <form class="navbar-form navbar-right visible-lg" role="form">
                    <div class="form-group">
                        <input type="text" placeholder="Email" class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fa fa-sign-in"></i>&nbsp;Sign in</button>
                </form>
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
    <script type="text/javascript" src="/Script/angular/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="/Script/angular/angular-breadcrumb.js"></script>

    <!-- Custom -->
    <script type="text/javascript" src="/App/App.js"></script>
    <script type="text/javascript" src="/App/Controller/AsideController.js"></script>

</body>
</html>
