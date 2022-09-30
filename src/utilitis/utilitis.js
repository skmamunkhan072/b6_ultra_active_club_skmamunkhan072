
const localStValue  = localStorage.getItem('Brack_Seconds')
const SetLocalStorage = (total,brackText) =>{
    localStorage.setItem('Brack_Seconds',JSON.stringify(total))
}

export { SetLocalStorage };
