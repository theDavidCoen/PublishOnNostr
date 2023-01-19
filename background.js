chrome.storage.local.get('nostr-webclient-url', function (result) {
var url = result['nostr-webclient-url'] || 'https://snort.social/';
});
chrome.contextMenus.create({
  title: "Publish on Nostr",
  contexts: ["image"],
  onclick: function(info) {
    // Step 1: Copy the URL of the img in the current web page
    navigator.clipboard.writeText(info.srcUrl);

    // Step 2: Get the URL from chrome storage
    chrome.storage.local.get(['nostr-webclient-url'], function(result) {
        var url = result['nostr-webclient-url'] || 'https://snort.social/';
        // Step 3: Go to the URL retrieved from chrome storage or the default one
        chrome.tabs.create({ url: url });

        // Step 4: Paste the URL from point 1 into <textarea class="textarea" placeholder="Say something!"></textarea>
        chrome.tabs.executeScript({
            code: "document.querySelector('textarea.textarea').value = navigator.clipboard.readText();"
        });

        // Step 5: Tap Send
        chrome.tabs.executeScript({
            code: "document.querySelector('input[type=submit]').click();"
        });
    });
  }
});
