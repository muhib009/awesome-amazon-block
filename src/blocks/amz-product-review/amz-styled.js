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
		${(props) =>
			`border: ${props.photoBorder.width} ${props.photoBorder.style} ${props.photoBorder.color};`}
	}

	.star-rating .react-rater-star.is-active {
		color: ${(props) => props.starRatingColor};
	}

	.react-rater-star.is-active-half:before {
		color: ${(props) => props.starRatingColor};
	}

	.rating-count p {
		color: ${(props) => props.reviewTextColor};
	}

	.review-text h3 {
		color: ${(props) => props.headingFontColor};
		font-size: ${(props) => props.headingFontSize}px;
	}

	.product-features li {
		color: ${(props) => props.featuresColor};
		font-size: ${(props) => props.featuresFontSize}px;
	}

	.abb-product-price {
		color: ${(props) => props.pricingColor};
		font-size: ${(props) => props.pricingFontSize}px;
	}

	.amazon-button {
		background: ${(props) => props.buttonBackground}!important;
		color: ${(props) => props.buttonFontColor};
		font-size: ${(props) => props.buttonFontSize}px;
		${(props) =>
			`border: ${props.buttonBorder.width} ${props.buttonBorder.style} ${props.buttonBorder.color}!important;`}
	}

	.amazon-button:hover {
		background: ${(props) => props.buttonHoverBackground}!important;
		color: ${(props) => props.buttonHoverFontColor}!important;
	}
`;

export default AmzStyles;
