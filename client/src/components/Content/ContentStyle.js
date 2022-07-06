"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ContentStyle = styled_components_1.default.div `
    padding: 1.5rem;
    vertical-align: top;
    flex: 1 1 auto; 
    height: 100vh;

    // Tablets and up
    @media screen AND (min-width:768px){
    }
  `;
exports.default = ContentStyle;
//# sourceMappingURL=ContentStyle.js.map