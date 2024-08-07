import React from "react";
import "./Activitychart.css";
import Barchart from '../Barchart';
import { SlTarget } from "react-icons/sl";
import { FaChevronCircleRight } from "react-icons/fa";
import { PiHamburger } from "react-icons/pi";
import { FaBowlFood } from "react-icons/fa6";

export default function Activitychart() {
  return (
    <div className="main-container">
      <div className="chart-container">
        <div className="heading-container">
          <h3 className="heading">Activity</h3>
          <form>
            <select>
              <option value="">Weekly</option>
              <option value="">Monthly</option>
              <option value="">Yearly</option>
            </select>
          </form>
        </div>
        <div className="barchart-container">
        <Barchart/>
        </div>
      </div>
      <div className="goals-container">
        <div className="goal-row1">
         <div className="sub-goal-row">
      <SlTarget className="target-icon" />
      <p className="goal-text">Goals</p>
      </div>
      <FaChevronCircleRight className="right-arw-icon" />
      </div>
      <div className="goal-row1">
         <div className="sub-goal-row">
         <PiHamburger className="dish-icon" />
      <p className="goal-text">Popular Dishes</p>
      </div>
      <FaChevronCircleRight className="right-arw-icon" />
      </div>
      <div className="goal-row1">
         <div className="sub-goal-row">
      <FaBowlFood className="menu-icon" />
      <p className="goal-text">Menus</p>
      </div>
      <FaChevronCircleRight className="right-arw-icon" />
      </div>
      </div>
    </div>
  );
}
