import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	InnerBlocks,
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
const ALLOWED_BLOCKS = ['core/list'];

const MY_TEMPLATE = [
	[
		'core/list',
		{
			title: 'List Goes Here',
			name: 'core/list-item',
			ancestor: ['core/list'],
		},
	],
];
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
		photoBorder,
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
		featuresColor,
		featuresFontSize,
		headingFontSize,
		pricingFontSize,
		pricingColor,
		buttonUrl,
		buttonBackground,
		buttonFontColor,
		buttonFontSize,
		buttonBorder,
		buttonHoverBackground,
		buttonHoverFontColor,
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
											onChange={(value) =>
												setAttributes({
													imageHeight: value,
												})
											}
											min={0}
											max={300}
											step={1}
											allowReset={true}
											resetFallbackValue={''}
										/>

										<RangeControl
											label="Image Width"
											value={imageWidth}
											onChange={(value) =>
												setAttributes({
													imageWidth: value,
												})
											}
											min={0}
											max={300}
											step={1}
											allowReset={true}
											resetFallbackValue={''}
										/>

										<BorderControl
											label={__(
												'Image Border',
												'awesome-amazon-block'
											)}
											onChange={(value) =>
												setAttributes({
													photoBorder: value,
												})
											}
											value={photoBorder}
											unit={false}
											withSlider={true}
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
										<ColorControl
											label={__(
												'Features Font Color',
												'awesome-amazon-block'
											)}
											colorValue={featuresColor}
											colorName="featuresColor"
											setAttributes={setAttributes}
										/>
										<RangeControl
											label="Features Font Size"
											value={featuresFontSize}
											onChange={(value) =>
												setAttributes({
													featuresFontSize: value,
												})
											}
											min={1}
											max={100}
											step={1}
										/>
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
										<ColorControl
											label={__(
												'Button Background Hover Color',
												'awesome-amazon-block'
											)}
											colorValue={buttonHoverBackground}
											colorName="buttonHoverBackground"
											setAttributes={setAttributes}
										/>
										<ColorControl
											label={__(
												'Button Hover Font Color',
												'awesome-amazon-block'
											)}
											colorValue={buttonHoverFontColor}
											colorName="buttonHoverFontColor"
											setAttributes={setAttributes}
										/>
										<BorderControl
											label={__(
												'Button Border',
												'awesome-amazon-block'
											)}
											onChange={(value) =>
												setAttributes({
													buttonBorder: value,
												})
											}
											value={buttonBorder}
											unit={false}
											withSlider={true}
										/>
										<RangeControl
											label="Button Font Size"
											className="aab-gap"
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
									></PanelBody>
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
				photoBorder={photoBorder}
				starRatingColor={starRatingColor}
				reviewTextColor={reviewTextColor}
				ReviewTextFontSize={ReviewTextFontSize}
				headingFontColor={headingFontColor}
				headingFontSize={headingFontSize}
				featuresColor={featuresColor}
				featuresFontSize={featuresFontSize}
				pricingColor={pricingColor}
				pricingFontSize={pricingFontSize}
				buttonFontSize={buttonFontSize}
				buttonFontColor={buttonFontColor}
				buttonBackground={buttonBackground}
				buttonBorder={buttonBorder}
				buttonHoverFontColor={buttonHoverFontColor}
				buttonHoverBackground={buttonHoverBackground}
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
							<InnerBlocks
								allowedBlocks={ALLOWED_BLOCKS}
								template={MY_TEMPLATE}
							/>
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
