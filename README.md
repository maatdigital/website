# Project Name

TODO: Write a project description

## Installation

While there are Ruby packages available for Linux, it's often necessary to
install a different version. In this case `rbenv` or `rvm` are popular tools
to manage multiple versions of Ruby.

The following describes the use of `rbenv`:

```
# Install dependencies as root
sudo apt install -y git build-essential libssl-dev libreadline-dev zlib1g-dev

# Install rbenv
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
source ~/.bash_profile

# Install ruby-build
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# Install latest Ruby and set it as global
rbenv install -l | more
rbenv install 2.4.1
rbenv global 2.4.1

# Install bundler as we always need it
gem install bundler
```

TODO: Describe the installation process

## Usage

TODO: Write usage instructions

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
