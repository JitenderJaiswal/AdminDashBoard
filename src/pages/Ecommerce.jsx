import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { LineChart, BarChart, PieChart } from "../components";
import {
  earningData,
  stackedOptions,
  verticalOptions,
  lineOptions,
  barChartData,
  piChartData,
  lineData,
} from "../data/dummy";
import style from "./Ecommerce.module.css";

const Ecommerce = () => {
  return (
    <div classname={style.parent}>
      <div className={style.scorecardsParent}>
        <div className={style.scorecardsParentOne}>
          <div className={style.textParent}>
            <div className={style.earningsText}>
              Earnings
              <div className={style.earningsDollarText}>$63,448.78</div>
            </div>
            <BsCurrencyDollar className={style.dollarSymbol} />
          </div>
        </div>
        <div className={style.earningDataParent}>
          {earningData.map((item) => (
            <div key={item.title} className={style.earningDataChild}>
              <div className={style.earningDataChildIcon}>
                <span style={{ marginLeft: "10px" }}>{item.icon}</span>
              </div>
              <div className={style.earningDataChildAmount}>
                <span>{item.amount}</span>
                <span
                  style={{
                    color: item.percentage[0] === "+" ? "green" : "red",
                  }}
                  className={style.earningDataChildPerc}
                >
                  {item.percentage}
                </span>
              </div>
              <div className={style.earningDataChildTitle}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.chartParent}>
        <div className={style.chartChildOne}>
          <div className={style.BarAndLineChartParent}>
            <div className={style.lineChart}>
              <LineChart options={lineOptions} data={lineData} />
            </div>
            <div className={style.StackedBarChart}>
              <BarChart options={stackedOptions} data={barChartData} />
            </div>
          </div>
        </div>
        <div className={style.chartChildTwo}>
          <div className={style.verticalBarChart}>
            <BarChart options={verticalOptions} data={barChartData} />
          </div>
          <div className={style.pieChart}>
            <PieChart data={piChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
