import styled from 'styled-components'
export const HomeDiv = styled.div`
  width: 100vw;
  padding-bottom:45px;
`;
export const GoodsImg = styled.div`
  width:100vw;
  display:flex;
  margin:5px;
  padding:5px;
`;
export const ImgDiv = styled.div`
    flex:4; 
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height:100px;
      border-radius: 50%;
    }
`;

export const FontDiv = styled.div`
  flex:6; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanDiv = styled.span`
    display: inline-block;
    width: 50px;
    height: 30px;
    text-align:center;
    line-height: 30px;
    font-size: 20px;
    background: #ccc;
    border-radius: 4px;
    margin:5px;
`;

export const BackDiv = styled.div`
  width: 35px;
  height: 35px;
  background: skyblue;
  text-align:center;
  line-height: 35px;
  border-radius:50%;
`;
