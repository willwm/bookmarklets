// References:
// https://www.learnwithjason.dev/blog/get-form-values-as-json
// https://developer.mozilla.org/en-US/docs/Web/API/FormData

// FormData to console.table:
javascript:(() => { 
    const form = document.querySelector('form');
    const data = new FormData(form);
    const formObj = Object.fromEntries(data.entries());
    console.table(formObj);
})();