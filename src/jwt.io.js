// jwt.io: Open from document.cookie['access_token']
javascript:(() => { 
    const cookies = Object.fromEntries((document.cookie || '').split('; ').map(c => c.split('='))); 
    const token = cookies['access_token']; 
    if (token) { window.open(`https://jwt.io/#debugger-io?token=${token}`); }
    else { alert('No access_token found in document.cookies'); } 
})();

// jwt.io: Open from sessionStorage.accessToken
javascript:(() => { 
    const token = sessionStorage.accessToken;
    if (token) { window.open(`https://jwt.io/#debugger-io?token=${token}`); }
    else { alert('No data in sessionStorage.accessToken'); }
})();