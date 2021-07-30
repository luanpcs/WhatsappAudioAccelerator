const interval = setInterval(() => {
    const header = document.querySelector("._1G3Wr")
    if (header) {
        console.log(header)
        clearInterval(interval)
        
        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")

        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")
            for (const audio in audios)
                audio.playbackRate = 2
        })
        header.appendChild(button)
    }
}, 1000);
