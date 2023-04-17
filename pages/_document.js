import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Club Chino YV | Escuela de Chino Mandarin</title>

        <meta
          name="description"
          content="El club ChinoYV ofrece cursos de chino mandarin presencial o en línea son impartidos por profesores altamente capacitados y adaptados a tu nivel y necesidades. Aprende mandarín de forma fácil y efectiva con nuestra plataforma de aprendizaje o en nuestras aulas ubicadas en Quito, valle de los chillos  "
        />
        <meta
          name="keywords"
          content="Aprender mandarín, Idioma chino, Clases de chino, Estudiar chino, Cultura china, HSK (Examen de chino como lengua extranjera), Traducción chino, Aprender chino para viajar, Clases de mandarín en línea, Palabras básicas en chino, Aprender chino rápido."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
