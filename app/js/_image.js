function getLogo(imageDiv){
  //Loop for every container for RTB Bouse logo on the page
  [...imageDiv].forEach(e => {
    //Insert img from url
    e.innerHTML = `
    <a href="https://www.rtbhouse.com/" title="RTB House | Technology Powered by Deep Learning" target="_blank">
    <img src="${imageUrl}" class="${imageUrl.split("/").pop().split(".").shift()}" alt="${imageUrl.split("/").pop()}" width="408" height="47"/>
    </a>
    `;
  });
}