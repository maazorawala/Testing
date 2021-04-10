window.onscroll = () => {
    const nav = document.querySelector("#navbar");
    if (this.scrollY <= 10) nav.className = ''; else nav.className="scroll";
};
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility="hidden";
        document.querySelector("#loader").style.visibility="visible";
        document.querySelector(".load-text").style.visibility="visible";
    }
    else {
        document.querySelector("#loader").style.display="none";
        document.querySelector("body").style.visibility="visible";
        document.querySelector(".load-text").style.display="none";
    }
}