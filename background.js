chrome.contextMenus.create({
  title: "Publish on Nostr",
  contexts: ["image"],
  onclick: function(info) {
    // Step 1: Copy the URL of the img in the current web page
    navigator.clipboard.writeText(info.srcUrl);

    // Step 2: Go to https://snort.social/
    chrome.tabs.create({ url: "https://snort.social/" });

    // Step 3: Paste the URL from point 1 into <textarea class="textarea" placeholder="Say something!"></textarea>
    chrome.tabs.executeScript({
      code: "document.querySelector('textarea.textarea').value = navigator.clipboard.readText();"
    });

    // Step 4: Tap Send
    chrome.tabs.executeScript({
      code: "document.querySelector('input[type=submit]').click();"
    });
  }
});
