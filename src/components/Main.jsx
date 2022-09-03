import {
  Calendar,
  CaretLeft,
  CaretRight,
  GithubLogo,
  LinkedinLogo,
} from "phosphor-react";
import { CurrentCalendar } from "./CurrentCalendar";
import { Header } from "./Header";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { monthsTranslate, translateDictionary } from "./DataConvert";
import AppContext from "../context/AppContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";
import nameLogo from "../imgs/nameLogo.jpg";
import "./mainStyle.css";

export function Main() {
  const [months, setMonths] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { monthsShow, setMonthsShow } = useContext(AppContext);
  const { data, setData } = useContext(AppContext);
  const url = ` https://thayxis.herokuapp.com/api/dev/v1/products`;
  const callApi = async () => {
    const results = await axios.get(url);
    return results;
  };

  async function fetchData() {
    console.log(url);
    const results = await callApi();

    const jsonData = Object.entries(results.data);
    setData(results.data);

    setMonths(jsonData);

    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="divLoading">
          <img src={nameLogo} className="logoName" />
          <ThreeDots
            height="100"
            width="100"
            color="#A1D1FF"
            ariaLabel="Carregando..."
          />
        </div>
      ) : (
        <>
          <Header />

          <section className="flex justify-center m-10 sm:justify-end  ">
            <button className="flex items-center gap-2 uppercase bg-brandOrange-500 px-3 py-2 text-white rounded-2xl">
              <Calendar size={25} weight={"fill"} />
              Calendário
            </button>
          </section>

          <section className="flex justify-center  ">
            <button
              onClick={() =>
                setMonthsShow(monthsShow > 0 ? monthsShow - 1 : monthsShow)
              }
            >
              <CaretLeft size={32} weight="fill" />
            </button>
            <span className="font-bold text-lg ">
              {monthsTranslate(months[monthsShow][0].slice(5, 7)) +
                " - " +
                months[monthsShow][0].slice(0, 4)}
            </span>
            <button
              onClick={() =>
                setMonthsShow(
                  monthsShow >= months.length - 1 ? monthsShow : monthsShow + 1
                )
              }
            >
              <CaretRight size={32} weight="fill" />
            </button>
          </section>

          <CurrentCalendar
            months={Object.entries(months[monthsShow][1])}
            month={months[monthsShow][0]}
          />
          <footer className="bg-stone-800 text-center sm:absolute relative bottom-0 text-gray-300 w-full  p-[50px] mt-[120px]">
            © Criado por Gabriel Pimenta
            <div className="flex justify-center gap-3 mt-8">
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/gabriel-alves-pimenta-a2a944163/"
                target="_blank"
              >
                <LinkedinLogo size={32} weight="fill" />
              </a>
              <a
                className="cursor-pointer"
                href="https://github.com/BielPimentaDev
              "
                target="_blank"
              >
                <GithubLogo size={32} weight="fill" />
              </a>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
