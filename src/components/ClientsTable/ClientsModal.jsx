import axios from "axios";
import { XCircle, Trash } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Checked from "../Checked";
import { translateDictionary } from "../DataConvert";
import { Header } from "../Header";
import { ClientsTable } from "./ClientsTableStyle";

function ClientsModal({ registerModal, closeModal }) {
  const [isLoading, setIsLoading] = useState(true);
  const { dayOfTable, setDayOfTable } = useContext(AppContext);
  const { monthWeekDay, setMonthWeekDay } = useContext(AppContext);
  const { weekDay, setWeekDay } = useContext(AppContext);
  const { clients, setClients } = useContext(AppContext);
  const { clientQtf, setClientQtf } = useContext(AppContext);

  var newDay = dayOfTable;
  if (dayOfTable < 10) {
    var newDay = "0" + dayOfTable;
  }

  var newMonthYear = monthWeekDay;
  if (monthWeekDay.slice(6, 7) == "") {
    var newMonthYear =
      monthWeekDay.slice(0, 5) + "0" + monthWeekDay.slice(5, 6);
  }

  const dayUrl = newMonthYear + "-" + newDay;

  const url = `https://thayxis.herokuapp.com/api/dev/v1/days/${dayUrl}`;

  function fetchData() {
    
    axios
      .get(url)
      .then((res) => setClients(res.data))
      .then((res) => setClientQtf(clients.length))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }
  useEffect(() => {
    fetchData();
  }, []);

  function deleteClient(id) {
    axios
      .delete(` https://thayxis.herokuapp.com/api/dev/v1/products/${id}`)
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => console.log('err'));
  }

  return (
    <>
      <Header />

      <div className=" bg-fixed flex  justify-center bg-gray-400 bg-opacity-70 w-full h-[200%] absolute top-0 sm:h-[100%]">
        <div className=" fixed bg-zinc-50 shadow-2xl mt-10 shadow-gray-500 w-[100%] h-[100vh] top-[-40px] sm:w-[90%] sm:h-[80%] sm:top-[0] sm:rounded-2xl">
          <div className=" relative rounded-tl-lg flex-1 text-center">
            <h1 className="  font-bold text-4xl mt-3 mb-3 uppercase  sm:text-center">
              {translateDictionary[weekDay]} - {dayOfTable}/
              {monthWeekDay.slice(5, 7)}{" "}
            </h1>

            <Link
              to="/"
              className="absolute right-0 top-[-15px]  sm:top-0 sm:right-5 "
            >
              <XCircle size={32} weight="fill" color="red" />
            </Link>
          </div>

          <section className="max-h-[70%] overflow-y-scroll ">
            <ClientsTable>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Endereço</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr><td>Carregando... </td></tr>
                ) : (
                  clients.map((client, i) => {
                    return (                      
                        <tr key={i} valign="top" className="">
                          <td title={client.observations}>
                            <span>{client.client_name}</span>
                            <br />
                            <div>
                              <b>Nome impresso</b>
                              <span>{client.printed_name}</span>
                            </div>
                            <div>
                              <b>Sexo</b>
                              <span>{translateDictionary[client.sex]}</span>
                            </div>
                            <div>
                              <b>Tema</b>
                              <span>{client.theme}</span>
                            </div>
                          </td>

                          <td title={client.observations}>
                            {client.type}
                            <br />
                            <br />
                            <div>
                              <Checked
                                id={client.id}
                                core_status={client.core_status}
                                cover_status={client.cover_status}
                              />
                            </div>
                          </td>

                          <td title={client.observations}>
                            {client.price}
                            <br />
                            <br />
                            <div>
                              <b>Pagamento</b>
                              <span>{client.payment}</span>
                            </div>
                          </td>

                          <td title={client.observations}>
                            <button
                              className="trashButton"
                              onClick={() => deleteClient(client.id)}
                            >
                              <Trash size={25} weight="fill" />{" "}
                            </button>
                            {client.client_state}
                            <br />
                            <br />
                            <div>
                              <b>Estado</b>
                            </div>
                            <div>
                              <b>Rua</b>
                              <span>
                                <p className="addressSection">
                                  {client.client_address}
                                </p>
                              </span>
                            </div>
                          </td>
                        </tr>
                      
                    );
                  })
                )}
              </tbody>
            </ClientsTable>
            <Link to="/client-register">
              <button className="absolute bottom-5 right-[50%] translate-x-[50%] bg-brandOrange-500 text-white  w-[80%] h-[50px] rounded-lg max-w-[800px]">
                {" "}
                CADASTRAR
              </button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default ClientsModal;
