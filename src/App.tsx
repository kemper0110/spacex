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
                <div className={'absolute inset-0 w-full md:top-[232px] top-[100px] lg:-z-10'}>
                    <div className={'max-w-[1170px] mx-auto md:text-start text-center'}>
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

export default App
