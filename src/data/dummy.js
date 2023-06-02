import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart } from "react-icons/fi";
import { BsKanban, BsBarChart, BsBoxSeam } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { GiLouvrePyramid } from "react-icons/gi";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "customers",
        icon: <RiContactsLine />,
      },
      {
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "employees",
        icon: <IoMdContacts />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        name: "financial",
        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const customersData = [
  {
    id: "1",
    name: "Aaron Miles",
    email: "aaron@mailinator.com",
    startDate: "2018-01-06",
  },
  {
    id: "2",
    name: "Aishwarya Naik",
    email: "aishwarya@mailinator.com",
    startDate: "2018-02-06",
  },
  {
    id: "3",
    name: "Arvind Kumar",
    email: "arvind@mailinator.com",
    startDate: "2018-03-06",
  },
  {
    id: "4",
    name: "Caterina Binotto",
    email: "caterina@mailinator.com",
    startDate: "2018-04-06",
  },
  {
    id: "5",
    name: "Chetan Kumar",
    email: "chetan@mailinator.com",
    startDate: "2018-05-06",
  },
  {
    id: "6",
    name: "Jim McClain",
    email: "jim@mailinator.com",
    startDate: "2018-06-06",
  },
  {
    id: "7",
    name: "Mahaveer Singh",
    email: "mahaveer@mailinator.com",
    startDate: "2018-07-06",
  },
  {
    id: "8",
    name: "Rahul Jain",
    email: "rahul@mailinator.com",
    startDate: "2018-08-06",
  },
  {
    id: "9",
    name: "Rizan Khan",
    email: "rizan@mailinator.com",
    startDate: "2018-09-06",
  },
  {
    id: "10",
    name: "Sarah Potter",
    email: "sarah@mailinator.com",
    startDate: "2018-10-06",
  },
  {
    id: "11",
    name: "Keshav Muddaiah",
    email: "keshav@mailinator.com",
    startDate: "2018-11-06",
  },
  {
    id: "12",
    name: "Nita Ramesh",
    email: "nita@mailinator.com",
    startDate: "2018-12-06",
  },
  {
    id: "13",
    name: "Julia Hunstman",
    email: "julia@mailinator.com",
    startDate: "2019-01-06",
  },
  {
    id: "14",
    name: "Juan Alonso",
    email: "juan@mailinator.com",
    startDate: "2019-02-06",
  },
  {
    id: "15",
    name: "Gabriel Montoya",
    email: "gabriel@mailinator.com",
    startDate: "2019-03-06",
  },
  {
    id: "16",
    name: "Beatrice Iglesias",
    email: "beatrice@mailinator.com",
    startDate: "2019-04-06",
  },
  {
    id: "17",
    name: "Sarah Symms",
    email: "sarah.s@mailinator.com",
    startDate: "2019-05-06",
  },
  {
    id: "18",
    name: "Patrick Pinheiro",
    email: "patrick@mailinator.com",
    startDate: "2019-06-06",
  },
  {
    id: "19",
    name: "Anand Patel",
    email: "anand@mailinator.com",
    startDate: "2019-07-06",
  },
  {
    id: "20",
    name: "Kishore Kalburgi",
    email: "kishore@mailinator.com",
    startDate: "2019-08-06",
  },
  {
    id: "21",
    name: "Rebecca Norris",
    email: "rebecca@mailinator.com",
    startDate: "2019-09-06",
  },
  {
    id: "22",
    name: "Özgür Başak",
    email: "ozgur@mailinator.com",
    startDate: "2019-10-06",
  },
  {
    id: "23",
    name: "Robin Andersen",
    email: "robin@mailinator.com",
    startDate: "2020-01-06",
  },
  {
    id: "24",
    name: "Nandini Kumar",
    email: "nandini@mailinator.com",
    startDate: "2020-02-06",
  },
  {
    id: "25",
    name: "Nikita Smith",
    email: "nikita@mailinator.com",
    startDate: "2020-03-06",
  },
  {
    id: "26",
    name: "Colton Doe",
    email: "colton@mailinator.com",
    startDate: "2020-04-06",
  },
  {
    id: "27",
    name: "Alain Senna",
    email: "alain@mailinator.com",
    startDate: "2020-05-06",
  },
  {
    id: "28",
    name: "Ashwin Jain",
    email: "ashwin@mailinator.com",
    startDate: "2020-06-06",
  },
  {
    id: "29",
    name: "Seema Bhatt",
    email: "seema@mailinator.com",
    startDate: "2021-01-06",
  },
  {
    id: "30",
    name: "Kayla Scarpinski",
    email: "kayla@mailinator.com",
    startDate: "2021-02-06",
  },
  {
    id: "31",
    name: "Ajay Ghosh",
    email: "ajay@mailinator.com",
    startDate: "2021-06-06",
  },
  {
    id: "32",
    name: "Chris Lindberg",
    email: "chris@mailinator.com",
    startDate: "2021-07-06",
  },
  {
    id: "33",
    name: "Christina Mourujärvi",
    email: "christina@mailinator.com",
    startDate: "2021-10-06",
  },
  {
    id: "34",
    name: "Mikhail Bill",
    email: "mikhail@mailinator.com",
    startDate: "2021-12-06",
  },
  {
    id: "35",
    name: "Eino Göregen",
    email: "eino@mailinator.com",
    startDate: "2022-01-06",
  },
  {
    id: "36",
    name: "Zachariah Johansson",
    email: "zacharaiah@mailinator.com",
    startDate: "2022-05-06",
  },
  {
    id: "37",
    name: "Aimaan Mohammed",
    email: "aimaan@mailinator.com",
    startDate: "2022-06-06",
  },
  {
    id: "38",
    name: "Aika Tsunoda",
    email: "aika@mailinator.com",
    startDate: "2022-06-06",
  },
  {
    id: "39",
    name: "Kimiko Minamoto",
    email: "kimiko@mailinator.com",
    startDate: "2023-01-06",
  },
  {
    id: "40",
    name: "Alyona Baginskaite",
    email: "alyona@mailinator.com",
    startDate: "2023-02-06",
  },
  {
    id: "41",
    name: "Anirudh Mukherjee",
    email: "anirudh@mailinator.com",
    startDate: "2023-03-06",
  },
  {
    id: "42",
    name: "Alyona Gov",
    email: "alyonagov@mailinator.com",
    startDate: "2023-04-06",
  },
  {
    id: "43",
    name: "Robin Singh",
    email: "robin@mailinator.com",
    startDate: "2023-05-06",
  },
  {
    id: "44",
    name: "Vijay Vasudevan",
    email: "vijayv@mailinator.com",
    startDate: "2023-05-06",
  },
  {
    id: "45",
    name: "Steve Smith",
    email: "steve@mailinator.com",
    startDate: "2023-05-06",
  },
  {
    id: "46",
    name: "Anirudh Banerjee",
    email: "anirudhb@mailinator.com",
    startDate: "2023-05-06",
  },
];

export const stackedOptions = {
  plugins: {
    title: {
      display: true,
      text: "Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
export const verticalOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart - Vertical",
    },
  },
};

export const barChartData = {
  labels,
  datasets: [
    {
      label: "Budget",
      data: [111.1, 127.3, 143.4, 159.9, 159.9, 159.9, 159.9],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Expense",
      data: [111.1, 127.3, 143.4, 159.9, 159.9, 159.9, 159.9],
      backgroundColor: "grey",
    },
  ],
};

export const piChartData = {
  labels: [2018, 2019, 2020, 2021, 2022, 2023],
  datasets: [
    {
      label: "Yearly sales(%)",
      data: [25, 35, 25, 40, 28, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

export const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Revenue Updates",
    },
  },
};

export const lineData = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Revenue",
      data: [2, 6, 8, 5, 10, 12, 5],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
