<?php 


//копирование стилей из главной темы + подключение своих стилей

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
    
function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
   wp_enqueue_script( 'myJs', get_theme_file_uri( '/js/myJs.js'),  array( 'jquery' ));
		wp_localize_script('myJs', 'myAjax', array(
		'ajaxurl' => admin_url('admin-ajax.php'),
		)
	);
}



//получаю ip пользователя
function get_the_user_ip() {
if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
//проверяем ip через интернет
$ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
//проверяем ip, если пользователь использует прокси
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
$ip = $_SERVER['REMOTE_ADDR'];
}
return apply_filters( 'wpb_get_ip', $ip );
}
add_shortcode('show_ip', 'get_the_user_ip');



//оброботчик на ajax
if( wp_doing_ajax() ){
	add_action('wp_ajax_MyAjaxIP', 'get_posts_IP'); 
}

//записываем данные в админку + показываем ответ пользователю
function get_posts_IP() {
	$dateIp = $_POST[a];
	$TimeIp = $_POST[b];
	$value = "Yor IP : " . $dateIp . ". Date pick: " . $TimeIp;
	$post_id = $_POST[c];
	$namePOST = $_POST[d];
	echo "Ваши ip: $dateIp Дата: $TimeIp";
	update_post_meta( $post_id, $namePOST, $value );
	wp_die();
}