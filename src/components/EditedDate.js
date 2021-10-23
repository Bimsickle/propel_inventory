import dateFormat, { masks } from "dateformat";

export default function EditedDate(props) {
  const now = props.date;

  let date = dateFormat(now, "mm/dd/yyyy");

  return date;
}

///let day = props.date.getDay();
//let month = props.date.getMonth();
//let year = props.date.getFullYear();
///return `${month}/${day}/${year}`;
