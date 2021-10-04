// Prompt user for new document.title value (default to selection or existing document.title)
javascript: (() => { document.title = prompt("document.title?", `${document.getSelection()}` || document.title) || document.title; })();

// Set document.title to selection or textContent of first H1 tag
javascript: (() => { document.title = `${document.getSelection()}` || document.querySelector('h1').textContent; })();