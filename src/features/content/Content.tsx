import {Benefits} from "./Benefits.tsx";

const Content = () => {
    return (
        <section className={'pt-32 flex md:flex-row flex-col gap-y-20 md:justify-between items-center'}>
            <button className={'px-5 py-2 text-slate-300 w-min whitespace-nowrap button-border'}>
                Начать путешествие
            </button>
            <Benefits/>
        </section>
    );
};
export default Content;