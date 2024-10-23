document.getElementById('EmailForm').addEventListener("submit", 
    function(event) {
        event.preventDefault();

        const to = document.getElementById("to").value;
        const subject = document.getElementById("subject").value;
        const body = document.getElementById("body").value;

        console.log(to);
        console.log(subject);
        console.log(body);

        const mailtolink = `mailto:${to}?subjuect=
        ${encodeURIComponent(subject)}
        &body=${encodeURIComponent(body)}
        `;

        window.location.href = mailtolink
    }
);