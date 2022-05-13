const data = [
  { id: 1, date: "2022-05-01", amount: 100 },
  { id: 2, date: "2022-05-02", amount: 200 },
  { id: 3, date: "2022-05-10", amount: 300 }
];
const cellClass = "text-center border-b border-neutral-400 p-4";
export default function(React) {
  return function(props) {
    const visibleData = props.date ? data.filter((d) => d.date === props.date) : data;
    return /* @__PURE__ */ React.createElement("div", null, "FilteredTableWidget", /* @__PURE__ */ React.createElement("table", {
      className: "border-collapse table-auto w-full"
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
      className: cellClass
    }, "Date"), /* @__PURE__ */ React.createElement("th", {
      className: cellClass
    }, "Amount"))), /* @__PURE__ */ React.createElement("tbody", null, visibleData.map((d) => /* @__PURE__ */ React.createElement("tr", {
      key: d.id
    }, /* @__PURE__ */ React.createElement("td", {
      className: cellClass
    }, d.date), /* @__PURE__ */ React.createElement("td", {
      className: cellClass
    }, d.amount))))));
  };
}
