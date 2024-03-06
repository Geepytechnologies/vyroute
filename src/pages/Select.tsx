import React, { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { IoMdClose } from "react-icons/io";
import {
  MdAirlineSeatReclineNormal,
  MdDepartureBoard,
  MdEventSeat,
} from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import useStore from "../utils/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverurl } from "../utils/constants";
import { Terminaldata, Transitdata } from "../utils/DTO";
import Logo from "../components/Logo";
import Seatmodal from "../components/Seatmodal";

type Props = {};
type SeatManager = {
  [key: number]: boolean;
};

const Select = (props: Props) => {
  const [togglemodal, setTogglemodal] = useState(false);
  const { bookingformone, terminalID } = useStore((state) => state);
  const [transitdata, setTransitdata] = useState<Transitdata>();
  const [terminaldata, setTerminaldata] = useState<Terminaldata>();
  const [bookedSeats, setBookedSeats] = useState<Set<number>>(new Set());
  const navigate = useNavigate();
  const seatStatus = (number: number) => {
    if (transitdata && transitdata.seatsbooked.includes(number)) {
      return false;
    } else {
      return true;
    }
  };
  const [seatmanager, setSeatmanager] = useState<{ [key: number]: boolean }>({
    1: seatStatus(1),
    2: seatStatus(2),
    3: seatStatus(3),
    4: seatStatus(4),
    5: seatStatus(5),
    6: seatStatus(6),
    7: seatStatus(7),
    8: seatStatus(8),
    9: seatStatus(9),
    10: seatStatus(10),
    11: seatStatus(11),
    12: seatStatus(12),
    13: seatStatus(13),
    14: seatStatus(14),
  });

  const availableseats =
    transitdata && transitdata.vehicle.seats - transitdata.seatsbooked.length;

  const getTerminalInfo = async () => {
    try {
      const result = await axios.get(
        `${serverurl}/api/terminal/find/${terminalID}`
      );
      setTerminaldata(result.data);
    } catch (error) {}
  };
  const getOrCreateTransit = async () => {
    try {
      const result = await axios.post(`${serverurl}/api/Transit/getorcreate`, {
        departureDate: bookingformone.date,
        terminalId: terminalID,
      });
      setTransitdata(result.data[0]);
      console.log("get or create:", result.data);
    } catch (error) {}
  };
  const validatefields = () => {
    if (
      bookingformone.adults == "" ||
      bookingformone.date == "" ||
      bookingformone.from == "" ||
      bookingformone.to == ""
    ) {
      return true;
    }
  };
  const calculatediscount = (price: number, discount: number) => {
    return (discount / 100) * price;
  };
  useEffect(() => {
    const result = validatefields();
    if (result) {
      navigate("/", { replace: true });
    }
    getOrCreateTransit();
    getTerminalInfo();
  }, []);

  const handleselectseat = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const dataNumber = event.currentTarget.getAttribute("data-number") || "";
    const numberToCheck = Number(dataNumber);
    if (transitdata && transitdata.seatsbooked.includes(Number(dataNumber))) {
      return null;
    }

    if (bookedSeats.has(numberToCheck)) {
      setSeatmanager((prevSeatmanager) => ({
        ...prevSeatmanager,
        [numberToCheck]: !prevSeatmanager[numberToCheck],
      }));
      setBookedSeats((prev) => {
        const updatedBookedSeats = new Set(prev);
        updatedBookedSeats.delete(numberToCheck);
        return updatedBookedSeats;
      });
    }
    if (!bookedSeats.has(numberToCheck)) {
      setSeatmanager((prevSeatmanager) => ({
        ...prevSeatmanager,
        [numberToCheck]: !prevSeatmanager[numberToCheck],
      }));
      setBookedSeats((prev) => new Set(prev).add(numberToCheck));
    }
  };
  const handlemodal = () => {
    setTogglemodal(false);
    bookedSeats.clear();
    setSeatmanager({
      1: seatStatus(1),
      2: seatStatus(2),
      3: seatStatus(3),
      4: seatStatus(4),
      5: seatStatus(5),
      6: seatStatus(6),
      7: seatStatus(7),
      8: seatStatus(8),
      9: seatStatus(9),
      10: seatStatus(10),
      11: seatStatus(11),
      12: seatStatus(12),
      13: seatStatus(13),
      14: seatStatus(14),
    });
  };
  return (
    <>
      {togglemodal && (
        <Seatmodal
          togglemodal={togglemodal}
          handlemodal={handlemodal}
          handleselectseat={handleselectseat}
          seatmanager={seatmanager}
          setSeatmanager={setSeatmanager}
        />
      )}
      <BasicLayout>
        <div>
          <p className="text-gray-500 font-[500] font-rob">
            From {bookingformone.from} to {bookingformone.to} on{" "}
            {bookingformone.date}
          </p>
          <p className="">{"passengers"} Passengers</p>
        </div>
        <div>
          <p className="text-black font-[500]">Select Bus Type</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className=" h-[300px]">
            {transitdata && (
              <img
                src={`${serverurl}/${transitdata?.vehicle.imagePaths[0]}`}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <p className="text-dark font-[600]">
              {transitdata?.vehicle.vehicleNumber.toUpperCase()}
            </p>
            <p>
              Departure: {"departure"}, Arrival: {"arrival"}
            </p>
            <p>
              <MdAirlineSeatReclineNormal /> {availableseats} seats available
            </p>
            <p>
              <MdDepartureBoard /> Departure time: 6:00am
            </p>
            <p>Adult: 3</p>
          </div>
          {/* price */}
          <div className="flex flex-col items-center">
            <p>Amount: ₦{terminaldata?.price.toLocaleString()}</p>
            <p>
              Discount:₦
              {terminaldata &&
                calculatediscount(
                  terminaldata?.price,
                  terminaldata?.pricediscountpercent
                )}
            </p>
            <button
              className="bg-secondary px-3 py-2 text-white font-[500]"
              onClick={() => setTogglemodal(true)}
            >
              Preview seats
            </button>
          </div>
        </div>
      </BasicLayout>
    </>
  );
};

export default Select;
