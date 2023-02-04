// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { photo, reviewHeading, featureList } = attributes;
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
					<div className="star-rating">*****</div>
					<div className="rating-count">43120 Reviews</div>
				</div>
				<div className="review-text">
					<RichText.Content value={reviewHeading} tagName="h3" />
					<div className="product-features">
						{featureList &&
							featureList.map((feature, index) => {
								return <li key={index}>{feature.feature}</li>;
							})}
					</div>
				</div>
			</div>
		</div>
	);
}
