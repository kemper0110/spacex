export type Benefit = {
    id: number
    code: Code
}
export type Code = {
    lines: Line[]
}
export type Line = Element[]

export enum PropType {
    big = "big", small = "small", semibold = "semibold"
}

export type Element = {
    props: PropType[],
    content: string
}

export const test: Benefit = {
    id: NaN,
    code: {
        lines: [
            [{
                props: [PropType.small],
                content: "календарик за"
            }],
            [{
                props: [PropType.big, PropType.semibold],
                content: "2001"
            }, {
                props: [PropType.semibold, PropType.small],
                content: "г."
            }],
            [{
                props: [PropType.small],
                content: "в подарок"
            }]
        ]
    }
}
