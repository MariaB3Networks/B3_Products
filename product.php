<?php
/**
 * B3Networks Product Detail Page (PHP Version)
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title id="pageTitle">Product Detail — B3Networks Partner Directory</title>
  <meta name="description" content="Detailed specifications and sales guidance for B3Networks products." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- SITE HEADER -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.php" class="brand-wrap">
        <span class="brand-title">B3Networks</span>
        <span class="brand-sub">Partner Product Directory</span>
      </a>
      <div class="header-links">
        <a href="index.php" class="header-link">&larr; Back to All Products</a>
        <a href="https://b3networks.helpjuice.com/" target="_blank" class="header-link">Helpjuice Docs</a>
      </div>
    </div>
  </header>

  <main class="detail-page-wrap">
    <div class="container">
      
      <!-- BACK NAVIGATION -->
      <div class="back-nav-bar">
        <a href="index.php" class="back-link">&larr; Back to Product Directory</a>
      </div>

      <!-- NOT FOUND STATE (HIDDEN BY DEFAULT) -->
      <div id="notFoundBox" class="not-found-box" style="display: none;">
        <h2 class="detail-title">Product Not Found</h2>
        <p class="detail-text" style="margin-top: 8px;">The requested product could not be located in the catalog.</p>
        <a href="index.php" class="btn-doc" style="margin-top: 16px; display: inline-block;">Return to Directory</a>
      </div>

      <!-- PRODUCT CONTENT BOX -->
      <div id="productContent" class="detail-box">
        
        <!-- HEADER -->
        <div class="detail-top">
          <div class="detail-badges">
            <span class="badge" id="detailModelTag">V2 App Model</span>
            <span class="badge badge-category" id="detailCatTag">Voice &amp; Calling</span>
          </div>
          <h1 class="detail-title" id="detailTitle">BizPhone</h1>
          <p class="detail-tagline" id="detailTagline">Complete Cloud Business Phone System</p>
        </div>

        <!-- OVERVIEW -->
        <div class="detail-row">
          <div class="detail-label">What is it? (Overview)</div>
          <p class="detail-text" id="detailOverview"></p>
        </div>

        <!-- ARCHITECTURE -->
        <div class="detail-row">
          <div class="detail-label">Architecture &amp; Licensing</div>
          <p class="detail-text" id="detailArchitecture"></p>
        </div>

        <!-- TARGET CUSTOMER -->
        <div class="detail-row">
          <div class="detail-label">Target Customer (ICP)</div>
          <p class="detail-text" id="detailICP"></p>
        </div>

        <!-- BD SALES PITCH -->
        <div class="pitch-card">
          <div class="pitch-label">BD Sales Pitch Guidance</div>
          <p class="pitch-text" id="detailPitch"></p>
        </div>

        <!-- KEY FEATURES -->
        <div class="detail-row">
          <div class="detail-label">Key Features &amp; Capabilities</div>
          <ul class="bullets-list" id="detailFeatures"></ul>
        </div>

        <!-- VALUE PROPOSITION -->
        <div class="detail-row">
          <div class="detail-label">Business Value</div>
          <p class="detail-text" id="detailValue"></p>
        </div>

        <!-- DISCOVERY QUESTIONS -->
        <div class="detail-row">
          <div class="detail-label">Discovery Questions to Ask Prospect</div>
          <ul class="bullets-list" id="detailQuestions"></ul>
        </div>

        <!-- FOOTER ACTIONS -->
        <div class="detail-footer">
          <a href="index.php" class="back-link">&larr; Back to Directory</a>
          <a href="#" target="_blank" class="btn-doc" id="detailDocBtn">Open Official Helpjuice Guide &rarr;</a>
        </div>

      </div>

    </div>
  </main>

  <!-- SITE FOOTER -->
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <strong>B3Networks</strong> Partner Product Directory. Information verified with official <a href="https://b3networks.helpjuice.com/" target="_blank">Helpjuice Documentation</a>.
      </div>
      <div>
        <a href="https://www.b3networks.com/" target="_blank">Official Website</a> &bull;
        <a href="https://b3networks.helpjuice.com/" target="_blank">Helpjuice Knowledge Base</a>
      </div>
    </div>
  </footer>

  <script src="products.js"></script>
  <script src="product.js"></script>
</body>
</html>
