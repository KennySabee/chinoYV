import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="El club ChinoYV ofrece cursos de chino mandarin presencial o en línea son impartidos por profesores altamente capacitados y adaptados a tu nivel y necesidades. Aprende mandarín de forma fácil y efectiva con nuestra plataforma de aprendizaje o en nuestras aulas ubicadas en Quito, valle de los chillos  "
        />
        <meta
          name="keywords"
          content="Aprender mandarín, Idioma chino, Clases de chino, Estudiar chino, Cultura china, HSK (Examen de chino como lengua extranjera), Traducción chino, Aprender chino para viajar, Clases de mandarín en línea, Palabras básicas en chino, Aprender chino rápido."
        />
        <link rel="shortcut icon " href="/static/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
