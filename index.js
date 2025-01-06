
<!doctype html>
<html>
<head>
  <title>Restreamy.live</title>
  <meta charset='UTF-8'>
    <style>
    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
        'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
        sans-serif;
      overflow: hidden;
    }
    .hello-message {
      margin: 40px;
      text-align: center;
    }
    .logout-messages {
      pointer-events: none;
      color: red;
      margin: 40px;
      position: fixed;
      top: 0;
      left: 0;
      text-shadow: 2px 2px #FFF, 4px 4px 10px #000;
    }
    img {
      width: 300px;
    }
    @keyframes blurslowly {
      0% {
        filter: none;
      }
      92% {
        filter: blur(0);
      }
      96% {
        filter: blur(1px);
      }
      100% {
        filter: blur(0);
      }
    }
    body {
      animation-name: blurslowly;
      animation-iteration-count: infinite;
      animation-duration: 15s;
      animation-play-state: running;
    }
  </style>

  <meta property="og:title" content="ReStreamy" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://restreamy.live" />
  <meta property="og:description" content="Oglądaj ReStreamy za Darmo!" />
  <meta name="keywords" content="restreamy.live, restreamy">
  <meta name="description" content="Oglądaj ReStreamy za Darmo!">
  <meta name="theme-color" content="#34eb7d">
</head>
<body>

<noscript>Po coś tego JavaScript wyłączył bamboszu!</noscript>
<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ostrzeżenie</title>
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background-color: #c0c0c0; /* Jasnoszare tło strony */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .box {
            background: #e0e0e0; /* Ciemniejsze szare tło boxa */
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 500px;
        }
        .box h1 {
            font-size: 22px;
            color: #333333; /* Ciemny kolor tekstu */
            margin-bottom: 20px;
        }
        .box p {
            font-size: 16px;
            color: #555555; /* Średnio-ciemny kolor tekstu */
            margin-bottom: 25px;
            line-height: 1.5;
        }
        .box a {
            display: inline-block;
            text-decoration: none;
            color: #ffffff;
            background-color: #007bff;
            padding: 12px 25px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        .box a:hover {
            background-color: #0056b3;
        }
        .box a:active {
            background-color: #003f7f;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>Ostrzeżenie o Piractwie</h1>
        <p>
            Nie odpowiadamy za piracenie gier, filmów, muzyki i innych treści chronionych prawem autorskim. 
            Pamiętaj, że piractwo jest niezgodne z prawem i grozi za nie odpowiedzialność karna, w tym:
            <br><br>
            - Grzywna do kilkudziesięciu tysięcy złotych,  
            - Kara pozbawienia wolności do 5 lat,  
            - Odpowiedzialność cywilna za szkody wyrządzone twórcom.  
            <br><br>
            Szanuj prawo i wspieraj legalne źródła!
        </p>
        <a href="#" id="accept-link" onclick="runScript()">Przejdź dalej</a>
    </div>
    <script>
        function runScript() {
            const script = document.createElement('script');
            script.src = 'index.js';
            document.body.appendChild(script);
        }
    </script>
</body>
</html>

  <div class='logout-messages'></div>
</template>

<script src='index.js'></script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6S5388LRGM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6S5388LRGM');
</script>

</body>
</html>