# NetCracker Utils Extension

## Description

The **NetCracker Utils Extension** is a browser extension that allows you to retrieve the NC Attribute ID from a NetCracker UI.

## Installation

### Clone the Repository

1. **Clone the Repository**:
   - Use the following command to clone the repository containing the extension files:
     ```bash
     git clone <repository-url>
     ```
   - Replace `<repository-url>` with the URL of the repository.

2. **Navigate to the Extension Folder**:
   - Change into the directory containing the extension files:
     ```bash
     cd <repository-folder>
     ```
   - Replace `<repository-folder>` with the folder name where the extension files are located.

### Google Chrome

1. **Open the Extensions Page**:
   - Open Google Chrome and go to `chrome://extensions/`.

2. **Enable Developer Mode**:
   - Turn on "Developer mode" by toggling the switch in the top right corner.

3. **Load the Unpacked Extension**:
   - Click on "Load unpacked".
   - Select the folder containing the extension files from the cloned repository.

4. **Verify Installation**:
   - The extension should now appear in the list of installed extensions. You can test its functionality by right-clicking on a page with a title containing "NetCracker" and selecting "Get NC AttrId" from the context menu.

### Mozilla Firefox

1. **Open the Add-ons Page**:
   - Open Mozilla Firefox and go to `about:debugging`.

2. **Load the Unpacked Extension**:
   - Click on "This Firefox" in the sidebar.
   - Click on "Load Temporary Add-on".
   - Select any file in the folder containing the extension files (e.g., `manifest.json`). Firefox will automatically load the entire folder.

3. **Verify Installation**:
   - The extension should now appear in the list of installed extensions. You can test its functionality by right-clicking on a page with a title containing "NetCracker" and selecting "Get NC AttrId" from the context menu.

## Usage

- **Google Chrome**: Right-click on an attribute row within Netcracker UI and select "Get NC AttrId" from the context menu.
- **Mozilla Firefox**: Right-click on an attribute row within Netcracker UI and select "Get NC AttrId" from the context menu.
