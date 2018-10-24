/* global tw */
import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Trianglify from "trianglify";

const Wrapper = styled.a`
  width: 100%;
  ${tw(
    "shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white"
  )};
  background: ${props => props.bg};
  background-image: ${props => props.bgImage};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  ${tw("opacity-75 font-sans text-sm md:text-base")};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw(
    "text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const ProjectCard = ({ title, link, children, bg, bgImage }) => (
  <Wrapper
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    bg={bg}
    bgImage={bgImage}
  >
    <Text>{children}</Text>
    <Title>{title}</Title>
  </Wrapper>
);

export const TrianglifyCard = ({ title, link, children, cols }) => {
  const colors = cols || ["#121212", "#4b2e83", "#85754d"];
  const svg = Trianglify({
    width: 900,
    height: 500,
    cell_size: 50,
    x_colors: colors
  }).svg();

  var s = new XMLSerializer();
  var svgString = s.serializeToString(svg);

  const btoa = window
    ? window.btoa
    : x => new Buffer(x, "base64").toString("binary");

  const svg64 = btoa(svgString);

  return (
    <ProjectCard
      title={title}
      link={link}
      children={children}
      bgImage={`url("data:image/svg+xml;base64,${svg64}")`}
      bg={""}
    />
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  bg: PropTypes.string.isRequired
};
