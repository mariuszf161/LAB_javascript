const clapSound = document.querySelector('#clap')
        const channel1 = []
        document.body.addEventListener('keypress', playAudio)

        function playAudio(e) {
            switch (e.code) {
                case 'KayA':
                clapSound.currentTime = 0
                clapSound.play()
                const time = Date.now()
                channel1.push({
                    code: e.code,
                    time: time
                })
                break
            }
            
        } 