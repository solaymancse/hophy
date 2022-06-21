import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "react-circular-progressbar/dist/styles.css";
import { WidgetContainer } from "../DashboardElements";
import {
  Center,
  Left,
  Top,
  Bottom,
  Right,
  Feature,
  Amount,
  Summary,
} from "./DashHomeElements";
import { Widget } from "../Widget/Widget";
// import { ListTable } from "../ListTable/ListTable";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export const DashHome = () => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 900 },
    { name: "April", Total: 1300 },
    { name: "May", Total: 1200 },
    { name: "June", Total: 600 },
  ];
  return (
    <div>
      <WidgetContainer>
        <Widget
          backgroundColor="linear-gradient(to right, #fc5c7d, #6a82fb)"
          type="doctors"
        />
        <Widget
          backgroundColor="linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)"
          type="patients"
        />
        <Widget
          backgroundColor="linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))"
          type="nurses"
        />
        <Widget
          backgroundColor="linear-gradient(25deg,#d64c7f,#ee4758 50%)"
          type="appointment"
        />
      </WidgetContainer>
      <Center>
        <Left>
          <Top>
            <h1>Total Revenue</h1>
            <BiDotsVerticalRounded />
          </Top>
          <Bottom>
            <Feature>
              <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </Feature>
            <h2>Total Revenue made today</h2>
            <Amount>$500</Amount>
            <p>
              Previous Transactions processing.Last payments may <br />
              not be included
            </p>
          </Bottom>
          <Summary>
            <div>
              <h3>Target</h3>
              <p color="red">
                <IoMdArrowDropdown /> $239
              </p>
            </div>
            <div>
              <h3>Last Week</h3>
              <p color="green">
                <IoMdArrowDropdown /> $150
              </p>
            </div>
            <div>
              <h3>Last Month</h3>
              <p color="green">
                <IoMdArrowDropup /> $450
              </p>
            </div>
          </Summary>
        </Left>
        <Right >
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <AreaChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Total"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Right>
      </Center>
      {/* <ListContainer>
        <ListTitle>All Appointment's</ListTitle>
        <ListTable />
      </ListContainer> */}
    </div>
  );
};
