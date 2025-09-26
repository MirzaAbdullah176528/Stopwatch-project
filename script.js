    let b1 = document.querySelector(".b1")
    let b2 = document.querySelector(".b2")
    let b3 = document.querySelector(".b3")

    let second = document.querySelector(".sec")
    let mint = document.querySelector(".mint")
    let a = document.querySelector(".mili")

    let value = 0
    let mValue = 0
    let mili = 0


    let secInterval = null;
    let miliInterval = null;

    function func1(){   

        if (secInterval || miliInterval) 
            return;


        secInterval = setInterval(() => {
            
            if (mili >= 10) {
                a.textContent = `0${mili}`
            } else {
                a.textContent = `00${mili}`
            }

            if (mili === 100) {
                mili = 0
                value = value + 1
                a.textContent = `100`
            }
            mili = mili + 1
            
            if (value >= 10) {
                second.textContent = `${value}`
            } else {
                second.textContent = `0${value}`
            }

            if (value === 60) {
                mValue = mValue + 1

            }

            if (mValue >= 10) {
                mint.textContent = `${mValue}:`
            } else {
                mint.textContent = `0${mValue}:`
            }

            if (mValue === 60) {
                mValue = 0
                mint.textContent = `00:`
            }

            if (value === 60) {
                value = 0
            }

            
        }, 10)
    };
    

    b1.addEventListener("click", func1)

    function func2(){
        clearInterval(secInterval)
        clearInterval(miliInterval)
        secInterval = null
        miliInterval = null
    }

    b2.addEventListener("click", func2)


    function func3(){
        func2()
        value = 0
        mValue = 0
        mili = 0
        second.textContent =`00`
        a.textContent = `00`
        mint.textContent = `00:`
    };

    b3.addEventListener("click",func3)


    addEventListener("keydown", (e) =>{
        if(e.code === "Space"){
            if(!secInterval && !miliInterval){
                func1()
                e.preventDefault()
            }
            else{
             func2() 
             e.preventDefault()
            }
        }
    });
    addEventListener('keydown', (e) =>{
        if(e.code === "Backspace"){
            func3()
            e.preventDefault()
        }
    })

