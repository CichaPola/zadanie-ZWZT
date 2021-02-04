const home = () => {  
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("type", "text/html");
    script.setAttribute("id", "home");
    script.innerHTML= 
        `
        <div id="main">
            <p id="signIn">SIGN IN</p>
            <form id="form">
                <input id="username" type="text" placeholder="username"/><br>
                <span id="errorMsg1"></span><td><br>
                <input id="password" placeholder="password"/><br>
                <span id="errorMsg2"></span></td><br>
                <button class="submit">SUBMIT</button>
            </form>
        <div>`;
    head.appendChild(script);
};
export default home();