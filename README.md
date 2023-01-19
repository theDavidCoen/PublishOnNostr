# PublishOnNostr
## A simple Chrome Extension to publish an image on your Nostr client with just one click. ##

This extension gives you a new item in the context-menu you have when you right click on an image. This new item is called "Public on Nostr".

It simply copies the img URL, opens the default Nostr client you specified in the Settings, pastes the URL in the text-area, and submit.
All in one step, a simple click on the context-menu item.

*Attention: the extension is still not working. It gives you the new "Publish on Nostr" item and currently opens https://snort.social/, but it does NOT paste the URL and so it does NOT publish yet.
<br>I used Manifest 2, but it seems that for scripting permissions we need Manifest 3, so the code must be rewritten with Manifest 3.*

## Features
- [x] Item in context-menu
- [x] Copy img URL
- [x] Icons added
- [x] Open https://snort.social/
- [x] settings.html created
- [ ] Rewrite for Manifest 3
- [ ] Must have scripting and storage permissions
- [ ] Save custom URL (Nostr webclient) 
- [ ] Show current URL (Nostr webclient)
- [ ] Show feedback messages when saving or resetting the settings

This extension has been created with the help of ChatGPT by OpenAI.
