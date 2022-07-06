"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const NavItemStyle = (0, styled_components_1.default)(react_router_dom_1.Link) `
    //Parent
    display: inline-block;
    color: ${props => props.theme.primary};
    font-weight: bold;
    height:auto;
    transition:color 0.2s ease-out;
    &:hover, &:active {
        color:${props => props.theme.accent};
        transition:color 0.2s ease-out;
    }

    // icon
    .icon{
      display:inline-block;
      color:currentColor;
      vertical-align: middle;
    }

    // text
    .text{
      display:none;
      color:currentColor;
      vertical-align:align-middle;
    }

    // Tablets and up
    @media screen AND (min-width:768px){
      margin-bottom:1.25rem;
      display:block;

      .icon{
        padding-right:0.5rem;
      }
      .text{
        display:inline-block;
      }

    }
  `;
exports.default = NavItemStyle;
//# sourceMappingURL=NavItemStyle.js.map