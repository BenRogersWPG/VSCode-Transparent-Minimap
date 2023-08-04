# Changelog
## \[3.2.9] (2023-08-03)
### House Keeping
* Tested on VS Code 1.81 🧪
* Updated a few dependencies

## \[3.2.8] (2023-07-20)
### Documentation
* Added extension badge for rating (⭐⭐⭐⭐⭐) as the extension received its first review on Microsoft Visual Studio Marketplace. 😊*Huge thanks!*😊 (Issue [#279](https://github.com/BenRogersWPG/VSCode-Transparent-Minimap/issues/279))

### House Keeping
* Updated a few dependencies

## \[3.2.7] (2023-07-09)
### House Keeping
* Tested on VS Code 1.80 🧪
* Updated a few dependencies

## \[3.2.6] (2023-06-11)
### House Keeping
* Tested on VS Code 1.79 🧪
* Updated a few dependencies

## \[3.2.5] (2023-05-04)
### House Keeping
* Tested on VS Code 1.78 🧪
* Updated a few dependencies

## \[3.2.4] (2023-04-16)
### House Keeping
* Updated a few dependencies

## \[3.2.3] (2023-04-02)
### House Keeping
* Tested on VS Code 1.77 🧪
* Updated a few dependencies

## \[3.2.2] (2023-03-16)
### Features
* Wrote more unit tests to validate the extension

### House Keeping
* Completed review and audit of when clauses in package.json as upcoming changes were noted in VS Code v1.76
* Updated a few dependencies

## \[3.2.1] (2023-03-11)
### Features
* Wrote more unit tests for the extension functionality to validate extension

### Code Cleanup
* Performed more refactoring to the source code

### House Keeping
* Updated a few dependencies

## \[3.2.0] (2023-03-05)
### Features
* Wrote many unit tests for the extension functionality to validate extension 🧪

### Code Cleanup
* Added more ideas for future development to the Readme 💡
* Cleaned up some new rules in project's launch.json 🧹
* Added a few to-dos to the source code for future development

### House Keeping
* Updated a few dependencies

## \[3.1.5] (2023-03-02)
### Features
* Fixed unit test system. Can now start writing unit tests for the extension
* I hope to code more tests in the near future

### House Keeping
* Tested on VS Code 1.76 🧪
* Updated a few dependencies
* Updated oldest VS Code version support to 1.67.2 and above

## \[3.1.4] (2023-02-26)
### Code Cleanup
* Performed major refactoring to the source code, combining a few methods and general logic improvements
* Cleaned up some of the source code

### House Keeping
* Updated a few dependencies

## \[3.1.3] (2023-02-23)
### Bug Fixes
* Fixed a boolean value in the package.json that was defaulted to a string

### House Keeping
* Updated a few dependencies

## \[3.1.2] (2023-02-21)
### Code Cleanup
* Performed some refactoring to the source code
* Cleaned up some of the source code

### Documentation
* Reduced lines used in docstring entries

### House Keeping
* Updated a few dependencies

## \[3.1.1] (2023-02-19)
### Features
* Added logic to warn users if they manually set minimap color, but leave transparency level to fully transparent. If this occurs, the color will never apply.
* New button will invite user to update the transparency level so they can see their nice custom color.

### Code Cleanup
* Performed some refactoring to the source code
* Added a few to-dos to the source code for future development
* Made minor code formatting updates
* Rearranged some of the `devDependencies`

### Documentation
* Wrote docstring entries for all extension functions
* Added more ideas for future development to the Readme

## \[3.1.0] (2023-02-19)
### House Keeping
* Updated a few dependencies
* Started project to track work on future features. Feel free to follow along on [GitHub Projects](https://github.com/users/BenRogersWPG/projects/2/views/1)

## \[3.0.9] (2023-02-04)
### Features
* Organized all extension settings into subcategories for easier organization

### Documentation
* Added more ideas for future development to the Readme

### House Keeping
* Tested on VS Code 1.75
* Updated a few dependencies

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