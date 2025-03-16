import styled from "styled-components";

import BodyMain from "./BodyMain";
import BodyNav from "./BodyNav";
import BodyLookfor from "./Body/BodyLookfor";
import Housewarming from "./Body/Housewarming";
import Category from "./Body/Category";
import Todaydeal from "./Body/Todaydeal";
import UserReview from "./Body/UserReview";
import Exhibition from "./Body/Exhibition";
import Best from "./Body/Best";

function Body() {
    return (
        <BodyContainer>
          <BodyMain/>
          <BodyNav/>
          <BodyLookfor/>
          <Housewarming/>
          <Category/>
          <Todaydeal/>
          <UserReview/>
          <Exhibition/>
          <Best/>
        </BodyContainer>
    );
  };

const BodyContainer = styled.div`
  margin-top: 150px;
  flex: 1 1 auto;
`

export default Body;