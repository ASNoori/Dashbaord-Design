import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import person from "../assets/person.jpg";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import "./Ordersfeedback.css";
import Rating from "@mui/material/Rating";

function createData(image, customer, orderno, amount, status) {
  return { image, customer, orderno, amount, status };
}
const rows = [
  createData(person, "Wade Warren", 15478256, 124.0, "Delivered"),
  createData(person1, "Jane Cooper", 48965786, 365.02, "Delivered"),
  createData(person2, "Guy Hawkins", 78958215, 45.88, "Cancelled"),
  createData(person3, "Kristin Watson", 20965732, 65.0, "Pending"),
  createData(person4, "Cody Fisher", 95715620, 545.0, "Delivered"),
  createData(person5, "Savannah Nguyen", 78514568, 128.2, "Delivered"),
];

export default function Ordersfeedback() {
  return (
    <div class="table-main-container">
      <div className="table-container">
        <h3 style={{ color: "#fff", padding: "20px" }}>Recent Orders</h3>
        <TableContainer component={Paper} sx={{ backgroundColor: "#141416" }}>
          <Table
            sx={{
              maxWidth: 520,
              maxHeight: 600,
              overflowY: "auto",
              backgroundColor: "#202028",
              color: "white",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Customer
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  OrderNo.
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  Amount
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "& td, & th": { borderColor: "white" },
                  }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "#fff" }}>
                    <img
                      src={row.image}
                      alt={row.customer}
                      style={{
                        width: 40,
                        height: 40,
                        marginRight: 8,
                        borderRadius: 20,
                      }}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#fff" }}>
                    {row.customer}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#fff" }}>
                    {row.orderno}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#fff" }}>
                    {row.amount}
                  </TableCell>
                  <TableCell align="left">
                    <span
                      style={{
                        backgroundColor:
                          row.status === "Delivered" ? "#155145" : "#623135",
                        color:
                          row.status === "Delivered" ? "#02ba83" : "#c45152",
                        padding: "2px 6px",
                        borderRadius: "10px",
                      }}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="feedback-container">
        <h3 className="feedback-heading">Customer's Feedback</h3>
        <div className="feedback">
          <div className="customername">
            <img className="feedback-img" src={person3} alt="customer1" />
            <h4>Jenny Wilson</h4>
            </div>
            <Rating name="read-only" value={4} readOnly  className="rating"/>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos magnam commodi quae, fuga ipsam, magni aliquid, optio
              cumque aut enim incidunt? Qui corporis, alias velit exercitationem
              aperiam eveniet temporibus soluta.
            </p>
        </div>
        <div className="divider"></div>
        <div className="feedback">
          <div className="customername">
            <img className="feedback-img" src={person5} alt="customer2" />
            <h4>Dianne Russell</h4>
            </div>
            <Rating name="read-only" value={5} readOnly  className="rating"/>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos magnam commodi quae, fuga ipsam, magni aliquid, optio
              cumque aut enim incidunt? Qui corporis, alias velit exercitationem
              aperiam eveniet temporibus soluta.
            </p>
        </div>
        <div className="divider"></div>
        <div className="feedback">
          <div className="customername">
            <img className="feedback-img" src={person1} alt="customer1" />
            <h4>Devon Lane</h4>
            </div>
            <Rating name="read-only" value={4} readOnly  className="rating"/>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos magnam commodi quae, fuga ipsam, magni aliquid, optio
              cumque aut enim incidunt? Qui corporis, alias velit exercitationem
              aperiam eveniet temporibus soluta.
            </p>
        </div>
      
      </div>
    </div>
  );
}
