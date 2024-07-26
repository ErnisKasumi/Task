import React from "react";
import "./Itemlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRuler,
  faLanguage,
  faMagnifyingGlass,
  faBusinessTime,
  faLightbulb,
  faIdBadge,
  faAslInterpreting,
  faSearch,
  faMarsAndVenus,
  faSpaghettiMonsterFlying,
  faSortAlphaDesc,
  faTeletype,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
const items = [
  {
    title: "The TLD",
    description:
      "Does the domain extension match the language of the domain name?",
    icon: <FontAwesomeIcon icon={faBusinessTime} size="xs" />,
  },
  {
    title: "Domain Length",
    description: "Is the domain short enough to remember?",
    icon: <FontAwesomeIcon icon={faRuler} />,
  },
  {
    title: "Language",
    description: "How complex is the actual domain name?",
    icon: <FontAwesomeIcon icon={faLanguage} />,
  },
  {
    title: "International Recognition",
    description: "Can the domain name be used on an international scale?",
    icon: <FontAwesomeIcon icon={faAslInterpreting} />,
  },
  {
    title: "Search Engine",
    description: "Does the domain follow search engine guidelines?",
    icon: <FontAwesomeIcon icon={faSearch} />,
  },
  {
    title: "Advertising Potential",
    description: "Could the domain be used for advertising campaigns?",
    icon: <FontAwesomeIcon icon={faSpaghettiMonsterFlying} />,
  },
  {
    title: "Sales Opportunities",
    description: "Can the domain name be used on an international scale?",
    icon: <FontAwesomeIcon icon={faSortAlphaDesc} />,
  },
  {
    title: "Typo Susceptibility",
    description: "How high is the risk of mistyping the domain name?",
    icon: <FontAwesomeIcon icon={faTeletype} />,
  },
  {
    title: "Business Potential",
    description: "Can the domain be used as your company address?",
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
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
