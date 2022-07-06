"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const MessageStyle = styled_components_1.default.div `
    position: fixed;
    right: 0;
    padding: 1.25rem;
    margin: 0.75rem;
    background-color: ${props => props.theme.accent};
    border-radius: 0.375rem;

    // Tablets and up
    @media screen AND (min-width:768px){
    }
  `;
exports.default = MessageStyle;
//# sourceMappingURL=MessageStyle.js.map