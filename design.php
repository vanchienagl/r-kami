<?php include(dirname(__FILE__) . '/config/config.php'); ?>
<?php
$title = 'DESIGN｜';
$page = '';
$og_type = 'article';
include(dirname(__FILE__) . '/inc/head.php');
?>
</head>
<!-- ____________________//head____________________ -->

<body id="pageDesign">
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
          <a href="#sec_courtyard" class="link">
            <span class="dot"></span>
            <span class="_pc text">風格ある外観</span>
          </a>
        </li>
        <li class="item">
          <a href="#sec_facade" class="link">
            <span class="dot"></span>
            <span class="_pc text">都市の森</span>
          </a>
        </li>
      </ul>
    </div>
    
    <div class="js_com_mv com-mv">
      <figure class="image">
        <img src="<?php echo h($path_img); ?>/design/img_mv.jpg" alt="都心に森を創造した美しきレジデンス。">
      </figure>
      <div class="content">
        <p class="f-zen title">DESIGN</p>
        <h2 class="f-shippori heading">都心に森を創造した美しきレジデンス。</h2>
      </div>
    </div>

    <div class="com-intro">
      <h2 class="f-cormorant heading m_left">DESIGN</h2>
      <div class="content">
        <div class="text-wrap">
          <div class="text-box">
            <p class="js_text_front text text-front">都市に森林浴ができるような</p>
            <p class="text text-back">都市に森林浴ができるような</p>
          </div>
          <div class="text-box">
            <p class="js_text_front text text-front">森をつくること。</p>
            <p class="text text-back">森をつくること。</p>
          </div>
        </div>
        <div class="text-wrap">
          <div class="text-box">
            <p class="js_text_front text text-front">そして、美学を宿した</p>
            <p class="text text-back">そして、美学を宿した</p>
          </div>
          <div class="text-box">
            <p class="js_text_front text text-front">風格あるデザインであること。</p>
            <p class="text text-back">風格あるデザインであること。</p>
          </div>
        </div>
      </div>
    </div>

    <section id="sec_courtyard" class="js_sec_page sec-courtyard">
      <div class="js_sec_green box-intro">
        <div class="mv">
          <figure class="image m_down">
            <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_courtyard_01.jpg" alt="COURTYARD">
          </figure>
          <div class="text">
            <p class="f-cormorant en">COURTYARD</p>
            <h2 class="ja">中庭</h2>
          </div>
        </div>
        <div class="com-box-content">
          <h3 class="head m_down">躍動する都市に佇む、<br>森林浴ができる森をつくること。</h3>
          <p class="brief m_down">8,500㎡を超える広大な敷地に描いたのは、<br>森林浴ができるような本格的な森でした。<br>ここが都市であることを忘れるほどの美しい森を。</p>
        </div>
        <div class="abinc m_down">
          <figure class="image">
            <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_courtyard_02.png" alt="2025年度ABINC認証を取得生物多様性保全に配慮した面開発プロジェクト">
          </figure>
          <div class="info">
            <h3 class="shippori title">2025年度ABINC認証を取得<br>生物多様性保全に配慮した面開発プロジェクト</h3>
            <p class="shippori txt">ABINC認証とは、オフィスビルや集合住宅などの土地利用における生物多様性保全の取り組みを認証する制度です。「自然と共生する世界」を実現するための企業活動の支援、いきものと人が共生できる仕組みの「創造」などを目的として設立されました。</p>
          </div>
        </div>
      </div>

      <div class="box-shinrin">
        <h2 class="f-cormorant heading m_down">SHINRIN-YOKU</h2>
        <h3 class="brief m_down">五感を研ぎ澄ます、<br>森林浴ができるガーデンへ。</h3>
        <figure class="image-01 m_down">
          <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_courtyard_03.png" alt="SHINRIN-YOKU">
        </figure>
        <p class="description m_down">木々が揺れる音、鳥のさえずり、花の香り、土の匂い。<br>森林浴を研究する教授と議論を重ね、森とは何かを追求し、<br>五感を研ぎ澄ませたくなるような森の庭を創造しました。</p>
        <figure class="image-02 m_down">
          <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_courtyard_04.jpg" alt="image">
        </figure>
      </div>
    </section>

    <section id="sec_facade" class="js_sec_page sec-facade">
      <div class="js_sec_green box-intro">
        <div class="mv">
          <figure class="image m_down">
            <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_facade_01.jpg" alt="FACADE">
          </figure>
          <div class="text">
            <p class="f-cormorant en">FACADE</p>
            <h2 class="ja">外観</h2>
          </div>
        </div>
        <div class="com-box-content box-content-custom">
          <h3 class="head m_down">邸宅としても、街の景観としても、<br>誇らしき美しさを。</h3>
          <p class="brief m_down">マテリアルの選定や貼り分け、凹凸感のある意匠、<br>重厚なカラーの風格と、ガラスウォールの品格など、<br>すべてにこだわり、邸宅としてだけでなく、<br>景観として美しいデザインをめざしました。</p>
        </div>
        <div class="gallery">
          <div class="item m_down">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_facade_02.jpg" alt="最上階ガラスウォール">
            </figure>
            <p class="caption">最上階ガラスウォール</p>
          </div>
          <div class="item m_down">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_facade_03.jpg" alt="彫りの深いデザイン">
            </figure>
            <p class="caption">彫りの深いデザイン</p>
          </div>
          <div class="item m_down">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_facade_04.jpg" alt="多彩な植栽と美しき外構">
            </figure>
            <p class="caption">多彩な植栽と美しき外構</p>
          </div>
        </div>
        <div class="a-design">
          <figure class="image">
            <img loading="lazy" src="<?php echo h($path_img); ?>/design/img_sec_facade_05.jpg" alt="気高き風格と、美しき品格を兼ね備えた意匠。">
          </figure>
          <p class="txt">気高き風格と、<br>美しき品格を兼ね備えた意匠。</p>
        </div>
      </div>
    </section>
    <!-- ____________________//content____________________ -->
  </main>

  <?php
    $note = '※掲載の完成予想CGは設計図書を基に描き起こしたもので、実際とは多少異なる場合がございます。外観の細部・設備機器・配管類及び電柱・架線・道路標識・周辺建物等は一部省略または簡略化しております。植栽は、実際に植樹する樹形、枝ぶり、葉や色合いとは異なる場合があり、特定の季節の状況を示すものではありません。また、竣工時には完成予想CG程度には成長しておりません。タイルや各部材等につきましては、実際と質感・色等の見え方が異なる可能性があります。また、今後変更になる場合があります。※共用部のご利用につきましては管理規約上、利用内容・利用時間等に制限があります。管理規約集・使用細則を遵守願います。<br>
    ※掲載のimage photoはイメージであり、実際とは異なります。<br>
    ※掲載の情報は2025年2月時点のもので、今後変更になる場合がございます。';
  ?>

  <?php include(dirname(__FILE__) . '/inc/footer.php'); ?>
  <!-- ____________________// footer -->

  <!-- ____________________script____________________ -->
  <script type="text/javascript" src="<?php echo h($path_js); ?>/design.js"></script>
  <!-- __________________//script____________________ -->
  <script>
  </script>


</body>


</html>