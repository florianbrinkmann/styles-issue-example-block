/**
 * WordPress dependencies
 */
import {
	__,
} from '@wordpress/i18n';
import { 
	registerBlockType,
} from '@wordpress/blocks';
import {
	URLInput,
} from '@wordpress/blockEditor';
import {
	Component,
} from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

class Edit extends Component {
	constructor(props) {
		super(props);

		this.fetchPost = this.fetchPost.bind(this);

		this.state = {
			postObject: null,
		};
	}

	componentDidMount() {
		if ( this.props.attributes.id !== 0 ) {
			this.fetchPost();
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if ( prevProps.attributes.id !== this.props.attributes.id && this.props.attributes.id !== 0 ) {
			this.fetchPost();
		}

		if ( this.props.attributes.id === 0 && this.state.postObject !== null ) {
			this.setState( { postObject: null } );
		}
	}

	fetchPost() {
		const {
			attributes: {
				id,
			},
		} = this.props;

		apiFetch( { path: `/wp/v2/posts/${id}?_embed` } ).then( postObject => {
			this.setState( { postObject } );
		} )
	}

	render() {
		const {
			setAttributes,
			attributes: {
				url,
			},
		} = this.props;

		return (
			<>
				<URLInput
					value={ url }
					onChange={ ( url, post ) => setAttributes( { url, id: ( post && post.id ) || 0 } ) }
				/>
			</>
		);
	}
}

registerBlockType( 'flobn/styles-issue-block-1', {
	title: __( 'Styles Issue Block 1 (with error)', 'styles-issue-example-block' ),
	category: 'widgets',
	icon: 'admin-links',
	styles: [
		{
			name: 'default',
			label: __( 'Standard', 'styles-issue-example-block' ),
			isDefault: true
		},
		{
			name: 'small-text',
			label: __( 'Small text', 'styles-issue-example-block' )
		},
	],
	edit: Edit,
	save() {
		return null;
	}
} );

registerBlockType( 'flobn/styles-issue-block-2', {
	title: __( 'Styles Issue Block 1 (without error)', 'styles-issue-example-block' ),
	category: 'widgets',
	icon: 'admin-links',
	edit: Edit,
	save() {
		return null;
	}
} );
