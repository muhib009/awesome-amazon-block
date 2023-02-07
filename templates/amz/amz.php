<?php

// Frontend Styles

function amz_frontend_styles( $attributes ){
    
    $handle = $attributes['id'];
    $css = '';

    if(!empty($attributes['containerBg'])){
        $css .= ".wp-block-aab-amz-product-review.$handle {";            
            $css .= "background:{$attributes['containerBg']};";
            if(!empty($attributes['containerBorder']['width'] !== "0px")){
                $css .= "border:{$attributes['containerBorder']['width']} {$attributes['containerBorder']['color']} {$attributes['containerBorder']['style']};";
            }
            if(!empty($attributes['containerBorderRadius'] !== 0)){
                $css .= "border-radius:{$attributes['containerBorderRadius']}px;";
            }
               
        $css .= "}";
    }

   

    return $css;
}