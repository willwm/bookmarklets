// document.cookie -> console.table
javascript:(console.table(Object.fromEntries((document.cookie || '').split('; ').map(c => c.split('=')))))