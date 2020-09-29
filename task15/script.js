var show = document.querySelector('.countdown')
count = 10;

setTimeout(() => {
    show.innerHTML = count--
        setTimeout(() => {
            show.innerHTML = count--
                setTimeout(() => {
                    show.innerHTML = count--
                        setTimeout(() => {
                            show.innerHTML = count--
                                setTimeout(() => {
                                    show.innerHTML = count--
                                        setTimeout(() => {
                                            show.innerHTML = count--
                                                setTimeout(() => {
                                                    show.innerHTML = count--
                                                        setTimeout(() => {
                                                            show.innerHTML = count--
                                                                setTimeout(() => {
                                                                    show.innerHTML = count--
                                                                        setTimeout(() => {
                                                                            show.innerHTML = count--
                                                                                setTimeout(() => {
                                                                                    show.innerHTML = count--
                                                                                        setTimeout(() => {
                                                                                            show.className += ' wish'
                                                                                            show.innerHTML = "Happy Independence Day"
                                                                                        }, 1000);
                                                                                }, 1000);
                                                                        }, 1000);
                                                                }, 1000);
                                                        }, 1000);
                                                }, 1000);
                                        }, 1000);
                                }, 1000);

                        }, 1000);
                }, 1000);
        }, 1000);
}, 1000);