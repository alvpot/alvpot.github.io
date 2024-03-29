export default function(React) {
  return function(props) {
    const [date, setDate] = React.useState(props.date || "");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (props.onChangeDate)
        props.onChangeDate(date);
    };
    return /* @__PURE__ */ React.createElement("div", null, "DateInputWidget", /* @__PURE__ */ React.createElement("form", {
      className: "mt-4 flex items-center justify-between",
      onSubmit: handleSubmit
    }, /* @__PURE__ */ React.createElement("input", {
      className: "border border-neutral-600 rounded p-2 flex-1 mr-4",
      name: "date",
      type: "date",
      value: date,
      onChange: (e) => setDate(e.currentTarget.value)
    }), /* @__PURE__ */ React.createElement("button", {
      className: "rounded-md bg-neutral-600 px-4 py-2 border text-neutral-50",
      type: "submit"
    }, "Set date")));
  };
}
