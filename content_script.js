console.log("Content script loaded and running!");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("from script");

  if (message.action === "get-id") {
    // Obtener el elemento de la fila <tr> donde se hizo clic
    let element = document.elementFromPoint(window.contextMenuX, window.contextMenuY);

    // Encontrar el elemento <tr> más cercano al punto del clic
    let rowElement = element.closest('tr');

    if (rowElement) {
      // Buscar el <td> con la clase 'InfoLine_Value' dentro de la fila
      let targetCell = rowElement.querySelector('td.InfoLine_Value');

      if (targetCell && targetCell.id.startsWith('vv_')) {
        let objectId = targetCell.id.substring(3); // Obtener el ID sin 'vv_'
        
        // Copiar el ID al portapapeles
        copyToClipboard(objectId);
      } else {
        showToast("No valid NC AttrId found.");
      }
    } else {
      showToast("No valid row found.");
    }
  }
});

document.addEventListener("contextmenu", (event) => {
  console.log("Right-click detected");
  window.contextMenuX = event.clientX;
  window.contextMenuY = event.clientY;

  let element = event.target;
  const pageTitle = document.title;


  if (true || element && element.tagName == "TD" && element.classList.contains('InfoLine_Value') && element.id.startsWith('vv_')) {//FIXME
    chrome.runtime.sendMessage({ action: "update-contextmenu", showItem: true });
  } else {
    chrome.runtime.sendMessage({ action: "update-contextmenu", showItem: false });
  }
});

function showToast(message) {
  let toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.backgroundColor = "black";
  toast.style.color = "white";
  toast.style.padding = "10px";
  toast.style.borderRadius = "5px";
  toast.style.zIndex = 10000;
  toast.style.fontSize = "14px";

  document.body.appendChild(toast);

  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
}

function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  showToast("NC AttrId copied: " + text);
}
