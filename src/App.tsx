import Header from "./features/header/Header.tsx";
import background from './assets/background.png'
import planet from './assets/planet.png'
import Section from "./features/section/Section.tsx";

function App() {
    return (
        <div className={'min-h-screen bg-no-repeat bg-top relative'}>
            <img className={'absolute inset-0 h-full object-top object-cover -z-20'} src={background} alt={'planetary'}/>
            <div className={'absolute inset-0 w-full'}>
                <div className={'z-10 w-full bg-black/20 border-b border-b-slate-700'}>
                    <Header/>
                </div>
                <main className={'max-w-[1170px] mx-auto'}>
                    <Section/>
                </main>
            </div>
            <Planet/>
        </div>
    )
}

// const Connection = () => {
//     const {button, planet} = useLine();
//     return (
//         <svg className={'absolute inset-0 w-full'}>
//             {
//                 planet !== null && button !== null ? (
//                     <path x1={button.x} y1={button.y} x2={planet.x} y2={planet.y}/>
//                 ) : null
//             }
//         </svg>
//     )
// }

const Planet = () => {
    return (
        <img
            // ref={cb}
            className={'absolute inset-0 h-full object-top object-cover z-0'} src={planet} alt={'planetary'}/>
    )
}

export default App
