import styled from "styled-components";

const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.div`
  width: 23%;
`;
const Price = styled.div`
  width: 23%;
`;
const Quantity = styled.div`
  width: 23%;
  display: flex;
`;
const Arrow = styled.span`
  cursor: pointer;
`;
const Value = styled.div`
  margin: 0 10px;
`;
const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;

export {
  CheckOutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  Price,
};
