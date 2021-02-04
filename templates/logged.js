const logged = () => {  
    const script = document.createElement("script");
    script.setAttribute("type", "text/html");
    script.setAttribute("id", "success");
    script.innerHTML=  
        `<div id="mainContainer">
            <div id="secodnContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#37A323" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg><br>
                <h1>LOGIN SUCCESSFUL</h1>
                <p>You have successfully signed into your account.</p>
            </div>
        </div>`;
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
};
export default logged();