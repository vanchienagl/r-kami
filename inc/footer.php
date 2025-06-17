<footer class="footer" id="footer">
  <div class="com-wrap">
    <div class="menus _pc m_down">
      <ul class="menu-box menu-box-01">
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_location.jpg" alt="ロケーション">
            </figure>
            <p class="text ja">ロケーション</p>
            <p class="text en f-zen">LOCATION</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_access.jpg" alt="アクセス">
            </figure>
            <p class="text ja">アクセス</p>
            <p class="text en f-zen">ACCESS</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_design.jpg" alt="デザイン">
            </figure>
            <p class="text ja">デザイン</p>
            <p class="text en f-zen">DESIGN</p>
          </a>
        </li>
      </ul>
      <ul class="menu-box menu-box-02">
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_plan.jpg" alt="プラン">
            </figure>
            <p class="text ja">プラン</p>
            <p class="text en f-zen">PLAN</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_quality.jpg" alt="設備・仕様">
            </figure>
            <p class="text ja">設備・仕様</p>
            <p class="text en f-zen">QUALITY</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_safety.jpg" alt="構造">
            </figure>
            <p class="text ja">構造</p>
            <p class="text en f-zen">SAFETY</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_brand.jpg" alt="ブランド">
            </figure>
            <p class="text ja">ブランド</p>
            <p class="text en f-zen">BRAND</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="menus _sp m_down">
      <ul class="menu-box">
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_location.jpg" alt="ロケーション">
            </figure>
            <p class="text ja">ロケーション</p>
            <p class="text en f-zen">LOCATION</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_access.jpg" alt="アクセス">
            </figure>
            <p class="text ja">アクセス</p>
            <p class="text en f-zen">ACCESS</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_design.jpg" alt="デザイン">
            </figure>
            <p class="text ja">デザイン</p>
            <p class="text en f-zen">DESIGN</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_plan.jpg" alt="プラン">
            </figure>
            <p class="text ja">プラン</p>
            <p class="text en f-zen">PLAN</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_quality.jpg" alt="設備・仕様">
            </figure>
            <p class="text ja">設備・仕様</p>
            <p class="text en f-zen">QUALITY</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_safety.jpg" alt="構造">
            </figure>
            <p class="text ja">構造</p>
            <p class="text en f-zen">SAFETY</p>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <figure class="image">
              <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_brand.jpg" alt="ブランド">
            </figure>
            <p class="text ja">ブランド</p>
            <p class="text en f-zen">BRAND</p>
          </a>
        </li>
      </ul>
    </div>
  
    <?php if (!empty($note)) : ?>
      <div class="f-note m_down">
        <div class="com-content">
          <?php
          // $noteの行数を取得
          $lines = substr_count($note, "\n") + 1;
          // $noteの内容を改行文字で分割
          $array = explode("\n", $note);
          // 分割した配列をループして各行を表示
          foreach ($array as $value) {
            echo "<p class=\"com-note\">$value</p>";
          }
          ?>
        </div>
      </div>
    <?php endif; ?>

    <div class="box-request">
      <figure class="bg m_down">
        <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_request.jpg" alt="資料請求受付開始">
      </figure>
      <div class="content m_down">
        <p class="title en f-zen m_down">REQUEST</p>
        <p class="title ja">資料請求受付開始</p>
        <div class="com-buttons m_down">
          <a href="#" class="button f-zen-old is-entry">物件エントリー<span class="arrow"></span></a>
          <a href="#" class="button f-zen-old is-web">物件エントリー限定サイト<span class="arrow"></span></a>
        </div>
      </div>
    </div>

    <div class="box-contact">
      <p class="title f-zen m_down">CONTACT</p>
      <p class="brief m_down">お問い合わせは「ルネグラン上石神井」販売準備室</p>
      <a href="tel:0120-106-154" class="tel-number m_down">
        <span class="icon"><img loading="lazy" src="<?php echo h($path_img); ?>/common/icon_tel.svg" alt="tel"></span>
        <span class="num">0120-106-154</span>
      </a>
      <p class="time m_down">【営業時間】00:00〜00:00　【定休日】火・水曜日(祝日除く)<br>※携帯電話からも通話可能です。</p>
    </div>

    <div class="box-banner">
      <div class="banners banners-01">
        <div class="banner banner-01">
          <a href="#" class="link">
            <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_banner_1.png" alt="総合地所">
          </a>
        </div>
        <div class="banner banner-02">
          <a href="#" class="link">
            <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_banner_2.png" alt="長谷工アーベスト">
          </a>
        </div>
        <div class="banner banner-03">
          <a href="#" class="link">
            <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_banner_3.png" alt="長谷工コーポレーション">
          </a>
        </div>
      </div>
      <div class="banners banners-02">
        <div class="banner">
          <a href="#" class="link">
            <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_banner_4.png" alt="総合地所の住まい">
          </a>
        </div>
        <div class="banner">
          <a href="#" class="link">
            <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_banner_5.png" alt="創業1977年約76,000戸の分譲実績">
          </a>
        </div>
        <div class="banner">
          <a href="#" class="link">
            <img loading="lazy" src="<?php echo h($path_img); ?>/common/img_banner_6.png" alt="コング倶楽部">
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="box-copyright">
    <p class="text">Copyright © SOHGOH REAL ESTATE. All Rights Reserved.</p>
    <p class="text has-bg">【公式】ルネグラン上石神井｜西部新宿線「上石神井」駅最寄りの新築分譲マンション｜総合地所</p>
  </div>

  <div id="backToTop" class="com-back-to-top">
    <span class="icon">
      <img src="<?php echo h($path_img); ?>/common/icon_arrow_1.svg" alt="">
    </span>
    <p class="text">
      <span class="small f-zen-old">BACK</span>
      <span class="big f-zen-old">TOP</span>
    </p>
  </div>
</footer>

<div class="js_fixed_menu_footer com-fixed-menu-footer _sp">
  <ul class="menu">
    <li class="item">
      <a href="#" class="link">物件概要</a>
    </li>
    <li class="item">
      <a href="#" class="link">現地案内図</a>
    </li>
    <li class="item is-web">
      <a href="#" class="link">限定サイト</a>
    </li>
    <li class="item is-entry">
      <a href="#" class="link">物件<br>エントリー</a>
    </li>
  </ul>
</div>

<script type="text/javascript" src="<?php echo h($path_lib); ?>/gsap@3.11.3/minified/gsap.min.js"></script>
<script type="text/javascript" src="<?php echo h($path_lib); ?>/gsap@3.11.3/minified/ScrollTrigger.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo h($path_lib); ?>/jquery.inview.min.js"></script>
<script type="text/javascript" src="<?php echo h($path_js); ?>/common.js"></script>