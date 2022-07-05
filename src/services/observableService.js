import { Observable } from "rxjs";

export const getNumbers = new Observable(suscriber => {
    //We emit values
    suscriber.next(1);
    suscriber.next(2);
    suscriber.next(3);
    setTimeout(()=>{
        suscriber.next(4);
        suscriber.complete();
    },1000)
})