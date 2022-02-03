# CyberPanel Dark Theme Plus

> A Dark Theme for [CyberPanel](https://cyberpanel.net/).

![screenshot](/screenshot.png)

## v1 checklist

This project is still being developed.

- [x] Add Less build system.
- [x] Repaint CyberPanel as white on black.
- [x] Add Plus features.
- [ ] Test all pages.
- [ ] Add some color.
- [ ] Publish!

## How to use

Copy the CSS from `css/theme.min.css` to the "Custom CSS" field on the "Design" page of your CyberPanel.

## What's the Plus

Besides repainting the UI to be white text on a black background I've also changed the following:

The page loader is removed. Without the loader the header and menu remain visible at all times, keeping you visually grounded, which let's you browse around faster.

The "NEW" tags on menu items are removed. You don't need to be reminded about the current version's new features every day. You don't magically get new features without updating manually. Whenever you update, go check out the changelog.

The menu icons wiggle is removed. `¯\_(ツ)_/¯`

The Raleway font has been replaced by Open Sans. Raleway is way too thin to be easily readable at this size.

Unnecessary lines/borders are removed. As [Refactoring UI](https://www.refactoringui.com/) commands it.

## Contributing

Found a bug? Anything you would like to ask, add or change? Please open an issue so we can talk about it.

Pull requests are welcome. Please try to match the current code formatting.

## Development

### Requirements

- [NodeJS](https://nodejs.org/en/)

### Installation

1. `pnpm i`

### Build CSS

Command | Action
:--- |:---
`pnpm gulp` | Build once
`pnpm gulp watch` | Build continuously

## Author

[Tim Brugman](https://github.com/Brugman)