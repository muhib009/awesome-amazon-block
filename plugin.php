<?php
/**
 * Plugin Name:       Awesome Amazon Block
 * Description:       Amazon Product Review Block Plugins for WordPress.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Muhibul Haque
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       awesome-amazon-block
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [aab] && [AAB] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class AAB_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->aab_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'aab_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'aab_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'aab_register_block_category' ], 10, 2 );
		}

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'aab_external_libraries' ] );
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function aab_define_constants() {
		define( 'AAB_VERSION', '1.0.0' );
		define( 'AAB_URL', plugin_dir_url( __FILE__ ) );
		define( 'AAB_INC_URL', AAB_URL . 'includes/' );		
	}

	/**
	 * Blocks Registration 
	 */

	public function aab_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function aab_blocks_init() {
		// register single block
		$this->aab_register_block( 'amz-product-review' );
	}

	/**
	 * Register Block Category
	 */

	public function aab_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'aab',
					'title' => __( 'AAB Categories', 'aab' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function aab_external_libraries() {
		// enqueue JS
		if(!is_admin() && has_block('aab/amz-product-review')){
			wp_enqueue_script( 'aab-main', AAB_INC_URL . 'js/plugin.js', array('jquery','aab-rater'), AAB_VERSION, true );
			wp_enqueue_script( 'aab-rater', AAB_INC_URL . 'js/rater.min.js', array('jquery'), AAB_VERSION, true );
		}
	}

}

/**
 * Kickoff
*/

AAB_BLOCKS_CLASS::init();
