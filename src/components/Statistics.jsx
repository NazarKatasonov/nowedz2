import React from "react";

function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) {
  return (
    <div>
      <p>гуд: {good}</p>
      <p>нейтр: {neutral}</p>
      <p>поганко: {bad}</p>
      <p>тотально: {total}</p>
      <p>пазітів: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;