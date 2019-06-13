# Friendlist-Api-Sp-digital
Buildin ASP.NET Core requires Visual Studio 2017.

Deploying an ASP.NET Core Project
In general, to deploy an ASP.NET Core app to a hosting environment:

Deploy the published app to a folder on the hosting server.
Set up a process manager that starts the app when requests arrive and restarts the app after it crashes or the server reboots.
For configuration of a reverse proxy, set up a reverse proxy to forward requests to the app.

Folder contents
The publish folder contains one or more app assembly files, dependencies, and optionally the .NET runtime. 
A .NET Core app can be published as self-contained deployment or framework-dependent deployment. If the app is self-contained, the assembly files that contain the .NET runtime are included in the publish folder. If the app is framework-dependent, the .NET runtime files aren't included because the app has a reference to a version of .NET that's installed on the server. The default deployment model is framework-dependent. 
For more information, see .NET Core application deployment. In addition to .exe and .dll files, the publish folder for an ASP.NET Core app typically contains configuration files, static assets, and MVC views. For more information, see ASP.NET Core directory structure.

Deploying the web api can be found here.
https://docs.microsoft.com/en-sg/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.2&tabs=visual-studio
