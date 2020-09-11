---
title: "Install Go programming Language in Windows OS"
description: "Learn How to setup go programming language in Windows OSEnvironment"
date: 2020-09-05T14:09:21+09:00
draft: false
link: "Windows"
---

To install Go programming language in Windows OS follow the below steps.

## Download Go Programming language MSI

Download .MSI file from official [go lang website](https://golang.org/dl/go1.15.1.windows-amd64.msi)

Open the MSI and it will Open Go programming language installation setup wizard, click on Next Button

![Go installation Wizard](/images/install/goInstall1.png)

And then it will open end user license agreement, I know most of them won't read them click on accept and proceed with the next steps.

![Go end user license agreement](/images/install/goInstall2.png)

In the next step it will ask for Go progragmming language installation folder.

## Select Go language Installation Location

The default installation location of Go progragmming Language in Windows is "C:\Go".

![Go Language Location](/images/install/goinstalllocation.png)

If you are beginner and don't know much above environment varibles etc.. do not change the installation folder keep it as is. As our goal is to learn the go language not the setup.

## Go language Installation Process

Click on Next button it will start the installation process 

![Go Installation Process](/images/install/golanginstallprocess.png)

If everything is Ok you should see "Completed the go programming language setup wizard" popup. 

![Go Installation Completed](/images/install/golanginstallFinish.png).

## Verify Go language Installation

After the successful installation, verify the go programming language installation.

Open the command prompt and run `go version` command.

```
> go version
go version go1.15.1 windows/amd64
```

If command prompt is already opened, close it and restart the command propmpt.

![Go Installation Verification](/images/install/goVerify.png).
