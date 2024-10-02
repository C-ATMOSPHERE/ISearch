# ISearch Extension

**ISearch** is a customizable extension that enhances the search experience by allowing users to quickly search through various search engines using predefined prefixes. Users can easily find content across different platforms, making their online browsing more efficient and streamlined.

## Features

- **Quick Search**: Perform searches on various sites using customizable prefixes.
- **Multiple Search Engines**: Integrates with popular search engines like Google, Wikipedia, AnimeVost, and UnknownCheats.
- **Easy to Use**: Simple interface that allows for seamless searching with just a few keystrokes.
- **User-Friendly Interface**: Simple and intuitive UI for easy navigation and searching.
- **Quick Access**: Perform searches directly from the extension without navigating to each search engine manually.

## How to Use

1. Install the ISearch extension in your browser.
2. Use the predefined prefixes to search on different platforms. For example:
- `!g query`    for `Google searches`.
- `!git query`  for `GitHub searches`.
- `!w query`    for `Wikipedia searches`.
- `!uc query`   for `UnknownCheats searches`.
- `!ag query`   for `AnimeGo searches`.
- `!av query`   for `AnimeVost searches`.
- `!ya query`   for `YummyAnime searches`.
- `!yt query`   for `YouTube searches`.

## Installation

Follow these steps to install ISearch:

1. Clone the repository:
   ```bash
   git clone https://github.com/C-ATMOSPHERE/ISearch.git
   ```
2. Load the extension in your browser:
   - For Chrome: Go to `chrome://extensions/`, enable "Developer mode", and load the unpacked extension.
   - For Firefox: Go to `about:debugging`, click on "This Firefox", and load the temporary add-on.
3. The ISearch extension should now appear in your Chrome / Firefox toolbar.

## Search Engine Configuration

Add additional search engines by modifying the `SEARCH_ENGINES` object in the extension's JavaScript file. Each search engine should be defined in the following format:

```javascript
SEARCH_ENGINES: {
    engineName: {
        name: 'Display Name',
        url: query => `https://example.com/search?q=${encodeURIComponent(query)}`,
        prefix: 'code'
    },
    // Add more engines as needed
}
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## License

This project is licensed under the FUCK License - see the [LICENSE](LICENSE.txt) file for details.

## Acknowledgements

- Inspired by the need for quick access to search engines.

- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [JavaScript Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
