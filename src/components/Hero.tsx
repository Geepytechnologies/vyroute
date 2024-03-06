import React, { SetStateAction, useEffect, useState } from "react";
import useStore from "../utils/store";
import { IoRadioButtonOffSharp, IoRadioButtonOn } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverurl } from "../utils/constants";

type Props = {};

interface Terminals {
  arrival: string;
  bookings: any;
  departure: string;
  id: string;
  price: string;
  departureState: string;
  arrivalState: string;
  transits: any;
}

const Hero = (props: Props) => {
  const { appdetails, addbookingformone, bookingformone, setTerminalID } =
    useStore((state) => state);
  const [activeSelection, setActiveselection] = useState(1);
  const [trip, setTrip] = useState(1);
  const [terminals, setTerminals] = useState<Terminals[]>();
  const [arrivals, setArrivals] = useState<Terminals[]>();
  const navigate = useNavigate();
  const [onewayform, setOnewayform] = useState({
    from: "",
    to: "",
    date: bookingformone.date,
    adults: "1",
  });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.options[event.target.selectedIndex];

    const selectedId = selectedOption.getAttribute("data-id");
    if (selectedId) {
      setTerminalID(selectedId);
    }

    setOnewayform((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelection = (selection: number) => {
    setActiveselection(selection);
  };
  const submitformone = () => {
    addbookingformone(onewayform);
    navigate("/select");
  };
  const handleTrip = (trip: number) => {
    setTrip(trip);
  };
  const getAllTerminals = async () => {
    try {
      const res = await axios.get(`${serverurl}/api/terminal/find`);
      setTerminals(res.data);
      console.log(res.data);
    } catch (error) {}
  };
  const filterArrivalTerminals = (departure: string) => {
    console.log("departure", departure);
    const arrivals = terminals?.filter(
      (terminal) => terminal.departure == departure
    );
    console.log("arrivals:", arrivals);
    setArrivals(arrivals);
  };

  useEffect(() => {
    getAllTerminals();
  }, []);
  useEffect(() => {
    const departure = onewayform.from.split(" ")[0];
    filterArrivalTerminals(departure);
  }, [onewayform.from]);
  const OneWayForm = () => {
    return (
      <div className="flex flex-col gap-3 p-4 font-salsa ">
        <div className="flex flex-col ">
          <label className="text-white font-salsa">Travelling From</label>
          <select
            name="from"
            className="w-full"
            value={onewayform.from}
            onChange={handleSelectChange}
          >
            <option className="" value="" disabled selected hidden>
              Departure Terminal
            </option>
            {terminals &&
              terminals.map((t, index) => (
                <option
                  className="w-[50px]"
                  key={t.id}
                  data-id={t.id}
                  value={`${t.departure} ==> ${t.departureState}`}
                >
                  {`
                  ${t.departure} ==> ${t.departureState}`}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-white">Travelling To</label>
          <select
            name="to"
            className="w-full"
            value={onewayform.to}
            onChange={handleSelectChange}
          >
            <option className="" value="" disabled selected hidden>
              Arrival Terminal
            </option>
            {arrivals &&
              arrivals.map((a, index) => (
                <option
                  className="w-[50px]"
                  key={index}
                  value={`${a.arrival} ==> ${a.arrivalState}`}
                >
                  {`
                  ${a.arrival} ==> ${a.arrivalState}`}
                </option>
              ))}
          </select>
        </div>
        <div className="flex gap-3 ">
          <div className="flex flex-col">
            <label className="text-white">Departure Date</label>
            <select
              name="date"
              className="w-full"
              value={onewayform.date}
              onChange={handleSelectChange}
            >
              <option className="" value={bookingformone.date} disabled hidden>
                {bookingformone.date}
              </option>
              <option value="2024-03-05">2024-03-10</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-white">Adults</label>
            <select
              name="adults"
              className="w-full"
              value={onewayform.adults}
              onChange={handleSelectChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
            </select>
          </div>
        </div>
        <button
          onClick={submitformone}
          className="bg-secondary text-white rounded-md py-2"
        >
          Proceed
        </button>
      </div>
    );
  };
  const ReturnTripForm = () => {
    return (
      <div className="flex flex-col gap-3 p-4 font-salsa ">
        <div className="flex flex-col ">
          <label className="text-white font-salsa">Travelling From</label>
          <select className="w-full" onChange={handleSelectChange}>
            <option className="" value="" disabled selected hidden>
              Departure Terminal
            </option>
            {terminals &&
              terminals.map((t, index) => (
                <option className="w-[50px]" key={index} value={t.departure}>
                  {`
                  ${t.departure} ==> ${t.departureState}`}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-white">Travelling To</label>
          <select>
            <option className="" value="" disabled selected hidden>
              Arrival Terminal
            </option>
            {arrivals &&
              arrivals.map((a, index) => (
                <option className="w-[50px]" key={index} value={a.departure}>
                  {`
                  ${a.arrival} ==> ${a.arrivalState}`}
                </option>
              ))}
          </select>
        </div>
        <div className="flex gap-3 ">
          <div className="flex flex-col">
            <label className="text-white">Departure Date</label>
            <select>
              <option className="" value="" disabled hidden>
                Please select an option
              </option>
              <option value="1">Bangalore</option>
              <option value="2">Mumbai</option>
              <option value="3">Delhi</option>
              <option value="4">Chennai</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-white">Arrival Date</label>
            <select>
              <option className="" value="" disabled hidden>
                Please select an option
              </option>
              <option value="1">Bangalore</option>
              <option value="2">Mumbai</option>
              <option value="3">Delhi</option>
              <option value="4">Chennai</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-white">Adults</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => navigate("/select")}
          className="bg-secondary text-white rounded-md py-2"
        >
          Proceed
        </button>
      </div>
    );
  };
  return (
    <div className="relative bg-[url('/roadview.jpg')] h-[500px] bg-cover  ">
      <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col md:flex-row items-center">
        <div>
          <h1 className="text-white font-popp text-5xl font-[500]">
            {appdetails.slogan}
          </h1>
          <h2 className="text-white text-xl">{appdetails.subSlogan}</h2>
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="glass w-[90%] md:w-[70%] lg:w-[80%] h-auto min-h-[300px]">
            <div className="flex items-center py-4 rounded-t-[16px] pl-4 gap-4 text-white text-[12px]  font-open">
              <button
                onClick={() => handleSelection(1)}
                className={`border px-3 py-2 rounded-md  ${
                  activeSelection === 1 &&
                  " border-gray-700 bg-gray-700 text-white"
                }`}
              >
                Book a seat
              </button>
              <button
                onClick={() => handleSelection(2)}
                className={`border px-3 py-2 rounded-md ${
                  activeSelection === 2 &&
                  "border-gray-700 bg-gray-700 text-white"
                }`}
              >
                Hire a car
              </button>
              <button
                onClick={() => handleSelection(3)}
                className={`border px-3 py-2 rounded-md ${
                  activeSelection === 3 &&
                  "border-gray-700 bg-gray-700 text-white"
                }`}
              >
                Booking status
              </button>
            </div>
            {/* :::trip selector::: */}
            <div className="flex gap-4 pl-4 items-center font-open text-white">
              <div className="flex items-center ">
                {trip == 1 ? (
                  <IoRadioButtonOn
                    onClick={() => handleTrip(1)}
                    className="cursor-pointer text-primary text-[20px]"
                  />
                ) : (
                  <IoRadioButtonOffSharp
                    onClick={() => handleTrip(1)}
                    className="text-[20px] cursor-pointer"
                  />
                )}
                <p>One Way</p>
              </div>
              <div className="flex items-center">
                {trip == 2 ? (
                  <IoRadioButtonOn
                    onClick={() => handleTrip(2)}
                    className="cursor-pointer text-primary text-[20px]"
                  />
                ) : (
                  <IoRadioButtonOffSharp
                    onClick={() => handleTrip(2)}
                    className="text-[20px] cursor-pointer"
                  />
                )}
                <p>Return Trip</p>
              </div>
            </div>
            {/* :::trip form::: */}
            {trip == 1 && <OneWayForm />}
            {trip == 2 && <ReturnTripForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
