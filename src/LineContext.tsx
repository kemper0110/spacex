import React, {ReactNode, useContext, useState} from "react";

type Position = {
    x: number
    y: number
}

type State = {
    planet: Position | null
    button: Position | null
}
type Actions = {
    setPlanet: (pos: Position | null) => void;
    setButton: (pos: Position | null) => void;
}

const LineContext = React.createContext<State & Actions | null>(null);

export const useLine = () => {
    const ctx = useContext(LineContext)
    if(ctx === null)
        throw new Error("Line context required")
    return ctx
}

export const LineContextProvider = ({children}: { children: ReactNode | ReactNode[] }) => {
    const [state, setState] = useState<State>({
        planet: null,
        button: null
    })
    const setPlanet = (pos: Position | null) => setState({...state, planet: pos})
    const setButton = (pos: Position | null) => setState({...state, button: pos})

    return (
        <LineContext.Provider value={{
            ...state, setPlanet, setButton
        }}>
            {children}
        </LineContext.Provider>
    )
}