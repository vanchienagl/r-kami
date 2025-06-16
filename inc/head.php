<!DOCTYPE html>
<html lang="ja" prefix="og: https://ogp.me/ns#">

<head>
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width,user-scalable=yes,maximum-scale=1,user-scalable=no" />
  <meta charset="utf-8">
  <title><?php echo h($title); ?>ルネグラン上石神井</title>

  <meta name="description" content="<?php echo h($description); ?>">
  <meta name="keywords" content="<?php echo h($keywords); ?>">
  <!--<meta name="robots" content="index, follow" />-->
  <meta name="robots" content="noindex,nofollow" />
  <meta http-equiv="Content-Style-Type" content="text/css">
  <meta http-equiv="Content-Script-Type" content="text/javascript">
  <meta name="format-detection" content="telephone=no">
  <meta property="og:url" content="https://www.sgr-sumai.jp/mansion/r-matsudo173/<?php echo h($og_url); ?>" />
  <meta property="og:type" content="<?php echo h($og_type); ?>" />
  <meta property="og:title" content="<?php echo h($og_title); ?>" />
  <meta property="og:description" content="<?php echo h($description); ?>" />
  <meta property="og:site_name" content="<?php echo h($og_site_name); ?>" />
  <meta property="og:image" content="<?php echo h($og_img); ?>" />

  <?php if ($index) : ?>
  <?php endif; ?>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase&family=Shippori+Mincho:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500&&family=Zen+Old+Mincho:wght@400;500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" type="text/css" href="<?php echo h($path_css); ?>/r-kamishakuji.css?<?= rand() ?>">