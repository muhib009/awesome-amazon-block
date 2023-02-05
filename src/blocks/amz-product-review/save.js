//import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		photo,
		reviewHeading,
		featureList,
		reviewRatingNumber,
		productRating,
		buttonLabel,
		productPrice,
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="amazon-review-block">
				<div className="review-image">
					{photo && (
						<img
							src={photo.url}
							alt={photo.alt ? photo.alt : reviewHeading}
						/>
					)}
					{productRating ? (
						<div className="star-rating">
							<div
								className="rating"
								data-rate-value={productRating}
							></div>
						</div>
					) : (
						''
					)}

					{reviewRatingNumber && (
						<div className="rating-count">
							<RichText.Content
								value={reviewRatingNumber}
								tagName="p"
							/>
						</div>
					)}
				</div>

				<div className="review-text">
					<RichText.Content value={reviewHeading} tagName="h3" />
					<div className="product-features">
						{featureList &&
							featureList.map((feature, index) => {
								return <li key={index}>{feature.feature}</li>;
							})}
					</div>
					<div className="aab-pricing-section">
						<div className="abb-product-price">
							<RichText.Content value={productPrice} />
						</div>
						<div className="abb-price-button">
							<RichText.Content
								tagName="div"
								className="amazon-button"
								value={buttonLabel}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
