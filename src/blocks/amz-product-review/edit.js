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
	ToolbarGroup,
	ToolbarButton,
	Button,
	TextControl,
	RangeControl,
	TabPanel,
	__experimentalBorderControl as BorderControl,
} from '@wordpress/components';

import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import AmzStyles from './amz-styled';

const { Fragment } = wp.element;

// editor style
import './editor.scss';

import ColorControl from '../../utilities/components/colorcontrol/colorcontrol';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		containerBg,
		containerBorder,
		containerBorderRadius,
		reviewHeading,
		photo,
		featureList,
		productRating,
		reviewRatingNumber,
		productPrice,
		buttonLabel,
		imageHeight,
		imageWidth,
		starRatingColor,
		ReviewTextFontSize,
		reviewTextColor,
		headingFontColor,
		headingFontSize,
		pricingFontSize,
		pricingColor,
		buttonUrl,
		buttonBackground,
		buttonFontColor,
		buttonFontSize,
	} = attributes;

	setAttributes({
		id: 'amz-' + clientId.slice(0, 8),
	});
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
										<ColorControl
											label={__(
												'Background Color',
												'awesome-amazon-block'
											)}
											colorValue={containerBg}
											colorName="containerBg"
											setAttributes={setAttributes}
										/>
										<BorderControl
											label={__(
												'Border',
												'awesome-amazon-block'
											)}
											onChange={(value) =>
												setAttributes({
													containerBorder: value,
												})
											}
											value={containerBorder}
											unit={false}
											withSlider={true}
										/>
										<RangeControl
											label="Border Radius"
											className="aab-gap"
											value={containerBorderRadius}
											onChange={(rating) =>
												setAttributes({
													containerBorderRadius:
														rating,
												})
											}
											min={0}
											max={100}
											step={1}
										/>
									</PanelBody>
									<PanelBody
										title="Image Settings"
										initialOpen={false}
									>
										<div className="scb-heading">
											{__(
												'Image Size',
												'simple-card-block'
											)}
										</div>

										<RangeControl
											label="Image Height"
											value={imageHeight}
											onChange={(rating) =>
												setAttributes({
													imageHeight: rating,
												})
											}
											min={0}
											max={300}
											step={1}
										/>

										<RangeControl
											label="Image Width"
											value={imageWidth}
											onChange={(rating) =>
												setAttributes({
													imageWidth: rating,
												})
											}
											min={0}
											max={300}
											step={1}
										/>
									</PanelBody>
									<PanelBody
										title="Rating Settings"
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Rating Color',
												'awesome-amazon-block'
											)}
											colorValue={starRatingColor}
											colorName="starRatingColor"
											setAttributes={setAttributes}
										/>
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
											'Review Text Settings',
											'awesome-amazon-block'
										)}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Review Text Color',
												'awesome-amazon-block'
											)}
											colorValue={reviewTextColor}
											colorName="reviewTextColor"
											setAttributes={setAttributes}
										/>
										<RangeControl
											label="Review Text Font Size"
											value={ReviewTextFontSize}
											onChange={(value) =>
												setAttributes({
													ReviewTextFontSize: value,
												})
											}
											min={1}
											max={100}
											step={1}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Heading Settings',
											'awesome-amazon-block'
										)}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Heading Font Color',
												'awesome-amazon-block'
											)}
											colorValue={headingFontColor}
											colorName="headingFontColor"
											setAttributes={setAttributes}
										/>
										<RangeControl
											label="Heading Font Size"
											value={headingFontSize}
											onChange={(value) =>
												setAttributes({
													headingFontSize: value,
												})
											}
											min={1}
											max={100}
											step={1}
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
															<div
																className="all-features"
																key={index}
															>
																<div className="features-list">
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
																<div className="feature-remove-button">
																	<button
																		onClick={() =>
																			setAttributes(
																				{
																					featureList:
																						featureList.filter(
																							(
																								item,
																								i
																							) =>
																								i !==
																								index
																						),
																				}
																			)
																		}
																		className="feature-remove"
																	>
																		<svg
																			clipRule="evenodd"
																			fillRule="evenodd"
																			strokeLinejoin="round"
																			strokeMiterlimit="2"
																			viewBox="0 0 24 24"
																		>
																			<path
																				d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm7.491 6.432 2.717-2.718c.146-.146.338-.219.53-.219.404 0 .751.325.751.75 0 .193-.073.384-.22.531l-2.717 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-2.728-2.728-2.728 2.728c-.147.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z"
																				fillRule="nonzero"
																			/>
																		</svg>
																	</button>
																</div>
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
										<ColorControl
											label={__(
												'Pricing Color',
												'awesome-amazon-block'
											)}
											colorValue={pricingColor}
											colorName="pricingColor"
											setAttributes={setAttributes}
										/>
										<RangeControl
											label="Pricing Font Size"
											value={pricingFontSize}
											onChange={(value) =>
												setAttributes({
													pricingFontSize: value,
												})
											}
											min={1}
											max={100}
											step={1}
										/>
									</PanelBody>
									<PanelBody
										title="Button Settings"
										initialOpen={false}
									>
										<div className="scb-heading">
											{__(
												'Button URL',
												'simple-card-block'
											)}
										</div>
										<TextControl
											label="URL"
											value={buttonUrl}
											onChange={(value) =>
												setAttributes({
													buttonUrl: value,
												})
											}
										/>
										<ColorControl
											label={__(
												'Button Background Color',
												'awesome-amazon-block'
											)}
											colorValue={buttonBackground}
											colorName="buttonBackground"
											setAttributes={setAttributes}
										/>
										<ColorControl
											label={__(
												'Button Font Color',
												'awesome-amazon-block'
											)}
											colorValue={buttonFontColor}
											colorName="buttonFontColor"
											setAttributes={setAttributes}
										/>
										<RangeControl
											label="Button Font Size"
											value={buttonFontSize}
											onChange={(value) =>
												setAttributes({
													buttonFontSize: value,
												})
											}
											min={1}
											max={100}
											step={1}
										/>
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

			<AmzStyles
				{...useBlockProps()}
				containerBg={containerBg}
				containerBorder={containerBorder}
				containerBorderRadius={containerBorderRadius}
				imageHeight={imageHeight}
				imageWidth={imageWidth}
			>
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
			</AmzStyles>
		</Fragment>
	);
}
