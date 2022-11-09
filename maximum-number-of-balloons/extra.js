
add_action( 'wp', [ $this, 'mng_data_layer_taxonomy_hierarchy']);



return $data;

return $tax_array;

var_dump( $tax_array_joined);die();


for ($i = 0; i < count($tax_array); i++) {
    if ($tax_array[$i]) {
        $data['Taxonomy' . $i . + 1] = $tax_array[$i];
    }
}


Can view functions below - 

mng_data_layer_taxonomy_hierarchy function - 

public function mng_data_layer_taxonomy_hierarchy( $data ) {

		if ( is_singular( 'post' ) ) :

			$tax_query = null;

			// check to see if we have a primary category for the current article
			$primary_category = HelperFunctions::get_fm_post_meta( 'primary_section' );
			if ( $primary_category ) :
				// set the tax query to the primary category
				$tax_query = get_category( $primary_category );
			else:
				$cat = get_the_category();
				// otherwise just use the first value in the categories array on the page
				$tax_query = $cat[0];
			endif;

			// set value of tax array to value from helper function
			$tax_array = $this->get_post_category_ancestor( $tax_query );

			// join values
			$tax_array_joined = implode( ',', $tax_array );

			// set values for Taxonomy 1 - 5
			if ( $tax_array[0] ) :
				$data['Taxonomy1'] = $tax_array[0];
			endif;

			if ( $tax_array[1] ) :
				$data['Taxonomy2'] = $tax_array[1];
			endif;

			if ( $tax_array[2] ) :
				$data['Taxonomy3'] = $tax_array[2];
			endif;

			if ( $tax_array[3] ) :
				$data['Taxonomy4'] = $tax_array[3];
			endif;

			if ( $tax_array[4] ) :
				$data['Taxonomy5'] = $tax_array[4];
			endif;

			$data['Hierarchy'] = $tax_array_joined;

		endif;

		return $data;

	}

}



get_post_category_ancestor  function - 

	private function get_post_category_ancestor( $tax_query = false ) : array {

		// if no category return empty array
		if ( false === $tax_query ) :
			return [];
		endif;

		// define empty array for post categories
		$tax_array = [];

		if ( ! empty( $tax_query ) ) :

			// add initial slug to the array
			$tax_array[] = $tax_query->name;

			// if the slug has parents, we'll add them to the array too
			if ( $tax_query->parent ) :
				$ancestors = get_ancestors( $tax_query->term_id, $tax_query->taxonomy );
				foreach ( $ancestors as $ancestor ) :
					$tax_array[] = get_term_by( 'id', $ancestor, $tax_query->taxonomy )->name;
				endforeach;
			endif;

		endif;

		return $tax_array;
	}



	