// Delete top post from "Posts" admin page (https://wordpress.com/posts/<your-site-name>)
javascript: (() => { document.querySelector('button[title="Toggle menu"]').click(); document.querySelectorAll('button[role="menuitem"]')[2].click();})();