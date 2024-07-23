import React from "react";
import "./Itemlist.css";

const items = [
  {
    title: "The TLD",
    description:
      "Does the domain extension match the language of the domain name?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <circle cx="12" cy="12" r="10" fill="#3b82f6" />
        <text
          x="12"
          y="16"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          textAnchor="middle"
        >
          .com
        </text>
      </svg>
    ),
  },
  {
    title: "Domain Length",
    description: "Is the domain short enough to remember?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <rect x="5" y="11" width="14" height="2" fill="#3b82f6" />
      </svg>
    ),
  },
  {
    title: "Language",
    description: "How complex is the actual domain name?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <circle cx="12" cy="12" r="10" fill="#3b82f6" />
        <circle cx="12" cy="12" r="8" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "International Recognition",
    description: "Can the domain name be used on an international scale?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <circle cx="12" cy="12" r="10" fill="#3b82f6" />
        <path
          d="M12 6l2.5 6.5H9.5L12 6zM12 18a1 1 0 110-2 1 1 0 010 2z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    title: "Search Engine",
    description: "Does the domain follow search engine guidelines?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <circle cx="12" cy="12" r="10" fill="#3b82f6" />
        <path
          d="M10 10h4v4h-4zM14.5 14.5l2.5 2.5"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Advertising Potential",
    description: "Could the domain be used for advertising campaigns?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <path d="M2 12l20-6-6 20-8-8H2z" fill="#3b82f6" />
        <path
          d="M6 12l4 4M16 6l4 4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Sales Opportunities",
    description: "Can the domain name be used on an international scale?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <circle cx="12" cy="12" r="10" fill="#3b82f6" />
        <path
          d="M12 8v8M8 12h8"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Typo Susceptibility",
    description: "How high is the risk of mistyping the domain name?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <circle cx="12" cy="12" r="10" fill="#3b82f6" />
        <text
          x="12"
          y="16"
          fill="#fff"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          T
        </text>
      </svg>
    ),
  },
  {
    title: "Business Potential",
    description: "Can the domain be used as your company address?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
      >
        <circle cx="12" cy="12" r="10" fill="#3b82f6" />
        <path d="M10 14h4v4h-4zM10 10h4v-2h-4zM8 12v-2h8v2z" fill="#fff" />
      </svg>
    ),
  },
];

const ItemList = () => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <div key={index} className="item">
          <div className="item-icon">{item.icon}</div>
          <div className="item-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
