import {useBenefits} from "../../api.tsx";
import {Benefit, Line, PropType} from "./benefit.ts";

export const Benefits = () => {
    const {data, isLoading, isError} = useBenefits()
    if (isLoading) return null
    if (isError) return "Ошибка загрузки преимуществ"
    console.log(data)
    return (
        <div className={'min-w-[300px] grid grid-cols-[1fr_1fr] gap-5 ' +
            'text-transparent bg-gradient-to-b lg:bg-gradient-to-r from-white from-40% to-gray-600 bg-clip-text'}>
            {
                data?.map(benefit => <BenefitView key={benefit.id} benefit={benefit}/>)
            }
        </div>
    )
}

const BenefitView = ({benefit}: { benefit: Benefit }) => {
    return (
        <article
            className={'transition-all duration-300 aspect-square flex flex-col justify-center bg-gradient-to-br from-50% from-white/0 to-100% hover:to-white/30 to-white/10 border-solid border-[1px] border-transparent hover:benefit-border-hover'}>
            <h1 className={'flex flex-col items-center'}>
                {
                    benefit.code.lines.map((line, index) => <LineView key={index} line={line}/>)
                }
            </h1>
        </article>
    )
}

const mapPropsToStyles = (props: PropType[]): string => {
    const map = {
        "big": 'text-5xl',
        "small": 'font-light',
        "semibold": 'font-semibold'
    }
    return props.map(prop => map[prop] ?? "").join(' ')
}

const LineView = ({line}: { line: Line }) => (
    <span>
    {
        line.map((e, idx) => (
            <span key={idx} className={mapPropsToStyles(e.props)}>{e.content}</span>
        ))
    }
    </span>
)
