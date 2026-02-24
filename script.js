const form = document.getElementById("qaForm");
const status = document.getElementById("status");

form.addEventListener("submit", e => {
    e.preventDefault();

    const data = new FormData(form);

    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfW0VqG3nbcNrzN81xxdrFVRVVRBp3iR96nsk5bM2_0-S5uTw/formResponse", {
        method: "POST",
        body: data,
        mode: "no-cors"
    })
    .then(() => {
        status.innerText = "💙 Answers sent successfully!";
        form.reset();
    });
});