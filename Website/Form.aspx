﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Form.aspx.cs" Inherits="Website.Form" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Detail</title>
    <link href="/Script/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/Script/bootstrap/css/bootstrap-theme.min.css" rel="stylesheet" />
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
            <div class="col-md-12">
                <ul class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Library</a></li>
                    <li class="active">Data</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <div class="list-group">
                    <a href="#" class="list-group-item active">
                        <span class="fa fa-search fa-spin"></span>
                        FA-Search
                    </a>
                    <a href="#" class="list-group-item">
                        <span class="fa fa-book fa-spin"></span>
                        FA-Book
                    </a>
                    <a class="list-group-item">
                        <i class="fa fa-refresh fa-spin"></i>
                        FA-Refresh
                    </a>
                    <a class="list-group-item">
                        <i class="fa fa-adjust fa-spin"></i>
                        FA-Adjust
                    </a>
                    <a class="list-group-item">
                        <i class="fa fa-spinner fa-spin"></i>
                        FA-Spinner
                    </a>
                    <a class="list-group-item">
                        <i class="fa fa-cog fa-spin"></i>
                        Cog
                    </a>
                </div>
            </div>
            <div class="col-md-10">
                <fieldset>
                    <legend class="text-right">
                        <span class="pull-left">Detail</span>
                        <a class="btn btn-warning" title="Back" data-toggle="tooltip" role="button">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a class="btn btn-success" title="Save" data-placement="bottom" data-toggle="tooltip" role="button">
                            <i class="fa fa-save"></i>
                        </a>
                    </legend>
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label for="txtName" class="control-label col-md-2">
                                Name
                            </label>
                            <div class="col-md-7">
                                <input id="txtName" type="text" placeholder="Name" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="txtAge" class="control-label col-md-2">
                                Age
                            </label>
                            <div class="col-md-2">
                                <input id="txtAge" type="number" placeholder="Age" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2">
                                Gender
                            </label>
                            <div class="col-md-10">
                                <label class="radio-inline text-primary">
                                    <input type="radio" name="gender" checked="checked" />
                                    Male
                                </label>
                                <label class="radio-inline text-danger">
                                    <input type="radio" name="gender" />
                                    Female
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2">
                                Favorite
                            </label>
                            <div class="col-md-10">
                                <label class="checkbox-inline text-info">
                                    <input type="checkbox" />
                                    <i class="fa fa-music"></i>
                                    Music
                                </label>
                                <label class="checkbox-inline text-muted">
                                    <input type="checkbox" />
                                    <i class="fa fa-camera"></i>
                                    Photo
                                </label>
                                <label class="checkbox-inline text-success">
                                    <input type="checkbox" />
                                    <i class="fa fa-glass"></i>
                                    Wine
                                </label>
                                <label class="checkbox-inline text-warning">
                                    <input type="checkbox" />
                                    <i class="fa fa-coffee"></i>
                                    Coffee
                                </label>
                            </div>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="alert alert-info">
            <p class="text-center">Create by Henry <i class="fa fa-smile-o"></i></p>
        </div>
    </div>
    <script type="text/javascript" src="/Script/jquery/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="/Script/jquery/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="/Script/angular/angular.min.js"></script>
    <script type="text/javascript" src="/Script/bootstrap/js/bootstrap.min.js"></script>
    <!--[if lt IE 9]>
      <script type="text/javascript" src="/Script/bootstrap/respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript" src="/Script/bootstrap/custom/TooltipLauncher.js"></script>
</body>
</html>
