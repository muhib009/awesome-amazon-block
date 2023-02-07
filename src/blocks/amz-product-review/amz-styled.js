import styled from 'styled-components';

const AmzStyles = styled.div`
	// Container Styles

	background: ${(props) => props.containerBg};
	${(props) =>
		`border: ${props.containerBorder.width} ${props.containerBorder.style} ${props.containerBorder.color};`}
	border-radius:${(props) => props.containerBorderRadius}px;

	.review-image img {
		height: ${(props) => props.imageHeight}px!important;
		width: ${(props) => props.imageWidth}px!important;
	}
`;

export default AmzStyles;
