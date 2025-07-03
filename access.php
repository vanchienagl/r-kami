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
    <div class="com-bg-main-wrap">
      <div class="js_com_bg_main com-bg-main com-bg-main-02"></div>
    </div>

    <div class="js_com_fixed_menu_subpage com-fixed-menu-subpage">
      <ul class="menu">
        <li class="item">
          <a href="#sec_connected" class="link">
            <span class="dot"></span>
            <span class="_pc text">都心直結</span>
          </a>
        </li>
        <li class="item">
          <a href="#sec_line_life" class="link">
            <span class="dot"></span>
            <span class="_pc text">中央線ライフ</span>
          </a>
        </li>
      </ul>
    </div>
    
    <div class="js_com_mv com-mv">
      <figure class="image">
        <img src="<?php echo h($path_img); ?>/access/img_mv.jpg" alt="都心直結の、スマートなアクセス。">
      </figure>
      <div class="content">
        <p class="f-zen title">ACCESS</p>
        <h2 class="f-shippori heading">都心直結の、スマートなアクセス。</h2>
      </div>
    </div>

    <div class="js_com_intro com-intro">
      <h2 class="f-cormorant heading m_left">ACCESS</h2>
      <div class="content">
        <div class="text-wrap">
          <div class="text-box">
            <p class="js_text_front text text-front">西武新宿線「上石神井」駅より、</p>
            <p class="text text-back">西武新宿線「上石神井」駅より、</p>
          </div>
          <div class="text-box">
            <p class="js_text_front text text-front">都心直結のスピーディーなアクセス。</p>
            <p class="text text-back">都心直結のスピーディーなアクセス。</p>
          </div>
        </div>
        <div class="text-wrap">
          <div class="text-box">
            <p class="js_text_front text text-front">バス利用で中央線沿線の</p>
            <p class="text text-back">バス利用で中央線沿線の</p>
          </div>
          <div class="text-box">
            <p class="js_text_front text text-front">人気エリアもテリトリーに。</p>
            <p class="text text-back">人気エリアもテリトリーに。</p>
          </div>
        </div>
      </div>
    </div>


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