const imgbox = document.getElementById("imgbox");
const QR_image = document.getElementById("QR_image");
const qr_input = document.getElementById("qr_input");

const generateQR = () => {
  if (qr_input.value.length > 0) {
    QR_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_input.value}`;
    imgbox.classList.add("show-img");
  }else{
    qr_input.classList.add("error")
    setTimeout(() => {
        qr_input.classList.remove("error")
    },1000)
  }
};
