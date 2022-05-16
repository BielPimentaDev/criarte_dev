import { Calendar, CaretLeft, CaretRight } from "phosphor-react";
import { CurrentCalendar } from "./CurrentCalendar";
import { Header } from "./Header";



export function Main(){
    return(
        <>
    <Header/>

    <section className="flex justify-center m-10 sm:justify-end  ">
        <button className="flex items-center gap-2 uppercase bg-brandOrange-500 px-3 py-2 text-white rounded-2xl">
            <Calendar size={25} weight={"fill"}/>
            Calendário
            </button>
    </section>

    <section className="flex justify-center  ">
        
        <button>
            <CaretLeft size={32} weight="fill" /> 
        </button>
        <span className="font-bold text-lg ">Março - 2022</span>
        <button>
            <CaretRight size={32} weight="fill" />
        </button>
        
    </section>
        <CurrentCalendar/>
    </>
    )
    
}