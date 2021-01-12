<?php
/**
 * Styles issue example block plugin.
 *
 * @package   FlorianBrinkmann\StylesIssueBlock
 * @license   GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Styles issue example block
 * Version:     0.1.0
 * Author:      Florian Brinkmann
 * License:     GPL v2 http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain: styles-issue-example-block
 */

namespace FlorianBrinkmann\StylesIssueBlock;

use function defined;

use function add_action;
use function register_block_type;
use function wp_enqueue_script;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Register block script.
 */
add_action( 'init', function() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );
	wp_register_script(
		'styles-issue-example-block-editor-script',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		[ 'wp-blocks', 'wp-element', 'wp-edit-post' ],
		$asset_file['version']
	);
} );

/**
 * Enqueue block script.
 */
add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script( 'styles-issue-example-block-editor-script' );
} );

/**
 * Render tile block.
 * 
 * @param array $attributes Block attributes.
 * @param string $content 
 */
function render_callback( array $attributes, string $content ) : string {
	return '';
}

/**
 * Register dynamic block.
 */
function register_block() {
	register_block_type( 'flobn/styles-issue-block-1', [
		'attributes' => [
			'url' => [
				'type' => 'string',
				'default' => '',
			],
			'id' => [
				'type' => 'number',
				'default' => 0,
			],
		],
        'render_callback' => __NAMESPACE__ . '\\render_callback',
    ] );
	register_block_type( 'flobn/styles-issue-block-2', [
		'attributes' => [
			'url' => [
				'type' => 'string',
				'default' => '',
			],
			'id' => [
				'type' => 'number',
				'default' => 0,
			],
		],
        'render_callback' => __NAMESPACE__ . '\\render_callback',
    ] );
}
add_action( 'init', __NAMESPACE__ . '\\register_block' );
