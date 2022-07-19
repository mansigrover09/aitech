import React from "react";

import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Row, Col, Table, Progress } from "reactstrap";

import ProgressBar from "react-bootstrap/ProgressBar";
var IMGDIR = process.env.REACT_APP_IMGDIR;

class Dashboard extends React.Component {
  render() {
    const primaryColor = "#26a69a";
    const accentColor = "#ff8a65";
    const chartColor = "#FFFFFF";

    var gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: 1,
      scales: {
        yAxes: [
          {
            categoryPercentage: 0.8,
            barPercentage: 0.6,
            maxBarThickness: 12,
            display: 1,
            gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            },
            ticks: {
              display: true,
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
      layout: {
        padding: { left: 0, right: 0, top: 0, bottom: 0 },
      },
    };
    const dashboardAllProductsChart3 = {
      data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#18ce0f");
        gradientStroke.addColorStop(1, primaryColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(38, 166, 154, 0)");
        gradientFill.addColorStop(1, "rgba(38, 166, 154, 0)");
        return {
          labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
          datasets: [
            {
              label: "Stats",
              borderColor: primaryColor,
              pointBorderColor: "#FFF",
              pointBackgroundColor: primaryColor,
              pointBorderWidth: 2,
              pointHoverRadius: 2,
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              data: [640, 660, 700, 720, 790, 832, 860, 920],
            },
            {
              label: "Downloads",
              borderColor: redColor,
              pointBorderColor: "#FFF",
              pointBackgroundColor: redColor,
              pointBorderWidth: 2,
              pointHoverRadius: 2,
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              data: [540, 760, 700, 620, 690, 732, 660, 720],
            },
            {
              label: "Visitors",
              borderColor: purpleColor,
              pointBorderColor: "#FFF",
              pointBackgroundColor: purpleColor,
              pointBorderWidth: 2,
              pointHoverRadius: 2,
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              data: [740, 760, 800, 720, 690, 832, 760, 820],
            },
          ],
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        responsive: 1,

        scales: {
          xAxes: [
            {
              display: 1,
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
              },
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              categoryPercentage: 0.8,
              barPercentage: 0.6,
              maxBarThickness: 12,
              display: 1,
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
              },
              ticks: {
                display: true,
              },
            },
          ],
        },
        layout: {
          padding: { left: 0, right: 0, top: 0, bottom: 0 },
        },
      },
    };
    const purpleColor = "#7f8ff4";
    const redColor = "#fb6373";

    const playlistCharts = {
      data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, redColor);
        gradientFill.addColorStop(1, redColor);
        return {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Progress",
              backgroundColor: gradientFill,
              borderColor: redColor,
              pointBorderColor: "#FFF",
              pointBackgroundColor: redColor,
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 1,
              data: [150, 39, 66, 76, 123, 55, 180, 45, 68, 180, 43, 155],
            },
          ],
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        responsive: 1,
        scales: {
          yAxes: [
            {
              display: 0,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
          ],
          xAxes: [
            {
              categoryPercentage: 0.7,
              barPercentage: 0.7,
              maxBarThickness: 8,
              display: 0,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
        layout: {
          padding: { left: 0, right: 0, top: 0, bottom: 0 },
        },
      },
    };
    const playlistCharts2 = {
      data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, redColor);
        gradientFill.addColorStop(1, redColor);
        return {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Progress",
              backgroundColor: gradientFill,
              borderColor: redColor,
              pointBorderColor: "#FFF",
              pointBackgroundColor: redColor,
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 1,
              data: [50, 139, 66, 76, 223, 55, 180, 45, 268, 80, 143, 55],
            },
          ],
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        responsive: 1,
        scales: {
          yAxes: [
            {
              display: 0,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
          ],
          xAxes: [
            {
              categoryPercentage: 0.7,
              barPercentage: 0.7,
              maxBarThickness: 8,
              display: 0,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
        layout: {
          padding: { left: 0, right: 0, top: 0, bottom: 0 },
        },
      },
    };

    const playlistCharts3 = {
      data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, redColor);
        gradientFill.addColorStop(1, redColor);
        return {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Progress",
              backgroundColor: gradientFill,
              borderColor: redColor,
              pointBorderColor: "#FFF",
              pointBackgroundColor: redColor,
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 1,
              data: [250, 39, 266, 76, 23, 55, 280, 45, 68, 280, 43, 55],
            },
          ],
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        responsive: 1,
        scales: {
          yAxes: [
            {
              display: 0,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
          ],
          xAxes: [
            {
              display: 0,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
        layout: {
          padding: { left: 0, right: 0, top: 0, bottom: 0 },
        },
      },
    };

    const playlistCharts4 = {
      data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, accentColor);
        gradientFill.addColorStop(1, accentColor);
        return {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Progress",
              backgroundColor: gradientFill,
              borderColor: accentColor,
              pointBorderColor: "#FFF",
              pointBackgroundColor: accentColor,
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 1,
              data: [150, 239, 66, 276, 23, 55, 280, 45, 268, 180, 143, 255],
            },
          ],
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        responsive: 1,
        scales: {
          yAxes: [
            {
              categoryPercentage: 0.5,
              barPercentage: 0.5,
              maxBarThickness: 6,
              display: 0,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
          ],
          xAxes: [
            {
              categoryPercentage: 0.5,
              barPercentage: 0.5,
              maxBarThickness: 6,
              display: 0,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.01)",
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
        layout: {
          padding: { left: 0, right: 0, top: 0, bottom: 0 },
        },
      },
    };

    const dashboardAllProductsChart = {
      data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#18ce0f");
        gradientStroke.addColorStop(1, primaryColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(233, 30, 99, 0)");
        gradientFill.addColorStop(1, "rgba(233, 30, 99, 0)");
        return {
          labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
          datasets: [
            {
              label: "New Visitors today",
              borderColor: primaryColor,
              pointBorderColor: "#FFF",
              pointBackgroundColor: primaryColor,
              pointBorderWidth: 2,
              pointHoverRadius: 6,
              pointHoverBorderWidth: 4,
              pointRadius: 6,
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              data: [1140, 2400, 3530, 2300, 1500, 2503, 3200, 2100],
            },
          ],
        };
      },
      options: gradientChartOptionsConfigurationWithNumbersAndGrid,
    };

    const data221 = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "Users",
          backgroundColor: "rgba(38, 166, 154,1)",
          borderColor: "rgba(38, 166, 154,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(38, 166, 154,0.8)",
          hoverBorderColor: "rgba(38, 166, 154,1)",
          data: [165, 219, 180, 221, 216, 140, 211, 116],
        },
        {
          label: "Visits",
          backgroundColor: "rgba(255, 138, 101,1)",
          borderColor: "rgba(255, 138, 101,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255, 138, 101,0.8)",
          hoverBorderColor: "rgba(255, 138, 101,1)",
          data: [255, 279, 140, 211, 116, 265, 119, 280],
        },
        {
          label: "Subscriptions",
          backgroundColor: "rgba(127, 143, 244,1)",
          borderColor: "rgba(127, 143, 244,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(127, 143, 244,0.8)",
          hoverBorderColor: "rgba(127, 143, 244,1)",
          data: [265, 119, 280, 121, 316, 255, 279, 140],
        },
      ],
    };

    const options221 = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            categoryPercentage: 0.5,
            barPercentage: 0.5,
            maxBarThickness: 8,
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.5,
            maxBarThickness: 8,
            display: 1,
            gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            },
            ticks: {
              display: true,
            },
          },
        ],
      },
      maintainAspectRatio: false,
    };

    const data312 = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Resolved",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(38, 166, 154,0.8)",
          borderColor: "rgba(38, 166, 154,0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#fafafa",
          pointBackgroundColor: "rgba(38, 166, 154,0.8)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(38, 166, 154,0.8)",
          pointHoverBorderColor: "#eeeeee",
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          pointHitRadius: 10,
          data: [65, 59, 50, 65, 56, 50, 60],
        },
        {
          label: "New",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(255, 138, 101,0.8)",
          borderColor: "rgba(255, 138, 101,0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#fafafa",
          pointBackgroundColor: "rgba(255, 138, 101,0.8)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255, 138, 101,0.8)",
          pointHoverBorderColor: "#eeeeee",
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          pointHitRadius: 10,
          data: [45, 74, 60, 65, 56, 65, 70],
        },
      ],
    };

    const options312 = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: 1,
      scales: {
        yAxes: [
          {
            categoryPercentage: 0.8,
            barPercentage: 0.6,
            maxBarThickness: 12,
            display: 1,
            gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            },
            ticks: {
              display: true,
            },
          },
        ],
        xAxes: [
          {
            display: 1,
            gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      layout: {
        padding: { left: 0, right: 0, top: 0, bottom: 0 },
      },
    };

    const data2 = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Invoice",
          backgroundColor: "rgba(38, 166, 154,1)",
          borderColor: "rgba(38, 166, 154,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(38, 166, 154,0.8)",
          hoverBorderColor: "rgba(38, 166, 154,1)",
          data: [165, 219, 180, 221, 216, 205, 290, 280, 221, 216, 245, 130],
        },
      ],
    };

    const options2 = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.6,
            maxBarThickness: 9,
            display: 1,
            gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            },
            ticks: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.6,
            maxBarThickness: 9,
            display: 1,
            gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            },
            ticks: {
              display: true,
            },
          },
        ],
      },
      maintainAspectRatio: false,
    };

    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">CRM Dashboard</h1>
                </div>
              </div>

              <div className="row margin-0">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="tile-progress inverted">
                    <div className="wid-content">
                      <h2>3342</h2>
                      <p>New Leads Generated</p>
                      <Progress color="primary" value="20" />
                      <span>20% increase</span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="tile-progress inverted">
                    <div className="wid-content">
                      <h2>1154</h2>
                      <p>New Vendors Listed</p>
                      <Progress color="accent" value="40" />
                      <span>40% increase</span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="tile-progress inverted">
                    <div className="wid-content">
                      <h2>1533</h2>
                      <p>New Customers added</p>
                      <Progress color="purple" value="32" />
                      <span>32% increase</span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 d-xl-block d-lg-none d-md-none d-sm-block">
                  <div className="tile-progress inverted">
                    <div className="wid-content">
                      <h2>3422</h2>
                      <p>New Contacts Listed</p>
                      <Progress color="warning" value="21" />
                      <span>21% increase</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-12 col-xl-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Subscriptions</h2>
                  </header>
                  <div className="content-body">
                    {" "}
                    <div className="row">
                      <div className="col-12">
                        <div className="chart-container">
                          <Bar
                            data={data221}
                            height={350}
                            options={options221}
                          />
                        </div>
                      </div>

                      <div className="clearfix"></div>

                      <div className="spacer"></div>

                      <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="iconbox inline has-arrow">
                          <div className="widdata">
                            <h2 className="widtitle">
                              231{" "}
                              <img
                                alt="progress-img"
                                src={IMGDIR + "/images/increase-arrow.png"}
                                style={{ height: 16 + "px" }}
                              />
                            </h2>
                            <p className="widtag">10% inc. Users</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="iconbox inline has-arrow">
                          <div className="widdata">
                            <h2 className="widtitle">
                              321{" "}
                              <img
                                alt="progress-img"
                                src={IMGDIR + "/images/increase-arrow.png"}
                                style={{ height: 16 + "px" }}
                              />
                            </h2>
                            <p className="widtag">20% inc. Customers</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="iconbox inline has-arrow">
                          <div className="widdata">
                            <h2 className="widtitle">
                              535{" "}
                              <img
                                alt="progress-img"
                                src={IMGDIR + "/images/decrease-arrow.png"}
                                style={{ height: 16 + "px" }}
                              />
                            </h2>
                            <p className="widtag">12% dec. Vendors</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="iconbox inline has-arrow">
                          <div className="widdata">
                            <h2 className="widtitle">
                              524{" "}
                              <img
                                alt="progress-img"
                                src={IMGDIR + "/images/increase-arrow.png"}
                                style={{ height: 16 + "px" }}
                              />
                            </h2>
                            <p className="widtag">10% inc. Leads</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                        <div className="iconbox inline has-arrow">
                          <div className="widdata">
                            <h2 className="widtitle">
                              450{" "}
                              <img
                                alt="progress-img"
                                src={IMGDIR + "/images/decrease-arrow.png"}
                                style={{ height: 16 + "px" }}
                              />
                            </h2>
                            <p className="widtag">24% dec. Contacts</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                        <div className="iconbox inline has-arrow">
                          <div className="widdata">
                            <h2 className="widtitle">
                              123{" "}
                              <img
                                alt="progress-img"
                                src={IMGDIR + "/images/increase-arrow.png"}
                                style={{ height: 16 + "px" }}
                              />
                            </h2>
                            <p className="widtag">05% inc. Tickets</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="row margin-0">
                <div className="col-12 col-lg-6 col-md-6">
                  <section className="box ">
                    <header className="panel_header">
                      <h2 className="title float-left">Targets</h2>
                    </header>
                    <div className="content-body">
                      {" "}
                      <div className="row">
                        <div className="col-12">
                          <div className="chart-container">
                            <Line
                              data={dashboardAllProductsChart3.data}
                              options={dashboardAllProductsChart3.options}
                              height={300}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="col-12 col-lg-6 col-md-6">
                  <section className="box ">
                    <header className="panel_header">
                      <h2 className="title float-left">Support Tickets</h2>
                    </header>
                    <div className="content-body">
                      {" "}
                      <div className="row">
                        <div className="col-12">
                          <div className="chart-container">
                            <Line
                              data={data312}
                              options={options312}
                              height={300}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="col-12 col-lg-6 col-md-6">
                  <section className="box ">
                    <header className="panel_header">
                      <h2 className="title float-left">Invoice Cleared</h2>
                    </header>
                    <div className="content-body">
                      {" "}
                      <div className="row">
                        <div className="col-12">
                          <div className="chart-container">
                            <Bar data={data2} height={300} options={options2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="col-12 col-lg-6 col-md-6">
                  <section className="box ">
                    <header className="panel_header">
                      <h2 className="title float-left">Earnings</h2>
                    </header>
                    <div className="content-body">
                      <div className="row">
                        <div className="col-12">
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Sales</th>
                                <th>Status</th>
                                <th>Progress</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Austin Peake</td>
                                <td>43421</td>
                                <td>Approved</td>
                                <td>
                                  <span className="playlist_song1">
                                    <div
                                      className="chart-area"
                                      style={{
                                        height: 40 + "px",
                                        width: 80 + "px",
                                        marginTop: "-5px",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      <Bar
                                        data={playlistCharts.data}
                                        options={playlistCharts.options}
                                      />
                                    </div>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Carl Roberts</td>
                                <td>45301</td>
                                <td>Approved</td>
                                <td>
                                  <span className="playlist_song1">
                                    <div
                                      className="chart-area"
                                      style={{
                                        height: 40 + "px",
                                        width: 80 + "px",
                                        marginTop: "-5px",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      <Bar
                                        data={playlistCharts2.data}
                                        options={playlistCharts2.options}
                                      />
                                    </div>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Gavin Powell</td>
                                <td>64443</td>
                                <td>Approved</td>
                                <td>
                                  <span className="playlist_song1">
                                    <div
                                      className="chart-area"
                                      style={{
                                        height: 40 + "px",
                                        width: 80 + "px",
                                        marginTop: "-5px",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      <Bar
                                        data={playlistCharts3.data}
                                        options={playlistCharts3.options}
                                      />
                                    </div>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Isaac Morgan</td>
                                <td>75632</td>
                                <td>Approved</td>
                                <td>
                                  <span className="playlist_song1">
                                    <div
                                      className="chart-area"
                                      style={{
                                        height: 40 + "px",
                                        width: 80 + "px",
                                        marginTop: "-5px",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      <Bar
                                        data={playlistCharts4.data}
                                        options={playlistCharts4.options}
                                      />
                                    </div>
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
