const qrBtn = document.getElementById('qr-btn');
const qrText = document.getElementById('qr-text');
const qrCode = document.getElementById('qr-code');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const myqrCode = document.getElementById("qrCode");
const downloadBtn = document.getElementById("downloadBtn");
const fileType = document.getElementById("fileType");

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").classList.remove("hidden");
  } else {
    document.querySelector("header").classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
}


qrBtn.addEventListener('click', () => {
  // console.log("clicked");
  if (qrText.value === '') {
    alert('Please enter text to generate QR Code');
    return;
  }

  qrCode.innerHTML = '';
  new QRCode(qrCode, {
    text: qrText.value,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
});

// add event listener to download button
downloadBtn.addEventListener("click", function() {
  const canvas = qrCode.getElementsByTagName("canvas")[0];
  const dataURL = canvas.toDataURL(`image/${fileType.value}`);
  const fileName = `qr_code.${fileType.value}`;

  const a = document.createElement("a");
  a.href = dataURL;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();        
  a.remove();
});
