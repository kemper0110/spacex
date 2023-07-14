import {useMenu} from "../../api.tsx";

const Item = ({title}: { title: string }) => (
    <li className={'hover:text-slate-400 decoration-slate-500 decoration-1 underline-offset-8 hover:underline transition-colors'}>
        {title}
    </li>
)
export const Nav = () => {
    const {data, isLoading, isError} = useMenu()
    return (
        <nav>
            <ul className={'flex gap-x-10 text-slate-200 flex-wrap'}>
                {
                    isError || isLoading ? null :
                        data?.map(m => <Item key={m.id} title={m.title}/>)
                }
            </ul>
        </nav>
    )
}