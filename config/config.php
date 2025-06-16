<?php

// エラーチェック *公開時はコメントアウト
ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);


// URL
$url = (empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST'] . $_SERVER["REQUEST_URI"];

//ぱすわーど
$pw_honatsugi = ""; // 

// Directory settings
$limited          = (strpos($url, '/limited/') !== false);
$limited_gallery  = (strpos($url, '/limited/gallery.php') !== false);

$type             = (strpos($url, '/type/') !== false);
$access           = (strpos($url, '/access.php') !== false);

if (
  ($limited || $type || $limited_gallery )
) {
  $index = false;
  $path  = '..';
  $path2  = '../';
} else if (
  ($access)
) {
  $index = false;
  $path  = '.';
  $path2  = './';
} else {
  $index = true;
  $path  = '.';
  $path2  = '';
}




// create_path
$path_css   = $path . '/assets/build/css';
$path_js    = $path . '/assets/build/js';
$path_img   = $path . '/assets/build/img';
$path_video = $path . '/assets/video';
$path_lib   = $path . '/assets/lib';


// external_url
const PUBLIC_PATH  = ""; //公開パス
const LINK_REQUEST = ""; //資料請求
const LINK_RESERVE = ""; //来場予約
const LINK_TEL = "tel:"; //電話番号

// Site information
$title          = "ルネグラン上石神井";
$description    = "";
$keywords       = "";
$og_site_name   = "ルネグラン上石神井";
$og_title       = $title;
$og_description = $description;
$og_locale      = "ja_JP";
$og_url         = $url;
$og_img         = PUBLIC_PATH . "assets/build/img/common/og_image.png"; /* 1200*630 */
$favicon        = PUBLIC_PATH . "assets/favicons/favicon.ico";
$apple_icon     = PUBLIC_PATH . "assets/favicons/apple-touch-icon-180x180.png";
$android_icon   = PUBLIC_PATH . "assets/favicons/icon-192x192.png";


// user_agent
$user_agent = $_SERVER['HTTP_USER_AGENT'];
if (preg_match('/iphone|ipod|ipad|android/ui', $user_agent) != 0) {
  $user_agent = "sp";
} else {
  $user_agent = "pc";
}

$browser = strtolower($_SERVER['HTTP_USER_AGENT']);
if (strstr($browser, 'edge')) {
  $browser = "edge";
} elseif (strstr($browser, 'trident') || strstr($browser, 'msie')) {
  $browser = "ie";
} elseif (strstr($browser, 'chrome')) {
  $browser = "chrome";
} elseif (strstr($browser, 'firefox')) {
  $browser = "firefox";
} elseif (strstr($browser, 'safari')) {
  $browser = "safari";
} elseif (strstr($browser, 'opera')) {
  $browser = "opera";
} else {
  $browser = "none";
}


// echo_function
function h($s)
{
  return htmlspecialchars($s, ENT_QUOTES, "UTF-8");
}
