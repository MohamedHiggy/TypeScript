import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    render(item: HasFormatter, heading: string, position: 'start' | 'end') {
        //createElement
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        //append Element in li
        h4.innerText = heading;
        li.append(h4);

        p.innerText = item.format();
        li.append(p);
        
        if (position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}