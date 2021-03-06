﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Website.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>List</title>
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
                        <span class="pull-left">List</span>
                        <a class="btn btn-default">
                            <i class="fa fa-android"></i>
                        </a>
                        <a class="btn btn-primary" data-toggle="tooltip" title="Facebook">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a class="btn btn-danger" data-toggle="tooltip" title="Weibo">
                            <i class="fa fa-weibo"></i>
                        </a>
                        <a class="btn btn-primary" data-toggle="tooltip" title="Like">
                            <i class="fa fa-thumbs-o-up"></i>
                        </a>
                        <a class="btn btn-success" href="#" data-toggle="tooltip" title="Save">
                            <i class="fa fa-save"></i>
                        </a>
                        <a class="btn btn-info" data-toggle="tooltip" title="Twitter">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a class="btn btn-default" data-toggle="tooltip" title="Edit">
                            <i class="fa fa-edit"></i>
                        </a>
                        <a class="btn btn-warning" data-toggle="tooltip" title="Download">
                            <i class="fa fa-download"></i>
                        </a>
                        <a class="btn btn-danger" data-toggle="tooltip" title="Delete">
                            <i class="fa fa-trash-o"></i>
                        </a>
                    </legend>
                    <table class="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 </td>
                                <td>Henry</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hello</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul class="pagination">
                        <li class="disabled"><a href="#">&laquo;</a></li>
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
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
