function funcionalidade(num) {
    const play = document.querySelector(".display").value
    
    document.querySelector(".display").value = play + num

    }

    function limpa () {
      document.querySelector(".display").value = ""
    }


    function calculos() {
        const play = document.querySelector(".display").value
        document.querySelector(".display").value = eval(play)
    }

    function inverso() {
        const play = document.querySelector(".display").value

        document.querySelector(".display").value = play * -1
    }
