import CalendarDay from "./CalendarDay";
import styled from "styled-components";
import { translateDictionary } from "./DataConvert";

const Calendar = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    font-weight: bold;
  }
  li {
    margin: 10px 0;
  }
`;

export function CurrentCalendar({ openModal, months, month }) {
  return (
    <Calendar>
      <div className="flex  justify-center mt-10 flex-wrap  justify-items-start gap-5 sm:gap-10">
        {months.map((week, i) => {
          return (
            <div key={i} className=" flex flex-col gap-4">
              <span className="text-center">
                {translateDictionary[week[0]]}
              </span>

              <div className=" flex flex-col gap-5">
                {week[1].products.map((day, i) => {
                  if (Object.keys(day) == 0) {
                    return (
                      <p key={i}>
                        <br />
                      </p>
                    );
                  } else {
                    {
                      const clientsQuant = Object.values(day)[0].length;
                      var full = "";
                      if (clientsQuant == 10) {
                        var full = "full";
                      }
                    }
                    return (
                      <div key={i}>
                        <CalendarDay
                          dayOfWeek={week[0]}
                          dayOfMonth={Object.keys(day)}
                          month={month}
                          key={Object.keys(day)[0]}
                          isFull={full}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Calendar>
  );
}
