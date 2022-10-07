# Transparent Minimap

This extension makes your VS Code minimap transparent. You can adjust the level of transparency using the extension settings and even make your minimap a different color if you wish.

![Animation of the VS Code minimap fading as its transparency increases](images/Transparent-Minimap.avifs)

## Features ✨

- Turns your minimap transparent out-of-the-box
- Gives you more horizontal space when coding, as the code displays behind the minimap (*excellent for vertical monitors or smaller screens*)
- Adjust minimap transparency or minimap color
- Runs on Visual Studio Code for the Web (vscode.dev)
- Walkthrough to help you get started using the extension
- **NEW** Keyboard shortcut to refresh minimap settings <kbd>Alt</kbd> + <kbd>m</kbd>
- Lots of extension settings for your own customizations

## How To Use 👇

*This extension comes packaged with a walkthrough. Use it to learn how to use the extension. (run `Get Started: Open Walkthrough` from the Command Palette)*

## Extension Settings ⚙️

### `TransparentMinimap.transparencyLevel`

Transparency level / opacity of the minimap.
`00` is full transparent, `88` would be half-transparent and colored, `FF` would be no transparency and full color.
Remember to run the `Refresh Minimap Transparency Settings` command to apply the changes

### `TransparentMinimap.minimapColor`

Color of the minimap.
For example, `000000` is no color, `FF0000` would be fully red, `111111` would be faint grey

![Animation of the VS Code minimap changing colors](images/Transparent-Minimap-Color.avifs)

### `TransparentMinimap.enableTransparentMinimap`

Enable the extension to change the minimap to be transparent.
**Not currently implemented**
*Will be worked on in future versions.*

## Future Development Ideas and To-dos 📝

- Add some descriptions that *you need to select a somewhat opaque transparency in order to colorize (theme) your minimap*
- Allow user to quickly turn on/off minimap transparency using extension setting checkbox
- Examine performance analysis of code to find potential optimizations
- Warn user if minimap is disabled when first installing extension
- Test oldest supported version of VS Code for compatibility
- Switch keybinding in documentation to use uppercase <kbd>M</kbd>
- Create and add social preview image to GitHub project
- Improve project animations and add screenshots
- Translate the extension to other languages
- Test on different operating systems
- Make a better extension icon
- Write more tests

> ➕ Have a feature you'd like me to implement? [Submit a feature request on the Repo's Issues page](https://github.com/BenRogersWPG/VSCode-Transparent-Minimap/issues)!

## Completed To-dos ✔️

- ~~Consider removing extension walkthrough, as it works out-of-the-box~~
- ~~Consider adding a command to prevent need to restart VS Code~~
- ~~Add keyboard shortcut to refresh minimap setting changes~~
- ~~Convert images and GIFs to smaller size~~
- ~~Add GIFs to demo the extension usage~~

## Requirements 📦

- Visual Studio Code or Visual Studio Code for the Web running on any operating system

## Known Issues 🐛

- N/A

## Sponsor This Project ❤️

I spend a lot of time improving and maintaining this extension. If you'd like to sponsor this project, please visit [my GitHub Sponsor page](https://github.com/sponsors/BenRogersWPG/) to learn more.

*One of the perks of being a sponsor is that you will even show up on this very README page!*

## Release Notes 🆕

See [CHANGELOG](https://github.com/BenRogersWPG/VSCode-Transparent-Minimap/blob/master/CHANGELOG.md) file.