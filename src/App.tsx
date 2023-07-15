import Header from "./features/header/Header.tsx"
import Content from "./features/content/Content.tsx"
import background from './assets/background.png'
import planetFull from './assets/planetFull.png'
import {Title} from "./features/content/Title.tsx";

function App() {
    return (
        <>
            <div className={'min-h-screen bg-no-repeat bg-top relative'}>
                <img className={'absolute inset-0 h-full object-top object-cover -z-10'} src={background}
                     alt={'planetary'}/>
                <img className={'absolute inset-0 h-full object-top object-cover'} src={planetFull}
                     alt={'planet'}/>
                <div className={'absolute w-full bg-black/20 border-b border-b-slate-700'}>
                    <Header/>
                </div>
                <div className={'absolute inset-0 w-full lg:top-[232px] top-[100px] lg:-z-10'}>
                    <div className={'max-w-[1170px] mx-auto lg:text-start text-center'}>
                        <Title/>
                    </div>
                </div>
                <div className={'absolute top-[120px] inset-0 w-full z-0'}>
                    <div className={'max-w-[1170px] mx-auto'}>
                        <Content/>
                    </div>
                </div>
            </div>
            <div className={'min-h-screen w-full bg-black'}></div>
        </>
    )
}


{/*<img className={'absolute inset-0 h-full object-top object-cover z-10'} src={planetFull}*/
}
{/*     alt={'planet'}/>*/
}
{/*<img className={'absolute  z-10'} src={planet}*/
}
{/*     alt={'planet'}/>*/
}
{/*<svg className={'absolute'} width="200" height="200" xmlns="http://www.w3.org/2000/svg">*/
}
{/*    <path d="M 10 10 H 90 V 90 H 10 L 10 10" stroke='white' fill='transparent'/>*/
}
{/*    <path x1={0} y1={0} x2={100} y2={100} stroke='white'/>*/
}
{/*</svg>*/
}
{/*<Planet/>*/
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
        <img className={'absolute inset-0 h-full object-top object-cover -z-10'} src={planetFull} alt={'planetary'}/>
    )
}

export default App
