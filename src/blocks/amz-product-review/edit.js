import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ColorPalette,
	ToolbarGroup,
	ToolbarButton,
	Button,
	TextControl,
	RangeControl,
	TabPanel,
} from '@wordpress/components';

import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const { Fragment } = wp.element;

// editor style
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		color,
		reviewHeading,
		photo,
		colors,
		featureList,
		productRating,
		reviewRatingNumber,
		productPrice,
		buttonLabel,
	} = attributes;

	return (
		<Fragment>
			{photo && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									photo: media,
								})
							}
							allowedTypes={['image']}
							value={photo && photo.id}
							render={({ open }) => (
								<ToolbarButton
									onClick={open}
									label="Edit"
									icon="edit"
								/>
							)}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					tabs={[
						{
							name: 'aab_settings_tab',
							title: __('Settings', 'awesome-amazon-block'),
							className: 'aab-setting aab-general',
						},
						{
							name: 'aab_advanced_tab',
							title: __('Advanced', 'awesome-amazon-block'),
							className: 'aab-advanced aab-general',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'aab_settings_tab') {
							return (
								<div className="aab-tab-content">
									<PanelBody
										title={__(
											'General Settings',
											'awesome-amazon-block'
										)}
										initialOpen={true}
									>
										<p className="custom__editor__label">
											{__(
												'Text Color',
												'awesome-amazon-block'
											)}
										</p>
										<ColorPalette
											colors={colors}
											value={color}
											onChange={(newColor) =>
												setAttributes({
													color: newColor,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title="Image Settings"
										initialOpen={false}
									></PanelBody>
									<PanelBody
										title="Rating Settings"
										initialOpen={false}
									>
										<RangeControl
											label="Total Rating"
											value={productRating}
											onChange={(rating) =>
												setAttributes({
													productRating: rating,
												})
											}
											min={0}
											max={5}
											step={0.5}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Feature Settings',
											'awesome-amazon-block'
										)}
										initialOpen={false}
									>
										<div className="new-feature-list">
											{featureList &&
												featureList.map(
													(item, index) => {
														return (
															<div key={index}>
																<TextControl
																	value={
																		item.feature
																	}
																	onChange={(
																		value
																	) => {
																		const newTitles =
																			[
																				...featureList,
																			];
																		newTitles[
																			index
																		].feature =
																			value;
																		setAttributes(
																			{
																				featureList:
																					newTitles,
																			}
																		);
																	}}
																/>
															</div>
														);
													}
												)}

											<div className="new-feature-button">
												<button
													onClick={() =>
														setAttributes({
															featureList: [
																...featureList,
																{
																	id:
																		featureList.length +
																		1,
																	feature:
																		'Lorem Ipsum Feature',
																},
															],
														})
													}
												>
													{__(
														'Add A Feature',
														'awesome-amazon-block'
													)}
												</button>
											</div>
										</div>
									</PanelBody>
									<PanelBody
										title="Pricing Settings"
										initialOpen={false}
									>
										Price Settings
									</PanelBody>
									<PanelBody
										title="Button Settings"
										initialOpen={false}
									>
										Button Settings
									</PanelBody>
								</div>
							);
						} else if (tab.name === 'aab_advanced_tab') {
							return (
								<div>
									<PanelBody
										title="Rating"
										initialOpen={false}
									>
										<RangeControl
											label="Total Rating"
											value={productRating}
											onChange={(rating) =>
												setAttributes({
													productRating: rating,
												})
											}
											min={1}
											max={5}
											step={0.5}
										/>
									</PanelBody>
								</div>
							);
						}
					}}
				</TabPanel>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="amazon-review-block">
					<div className="review-image">
						{photo ? (
							<img
								src={photo.url}
								alt={photo.alt ? photo.alt : reviewHeading}
							/>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											photo: media,
										})
									}
									allowedTypes={['image']}
									value={photo && photo.id}
									render={({ open }) => (
										<Button
											onClick={open}
											variant="secondary"
											icon="upload"
											className="scb-image-upload-btn"
										>
											{__(
												'Add Image',
												'simple-card-block'
											)}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}

						{productRating ? (
							<div className="star-rating">
								<Rater
									total={5}
									rating={productRating}
									interactive={false}
								/>
							</div>
						) : (
							''
						)}

						<div className="rating-count">
							<RichText
								tagName="p"
								value={reviewRatingNumber}
								onChange={(value) =>
									setAttributes({
										reviewRatingNumber: value,
									})
								}
								placeholder={__(
									'Rating Number',
									'awesome-amazon-block'
								)}
							/>
						</div>
					</div>
					<div className="review-text">
						<RichText
							tagName="h3"
							value={reviewHeading}
							onChange={(value) =>
								setAttributes({ reviewHeading: value })
							}
						/>

						<div className="product-features">
							{featureList &&
								featureList.map((feature, index) => {
									return (
										<li key={index}>{feature.feature}</li>
									);
								})}
						</div>
						<div className="aab-pricing-section">
							<div className="abb-product-price">
								<RichText
									value={productPrice}
									onChange={(value) =>
										setAttributes({ productPrice: value })
									}
								/>
							</div>
							<div className="abb-price-button">
								<RichText
									className="amazon-button"
									value={buttonLabel}
									onChange={(value) =>
										setAttributes({ buttonLabel: value })
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
