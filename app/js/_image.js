const imageUrl = "http://rekrutacjartb.pl/developer/images/logo_rtb.png";
const imageDiv = document.getElementsByClassName("logo_container");

[...imageDiv].forEach(e => {
  e.innerHTML = `
  <a href="https://www.rtbhouse.com/" title="RTB House | Technology Powered by Deep Learning" target="_blank">
    <img src="${imageUrl}" class="${imageUrl.split("/").pop().split(".").shift()}" alt="${imageUrl.split("/").pop()}" width="408" height="47"/>
  </a>
  `;
});