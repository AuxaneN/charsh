"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const CharacterCardStyle = styled_components_1.default.div `
  height:auto;
  padding:12px 12px;
  margin:24px;
  box-shadow:${props => props.theme.shadowHigh};
  border-radius:${props => props.theme.radiusMd};
  color:${props => props.theme.hoverPrimary};
  transition: all 0.3s ease-out;
  display:inline-block;
  width:200px;
  line-height:0px;
  vertical-align:middle;
  
  &:hover{
    color:white;
    cursor:pointer;
    box-shadow:${props => props.theme.shadowLow};
    background:${props => props.theme.hoverPrimary};
    transition: all 0.3s ease-out;
  }

  .picture{
    display:inline-block;
    vertical-align:middle;
    margin-right:12px;
    background:lightgray;
    height:60px;
    width:60px;
    border-radius:100%;
  }
`;
exports.default = CharacterCardStyle;
//# sourceMappingURL=CharacterCardStyle.js.map