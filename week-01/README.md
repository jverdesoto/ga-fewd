# Front End Web Development
#### General Assembly

# Week 1 - Lesson 1

## Installing all tools and dependencies

### 1. IDE (integrated development environment)
For this course we'll be using ***[VS Code](https://code.visualstudio.com/)*** (Visual studio Code). You can download it and installing usong the following **[link](https://code.visualstudio.com/)**, the browser will automatically detect your OS and will give the you a button to download the appropiate installer.

### For Mac users
> 1. Download Visual Studio Code for macOS.
> 2. Open the browser's download list and locate the downloaded app or archive.
> 3. If archive, extract the archive contents. Use double-click for some browsers or select the 'magnifying glass' icon with Safari.
> 4. Drag Visual Studio Code.app to the Applications folder, making it available in the macOS Launchpad.
> 5. Open VS Code from the Applications folder, by double clicking the icon.
> 6. Add VS Code to your Dock by right-clicking on the icon, located in the Dock, to bring up the context menu and choosing Options, Keep in Dock.

### Launching from the command line (It's a simple command we'll use from the terminal to run VSC)
> 1. Launch VS Code.
> 2. Open the Command Palette `(Cmd+Shift+P)` and type '***shell command***' to find the Shell Command: ***Install 'code' command in PATH*** command.
>
> ![Shell command](https://code.visualstudio.com/assets/docs/setup/mac/shell-command.png)
> 
> 3. Restart the terminal for the new `$PATH` value to take effect. You'll be able to type 'code .' in any folder to start editing files in that folder.

### For Windows Users
> 1. Download the Visual Studio Code installer for Windows.
> 2. Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). This will only take a minute.
> 3. By default, VS Code is installed under `C:\Users\{Username}\AppData\Local\Programs\Microsoft VS Code`.

### VSCode Extensions
VS Code extensions let you add languages, debuggers, and tools to your installation to support your development workflow. For this course we'll be using specific extensions that will make our workflow easier and faster, though these extensions are optionals, I recommend you install them, so that you can easily follow keyboard shortodes and other commands.

> You can browse and install extensions from within VS Code. Bring up the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of VS Code or the View: Extensions command `(⇧⌘X)` on Mac or `(⇧+CTRL+X)` on Windows.
>
> ![Extensions Icon](https://code.visualstudio.com/assets/docs/editor/extension-marketplace/extensions-view-icon.png)
> 
> This will show you a list of the most popular VS Code extensions on the VS Code Marketplace.
> ![Extensions Marketplace](https://code.visualstudio.com/assets/docs/editor/extension-marketplace/extensions-popular.png)
> Each extension in the list includes a brief description, the publisher, the download count, and a five star rating. You can select the extension item to display the extension's details page where you can learn more.

#### Installing an extension
> To install an extension, select the **Install** button. Once the installation is complete, the **Install** button will change to the **Manage** gear button.

We'll install the following extensions:

> 1. **ES7+React/Redux/React-Native snippets** by *dsznajder*
> 2. **ESLint** by *Microsoft*
> 3. **Live Server Preview** by *negokaz*
> 4. **Prettier** by *Prettier*

:tada: And now we've got our IDE ready to start working! :tada:

### 2. Git
#### What is Git? A very quick introduction
By far, the most widely used modern version control system in the world today is Git. Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel. A staggering number of software projects rely on Git for version control, including commercial projects as well as open source. Developers who have worked with Git are well represented in the pool of available software development talent and it works well on a wide range of operating systems and IDEs (Integrated Development Environments).

#### How we'll use Git during this course?
During this course, we'll use git to access resourses, hand out homeworks, version control our final project, collaborate with classmates, and finally we'll have a reference and portfolio repository for our work.

#### Installing Git on our local machines
##### Mac Users
To install Git on our Mac computer we'll first need to isntall ***[Homebrew](https://brew.sh/)***. Homebrew is a package manager for Mac, we'll also use it to install other dependencies for our projects :smile:
#### How to install Homebrew
> 1. Open a Terminal window
> 2. Copy and paste the following code:
>> `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
> 3. The script explains what it will do and then pauses before it does it. We'll use all the default options
> 4. Close the terminal window, re-open it and test the installation using the `brew --version` command.
> 5. The output should be something like `Homebrew 4.0.28`

#### Troubleshooting :rotating_light:
If the `brew` command returned an error, we'll need to follow these commands:
> 1. Let's make sure w're on our home directory by writing the following command on our terminal
>> `cd ~`
> 2. Make sure the file `.zshrc` does not exist using
>> `ls -a` this will list all of the files and folders in our home directory
> 3. if the file does not exist, we'll create it by using: (skip this step if the file is present)
>> `touch .zshrc`
> 4. We need to tell our system how to use brew. Into the terminal paste the following command:
>> `echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.zshrc`

:white_check_mark: :white_check_mark: Now that Homebre is installed we can proceed with the Git installation. 

#### How to install Git
The Git isntallation is very straightforward, we just need to run the following command in out terminal:
>`brew install git`

---
##### Windows Users
> 1. Visit the [Donloads page](https://git-scm.com/downloads) of the Git project website
> 2. Download the appropiate OS Standalone Installer (64 or 32-bit version)
> 3. Run the installation wizzard, we'll use the default options unless you require otherwise

**Please note** that for this course we won't use the default Windows command line or PowerShell, every time we'll use terminal we will use the Git command line, this way we'll make sure that we can use linux commands on Windows, that otherwise won't be available to us.

:tada: Now that Git is installed le's move to the next step

### 3. Node.js
Once we advance on the content of this course, we'll require Node to be installed on our local machines. We'll require node to create React applications, use it for CSS preprocessors, and to Run Javascript Based Servers.

To get Node up and running we'll use NVM (Node Version Manager)m this will allow us to have multiple versions of Node in our machines, and be able to switch between them easily.

#### For Mac Users

#### For Windows users

### 4. SHH Key pair

# Week 1 - Lesson 2
## HTML basics

### Regular tags

### Self closing tags

### Attributes

### Document Head

### Document Body

### Common Body tags