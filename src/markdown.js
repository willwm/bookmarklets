
// Create markdown link with selected text or document.title
javascript:(() => { const title = `${document.getSelection()}` || document.title, markdown = `[${title}](${location.href})`; void prompt(title, markdown); })();