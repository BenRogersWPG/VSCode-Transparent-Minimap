# Changelog

## \[3.0.8] (2022-12-18)
### Documentation
* Updated extension badges for the Microsoft Visual Studio Marketplace
* Rewrote some of the features of the extension on the main Readme

### House Keeping
* Updated a few dependencies

## \[3.0.7] (2022-12-15)
### Documentation
* Updated extension to have a dark theme header on the Microsoft Visual Studio Marketplace

### House Keeping
* Updated a few dependencies

### Code Cleanup
* Ported to new vsce library
* Rebuilt package-lock.json

## \[3.0.6] (2022-12-08)
### House Keeping
* Updated a few dependencies
* Tested on VS Code 1.74

### Documentation
* Rewrote some content on the Readme to differ from my other extension, as I was using the same content for a bit of it

## \[3.0.5] (2022-12-01)
### House Keeping
* Updated a few dependencies

### Code Cleanup
* Made minor code formatting updates

## \[3.0.4] (2022-11-17)
### Documentation
* Updated AVIF animation on the walkthrough to reflect the new features brought by release `3.0.0`. Now that we can remove the shadow border of the minimap sidebar, it is now reflected in the walkthrough for new users
* Improved changelog heading formatting to be more consistent

### House Keeping
* Updated a few dependencies

## \[3.0.3] (2022-11-13)
### Bug Fixes
* Improved the code that removes the transparent minimap. On some occurrences, the minimap needed to be refreshed twice for it to remove.

## \[3.0.2] (2022-11-12)
### Documentation
* Refined security policy for the project
* Updated a couple creative project source files
* Improved color descriptions for minimap settings to better reflect naming standards

## \[3.0.1] (2022-11-10)
### Documentation
* Updated GIF on project Readme to reflect the new features brought by release `3.0.0`. Now that we can remove the shadow border of the minimap sidebar, it is now reflected in the Readme. *I will update the GIF in the walkthrough in the future as well*
* Moved some items around in the completed to-do section of the Readme for better sorting.

### House Keeping
* Updated a few dependencies

## \[3.0.0] (2022-11-08)
### Features
* The minimap border can now also be made transparent. *Please note, this feature is still experimental, so if you experience any issues, feel free to [submit a bug](https://github.com/BenRogersWPG/VSCode-Transparent-Minimap/issues)*.

### Documentation
* Added more ideas for future development to the Readme

## \[2.1.2] (2022-11-08)
### House Keeping
* Updated a few dependencies
* Tested on VS Code 1.73

### Documentation
* Added more ideas for future development to the Readme

## \[2.1.1] (2022-10-19)
### Documentation
* Reduced size of minimap color animation
* Optimized the alt tags for the images included in the project

### Code Cleanup
* Improved creative source files for the project

### House Keeping
* Updated a few dependencies

## \[2.1.0] (2022-10-18)
### Features
* Disabling the minimap transparency by setting the `TransparentMinimap.enableTransparentMinimap` user setting to false will now display a button in the information message, allowing you to re-enable the transparency easily through one click

### Documentation
* Tested and updated requirements to earliest supported version of VS Code
* Improved settings with example values to help new users
* Replaced GIF animation for the minimap color to match that in the walkthrough
* Removed experimental clause on the `TransparentMinimap.enableTransparentMinimap` setting

### Code Cleanup
* Improved logical flow of source code

### House Keeping
* Updated a few dependencies

## \[2.0.0] (2022-10-16)
### Features
* You can now disable the minimap transparency in the extension settings by unchecking the setting `TransparentMinimap.enableTransparentMinimap`. *Please note, this feature is still experimental, so if you experience any issues, feel free to [submit a bug](https://github.com/BenRogersWPG/VSCode-Transparent-Minimap/issues)*.

### Documentation
* Updated Changelog to properly escape title headings in the markdown
* Added GIFs back to the Readme for better SEO and universality
* Rewrote some descriptions in the extension settings

### House Keeping
* Updated a few dependencies

## \[1.0.1] (2022-10-09)
### Documentation
* Built new logo for project
* Added social preview image to repository
* *Both new logos created from code using randomly sized divs with random colors. Let me know if you want to see the code, I can always link it here.*

### House Keeping
* Tested extension on Linux with no issues

## \[1.0.0] (2022-10-08)
### Features
* Added code to detect if minimap is disabled and will prompt to enable minimap

### Documentation
* Made minor code formatting updates
* Updated documentation for the new keyboard shortcut that refreshes minimap to uppercase <kbd>Alt</kbd>+<kbd>M</kbd>
* Improved the alt tags for the images included in the project. This is to assist accessibility and contextually describe the images better
* Added more ideas for future development to the Readme
* Built a [discussion board for the extension on GitHub](https://github.com/BenRogersWPG/VSCode-Transparent-Minimap/discussions)

### Code Cleanup
* Improved some comments in the source code

### House Keeping
* Tested on VS Code 1.72
* Tested using minimap on left, added results to Readme
* Updated a few dependencies

## \[0.2.0] (2022-10-06)
### Features
* Added keyboard shortcut to refresh minimap transparency (or color) anytime using the keybinding of <kbd>Alt</kbd>+<kbd>M</kbd>

### Code Cleanup
* Greatly reduced extension package size by converting the GIF animations to AVIFS

### Documentation
* Streamlined the extension description and features section of the Readme
* Added keyboard shortcut to walkthrough
* Rewrote extension short description
* Added more ideas for future development to the Readme
* Added a dev reference to my other VS Code extension

### House Keeping
* Updated a few dependencies

## \[0.1.0] (2022-10-04)
### Features
* Extension can now update minimap transparency instantly without needing to reset VS Code. Just run the command `Refresh Minimap Transparency Settings` from the Command Palette.

### Documentation
* Improved GIF animation to show how extension can change your minimap color to suit your theme
* Enhanced the descriptions of the extension's settings

### Code Cleanup
* Testing WebP image formats for the project's transparency animation
* Testing AVIF image formats for the project's color animation
* Made minor code formatting updates

### House Keeping
* Updated a few dependencies

## \[0.0.3] (2022-10-01)
### Documentation
* Added more content to the extension's features on the main Readme page
* Rewrote the extension's main description
* Added 'opacity' to the readme
* Updated project badge

### Bug Fixes
* Updated walkthrough action button label for minimap color

## \[0.0.2] (2022-09-30)
### Code Cleanup
* Excluded unused images from project builds
* Added some comments to main sections of the code

### Documentation
* Improved extension description
* Added more ideas for future development to the Readme

### House Keeping
* Rewrote the extension's features on the main Readme page

### Bug Fixes
* Updated walkthrough action button for minimap color to go to proper settings

## \[0.0.1] (2022-09-30)
Initial release to VSCode marketplace