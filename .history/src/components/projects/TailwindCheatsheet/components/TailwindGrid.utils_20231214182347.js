export const copyToClipboard = (text) {
    // Create a temporary textarea element to hold the text to be copied
    const textarea = document.createElement('textarea');
    textarea.value = text;
  
    // Append the textarea to the document
    document.body.appendChild(textarea);
  
    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the selected text to the clipboard
    document.execCommand('copy');
  
    // Remove the temporary textarea from the document
    document.body.removeChild(textarea);
  
    // Optionally, provide user feedback (e.g., tooltip or message)
    alert(`Copied: ${text}`);
  }