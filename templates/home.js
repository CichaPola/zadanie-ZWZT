const home = () => {  
    const script = document.createElement("script");
    script.setAttribute("type", "text/html");
    script.setAttribute("id", "home");
    script.innerHTML= 
        `<div id="main">
            <p id="signIn">SIGN IN</p>
            <div id="form">
                <input id="username" type="text" placeholder="username"/><br>
                <span id="errorMsg1"></span><td><br>
                <input id="password" placeholder="password"/><br>
                <span id="errorMsg2"></span></td><br>
                <button class="submit">SUBMIT</button>
            </div>
        <div>`;
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
};
export default home();