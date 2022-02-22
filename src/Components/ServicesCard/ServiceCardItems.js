
import { FaHeartbeat, FaLongArrowAltRight } from "react-icons/fa";
import { Items,Icon,Content,H4,H2,Links } from "./ServicesCardElements";

export const ServiceCardItems = (props) => {
  const { titleText, patext } = props;
  return (
    <>
      <Items>
        <Icon>
          <FaHeartbeat />
        </Icon>
        <Content>
          <H4>{titleText}</H4>
          <H2>{patext}</H2>
          <Links href="/">READ MORE <FaLongArrowAltRight/></Links>
        </Content>
      </Items>
    </>
  );
};
