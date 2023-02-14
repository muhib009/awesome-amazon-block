<?php

// Frontend Styles

function amz_frontend_styles( $attributes ){
    $handle = $attributes['id'];
    $css = '';

    if(!empty($attributes['containerBg'])){
        $css .= ".wp-block-aab-amz-product-review.$handle {";            
            $css .= "background:{$attributes['containerBg']};";          
        $css .= "}";
    }

    if(!empty($attributes['containerBorder']['width'] !== "0px")){
        $css .= ".wp-block-aab-amz-product-review.$handle {";
            $css .= "border:{$attributes['containerBorder']['width']} {$attributes['containerBorder']['color']} {$attributes['containerBorder']['style']};";
        $css .= "}";
    }

    if(!empty($attributes['containerBorderRadius'] !== 0)){
        $css .= ".wp-block-aab-amz-product-review.$handle {";
            $css .= "border-radius:{$attributes['containerBorderRadius']}px;";
        $css .= "}";
    }

    $image_height = !empty($attributes['imageHeight']) ? $attributes['imageHeight'] : '';
    $image_width = !empty($attributes['imageWidth']) ? $attributes['imageWidth'] : '';
    $image_border = !empty($attributes['photoBorder']) ? $attributes['photoBorder'] : '';

    if(!empty($image_height !== 0)){
        $css .= ".review-image img {";
            $css .= "height:{$image_height}px!important;";
            $css .= "width:{$image_width}px!important;";
            if(!empty($attributes['photoBorder']['width'] !== "0px")){
            $css .= "border:{$image_border['width']} {$image_border['style']} {$image_border['color']};";
            }
            $css .= "}";
    }
    
    $css .= ".amazon-review-block .star-rating {";
        $css .= "color:{$attributes['starRatingColor']};";
    $css .= "}";
        
    $reviewFontSize = !empty($attributes['ReviewTextFontSize']) ? $attributes['ReviewTextFontSize'] : '';
    $css .= ".rating-count p {";
        $css .= "color:{$attributes['reviewTextColor']}!important;";
        $css .= "font-size:{$reviewFontSize}px;";
    $css .= "}";
        
    $css .= ".review-text h3 {";
        $css .= "color:{$attributes['headingFontColor']};";
    $css .= "}";
        
    $css .= ".product-features li {";
        $css .= "color:{$attributes['featuresColor']};";
        $css .= "font-size:{$attributes['featuresFontSize']}px;";
    $css .= "}";

    $css .= ".abb-product-price {";
        $css .= "color:{$attributes['pricingColor']};";
        $css .= "font-size:{$attributes['pricingFontSize']}px;";
    $css .= "}";

    $button_background = !empty($attributes['buttonBackground']) ? $attributes['buttonBackground'] : '';
    $button_font_color = !empty($attributes['buttonFontColor']) ? $attributes['buttonFontColor'] : '';
    $button_font_size = !empty($attributes['buttonFontSize']) ? $attributes['buttonFontSize'] : '';
    $button_border = !empty($attributes['buttonBorder']) ? $attributes['buttonBorder'] : '';

    $css .= ".amazon-button {";
        $css .= "background:{$button_background}!important;";
        $css .= "color:{$button_font_color};";
        $css .= "font-size:{$button_font_size}px;";
        $css .= "border:{$button_border['width']} {$button_border['style']} {$button_border['color']}!important;";
    $css .= "}";

    $button_hover_background = !empty($attributes['buttonHoverBackground']) ? $attributes['buttonHoverBackground'] : '';
    $button_hover_font_color = !empty($attributes['buttonHoverFontColor']) ? $attributes['buttonHoverFontColor'] : '';


    $css .= ".amazon-button:hover {";
        $css .= "background:{$button_hover_background}!important;";
        $css .= "color:{$button_hover_font_color}!important;";
    $css .= "}";

   
   

    return $css;
}