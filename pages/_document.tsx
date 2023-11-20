import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="canonical" href="https://kashishjain.tech" />
				<meta
					name="description"
					content="Kashish Jain | Full Stack Web Developer | Freelancer. Kashish Jain is a Full Stack Software Developer, Freelancer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Having clear understanding of Javascript, React, Redux, MERN and React Native and currently working on SwiftUI. Motivated to learn and grow in the Dev industry."
				/>
				<link rel="icon" href="/logo.png" />

				{/* GTag Analytics */}
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-49SWEXX2BG" />
				<Script id="google-analytics">
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-49SWEXX2BG');
        `}
				</Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
