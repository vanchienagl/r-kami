<?php include(dirname(__FILE__) . '/config/config.php'); ?>
<?php
$title = 'BRAND｜';
$page = '';
$og_type = 'article';
include(dirname(__FILE__) . '/inc/head.php');
?>
<link rel="canonical" href="https://jgran27.jp/_index.php">
</head>
<!-- ____________________//head____________________ -->

<body id="pageBrand">
  <?php
  $page = 'index';
  include(dirname(__FILE__) . '/inc/header.php');
  ?>
  <!-- ______main______________//header____________________ -->
  <main id="mainWrap" class="active">
    <!-- ____________________content____________________ -->
     <div class="com-bg-main-wrap">
      <div class="js_com_bg_main com-bg-main com-bg-main-01"></div>
    </div>
    
    <p>page brand</p>
    <!-- ____________________//content____________________ -->
  </main>

  <?php
  $note = '※1.長谷工総合研究所調べ(2023年12月末時点)。<br>
  ※2マンション販売取り扱いについては、長谷工総合研究所データ（1978年以降）を基にしております。※関東圏は、東京、神奈川、千葉、埼玉、茨城、栃木物件対象。※長谷工アーベストの前身、長谷川工務店マンション部、エイチ・ケイ販売専門会社、長谷工販売、長谷工販売関西による実績も含む。<br>
  ※3、※4 出典：2024年12月末現在（長谷工コーポレーションHPより）';
  ?>

  <?php
  include(dirname(__FILE__) . '/inc/footer.php');
  ?>
  <!-- ____________________// footer -->

  <!-- ____________________script____________________ -->
  <script type="text/javascript" src="<?php echo h($path_js); ?>/brand.js"></script>
  <!-- __________________//script____________________ -->
</body>

</html>