
    function sim() {
        alert("ebaaaaa eu tmb te amo meu amorr :D")
    }
    function desvia(t) {
        var btn = t;
        btn.style.position = 'absolute';
        btn.style.top = geraPosicao(10,90);
        btn.style.left = geraPosicao(10,90);
        console.log("oléee");
    }

    function geraPosicao(min, max){
        return (Math.random()*(max-min)+min)+"%";
    }
