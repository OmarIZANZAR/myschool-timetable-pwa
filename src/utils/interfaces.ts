export interface ElementInterface {
    name: string,
    prof: string,
    starting_week: number,
    final_week: number,
    day: number,
    time_start: number,
    time_end: number,
    class_type: number
}

export interface StateInterface {
    current_week: number,
    days_plans: ElementInterface[][],

    current_week_start?: string,
    current_week_end?: string,
    today?: string,
}

export interface ActionInterface {
    type: string,
    payload?: any 
}
