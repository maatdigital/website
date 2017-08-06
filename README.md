# Website for MAAT.digital

This repository manages the source code of the MAAT.digital website and it also
handles continuous integration with automated builds and deployments.

## Installation

While there are Ruby packages available for Linux, it's often necessary to
install a different version. In this case `rbenv` or `rvm` are popular tools to
manage multiple versions of Ruby.

See notes on [Installation on Windows](#windows), then return back to here.

The following describes the use of `rbenv`:

```
# Install dependencies as root
sudo apt install -y git build-essential libssl-dev libreadline-dev zlib1g-dev

# For Ubuntu Bash users you need additionally
sudo apt install nodejs

# Install rbenv
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

# Install ruby-build
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# Install latest Ruby and set it as global
rbenv install -l | more
rbenv install 2.4.1
rbenv global 2.4.1

# Install bundler as we always need it
gem install bundler
```

After the development environment is setup, install
[Middleman](https://middlemanapp.com):

```
gem install middleman
```

Then change into the project directory and install dependencies:

```
bundle install
```

### <a name="windows"></a> Installation on Windows

One nice way to use Windows for development is the new support for Ubuntu in
Windows 10. Follow these instructions to set it up:
https://msdn.microsoft.com/en-us/commandline/wsl/about

Installation may take a while. Also install [Visual
Code](https://code.visualstudio.com/.

When installation is completed a few additional steps might be required.

#### SSH Key

Create an SSH key or use an existing SSH key, which must be available in
`/home/<user>/.ssh`. If the keys directory is in your Windows home directory,
for example in directory `SSH`, it's enough to create a symbolic link:

```
ln -s /mnt/c/Users/<User>/SSH ~/.ssh
```

#### Bash as default terminal in Visual Code

Modify User Settings in VS Code (`File => Preferences => User Settings`) and add
the following within the `settings.json` pane:

```
{
  // some other settings may be there already
  "terminal.integrated.shell.windows": "C:\\Windows\\sysnative\\bash.exe"
}
```

Enable the terminal with `Ctrl+Shift+@` and use it as in Ubuntu.

## Usage

For development, change into the project directory and run:

```
middleman server
```

Then check the website in your browser: http://localhost:4567 It will refresh
the website automatically, when changes are made and saved.

To build the static files run:

```
middleman build
```

The generated files can be found in the `build` directory.
