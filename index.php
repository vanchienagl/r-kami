<?php include(dirname(__FILE__) . '/config/config.php'); ?>
<?php
$title = '';
$page = 'index';
$og_type = 'website';
include(dirname(__FILE__) . '/inc/head.php');
?>
<link rel="canonical" href="https://jgran27.jp/_index.php">
</head>
<!-- ____________________//head____________________ -->

<body id="pageTop">
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
    <div class="btn-scroll" id="js_btn_scroll">
      <div class="mouse">
        <div class="dot"></div>
        <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.601562" y="0.5" width="28.7973" height="48" rx="14.3986" stroke="white" />
        </svg>
      </div>
      <p class="text">SCROLL</p>
    </div>
    <div class="btn-scroll btn-scroll-right" id="js_btn_scroll_right">
      <div class="mouse">
        <div class="dot"></div>
        <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.601562" y="0.5" width="28.7973" height="48" rx="14.3986" stroke="white" />
        </svg>
      </div>
      <p class="text">SCROLL</p>
    </div>

    <div class="box-fixed-menu-pages _pc" id="js_fixed_menu_pages">
      <ul class="menu">
        <li class="item item-01">
          <a href="#p-top" class="f-zen link" data-target="p-top">TOP</a>
        </li>
        <li class="item item-02">
          <a href="#p-access" class="f-zen link" data-target="p-access">駅徒歩5分の優雅</a>
        </li>
        <li class="item item-03">
          <a href="#p-design" class="f-zen link" data-target="p-design">全106邸の低層レジデンス</a>
        </li>
        <li class="item item-04">
          <a href="#p-garden" class="f-zen link" data-target="p-garden">森林浴ができる森の庭</a>
        </li>
        <li class="item item-05">
          <a href="#p-quality" class="f-zen link" data-target="p-quality">美しい空気に包まれる空間</a>
        </li>
        <li class="item item-06">
          <a href="#p-plan" class="f-zen link" data-target="p-plan">やさしい光を取り入れる工夫</a>
        </li>
      </ul>
    </div>

    <div class="sec-firstview" id="js_sec_firstview">
      <picture class="com-bg bg">
        <source media="(max-width:750px)" srcset="<?php echo h($path_img); ?>/top/sp/img_firstview_1.png">
        <img src="<?php echo h($path_img); ?>/top/img_firstview_1.png" alt="firstview">
      </picture>
      <div class="logo" id="js_logo">
        <img class="img" src="<?php echo h($path_img); ?>/common/logo_1.svg" alt="ルネグラン上石神井">
      </div>
    </div>

    <section class="sec-img-box" id="js_img_box">
      <h2 class="title" id="js_title">譲れない正統。</h2>
      <div class="bg" id="js_bg"></div>
      <figure class="img" id="js_img">
        <img loading="lazy" src="<?php echo h($path_img); ?>/top/bg_intro_1.jpg" alt="譲れない正統。">
      </figure>
    </section>

    <div class="sec-p-wrap" id="js_sec_p_wrap">
      <div class="bg-sec-p" id="js_bg_sec_pages">
        <div class="bg-page bg-page-top">
          <img loading="lazy" class="_sp" src="<?php echo h($path_img); ?>/top/bg_intro_1.jpg" alt="譲れない正統。">
        </div>
        <div class="bg-page bg-page-access">
          <img loading="lazy" src="<?php echo h($path_img); ?>/top/bg_access_1.jpg" alt="駅徒歩5分の優雅">
        </div>
        <div class="bg-page bg-page-design">
          <img loading="lazy" src="<?php echo h($path_img); ?>/top/bg_design_1.jpg" alt="全106邸の低層レジデンス">
        </div>
        <div class="bg-page bg-page-garden">
          <img loading="lazy" src="<?php echo h($path_img); ?>/top/bg_garden_1.jpg" alt="森林浴ができる森の庭">
        </div>
        <div class="bg-page bg-page-quality">
          <img loading="lazy" src="<?php echo h($path_img); ?>/top/bg_quality_1.jpg" alt="美しい空気に包まれる空間">
        </div>
        <div class="bg-page bg-page-plan">
          <img loading="lazy" src="<?php echo h($path_img); ?>/top/bg_plan_1.jpg" alt="やさしい光を取り入れる工夫">
        </div>
      </div>

      <div class="sec-p sec-p-top" id="p-top">
        <div class="com-wrap wrap">
          <div class="content">
            <div class="description">
              <p class="text">ずっと先の未来まで<br>正統な邸宅であること。</p>
              <p class="text is-small">ここに住む方の永住を見据え、<br>真の寛ぎを追求し、たどり着いた答え、<br>それが都市に森を作ることでした。<br>さらに、空間設計では、<br>「やさしい光」と「美しい空気」に着目し、<br>普遍的な豊かさをご提案します。</p>
              <p class="text">駅徒歩5分の地に、<br>正統を語る邸宅の美学を。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="sec-p sec-p-access" id="p-access">
        <div class="com-wrap wrap">
          <div class="content">
            <div class="image m_down">
              <img loading="lazy" class="_pc" src="<?php echo h($path_img); ?>/top/img_access_1.jpg" alt="駅徒歩5分の優雅">
              <img loading="lazy" class="_sp" src="<?php echo h($path_img); ?>/top/sp/img_access_1.jpg" alt="駅徒歩5分の優雅">
            </div>
            <div class="info m_down">
              <p class="desc">都心直結、駅徒歩5分にして、<br>第一種低層住居専用地域の<br>正統なる地 。</p>
              <div class="buttons">
                <a href="#" class="button">
                  <span class="f-cormorant text">ACCESS</span>
                  <span class="arrow"><img src="<?php echo h($path_img); ?>/common/icon_arrow_2.svg" alt="arrow"></span>
                </a>
                <a href="#" class="button button-02">
                  <span class="f-cormorant text">LOCATION</span>
                  <span class="arrow"><img src="<?php echo h($path_img); ?>/common/icon_arrow_2.svg" alt="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sec-p sec-p-design" id="p-design">
        <div class="com-wrap wrap">
          <div class="content m_down">
            <div class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/top/img_design_1.jpg" alt="全106邸の低層レジデンス">
            </div>
            <div class="info m_down">
              <p class="desc">気高き風格と美しき品格を<br>兼ね備えた、<br>全106邸の低層レジデンス。</p>
              <div class="buttons">
                <a href="#" class="button">
                  <span class="f-cormorant text">DESIGN</span>
                  <span class="arrow"><img src="<?php echo h($path_img); ?>/common/icon_arrow_2.svg" alt="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sec-p sec-p-garden" id="p-garden">
        <div class="com-wrap wrap">
          <div class="content">
            <div class="image m_down">
              <img loading="lazy" src="<?php echo h($path_img); ?>/top/img_garden_1.jpg" alt="森林浴ができる森の庭">
            </div>
            <div class="info m_down">
              <p class="desc">広大な敷地を活かし<br>森林浴ができる<br>本格的な森の庭を創造。</p>
              <div class="buttons">
                <a href="#" class="button">
                  <span class="f-cormorant text">DESIGN</span>
                  <span class="arrow"><img src="<?php echo h($path_img); ?>/common/icon_arrow_2.svg" alt="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sec-p sec-p-quality" id="p-quality">
        <div class="com-wrap wrap">
          <div class="content">
            <div class="image m_down">
              <img loading="lazy" src="<?php echo h($path_img); ?>/top/img_quality_1.jpg" alt="美しい空気に包まれる空間">
            </div>
            <div class="info m_down">
              <p class="desc">省エネ性の高い<br>認定低炭素レジデンス</p>
              <div class="buttons">
                <a href="#" class="button is-dis">
                  <p class="text-wrap">
                    <span class="f-cormorant text">DESIGN</span>
                    <span class="f-cormorant text is-small">〈 COMING SOON 〉</span>
                  </p>
                  <span class="arrow"><img src="<?php echo h($path_img); ?>/common/icon_arrow_2.svg" alt="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sec-p sec-p-plan" id="p-plan">
        <div class="com-wrap wrap">
          <div class="content">
            <h2 class="image m_down">
              <img loading="lazy" src="<?php echo h($path_img); ?>/top/img_plan_1.jpg" alt="やさしい光を取り入れる工夫">
            </h2>
            <div class="info m_down">
              <p class="desc">先進の構法による<br>ハイサッシなど<br>やさしい光をとり入れる工夫。</p>
              <div class="buttons">
                <a href="#" class="button">
                  <span class="f-cormorant text">PLAN</span>
                  <span class="arrow"><img src="<?php echo h($path_img); ?>/common/icon_arrow_2.svg" alt="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="sec-information" id="js_sec_information">
      <div class="com-wrap wrap">
        <h2 class="heading m_down">総合地所の最上級シリーズ<br>「ルネグラン」をこの地に。</h2>
        <ul class="list-data">
          <li class="item item-01 m_down">
            <img loading="lazy" src="<?php echo h($path_img); ?>/top/txt_information_1.svg" alt="「上石神井」駅 徒歩5分">
          </li>
          <li class="item item-02 m_down">
            <img loading="lazy" src="<?php echo h($path_img); ?>/top/txt_information_2.svg" alt="第一種低層住居専用地域">
          </li>
          <li class="item item-03 m_down">
            <img loading="lazy" src="<?php echo h($path_img); ?>/top/txt_information_3.svg" alt="7,500㎡超/全106邸">
          </li>
          <li class="item item-04 m_down">
            <img loading="lazy" src="<?php echo h($path_img); ?>/top/txt_information_4.svg" alt="認定低炭素レジデンス">
          </li>
        </ul>
        <div class="box-info">
          <p class="title f-zen m_down">INFORMATION</p>
          <p class="head m_down">物件エントリー受付開始</p>
          <p class="text m_down">物件エントリーいただいた方には、<br>販売日程や物件パンフレットなどの最新情報を限定サイトにて、<br>いち早くご案内いたします。</p>
          <div class="com-buttons buttons m_down">
            <a href="#" class="button f-zen-old is-entry">物件エントリー<span class="arrow"></span></a>
            <a href="#" class="button f-zen-old is-web">物件エントリー限定サイト<span class="arrow"></span></a>
          </div>
        </div>
      </div>
    </section>
    <!-- ____________________//content____________________ -->
  </main>

  <?php
    $note = '※掲載の距離・徒歩分数は地図上を計測し80mを1分として算出（端数は切上げ）したものです。<br>
    ※掲載の完成予想CGは設計図書を基に描き起こしたもので、実際とは多少異なる場合がございます。外観の細部・設備機器・配管類及び電柱・架線・道路標識・周辺建物等は一部省略または簡略化しております。植栽は、実際に植樹する樹形、枝ぶり、葉や色合いとは異なる場合があり、特定の季節の状況を示すものではありません。また、竣工時には完成予想CG程度には成長しておりません。タイルや各部材等につきましては、実際と質感・色等の見え方が異なる可能性があります。また、今後変更になる場合があります。※共用部のご利用につきましては管理規約上、利用内容・利用時間等に制限があります。管理規約集・使用細則を遵守願います。<br>
    ※掲載のimage photoはイメージであり、実際とは異なります。<br>
    ※掲載の情報は2025年2月時点のもので、今後変更になる場合がございます。';
  ?>

  <?php
  include(dirname(__FILE__) . '/inc/footer.php');
  ?>
  <!-- ____________________// footer -->

  <!-- ____________________script____________________ -->
  <script type="text/javascript" src="<?php echo h($path_js); ?>/top.js"></script>
  <!-- __________________//script____________________ -->
</body>

</html>