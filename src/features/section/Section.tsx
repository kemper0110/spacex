import {Title} from "./Title.tsx";
import {Button} from "./Button.tsx";
import {Benefits} from "./Benefits.tsx";

const Section = () => {
    return (
        <section className={'pt-32 flex flex-wrap justify-between items-start'}>
            <div className={'flex flex-col gap-28'}>
                <Title/>
                <Button/>
            </div>
            <Benefits/>
        </section>
    );
};
export default Section;