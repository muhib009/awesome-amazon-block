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

    if(!empty($attributes['imageHeight'] !== 0)){
        $css .= ".review-image img {";
            $css .= "height:{$attributes['imageHeight']}px!important;";
            $css .= "width:{$attributes['imageWidth']}px!important;";
            if(!empty($attributes['photoBorder']['width'] !== "0px")){
            $css .= "border:{$attributes['photoBorder']['width']} {$attributes['photoBorder']['style']} {$attributes['photoBorder']['color']};";
            }
            $css .= "}";
    }
    
    $css .= ".amazon-review-block .star-rating {";
        $css .= "color:{$attributes['starRatingColor']};";
    $css .= "}";
        
    $css .= ".rating-count p {";
        $css .= "color:{$attributes['reviewTextColor']}!important;";
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

    $css .= ".amazon-button {";
        $css .= "background:{$attributes['buttonBackground']}!important;";
        $css .= "color:{$attributes['buttonFontColor']};";
        $css .= "font-size:{$attributes['buttonFontSize']}px;";
        $css .= "border:{$attributes['buttonBorder']['width']} {$attributes['buttonBorder']['style']} {$attributes['buttonBorder']['color']}!important;";
    $css .= "}";

    $css .= ".amazon-button:hover {";
        $css .= "background:{$attributes['buttonHoverBackground']}!important;";
        $css .= "color:{$attributes['buttonHoverFontColor']}!important;";
    $css .= "}";

   
   

    return $css;
}