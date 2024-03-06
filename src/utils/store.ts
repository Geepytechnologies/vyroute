import moment from "moment";
import { create } from "zustand";

interface Appdetails {
  name: string;
  logo: string;
  slogan: string;
  subSlogan: string;
  address?: string;
  email?: string;
  phone?: string;
}
interface Bookingformone {
  from: string;
  to: string;
  date: string;
  adults: string;
}
interface Bookingformtwo {
  from: string;
  to: string;
  departuredate: string;
  returndate: string;
  adults: string;
}

interface MyState {
  count: number;
  terminalID: string;
  appdetails: Appdetails;
  bookingformone: Bookingformone;
  bookingformtwo: Bookingformtwo;
  increment: () => void;
  decrement: () => void;
  addbookingformone: (values: Bookingformone) => void;
  setTerminalID: (id: string) => void;
}
const date = moment(new Date()).format("YYYY-MM-DD");

const useStore = create<MyState>((set) => ({
  count: 0,
  appdetails: {
    name: "Vyroute",
    logo: "/vyroute-logo2.png",
    slogan: "Efficient Transport Solutions for You",
    subSlogan: "Let's takes you there...",
    address: "",
    email: "",
    phone: "",
  },
  terminalID: "",
  bookingformone: {
    from: "",
    to: "",
    date: date,
    adults: "1",
  },
  bookingformtwo: {
    from: "",
    to: "",
    departuredate: date,
    returndate: "",
    adults: "1",
  },
  increment: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state: { count: number }) => ({ count: state.count - 1 })),
  addbookingformone: (values) => set(() => ({ bookingformone: values })),
  setTerminalID: (id: string) => set(() => ({ terminalID: id })),
}));

export default useStore;
