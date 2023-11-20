const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async function handler(req, res) {
	// An array with your links
	let links = [
    { url: "/", changefreq: "monthly", priority: 1 },
  ];

	// Create a stream to write to
	const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	// Return a promise that resolves with your XML string
	const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
		data.toString()
	);

  res.end(xmlString);
};
