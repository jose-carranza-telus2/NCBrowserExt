chrome.contextMenus.create({
    id: "get-nc-objectid",
    title: "Get NC AttrId",
    contexts: ["all"],
    visible: true
  }, () => {
    if (chrome.runtime.lastError) {
      console.error(`Error creating menu: ${chrome.runtime.lastError}`);
    } else {
      console.log("Context menu item created successfully.");
    }
  });
  
  chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === "update-contextmenu" && message.showItem) {
      console.log("Showing context menu item");
      chrome.contextMenus.update("get-nc-objectid", { visible: true });
    } else {
      console.log("Hiding context menu item");
      chrome.contextMenus.update("get-nc-objectid", { visible: false });
    }
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "get-nc-objectid") {
      console.log("Menu item clicked.");
      chrome.tabs.sendMessage(tab.id, { action: "get-id" });
    }
  });  