"use client";

import React from "react";

export const InputField = ({ label, type = "text", placeholder, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    </div>
  );
};

export const TextAreaField = ({ label, placeholder, rows = 4, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      ></textarea>
    </div>
  );
};

export const SelectField = ({ label, options = [], ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const CheckboxField = ({ label, ...props }) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        {...props}
      />
      {label && (
        <label className="ml-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
};

export const RadioField = ({ label, name, options = [], ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <p className="block text-sm font-medium text-gray-700 mb-1">{label}</p>
      )}
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-1">
          <input
            type="radio"
            name={name}
            value={option.value}
            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            {...props}
          />
          <label className="ml-2 text-sm font-medium text-gray-700">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};
