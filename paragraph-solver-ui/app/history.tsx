"use client";

import React from "react";
import { History } from "./questions";

export default function HistoryComponent(props: { history: History[] }) {
  return (
    <div className="flex-row items-center px-3 py-2 bg-gray-50 mt-2 border-l-8 border-gray-300 border-lg max-h-96 overflow-auto">
      <h1 className="text-2xl text-center font-bold underline text-gray-600">
        History
      </h1>
      {props.history.map((h: History, idx) => (
        <div
          key={idx}
          className="mt-2 mb-2 text-gray-600 bg-gray-200 p-1 border-gray-300 border-l-8"
        >
          <p>
            <label className="font-bold underline">Question</label> {": " + h.q}
          </p>
          <p>
            <label className="font-bold underline">Answer</label> {": " + h.a}
          </p>
        </div>
      ))}
    </div>
  );
}
