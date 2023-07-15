import {useMenu} from "../../api.tsx";
import burger from '../../assets/burger.svg';
import cross from '../../assets/cross.svg';
import {useState} from "react";

const Item = ({title}: { title: string }) => (
    <li className={'hover:text-slate-400 decoration-slate-500 decoration-1 underline-offset-8 hover:underline transition-colors'}>
        <a href={`/${title}`}>
            {title}
        </a>
    </li>
)
export const Nav = () => {
    return (
        <nav className={'shrink-0'}>
            <PcNavigation/>
            <MobileNavigation/>
        </nav>
    )
}


const PcNavigation = () => {
    const {data, isLoading, isError} = useMenu()
    return (
        <ul className={'lg:flex hidden gap-x-10 text-slate-200 flex-wrap'}>
            {
                isLoading ? null : (
                    isError ? "Ошибка загрузки меню" : (
                        data?.map(m => <Item key={m.id} title={m.title}/>)
                    )
                )
            }
        </ul>
    )
}

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    const {data, isLoading, isError} = useMenu()
    return (
        <>
            <button className={'block lg:hidden'} onClick={() => setOpen(true)}>
                <img src={burger} alt={'menu'} className={'w-[40px] h-[40px]'}/>
            </button>
            {
                open ? (
                    <div className={'fixed inset-0 min-h-0 bg-gray-900 z-50'}>
                        <button className={'absolute right-0 top-8'} onClick={() => setOpen(false)}>
                            <img src={cross} alt={'close menu'} className={'w-[40px] h-[40px]'}/>
                        </button>
                        <ul className={'mt-10 flex flex-col text-3xl items-center gap-10 text-white'}>
                            {
                                isLoading ? null : (
                                    isError ? "Ошибка загрузки меню" : (
                                        data?.map(m => <Item key={m.id} title={m.title}/>)
                                    )
                                )
                            }
                        </ul>
                    </div>
                ) : null
            }
        </>
    )
}