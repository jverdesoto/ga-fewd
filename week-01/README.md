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
>> ```shell
>> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
>> ```
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
##### 1. Install NVM using Homebrew
> 1. In a terminal window, first let's make sure we're on our home directory by typing `cd ~`
> 2. Paste the following command:
>> `brew install nvm`
> 3. Once installed, we need to teach our teminal the `nvm` command
>> Edit the .zshrc file by using `sudo nano .zshrc`
>> at the end of the file paste the following commands:
>>> ```shell
>>> export NVM_DIR="$HOME/.nvm"`
>>> [ -s "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" ] && \. "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" 
>>> [ -s "$HOMEBREW_PREFIX/opt/nvm/etc/bash_completion.d/nvm" ] && \. "$HOMEBREW_PREFIX/opt/nvm/etc/bash_completion.d/nvm"
>>> ```
> 4. We'll need to restart our terminal, type `exit` close the window and reopen a terminal window.
> 5. Test that NVM was installed correctly by typong `nvm -v` the output should be the version number.

##### 2. Install Node using NVM
It's alwas recommended to use LTS (**L**ong **T**erm **S**upport) versions for our projects, to view all available releases visit the [Nodejs official website](https://nodejs.org/en/download/releases).

For this excercise we'll use the *Hydrogen* and *Gallium* versions. To install them, in your terminal window type the following commands:
> `nvm install 18.17.0` this will install the *Hydrogen* version.

Repeat the commend to install *Gallium*
> `nvm install 16.20.1`

We'll set the default version to 18.17.0, to do this type the following command:
> `nvm alias default 18.17.0`

We can switch versions with the following command:
> `nvm use [version number]`
> Change *[version number]* for the version number you want to use ***eg:*** `nvm use 16.20.1`

Test that node is installed by using:
> `node -v` the output should be a version number

#### For Windows users
The process to install Node/NVM in Windows is slightly different than Mac, we'll first install Node on our machine:
> 1. Visit [Nodejs homepage](https://nodejs.org/en)
> 2. The website will automatically detect your OS, click on the **LTS** download option
> 3. Once downloaded, run the installer, and follow the wizard instructions.
> 4. Run Git Bash as Administrator
> 5. Test that node is installed by using:
>> `node -v` the output should be a version number

Now let's install NVM to manage our versions
> 1. Visit the [NVM for windows Github repo](https://github.com/coreybutler/nvm-windows)
> 2. Click on the *Download Now!* button
> 3. Once downloaded, run the installer, and follow the wizard instructions.
> 4. Run Git Bash as Administrator
> 5. Test that node is installed by using:
>> `nvm -v` the output should be a version number

For this excercise we'll use the *Hydrogen* and *Gallium* versions. To install them, in your terminal window type the following commands:
> `nvm install 18.17.0` this will install the *Hydrogen* version.

Repeat the commend to install *Gallium*
> `nvm install 16.20.1`

We'll set the default version to 18.17.0, to do this type the following command:
> `nvm alias default 18.17.0`

We can switch versions with the following command:
> `nvm use [version number]`
> Change *[version number]* for the version number you want to use ***eg:*** `nvm use 16.20.1`

### 4. SHH Key pair & Github

First we need an account in [Github](https://github.com/). If you don't already have one, please create it. You can use SSO

Now in a Terminal window we'll create an ssh key-pair
> `ssh key-gen`

You'll be promted to write a file name. **Please leave it blank to use the default setting** by hitting *Return*

Next you will be promted to write a passphrase, you can leave it empty or write a password that you'll remember. Bear in mind that in a terminal window, passwords do not move your cursor.
You'll be asked to re-enter the passphrase

Once the key-pair is created you'll be shown a success message.

Let's navigate to our ssh folder in our Terminal:
#### Mac Users
> `cd /Users/yourUserName/.ssh`

#### Windows Users
> `cd /c/Users/yourUserName/.ssh`

Now let's open the folder up using VSCode
> `code .`

This command will open VSCode in the .ssh folder
> 1. Look for the ***id-rsa.pub*** file
> 2. Copy the contents of the file
> 3. Go to Github, hover over your profile picture and click on **Settings**
> 4. Find **SSH and GPG keys** in the right hand side menu
> 5. Click on **New SSH key**
> 6. Add a title, and paste the copied code in the *Key* box
> 7. Save and we're good to go!

# Week 1 - Lesson 2
## HTML basics

### Regular tags

### Self closing tags

### Attributes

### Document Head

### Document Body

### Common Body tags

### Basic file structure
