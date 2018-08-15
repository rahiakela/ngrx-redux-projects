import {Observable} from 'rxjs';

const observable = Observable.create((observer:any) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');
});

observable.subscribe(
    (x: any) => logItem(x),
    (error: any) => logItem('Error:' + error),
    () => logItem('Completed')
);

function logItem(val: any) {
   let node = document.createElement("li");
   let textNode = document.createTextNode(val);
   node.appendChild(textNode);
   document.getElementById("list").appendChild(node);
}