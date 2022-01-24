import data from '../demoData.json';
import { ElementInterface } from "./interfaces";

export function getDaysPlans ( current_week: number ) : ElementInterface[][] {
    let elements: ElementInterface[][] = [[],[],[],[],[]];

    data.elements
    .filter((el: any) => { 
        if(el.starting_week <= current_week && el.final_week >= current_week ) 
        return el; 
    })
    .forEach( (el: any) => {
        elements[el.day - 1].push(el)
    })

    return elements;
}

export function getWeeksStart () : string {
    return data.weeks_starting_count;
}