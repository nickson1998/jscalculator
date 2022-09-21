function MyCalculator(){
    
 return {
    display:document.querySelector('.display'),
    
    start(){
       this.btnCatch();
       this.enterDoMath();
    },
        
        enterDoMath(){
        this.display.addEventListener('keypress', e =>{
            if(e.keyCode === 13){
                this.doMath()
            }
        }) 

        },

        btnCatch(){
        document.addEventListener('click', e =>{
            const el = e.target;

        if(el.classList.contains('btn-num')) {
           this.btnToDisplay(el.innerText)
            }
        if(el.classList.contains('btn-clear')) {
                this.clearDisplay()
                 }
        if(el.classList.contains('btn-del')) {
                this.deleteNumber()
                     }   
        if(el.classList.contains('btn-math')) {
                        this.doMath()
                    } 
        this.display.focus(); 
                    
        });

        },
        
        doMath(){
            let math = this.display.value
            try {
                    math = eval(math)
                    if(!math){
                        alert('Invalid Math Parameters');
                        return this.clearDisplay();
                        
                    }
                    this.display.value =String(math);
            }
            catch(e){
                alert('Invalid Math Parameters');
                return this.clearDisplay();
            }
        },

        deleteNumber(){
            this.display.value = this.display.value.slice(0,-1)
        },

        clearDisplay(){
            this.display.value=''
        },

        btnToDisplay(valueEl){
            this.display.value += valueEl
        }
}

};

const calculator = MyCalculator();

calculator.start();