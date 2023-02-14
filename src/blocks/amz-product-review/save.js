//import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		id,
		photo,
		reviewHeading,
		featureList,
		reviewRatingNumber,
		productRating,
		buttonLabel,
		buttonUrl,
		productPrice,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: id,
			})}
		>
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
						<InnerBlocks.Content />
					</div>
					<div className="aab-pricing-section">
						<div className="abb-product-price">
							<RichText.Content value={productPrice} />
						</div>
						<div className="abb-price-button">
							{buttonUrl && buttonLabel && (
								<a href={buttonUrl} className="amazon-button">
									<RichText.Content value={buttonLabel} />
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
