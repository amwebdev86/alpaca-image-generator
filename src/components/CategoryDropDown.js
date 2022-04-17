import React from "react";
import { useEffect, useState } from "react";
import { ButtonGroup,DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { GetGeneratedUUID } from "../Utils/UtilityFunctions";

function CategoryDropDown(props) {
  const [styles, setStyles] = useState([props.category.styles]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    try {
         if (styles.length !== 0) return;

         Object.values(props.category.styles).map((item) => {
           setStyles(item);
         });
 
    } catch (error) {
      //TODO: add a logger
      console.error(error);
    }
  }, [props.category]);

  useEffect(() => {
    if (!isActive) return;
    if (styles.length === 0) return;
    setIsActive(false);
  }, [isActive]);

  function Activate() {
    setIsActive(true);
  }

  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title={props.category.name.toUpperCase()}
        id="bg-nested-dropdown"
        onClick={Activate}
      >
        {styles[0].map((style) => (
          style.id = GetGeneratedUUID(),
          <DropdownItem key={style.id} eventKey={style.id}>
            {style.name}
          </DropdownItem>
        ))}
      </DropdownButton>
    </ButtonGroup>
  );
}




export default CategoryDropDown;