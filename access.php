<?php include(dirname(__FILE__) . '/config/config.php'); ?>
<?php
$title = 'ACCESS｜';
$page = '';
$og_type = 'article';
include(dirname(__FILE__) . '/inc/head.php');
?>
</head>
<!-- ____________________//head____________________ -->

<body id="pageAccess">
  <?php include(dirname(__FILE__) . '/inc/header.php'); ?>
  <!-- ____________________//header____________________ -->

  <main id="mainWrap">
    <!-- ____________________content____________________ -->
    <!-- ____________________//content____________________ -->
  </main>

  <?php
    $note = '※掲載の案内図は地図を基に描き起こしたもので周辺建物や鉄道、道路など省略、簡略化して表現しており実際とは異なります。<br>
    ※掲載の電車・バス所要時間は通勤時のもので（日中平常時のものはその旨を付記しております）、時間帯により異なります。また、乗り換え・待ち時間を含みます。通勤時は7:30～9:00、日中平常時は11:00～16:00に目的地に到着する最短の電車を表記しています。（「ジョルダン乗り換え案内」調べ。2024年10月時点のもので今後変更になる可能性があります）<br>
    ※掲載のimage photoはイメージであり、実際とは異なります。<br>
    ※掲載の情報は2025年2月時点のもので、今後変更になる場合がございます。';
  ?>

  <?php include(dirname(__FILE__) . '/inc/footer.php'); ?>
  <!-- ____________________// footer -->

  <!-- ____________________script____________________ -->
  <script type="text/javascript" src="<?php echo h($path_js); ?>/access.js"></script>
  <!-- __________________//script____________________ -->
  <script>
  </script>


</body>


</html>