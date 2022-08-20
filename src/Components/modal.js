import React from "react";
import "./main.css";
import ReactDOM from "react-dom";
import style from "styled-components";

const Modal = ({ visible, children, height, width }) =>
  visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <ModalContent height={height} width={width} className="flex flex-col">
            <div className="flex-3 h-full overflow-y-auto">{children}</div>
          </ModalContent>
        </div>,
        document.body
      )
    : null;

const ModalContent = style.div`
    background-color: white;
    width: 100%; 
    max-width: ${(props) => (props.width ? props.width : "840px")}; 
    height: ${(props) => (props.height ? props.height : "50%")}; 
    margin: auto; /* Auto margin according to the element width */
    border-radius: 5px; /* Optional. Rounds container corners */

    @media screen and (max-width: 798px){
      max-width: 90%;
    }
`;

export default Modal;
