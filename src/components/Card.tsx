import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  discount?: number;
  amount: number;
}

function Card(props: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {props.image && (
        <div className="mb-4">
          <img
            src={props.image}
            alt={props.title}
            className="w-full rounded-lg"
          />
        </div>
      )}
      <h2 className="text-xl font-semibold mb-2">{props.image}</h2>
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
}

export default Card;
