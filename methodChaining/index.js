function factoryFunction(){
    this.amount=0;
       this.crore= function(amt) {
           this.amount+=amt*10000000
           return this
       }
       this.lacs= function(amt) {
           this.amount+=amt*100000
           return this
       }
       this.thousand= function(amt) {
           this.amount+=amt*1000
           return this
       }
       this.value= function() {
           console.log(this.amount)
           return this
       }
   }
   const computeAmount=()=>{
   return new factoryFunction()
   }
   
   computeAmount().crore(2).lacs(22).thousand(3).value().lacs(5).value()