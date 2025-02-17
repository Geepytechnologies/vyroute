import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdEventSeat } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Props = {};

type SeatmodalProps = {
  togglemodal: boolean;
  handlemodal: () => void;
  handleselectseat: (
    event: React.MouseEvent<HTMLDivElement>
  ) => null | undefined;
  seatmanager: { [key: number]: boolean };
  setSeatmanager: React.Dispatch<
    React.SetStateAction<{ [key: number]: boolean }>
  >;
};

const Seatmodal = (props: SeatmodalProps) => {
  const navigate = useNavigate();
  const {
    togglemodal,
    handlemodal,
    seatmanager,
    setSeatmanager,
    handleselectseat,
  } = props;
  const handleSubmit = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div className="w-full bg-[rgba(0,0,0,0.4)] min-h-screen fixed flex items-center justify-center">
      <div className="bg-white h-[500px] overflow-y-scroll p-4 flex flex-col gap-4 rounded-md w-[90%] md:w-[70%] lg:w-[30%]">
        <div className="bg-dark">
          <div className="flex justify-end p-4 items-center">
            <div
              className="cursor-pointer text-white text-[25px]"
              onClick={handlemodal}
            >
              <IoMdClose />
            </div>
          </div>
          {/* <Logo /> */}
        </div>
        <p className="text-center font-[500] font-salsa">Select Seat(s)</p>
        <div className="flex font-salsa items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center rounded-full">
              <MdEventSeat className="text-green-500 text-[25px]" />
            </div>
            <p>Available seats</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center relative  rounded-full">
              <MdEventSeat className="text-yellow-500 text-[25px]" />
            </div>
            <p>Selected seats</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center relative">
              <MdEventSeat className="text-red-500 text-[25px]" />
            </div>
            <p>Booked seats</p>
          </div>
        </div>
        {/* seats */}
        <div className="flex flex-col gap-3">
          {/* first row */}
          <div className="flex items-center justify-between">
            <GiSteeringWheel className="text-[50px] circularmotion" />
            <div
              onClick={handleselectseat}
              data-number="1"
              className="flex flex-col items-center justify-center relative  cursor-pointer"
            >
              <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                1
              </p>

              <MdEventSeat
                className={`${
                  seatmanager[1]
                    ? "text-green-500"
                    : !seatmanager[1]
                    ? "text-yellow-500"
                    : "text-red-500"
                } text-[50px] hover:scale-105`}
              />
            </div>
          </div>
          {/* second row */}
          <div className="flex items-center gap-[50px]">
            <div
              onClick={handleselectseat}
              data-number="2"
              className="flex flex-col items-center justify-center relative  cursor-pointer"
            >
              <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                2
              </p>

              <MdEventSeat
                className={`${
                  seatmanager[2]
                    ? "text-green-500"
                    : !seatmanager[2]
                    ? "text-yellow-500"
                    : "text-red-500"
                } text-[50px] hover:scale-105`}
              />
            </div>
            <div
              onClick={handleselectseat}
              data-number="3"
              className="flex flex-col items-center justify-center relative  cursor-pointer"
            >
              <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                3
              </p>

              <MdEventSeat
                className={`${
                  seatmanager[3]
                    ? "text-green-500"
                    : !seatmanager[3]
                    ? "text-yellow-500"
                    : "text-red-500"
                } text-[50px] hover:scale-105`}
              />
            </div>
            <div
              onClick={handleselectseat}
              data-number="4"
              className="flex flex-col items-center justify-center relative  cursor-pointer"
            >
              <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                4
              </p>

              <MdEventSeat
                className={`${
                  seatmanager[4]
                    ? "text-green-500"
                    : !seatmanager[4]
                    ? "text-yellow-500"
                    : "text-red-500"
                } text-[50px] hover:scale-105`}
              />
            </div>
          </div>
          {/* third row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[50px]">
              <div
                onClick={handleselectseat}
                data-number="5"
                className="flex flex-col items-center justify-center relative  cursor-pointer"
              >
                <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                  5
                </p>

                <MdEventSeat
                  className={`${
                    seatmanager[5]
                      ? "text-green-500"
                      : !seatmanager[5]
                      ? "text-yellow-500"
                      : "text-red-500"
                  } text-[50px] hover:scale-105`}
                />
              </div>
              <div
                onClick={handleselectseat}
                data-number="6"
                className="flex flex-col items-center justify-center relative  cursor-pointer"
              >
                <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                  6
                </p>

                <MdEventSeat
                  className={`${
                    seatmanager[6]
                      ? "text-green-500"
                      : !seatmanager[6]
                      ? "text-yellow-500"
                      : "text-red-500"
                  } text-[50px] hover:scale-105`}
                />
              </div>
            </div>
            <div
              onClick={handleselectseat}
              data-number="7"
              className="flex flex-col items-center justify-center relative  cursor-pointer"
            >
              <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                7
              </p>

              <MdEventSeat
                className={`${
                  seatmanager[7]
                    ? "text-green-500"
                    : !seatmanager[7]
                    ? "text-yellow-500"
                    : "text-red-500"
                } text-[50px] hover:scale-105`}
              />
            </div>
          </div>
          {/* fourth row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[50px]">
              <div
                onClick={handleselectseat}
                data-number="8"
                className="flex flex-col items-center justify-center relative  cursor-pointer"
              >
                <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                  8
                </p>

                <MdEventSeat
                  className={`${
                    seatmanager[8]
                      ? "text-green-500"
                      : !seatmanager[8]
                      ? "text-yellow-500"
                      : "text-red-500"
                  } text-[50px] hover:scale-105`}
                />
              </div>
              <div
                onClick={handleselectseat}
                data-number="9"
                className="flex flex-col items-center justify-center relative  cursor-pointer"
              >
                <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                  9
                </p>

                <MdEventSeat
                  className={`${
                    seatmanager[9]
                      ? "text-green-500"
                      : !seatmanager[9]
                      ? "text-yellow-500"
                      : "text-red-500"
                  } text-[50px] hover:scale-105`}
                />
              </div>
            </div>
            <div
              onClick={handleselectseat}
              data-number="10"
              className="flex flex-col items-center justify-center relative  cursor-pointer"
            >
              <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                10
              </p>

              <MdEventSeat
                className={`${
                  seatmanager[10]
                    ? "text-green-500"
                    : !seatmanager[10]
                    ? "text-yellow-500"
                    : "text-red-500"
                } text-[50px] hover:scale-105`}
              />
            </div>
          </div>
          {/* fifth row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[50px]">
              <div
                onClick={handleselectseat}
                data-number="11"
                className="flex flex-col items-center justify-center relative  cursor-pointer"
              >
                <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                  11
                </p>

                <MdEventSeat
                  className={`${
                    seatmanager[11]
                      ? "text-green-500"
                      : !seatmanager[11]
                      ? "text-yellow-500"
                      : "text-red-500"
                  } text-[50px] hover:scale-105`}
                />
              </div>
              <div
                onClick={handleselectseat}
                data-number="12"
                className="flex flex-col items-center justify-center relative  cursor-pointer"
              >
                <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                  12
                </p>

                <MdEventSeat
                  className={`${
                    seatmanager[12]
                      ? "text-green-500"
                      : !seatmanager[12]
                      ? "text-yellow-500"
                      : "text-red-500"
                  } text-[50px] hover:scale-105`}
                />
              </div>
            </div>
            <div
              onClick={handleselectseat}
              data-number="13"
              className="flex flex-col items-center justify-center relative  cursor-pointer"
            >
              <p className=" font-[600] text-[1.8rem] text-gray-400 font-salsa">
                13
              </p>

              <MdEventSeat
                className={`${
                  seatmanager[13]
                    ? "text-green-500"
                    : !seatmanager[13]
                    ? "text-yellow-500"
                    : "text-red-500"
                } text-[50px] hover:scale-105`}
              />
            </div>
          </div>
        </div>
        {/* continue */}
        <button
          onClick={handleSubmit}
          className="bg-secondary px-5 py-2 rounded-md text-white font-[500]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Seatmodal;
