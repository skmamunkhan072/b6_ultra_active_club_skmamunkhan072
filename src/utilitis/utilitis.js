
const localStValue  = localStorage.getItem('Exercise_Seconds')
const SetLocalStorage = (total) =>{
    localStorage.setItem('Exercise_Seconds',JSON.stringify(total))
}

export { SetLocalStorage };
