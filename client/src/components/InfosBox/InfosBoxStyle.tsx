import styled from "styled-components";

const InfosBoxStyle = styled.div`
  border-radius: ${(props) => props.theme.radiusLg};
  background: white;
  box-shadow: ${(props) => props.theme.shadowHigh};
  width: 80vw;
  max-width: 500px;
  min-width: 200px;
  padding: 1rem;
  z-index: 20;
  position: absolute;
  .content,
  .personality {
    /*Lazy so we flex*/
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    text-align: center;
    gap: 1rem;
  }
  .content {
    margin-bottom: 1.5rem;
  }
  .personality {
    margin-top: 1.5rem;
  }
  .info,
  .about,
  .qualities,
  .flaws {
    width: auto;
  }

  p.info-item,
  p.about-item {
    padding: 0px;
    margin: 0px;
    line-height: 1.6rem;
    color: rgba(156, 163, 175, 1);
  }
  .qualities h3 {
    color: rgba(52, 211, 153, 1);

    line-height: 1.3rem;
    text-align: center;
  }

  .flaws h3 {
    line-height: 1.3rem;
    color: rgba(239, 68, 68, 1);
    text-align: center;
  }
  .flaws,
  .qualities {
    text-align: center;
  }
  h3 {
    font-weight: 900;
    color: ${(props) => props.theme.hoverPrimary};
    font-size: 1.6rem;
    text-align: center;
  }
  h4 {
    font-weight: 600;
    color: rgba(75, 85, 99, 1);
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 0.5rem;
  }
  hr {
    color: rgba(0, 0, 0, 0.05);
  }

  /* Media query */
  @media screen AND (min-width: 768px) {
    .content,
    .personality {
      justify-items: space-between;
      flex-direction: row;
    }

    /*Pushing the text where we need it*/
    .about {
      text-align: right;
    }
    .info {
      text-align: left;
    }
    h3 {
      text-align: left;
      margin-bottom: 1.2rem;
    }
    .info,
    .about,
    .qualities,
    .flaws {
      width: 50%;
    }
  }
`;

export default InfosBoxStyle;
