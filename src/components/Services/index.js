import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

import { useNavigate } from "react-router-dom";
const Services = () => {
  let navigate = useNavigate();
  return (
    <ServicesContainer id="services">
      <ServicesH1>Departments</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
          onClick={() => {
            navigate("/departments/computer-science");
          }}
        >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Department of Computer Sciences</ServicesH2>
        </ServicesCard>
        <ServicesCard
          onClick={() => {
            //redirect to the department page
            navigate("/departments/library-infromation-science");
          }}
        >
          <ServicesIcon src={Icon2} />
          <ServicesH2>Department of Library and Information Science</ServicesH2>
        </ServicesCard>
        <ServicesCard
          onClick={() => {
            //redirect to the department page
            navigate("/departments/infromation-systems");
          }}
        >
          <ServicesIcon src={Icon3} />
          <ServicesH2>Department of Infromation System</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
