export default function Head() {
  return (
    <>
      {/* ✅ DARK THEME PRELOAD — ensures dark background before CSS loads */}
      <meta name="theme-color" content="#0b0b0b" />
      <style>{`
        html, body {
          background-color: #0b0b0b !important;
          color: #eeeeee !important;
        }
      `}</style>

      {/* 🧠 Core SEO */}
      <title>EmotionDeck - See. Feel. Understand.</title>
      <meta
        name="description"
        content="EmotionDeck helps you learn to recognise, interpret, and understand human emotion through subtle facial expressions and mindful visual learning."
      />
      <meta
        name="keywords"
        content="EmotionDeck, emotion recognition, emotional learning, facial expressions, emotional intelligence, psychology education, empathy training, nonverbal communication, emotion perception, mindfulness, human behaviour, visual learning"
      />
      <link rel="canonical" href="https://emotiondeck.com/" />

      {/* 🖼️ Favicons — full cross-platform set */}
      <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#0b0b0b" />

      {/* 🔍 Indexing and robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* 🧾 Verification tags */}
      <meta
        name="google-site-verification"
        content="AbCdEfGhIjKlMnOpQrStUvWxYz1234567890"
      />
      <meta
        name="msvalidate.01"
        content="B800251FB79C28F4742CA53B2F2F20E9"
      />

      {/* 🔗 Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="EmotionDeck" />
      <meta property="og:title" content="EmotionDeck - See. Feel. Understand." />
      <meta
        property="og:description"
        content="Explore the global platform that teaches emotional perception through art, science, and visual learning. See. Feel. Understand."
      />
      <meta property="og:url" content="https://emotiondeck.com/" />
      <meta property="og:image" content="https://emotiondeck.com/preview.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* 🐦 Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@emotiondeck" />
      <meta
        name="twitter:title"
        content="EmotionDeck - See. Feel. Understand."
      />
      <meta
        name="twitter:description"
        content="Learn to recognise, interpret, and understand human emotion through visual learning with EmotionDeck."
      />
      <meta name="twitter:image" content="https://emotiondeck.com/preview.jpg" />
    </>
  );
}
