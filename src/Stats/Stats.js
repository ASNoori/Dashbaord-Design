import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { FaSackDollar } from "react-icons/fa6";
import "./Stats.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Stats() {
  return (
    <div className="container">
      <div className="stats-container">
        <div className="stats-item-container">
          <div className="stats-icon-container">
            <FaBasketShopping className="order-icon" />
            <BsFillPlusCircleFill className="sub-order-icon" />
          </div>
          <p className="stats-heading">Total Orders</p>
          <div className="order-stats-container">
            <h2>75</h2>
            <div className="order-stats">
              <p>&#9652; 3%</p>
            </div>
          </div>
        </div>
        <div className="stats-item-container">
          <div className="stats-icon-container">
            <FaShoppingBag className="deliver-icon" />
            <FaCheckCircle className="sub-deliver-icon" />
          </div>
          <p className="stats-heading">Total Delivered</p>
          <div className="order-stats-container">
            <h2>70</h2>
            <div className="deliver-stats">
              <p>&#9662; 3%</p>
            </div>
          </div>
        </div>
        <div className="stats-item-container">
          <div className="stats-icon-container">
            <FaShoppingBag className="cancel-icon" />
            <GoXCircleFill className="sub-cancel-icon" />
          </div>
          <h5 className="stats-heading">Total Orders</h5>
          <div className="order-stats-container">
            <h2>05</h2>
            <div className="cancel-stats">
              <p>&#9652; 3%</p>
            </div>
          </div>
        </div>
        <div className="stats-item-container">
          <div className="stats-icon-container">
            <FaSackDollar className="revenue-icon" />
          </div>
          <p className="stats-heading">Total Revenue</p>
          <div className="order-stats-container">
            <h2>$12K</h2>
            <div className="revenue-stats">
              <p>&#9662; 3%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="netstats-container">
        <div className="sub-netstats">
          <h5 className="netstats-heading netstat-item">Net Profit</h5>
          <h1 className="netstat-item">$6759.25</h1>
          <div className="order-stats netstat-item">
            <p>&#9652; 3%</p>
          </div>
        </div>
        <div className="sub-net">
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbarWithChildren
              value={66}
              styles={{
                path: {
                  stroke: "#8c73fd",
                  strokeWidth: 8,
                },
              }}
            >
              <div>
                <p className="circular-text">70%</p>{" "}
                <div className="circular-sub-text">Goal</div>
                <div className="circular-sub-text">Completed</div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="circle-text">
            *The values here has been rounded off.
          </div>
        </div>
      </div>
    </div>
  );
}
